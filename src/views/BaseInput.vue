<template>
  <div class="form-group">
    <!-- <label :v-if="label" :for="label">{{ label }}</label> -->
    <input
      class="form-control"
      @input="handleInput"
      :value="value"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: [String, Number],
    label: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style scoped>
.form-control {
  border-radius: 25px;
}
</style>
