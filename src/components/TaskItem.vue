<template>
    <li>
        <span
            :class="{ done: task.done }"
            v-if="!isEditing"
            @click="startEditing"
            >{{ task.text }}</span
        >
        <input
            v-else
            type="text"
            v-model="localTask.text"
            @blur="stopEditing"
            @keyup.enter="stopEditing"
        />
        <button @click="$emit('toggle', task.id)">Toggle Done</button>
        <button class="delete" @click="$emit('delete', task.id)">Delete</button>
    </li>
</template>

<script>
export default {
    props: ['task'],
    data() {
        return {
            isEditing: false,
            localTask: { ...this.task },
        };
    },
    methods: {
        startEditing() {
            this.isEditing = true;
        },
        stopEditing() {
            this.isEditing = false;
            this.$emit('update', this.localTask);
        },
    },
};
</script>

<style scoped>
li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
}

li:last-child {
    border-bottom: none;
}

span {
    flex-grow: 1;
    margin-right: 10px;
}

span.done {
    text-decoration: line-through;
    color: #999;
}

input[type='text'] {
    flex-grow: 1;
    margin-right: 10px;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 3px;
}

button.toggle {
    background-color: #eee;
    color: #777;

    &:hover {
        background-color: #ccc;
        color: #333;
    }
}

button.delete {
    margin-left: 10px;
    background-color: #f44336;

    &:hover {
        background-color: #d32f2f;
    }
}
</style>
