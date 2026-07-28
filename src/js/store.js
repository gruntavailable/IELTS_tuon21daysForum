/* Shared persistence layer — every module reads/writes through here. */
const KEY = "ielts_m21_16";

let _db = {};
try { _db = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { _db = {}; }

export function save(){
  try { localStorage.setItem(KEY, JSON.stringify(_db)); } catch (e) {}
}
export function get(k, fallback){
  return _db[k] === undefined ? fallback : _db[k];
}
export function set(k, v){
  _db[k] = v; save();
}
export function del(k){
  delete _db[k]; save();
}
export function raw(){ return _db; }
export function replace(next){ _db = next; save(); }

/* key for a quiz item: day / block index / item index */
export function key(d, bi, ii){ return `d${d}b${bi}q${ii}`; }
