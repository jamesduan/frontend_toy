/**
 * Created by liuyating on 17/3/29.
 */
import { Toast } from 'mint-ui'

export const apiReturnError = (error, router) => {
  if (error.response) {
    if (error.response.status === 403) {
      Toast({
        message: '无乐道APP访问权限,请申请授权后重新登录!',
        position: 'bottom',
        duration: 2000
      })
      router.push({path: '/login'})
    } else if (error.response.status === 400) {
      Toast({
        message: '请求错误:' + error.response.data.detail,
        position: 'bottom',
        duration: 2000
      })
    } else {
      console.log('error:', error.message)
    }
  } else {
    console.log('error:', error.message)
  }
}
