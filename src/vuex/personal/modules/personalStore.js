/**
 * Created by liuyating on 17/3/29.
 */
import defaultUserUrl from '../../../assets/img/person.png'
import * as actions from '../actions/aPersonal'

const state = {
  userAvatar: defaultUserUrl,
  user: {
    'username': '',
    'username_ch': '',
    'telephone': '',
    'deptname': '',
    'deptleader': '',
    'deptleaderdetail': {
      'username_ch': '',
      'telephone': ''
    },
    'domains': [{
      'domainname': '',
      'domainleader': '',
      'leaderdetail': {
        'username_ch': '',
        'telephone': ''
      }
    }]
  },
  aboutUs: {
    'app_version': 'v0.0.5',
    'dev_team': '自动化运维平台'
  }
}

const mutations = {
  LOGIN_USER_DETAIL (state, userDetail) {
    state.user = userDetail
  }
}

export default {
  state,
  mutations,
  actions
}
