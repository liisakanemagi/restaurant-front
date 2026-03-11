<template>
  <div class="floor-plain-area">
    <div
      v-for="restaurantTable in restaurantTables"
      :key="restaurantTable.id"
      class ="restaurant-table-rectangle"
      :style ="getRestaurantTableStyle(restaurantTable)"
    >
      <div class="restaurant-table-info">
        <span class ="fw-bold">{{restaurantTable.tableNumber}}</span>
        <br>
        <small>{{restaurantTable.capacity}}</small>
      </div>
    </div>

    <div class="bar-counter" style="left: 50%; top: 15%; width: 40%; height: 12%;">
      <span>BAAR</span>
    </div>

    <div class="door" style="left: 0; top: 50%; width: 5px; height: 20%;">
      <span class="door-text">UKS</span>
    </div>

    <div class="wall" style="left: 0%; top: 40%; width: 20%; height: 2px;"></div>
    <div class="wall" style="left: 80%; top: 35%; width: 20%; height: 2px;"></div>

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

  methods: {

    getRestaurantTableStyle(restaurantTable) {

      const baseWidth = 8;
      const extraWidthPerSeat = 2;
      const dynamicWidth = baseWidth + Math.max(0, restaurantTable.capacity - 2) * extraWidthPerSeat;

      return {
        position: 'absolute',
        left: restaurantTable.coordinateX + '%',
        top: restaurantTable.coordinateY + '%',
        width: dynamicWidth + '%',
        height: '15%',
        transform: 'translate(-50%, -50%)',
      }
    }
  }

}
</script>

<style scoped>
.floor-plain-area {
  position: relative;
  width: 100%;
  max-width: 1000px;
  aspect-ratio: 100 / 50;
  background-color: palegreen;
  border: 2px solid #45804d;
  border-radius: 15px;
  margin: 0 auto;
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

.restaurant-table-info {
  text-align: center;
  font-size: 0.8rem;
  line-height: 1.2;
}

.bar-counter {
  position: absolute;
  background-color: #458077;
  color: white;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  font-weight: bold;
  letter-spacing: 2px;
  border: 2px solid #02420c;
}

.door {
  position: absolute;
  background-color: #02420c;
  border: 1px solid;
  transform: translateY(-50%);

  .door-text {
    position: absolute;
    left: 10px;
    top: 50px;
    transform: translateY(-50%);
    font-size: 10px;
    color: black;
  }
}

.wall {
  position: absolute;
  background-color: #02420c;

}

</style>
