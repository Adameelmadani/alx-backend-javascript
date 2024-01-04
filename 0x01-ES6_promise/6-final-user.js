import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const array = [];
  Promise.all([signUpUser(), uploadPhoto()])
  .then((messages) => {array.push(messages)
    return;})
  .catch();

  return array;
}
