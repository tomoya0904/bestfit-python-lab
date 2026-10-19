// Python 3 in a dedicated browser Worker via Pyodide (WASM).
// No student code or inputs are sent to an application server.
import { loadPyodide } from 'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.mjs';
let py = null;
(async () => {
  try {
    py = await loadPyodide({indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/'});
    self.postMessage({type:'ready'});
  } catch (e) {
    self.postMessage({type:'loadError', error: String(e?.message || e)});
  }
})();
self.addEventListener('message', async event => {
  const {type,id,code,stdin} = event.data || {};
  if(type !== 'run' || !py) return;
  let output="";
  let errorOutput="";
  const dec=new TextDecoder();
  const decErr=new TextDecoder();
  let ns;
  try {
    const inputs = String(stdin || '').split(/\r?\n/);
    // Empty input box means there are no values to consume.
    if (inputs.length === 1 && inputs[0] === '') inputs.pop();
    py.setStdin({stdin: () => inputs.length ? inputs.shift() : null});
    py.setStdout({write: buf => {output+=dec.decode(buf,{stream:true});return buf.length;}});
    py.setStderr({write: buf => {errorOutput+=decErr.decode(buf,{stream:true});return buf.length;}});
    ns=py.globals.get('dict')();
    await py.runPythonAsync(String(code || ''), {globals:ns});
    self.postMessage({type:'result',id,output:output+dec.decode(),error:''});
  } catch (e) {
    const raw=String(e?.message || e);
    const match=raw.match(/(?:SyntaxError|IndentationError|NameError|TypeError|ValueError|ZeroDivisionError|IndexError|EOFError|RuntimeError|OverflowError):[^\n]*/);
    self.postMessage({type:'result',id,output:output+dec.decode(),error:match?match[0]:raw.slice(-1200)});
  } finally {
    try { if(ns) ns.destroy(); } catch (_) {}
  }
});
