import api from './axios'

export default {

  sendPostReservationRequest(){
    return api.post('/reservation')
  }

}
