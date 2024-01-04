import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      const array = [];
      for (const a of results) {
        if (a.status === 'fulfilled') {
          array.push({ status: a.status, value: a.value });
        }
        else {
          array.push({ status: a.status, value: `${a.reason}` });
        }
      }
      return array;
    });
}
