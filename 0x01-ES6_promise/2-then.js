export default function handleResponseFromAPI(promise) {
    promise.then(() => {
      return resolve({
        status: 200,
        body: success,
      });
    }).catch(() => {
      return new Error();
    });
    console.log('Got a response from the API');
}
