<template>
  <div class="container text-center content-container">
    <div class="row">
      <div class="col-3">
        <div class="d-flex flex-column gap-3">
          <div class="form-floating">
            <input
              v-model="InitialSearchCriteria.date"
              @change="getRestaurantTables"
              type="date"
              class="form-control"
              placeholder="Kuupäev"
              required />
            <label> Kuupäev </label>
          </div>

          <div class="form-floating">
            <input
              v-model="InitialSearchCriteria.time"
              @change="getRestaurantTables"
              type="time"
              class="form-control"
              placeholder="Kellaaeg"
              required
            />
            <label> Kellaaeg </label>
          </div>

          <div class="form-floating">
            <input
              v-model="InitialSearchCriteria.guestCount"
              @change="getRestaurantTables"
              type="number"
              class="form-control"
              placeholder="Külaliste arv (1-8)"
              required
              min="1"
              max="8"
            />
            <label> Külaliste arv (1-8) </label>
          </div>

          <preference-filter />
        </div>
      </div>

      <div class="col-9">
        <RestaurantTableLayout
          :restaurant-tables="restaurantTables"
          @restaurant-table-selected="navigateToBookingView"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PreferenceFilter from '@/components/PreferenceFilter.vue'
import RestaurantTableLayout from '@/components/RestaurantTableLayout.vue'
import RestaurantTableService from '@/service/RestaurantTableService.js'
import navigationService from '@/service/NavigationService.js'

export default {
  name: 'HomeView',
  components: { RestaurantTableLayout, PreferenceFilter },
  data() {
    return {
      restaurantTables: [
        {
          id: 0,
          tableNumber: '',
          capacity: 0,
          coordinateX: 0,
          coordinateY: 0,
          isWindowSeat: true,
          isAccessible: true,
          isPrivate: true,
          isAvailable: true,
        },
      ],

      InitialSearchCriteria: {
        date: new Date().toISOString().substring(0, 10),
        time: '12:00',
      },
    }
  },
  methods: {
    async getRestaurantTables() {
      try {

        const startDateTime = `${this.InitialSearchCriteria.date}T${this.InitialSearchCriteria.time}:00`;

        const response = await RestaurantTableService.sendGetRestaurantTablesRequest(startDateTime);
        this.restaurantTables = response.data
      } catch {
        navigationService.navigateToErrorView()
      }
    },

    navigateToBookingView() {},
  },
  mounted() {
    this.getRestaurantTables()
  },
}
</script>

<style scoped>
.content-container {
  margin-top: 5rem;
}
</style>
