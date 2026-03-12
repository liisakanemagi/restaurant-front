import api from './axios'

export default {
  sendGetRestaurantTablesRequest(startTime, guestCount, isPrivate, isAccessible, isWindowSeat) {
    return api.get('/available', {
      params: {
        startTime: startTime,
        guestCount: guestCount,
        isPrivate: isPrivate,
        isAccessible: isAccessible,
        isWindowSeat: isWindowSeat
      }
    })
  }
}
