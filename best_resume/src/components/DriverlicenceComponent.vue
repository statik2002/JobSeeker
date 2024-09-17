<template>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
        <label class="form-check-label">
            {{ label }}
        </label>
    </div>
</template>

<script>
    export default {
        name: 'DriverLicence-component',
        props: ['modelValue', 'label'],
    }
</script>

<style scoped>

</style>