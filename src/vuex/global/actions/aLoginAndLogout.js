/**
 * Created by liuyating on 17/4/24.
 */
import axios from 'axios'
import qs from 'qs'
import { Indicator, Toast } from 'mint-ui'
import * as GLOBAL from './aGlobal'

export const Login = ({commit}, comp) => {
  if (comp.username !== '' && comp.password !== '') {
    Indicator.open()
    axios({
      method: 'post',
      url: '/login/',
      data: qs.stringify({'username': comp.username, 'password': comp.password})
    }).then(function (response) {
      Indicator.close()
      if (response.data.success === true) {
        localStorage.setItem('access-token', response.data.msg.token)
        localStorage.setItem('login_username', comp.username)
        comp.$router.push({path: '/'})
      } else {
        Toast(response.data.msg)
      }
    }).catch(function (error) {
      Indicator.close()
      GLOBAL.apiReturnError(error, comp.$router)
    })
  } else {
    Toast('用户名和密码不允许为空!')
  }
}

export const Logout = ({commit}, router) => {
  localStorage.clear()
  router.push({path: '/login'})
}
