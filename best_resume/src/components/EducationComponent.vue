<template>
    <div class="d-flex flex-column">
        <div v-if="errors.length > 0" v-for="error in errors">
            <div class="alert alert-danger" role="alert">
                <i class="bi bi-exclamation-octagon">&nbsp;{{ error }}</i>
            </div>
        </div>
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
                <input v-model="start" type="number" class="form-control">
            </div>
            <div class="mb-3">
                <label class="form-label">год окончания</label>
                <input v-model="end" type="number" class="form-control">
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
                end: '',
                errors: [],
            }
        },
        emits: ['update:modelValue'],
        methods: {
            createEducation() {
                this.errors = []
                if (this.organization.length < 3) {
                    this.errors.push("Введите коректное учебное заведение")
                }
                if (this.facility.length < 2) {
                    this.errors.push("Введите коректный факультет")
                }
                if (this.start < 1950 || this.start > 2024) {
                    this.errors.push("Введите коректное значение начала обучения")
                }
                if (this.end < this.start) {
                    this.errors.push("Введите коректное значение окончания обучения")
                }
                this.$emit('update:modelValue', {"organization": this.organization, "facility": this.facility, "start": this.start, "end": this.end})
            }
        }
    }
</script>

<style scoped>

</style>