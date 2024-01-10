export default function cleanSet(set, sSt) {
  return set.filter((elem) => elem.startsWith(sSt)).join('-');
}
