/*
* mock user data
* */
// import axios from 'axios'
// import qs from 'qs'
// const user = [
//
// ]
const users = [
  {'id': 1, 'username': '123', 'password': '123'}
  // {"id": 2, "username": "15555555555", "password": "123456"}
]
function findUser (loginUser) {
  let user = users.filter(user => {
    return user.username === loginUser.username && user.password === loginUser.password
  })
  return user
}

export default {
  getUser (loginUser, cb) {
    setTimeout(() => {
      cb(findUser(loginUser))
    }, 2000)
  }
}

