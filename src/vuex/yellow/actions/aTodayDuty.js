/**
 * Created by liuyating on 17/3/29.
 */
import axios from 'axios'
import * as GLOBAL from '../../global/actions/aGlobal'

export const getTodayDuty = ({commit}, comp) => {
  axios({
    method: 'get',
    url: '/yellow/today/activity/',
    headers: {'Authorization': 'Token ' + localStorage.getItem('access-token')}
  }).then(function (res) {
    commit('TODAY_DUTY_LIST', res.data)
  }).catch(function (error) {
    GLOBAL.apiReturnError(error, comp.$router)
  })
}
