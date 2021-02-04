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

        // load inputed code
        build.onLoad({ filter: /(^index\.js$)/  }, () => {
          return {
            loader: 'jsx',
            contents: inputCode,
          };
        });

        // if results are cached, load the cache result
        build.onLoad({ filter: /.*/ }, async (args: any) => {
          const cachedResult = await fileCache.getItem<esbuild.OnLoadResult>(args.path)
      
          if (cachedResult) {
            return cachedResult;
          };
        })

        // if loading css, remove escape characters and apply the style using JavaScript
        build.onLoad({ filter: /.css$/ }, async (args: any) => {
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
        });

        // load js files 
        build.onLoad({ filter: /.*/ }, async (args: any) => {

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