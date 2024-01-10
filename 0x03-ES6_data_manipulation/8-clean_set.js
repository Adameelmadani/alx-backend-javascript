export default function cleanSet(set, sSt) {
  return [...set].filter((elem) => elem.startsWith(sSt) && sSt !== '')
    .map((elem) => elem.replace(sSt, '')).join('-');
}
