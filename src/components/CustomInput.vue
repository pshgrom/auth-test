<template>
  <input
    class="custom-input"
    :value="modelValue"
    @input="updateInput"
    :type="type"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    modelValue: {
      type: [String, Number],
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const updateInput = (e) => {
      emit("update:modelValue", e.target.value);
    };

    return {
      updateInput,
    };
  },
};
</script>

<style scoped lang="scss">
.custom-input {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: 0.375rem;
  margin-bottom: 24px;
  transition: all 0.15s ease-in;

  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }
}
</style>
