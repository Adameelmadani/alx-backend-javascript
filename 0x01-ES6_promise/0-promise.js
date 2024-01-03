export default function getResponseFromAPI(){
  const p = new Promise((resolve, reject) => {
    resolve('This is a promise');
  });

  return p;
}
