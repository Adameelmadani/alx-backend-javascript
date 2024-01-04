export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    let a = 0;
    if (a == 0) {
      resolve({
        firstName,
        lastName,
      });
    } else {
      reject();
    }
  });
}
