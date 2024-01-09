export default function hasValuesFromArray(st, a) {
  for (const i of a) {
    if (!st.has(i)) {
      return false;
    }
  }
  return true;
}
