export default function getResponseFromAPI(){
  const p = new Promise((resolve, reject) => {
    let a = 0;
    if (a == 0) {
      resolve('This is a promise');
    } else {
      reject('This is rejected promise');
    }
  });

  return p;
}
