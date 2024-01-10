export default function cleanSet(set, sSt='') {
  if (typeof sSt !== 'string') {
    return '';
  }
  return [...set].filter((elem) => elem.startsWith(sSt) && sSt !== '')
    .map((elem) => elem.replace(sSt, '')).join('-');
}
