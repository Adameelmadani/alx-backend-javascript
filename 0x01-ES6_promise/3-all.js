import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
  Promise.all([uploadPhoto, createUser])
  .then((messages) => (console.log(messages)))
  .catch(() => (console.log('Signup system offline')));
}
