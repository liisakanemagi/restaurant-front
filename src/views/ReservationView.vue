<template>
  <div class="vertical-center-container">
    <div class="col-12 col-md-3 text-center">

      <h5 class="mt-4">Broneeri laud nr ....</h5>

      <form class="mt-4">
        <div class="d-flex flex-column gap-3">

          <div>
            <p>Aeg</p>
          </div>

          <div>
            <p>Kulaliste arv</p>
          </div>

          <div>
            <p>Eelistused</p>
          </div>

        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="Nimi"
            required
            maxlength="50"
          >
          <label>Nimi</label>
        </div>

          <div class="form-floating">
            <input
            type="number"
            class="form-control"
            placeholder="Telefoninumber"
            required
            maxlength="50"
            >
            <label>Telefoninumber</label>
          </div>

          <div class="col-12">
            <button
              type="submit"
              class="btn btn-secondary"
            >
              <span></span>
              Broneeri
            </button>
          </div>

        </div>
      </form>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ReservationView',
  data() {
    return {}
  },
  methods: {},
  mounted() {
  }
}
</script>

<style scoped>
.vertical-center-container{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
}

</style>
