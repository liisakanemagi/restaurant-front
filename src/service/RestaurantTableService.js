import api from './axios'

export default {
  sendGetRestaurantTablesRequest() {
    return api.get('/restaurant/tables')
  },

  sendGetFilteredTablesRequest(){
    return api.get('/available')
  }

}
