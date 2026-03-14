<template>
  <div class="container text-center content-container">
    <div class="row">
      <div class="col-3">
        <div class="d-flex flex-column gap-3">
          <div class="form-floating">
            <input
              v-model="searchCriteria.date"
              @change="getRestaurantTables"
              type="date"
              class="form-control"
              placeholder="Kuupäev"
              required
            />
            <label> Kuupäev </label>
          </div>

          <div class="form-floating">
            <input
              v-model="searchCriteria.time"
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
              v-model="searchCriteria.guestCount"
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

          <preference-filter
            :search-criteria="searchCriteria"
            @filter-changed="(payload) => {
              searchCriteria[payload.key] = payload.value;
              getRestaurantTables()
            }"
          />
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

      searchCriteria: {
        date: new Date().toISOString().substring(0, 10),
        time: '12:00',
        guestCount: 0,
        isWindowSeat: false,
        isAccessible: false,
        isPrivate: false,
      },
    }
  },
  methods: {
    async getRestaurantTables() {
      try {
        const startDateTime = `${this.searchCriteria.date}T${this.searchCriteria.time}:00`

        const response = await RestaurantTableService.sendGetRestaurantTablesRequest(
          startDateTime,
          this.searchCriteria.guestCount || null,
          this.searchCriteria.isPrivate || null,
          this.searchCriteria.isAccessible || null,
          this.searchCriteria.isWindowSeat || null,
        )
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
