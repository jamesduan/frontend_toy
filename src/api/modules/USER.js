import axios from 'axios'
import config from '../config'

//axios(config);
class API {
  getUser (param) {
    config.data.params = param;
    return axios.get('/user',config);
  }
}
export default API;
