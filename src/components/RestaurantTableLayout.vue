<template>
  <div class="floor-plain-area">
    <div
      v-for="restaurantTable in restaurantTables"
      :key="restaurantTable.id"
      class ="restaurant-table-rectangle"

    >
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestaurantTableLayout',
  props: {
    restaurantTables: {
      type: Array,
      required: true
    },
  },

  methods:{


  }

}
</script>

<style scoped>
.floor-plain-area {
  position: relative;
  width: 100%;
  height: 60px;
  background-color: palegreen;
  border: 2px solid #45804d;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.05);
}

.restaurant-table-rectangle{
  background-color: #45804d;
  border: 2px solid #02420c;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

</style>
