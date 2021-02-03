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
        build.onLoad({ filter: /.*/ }, async (args: any) => {

            if (args.path === 'index.js') {
              return {
                loader: 'jsx',
                contents: inputCode,
              };
            }; 
    
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