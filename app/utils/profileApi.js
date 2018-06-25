const ENPOINT = 'http://localhost:3000/profiles'

export function getProfiles() {
  return fetch(ENPOINT)
    .then(res => res.json())
    .catch(err => {
      console.log(err);
    })
}