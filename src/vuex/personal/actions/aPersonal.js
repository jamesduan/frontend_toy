/**
 * Created by liuyating on 17/3/29.
 */
import axios from 'axios'
import * as GLOBAL from '../../global/actions/aGlobal'

export const getLoginUser = ({commit}, router) => {
  axios({
    method: 'get',
    url: '/get/user/?username=' + localStorage.getItem('login_username'),
    headers: {'Authorization': 'Token ' + localStorage.getItem('access-token')}
  }).then(function (res) {
    commit('LOGIN_USER_DETAIL', res.data)
  }).catch(function (error) {
    GLOBAL.apiReturnError(error, router)
  })
}
