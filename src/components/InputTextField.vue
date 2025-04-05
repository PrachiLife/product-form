<template>
    <label>
        {{ props.label }}
        <input type="text"
        :value="props.modelValue"
        @input="onInput"
        />
    </label>
</template>

<script setup>

const props=defineProps({
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: [String, Object],
  }
})

const emit=defineEmits(['update:modelValue'])

const onInput=(event)=>{
    emit('update:modelValue',event.target.value);
}
</script>

<style scoped>
</style>