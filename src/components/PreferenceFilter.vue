<template>
  <div class="mt-3">
    <p class="fw-bold text-start">Eelistused</p>

    <div class="form-check text-start">
      <input
        class="form-check-input"
        type="checkbox"
        :checked="searchCriteria.isWindowSeat"
        @change="$emit('filter-changed', { key: 'isWindowSeat', value: $event.target.checked })"
        id="windowSeat"
      >
      <label class="form-check-label" for="windowSeat">Akna all</label>
    </div>

    <div class="form-check text-start">
      <input
        class="form-check-input"
        type="checkbox"
        :checked="searchCriteria.isAccessible"
        @change="$emit('filter-changed',{key: 'isAccessible', value: $event.target.checked})"
        id="accessibleSeat"
      >
      <label class="form-check-label" for="accessibleSeat">Ratastooliga ligipääsetav</label>
    </div>

    <div class="form-check text-start">
      <input
        class="form-check-input"
        type="checkbox"
        :checked="searchCriteria.isPrivate"
        @change="$emit('filter-changed', {key: 'isPrivate', value: $event.target.checked})"
        id="privateSeat"
      >
      <label class="form-check-label" for="privateSeat">Privaatne</label>
    </div>

  </div>
</template>

<script>
export default {
  name: 'PreferenceFilter',
  props: {
    searchCriteria: {
      type: Object,
      required: true
    }
  },
}
</script>
