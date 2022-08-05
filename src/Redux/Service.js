
/*const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};*/
const login = (username, password) => {

  return fetch("http://localhost:3001/api/v1/user/login", {
    body: `{ "email": "${username}" , "password": "${password}"}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST"
  })
    .then((response) => {
      return response.data;
    });
};
export default {
  //register,
  login,
};