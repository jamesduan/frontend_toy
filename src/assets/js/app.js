import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
// import Nat from './nat';
// const nat = new Nat();

const users = [
  {'id': 1, 'username': '123', 'password': '123'}
]

const getEndUserInfo = function (loginUser, cb) {
  let user = users.filter(user => {
    return user.username === loginUser.username && user.password === loginUser.password
  })
  return user
}

export default {
  getEndUserInfo
}
