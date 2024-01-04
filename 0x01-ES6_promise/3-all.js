import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
  const p1 = uploadPhoto();
  const p2 = createUser();
  Promise.all([p1, p2])
  .then((messages) => (console.log(`${messages[0].body} ${messages[1].firstName} ${messages[1].lastName}`)))
  .catch(() => (console.log('Signup system offline')));
}
