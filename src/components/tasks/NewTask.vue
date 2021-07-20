<template>
    <form @submit.prevent="submitData">
        <div>
            <label>Description</label>
            <input type="text" v-model="description" />
        </div>
        <div>
            <button>Add task</button>
        </div>
    </form>
</template>
<script>
    export default {
        emits: ['add-task'],
        data() {
            return {
                description: '',
            };
        },
        methods: {
            submitData() {
                this.$emit('add-task', this.description);
                this.description = '';
            }
        }
    };

</script>