<template>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="civilStatusRadio1" value="Состою в браке" @change="$emit('update:modelValue', $event.target.value)">
        <label class="form-check-label" for="inlineRadio1">Состою в браке</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="civilStatusRadio2" value="Не в браке" @change="$emit('update:modelValue', $event.target.value)">
        <label class="form-check-label" for="inlineRadio2">Не в браке</label>
    </div>
</template>

<script>
    export default {
        name: 'CivilStatus-component',
        props: [
            'modelValue'
        ],
        emits: ['update:modelValue']
    }
</script>

<style scoped>

</style>