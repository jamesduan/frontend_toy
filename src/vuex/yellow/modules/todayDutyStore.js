/**
 * Created by liuyating on 17/4/23.
 */
import * as actions from '../actions/aTodayDuty'

const state = {
  activityAll: {
    'al_count': 0,
    'results': [
      {
        'id': 0,
        'name': '',
        'start_time': '',
        'end_time': '',
        'count': 0,
        'duty_detail': [
          {
            'start_time': '',
            'end_time': '',
            'duty_domain': '',
            'duty': '',
            'duty_backup': '',
            'duty_way': '',
            'duty_way_name': ''
          }
        ]
      }
    ]
  }
}

const mutations = {
  TODAY_DUTY_LIST (state, activityAll) {
    state.activityAll = activityAll
  }
}

export default {
  state,
  mutations,
  actions
}
