import axios from 'axios'
import config from './config'

//axios(config);
class API {
  getList(param) {
    config.data.params = param;
    return axios.get('/Router', config);
  }
}
export default API;

// use example
// axios.get("/user?id=1")
//   .then(function (response) {
//   })
//   .catch(function (error) {
//   })
//
// axios.post('/user', {
//   firstName: 'firstName',
//   lastName: 'lastName'
// })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
//
// combine
// function getUserAccount() {
//   return axios.get('/user/1');
// }
//
// function getUserPermissions() {
//   return axios.get('/user/1/permissions');
// }
//
// axios.all([getUserAccount(), getUserPermissions()])
//   .then(axios.spread(function (acct, perms) {
//     // Both requests are now complete
//   }));
