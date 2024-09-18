<template>
    <div class="d-flex flex-column">
        <div class="mb-3">
            <label class="form-label">Образовательное учреждение</label>
            <input v-model="organization" type="text" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Факультет</label>
            <input v-model="facility" type="text" class="form-control">
        </div>
        <div class="d-flex flex-row gap-2">
            <div class="mb-3">
                <label class="form-label">год начала</label>
                <input v-model="start" type="text" class="form-control">
            </div>
            <div class="mb-3">
                <label class="form-label">год окончания</label>
                <input v-model="end" type="text" class="form-control">
            </div>
        </div>
        <div class="d-flex justify-content-end">
            <button class="btn btn-success" @click="createEducation">Ok</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Education-component',
        props: [
            'modelValue'
        ],
        data() {
            return {
                organization: '',
                facility: '',
                start: '',
                end: ''
            }
        },
        emits: ['update:modelValue'],
        methods: {
            createEducation() {
                this.$emit('update:modelValue', {"organization": this.organization, "facility": this.facility, "start": this.start, "end": this.end})
            }
        }
    }
</script>

<style scoped>

</style>