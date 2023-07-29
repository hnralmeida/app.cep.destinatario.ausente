import User from "../../context/Types/User";
import api from "../api";

export default function signInService(email: string, password: string): Promise<User> {

  const token = process.env.EXPO_PUBLIC_API_KEY;

  console.log('Trying to login as ' + email + ' with password ' + password);

  return new Promise<User>((resolve, reject) => {

    var var_token = ''

    api.post('/login', {
      email: email,
      password: password
    }, {
      headers: {
        'Authorization': token
      }
    })
      .then((response) => {
        var_token = response.data.token

        api.get('/user', {
          headers: {
            'Authorization': 'Bearer ' + response.data.token
          }
        }).then((response) => {
          console.log(response);
          resolve(
            {
              ...response.data,
              user_token: var_token
            } as User);
        })
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });

  })
}