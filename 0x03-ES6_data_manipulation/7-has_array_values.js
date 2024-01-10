export default function hasValuesFromArray(set, array) {
  return set.equals(new Set(array));
}
