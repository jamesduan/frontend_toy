/**
 * Created by liuyating on 17/3/29.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import loginLogoutStore from './global/modules/loginLogoutStore'
import personalStore from './personal/modules/personalStore'
import todayDutyStore from './yellow/modules/todayDutyStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    global: loginLogoutStore,
    personal: personalStore,
    todayDuty: todayDutyStore
  }
})
