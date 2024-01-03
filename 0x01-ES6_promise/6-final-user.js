import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  return Promise.all([signUpPromise, uploadPhotoPromise])
    .then((results) => results.map((result) => ({
      status: 'fulfilled',
      value: result,
    })))
    .catch((error) => [{
      status: 'rejected',
      value: error,
    }]);
}
