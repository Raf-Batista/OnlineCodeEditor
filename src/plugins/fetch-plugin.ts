import * as esbuild from 'esbuild-wasm';
import axios from 'axios';
import localForage from 'localforage';

const fileCache = localForage.createInstance({
  name: 'filecache'
});

export const fetchPlugin = (inputCode: string) => {
    return {
        name: 'fetch-plugin',
        setup(build: esbuild.PluginBuild) {

        build.onLoad({ filter: /(^index\.js$)/  }, () => {
          return {
            loader: 'jsx',
            contents: inputCode,
          };
        });

        build.onLoad({ filter: /.css$/ }, async (args: any) => {
          const cachedResult = await fileCache.getItem<esbuild.OnLoadResult>(args.path)
    
            if (cachedResult) {
              return cachedResult;
            };
    
            const response: any = await fetch(args.path, {
              headers: {
                'Content-Type': 'text/plain',
                'Accepts': 'text/plain'
              },
            });
            
            const data = await response.text();
            
 
            const escaped = data
            .replace(/\n/g, '')
            .replace(/"/g, '\\"')
            .replace(/'/g, "\\'");
            
            const contents =
            `
              const style = document.createElement('style');
              style.innerText = '${escaped}'; 
              document.head.appendChild(style);
            `;
            const result: esbuild.OnLoadResult = {
               loader: 'jsx',
               contents,
               resolveDir: new URL('./', response.url).pathname
             };
    
             await fileCache.setItem(args.path, result); 
    
             return result;
        })

        build.onLoad({ filter: /.*/ }, async (args: any) => {

          const cachedResult = await fileCache.getItem<esbuild.OnLoadResult>(args.path)
    
          if (cachedResult) {
            return cachedResult;
          };
  
          const response: any = await fetch(args.path, {
            headers: {
              'Content-Type': 'text/plain',
              'Accepts': 'text/plain'
            },
          });
          
          const data = await response.text();
          
          const result: esbuild.OnLoadResult = {
             loader: 'jsx',
             contents: data,
             resolveDir: new URL('./', response.url).pathname
           };
  
           await fileCache.setItem(args.path, result); 
  
           return result;
    
          });
        }
    }
}