<template>
  <div class="floor-plain-area">



  </div>

</template>

<script>
export default {
  name: 'RestaurantTableLayout',
  props: {
    restaurantTables: Array,
  },
}
</script>

<style scoped>
.floor-plain-grid{
  position: relative;
  width: 100%;
  height: 60px;
  background-color: palegreen;
  border: 2px solid #45804d;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: inset 0 2px 10px rgba(0,0,0,0.05);
}


</style>
