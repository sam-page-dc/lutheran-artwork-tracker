<template>
    <div class="form-group">
        <div class="flex flex-col">
            <label class="font-bold text-gray-dark">{{ label }}</label>
            <input :type="inputType" class="form-control p-2 bg-gray-light mt-2 rounded-sm shadow-inner" :placeholder="placeholder" :value="passdata" @input="updateData($event.target.value)" />
            <p class="mt-4 text-rederror">{{ error }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        inputType: String,
        label: String,
        error: { 
            type: String,
            required: false
        },
        placeholder: String,
        passdata: String,
    },

    methods: {
        updateData(data) {
            this.$emit('input', data)
        }
    }
}
</script>