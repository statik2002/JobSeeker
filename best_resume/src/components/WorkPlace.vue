<template>
    <div class="d-flex flex-column">
        <div v-if="errors.length > 0" v-for="error in errors">
            <div class="alert alert-danger" role="alert">
                <i class="bi bi-exclamation-octagon">&nbsp;{{ error }}</i>
            </div>
        </div>
        <div class="mb-3">
            <label class="form-label">Место работы</label>
            <input v-model="organization" type="text" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Должность</label>
            <input v-model="position" type="text" class="form-control">
        </div>
        <div class="d-flex flex-row gap-2">
            <div class="mb-3">
                <label class="form-label">год начала</label>
                <VueDatePicker v-model="start" year-picker default="true" />
            </div>
            <div class="mb-3">
                <label class="form-label">год окончания</label>
                <VueDatePicker v-model="end" year-picker />
            </div>
        </div>
        <div class="d-flex justify-content-end">
            <button class="btn btn-success" @click="createWork">Ok</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Work-component',
        props: [
            'modelValue'
        ],
        data() {
            return {
                organization: '',
                position: '',
                start: new Date().getFullYear(),
                end: new Date().getFullYear(),
                errors: [],
            }
        },
        emits: ['update:modelValue'],
        methods: {
            createWork() {
                this.errors = []
                if (this.organization.length < 3) {
                    this.errors.push("Введите коректное место работы")
                }
                if (this.position.length < 2) {
                    this.errors.push("Введите коректную должность")
                }
                if (this.start < 1950 || this.start > 2024) {
                    this.errors.push("Введите коректное значение начала работы")
                }
                if (this.end < this.start) {
                    this.errors.push("Введите коректное значение окончания работы")
                }
                this.$emit('update:modelValue', [{"organization": this.organization, "position": this.position, "start": this.start, "end": this.end}])
            }
        }
    }
</script>

<style scoped>

</style>