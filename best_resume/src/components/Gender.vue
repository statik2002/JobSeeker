<template>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="М" @change="$emit('update:modelValue', $event.target.value)">
        <label class="form-check-label" for="inlineRadio1">М</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Ж" @change="$emit('update:modelValue', $event.target.value)">
        <label class="form-check-label" for="inlineRadio2">Ж</label>
    </div>
</template>

<script>
    export default {
        name: 'Gender-component',
        props: [
            'modelValue'
        ],
        emits: ['update:modelValue']
    }
</script>

<style scoped>

</style>