<template>
  <div class="form-group">
    <button v-bind="$attrs" v-on="$listeners" class="btn btn-send form-control">
      Sign Up
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.form-control {
  border-radius: 25px;
}
.btn-send {
  background-color: #ee91bc;
  color: white;
  text-transform: uppercase;
}
</style>
