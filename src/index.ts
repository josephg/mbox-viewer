import App from './App.svelte'
import * as mod from 'mime-to-jmap'
// const mod = require('mime-to-jmap')
import DOMPurify from 'dompurify'

console.log('hia')

// window.mod = mod
const strx = new Uint8Array([85,115,101,114,45,65,103,101,110,116,58,32,67,121,114,117,115,45,74,77,65,80,47,51,46,49,46,55,45,53,55,56,45,103,56,50,54,102,53,57,48,45,102,109,115,116,97,98,108,101,45,50,48,49,57,49,49,49,57,118,49,13,10,77,105,109,101,45,86,101,114,115,105,111,110,58,32,49,46,48,13,10,88,45,80,101,114,115,111,110,97,108,105,116,121,73,100,58,32,54,49,57,51,52,51,54,49,13,10,77,101,115,115,97,103,101,45,73,100,58,32,60,55,97,100,53,102,51,98,53,45,102,102,56,100,45,52,48,51,57,45,57,101,57,56,45,49,100,97,51,101,54,100,57,100,48,100,50,64,119,119,119,46,102,97,115,116,109,97,105,108,46,99,111,109,62,13,10,68,97,116,101,58,32,70,114,105,44,32,50,50,32,78,111,118,32,50,48,49,57,32,50,49,58,50,57,58,48,54,32,43,48,56,48,48,13,10,70,114,111,109,58,32,34,83,101,112,104,32,71,101,110,116,108,101,34,32,60,109,101,64,106,111,115,101,112,104,103,46,99,111,109,62,13,10,84,111,58,32,34,78,101,105,108,32,74,101,110,107,105,110,115,34,32,60,110,101,105,108,106,64,102,97,115,116,109,97,105,108,116,101,97,109,46,99,111,109,62,44,13,10,32,34,78,101,105,108,32,74,101,110,107,105,110,115,34,32,60,110,101,105,108,64,110,109,106,101,110,107,105,110,115,46,99,111,109,62,13,10,83,117,98,106,101,99,116,58,32,73,116,32,119,111,114,107,115,33,33,13,10,67,111,110,116,101,110,116,45,84,121,112,101,58,32,116,101,120,116,47,112,108,97,105,110,13,10,13,10,87,101,108,108,44,32,105,116,32,97,108,108,32,99,111,109,112,105,108,101,115,33,32,58,68,13,10,13,10,87,104,97,116,115,32,121,111,117,114,32,110,117,109,98,101,114,63,13,10,13,10,65,110,100,32,119,104,97,116,32,101,109,97,105,108,32,97,100,100,114,101,115,115,32,100,111,32,121,111,117,32,117,115,117,97,108,108,121,32,117,115,101,63,13,10,13,10,45,83,101,112,104])

;(async () => {
  console.log(mod)
  await mod.ready
  // console.log(mod.envelope_to_jmap(strx))
})()

;(window as any).DD = DOMPurify

var app = new App({
  target: document.body,
});

export default app;

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
// if (import.meta.hot) {
//   import.meta.hot.accept();
//   import.meta.hot.dispose(() => {
//     app.$destroy();
//   });
// }

// window.strx = (new TextEncoder).encode(window.str)




