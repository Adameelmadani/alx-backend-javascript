import uploadPhoto from "./utils";
import createUser from "./utils";

export default function handleProfileSignup() {
  const body = uploadPhoto
    .then((message) => (message.body))
    .catch(() => (console.log('Signup system offline')));
  if(body === undefined){
    return;
  }
  const name = createUser
    .then((message) => (message))
    .catch(() => (console.log('Signup system offline')));
  if (name === undefined){
    return;
  }
  console.log(`${body} ${name.firstName} ${name.lastName}`);
}
