/**
 * Mix properties into target object.
 */
export default function extend (to: Object, _from?: Object): Object {
  for (const key in _from) {
    to[key] = _from[key];
  }
  return to;
}
