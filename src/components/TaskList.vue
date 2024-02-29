<template>
    <div class="task-list">
        <h1>{{ projectName }}</h1>
        <input
            type="text"
            v-model="newTask"
            @keydown.enter="addTask"
            placeholder="Add new task..."
        />
        <input
            type="text"
            v-model="searchFilter"
            @input="saveSearchFilter"
            placeholder="Search tasks..."
        />

        <!-- if no tasks are found -->
        <p v-if="filteredTasks.length === 0">No tasks found.</p>
        <!-- if tasks are found -->
        <ul v-else>
            <TaskItem
                v-for="task in filteredTasks"
                :key="task.id"
                :task="task"
                @delete="deleteTask"
                @toggle="toggleTask"
                @update="updateTask"
            />
        </ul>
    </div>
</template>

<script>
import TaskItem from './TaskItem.vue';

export default {
    components: {
        TaskItem,
    },
    data() {
        return {
            newTask: '',
            tasks: [],
            searchFilter: '',
        };
    },
    computed: {
        projectName() {
            return this.$route.params.projectName || 'Default Project';
        },
        filteredTasks() {
            if (!this.searchFilter) {
                return this.tasks;
            }
            return this.tasks.filter((task) =>
                task.text
                    .toLowerCase()
                    .includes(this.searchFilter.toLowerCase())
            );
        },
    },
    methods: {
        addTask() {
            if (this.newTask.trim()) {
                const task = {
                    id: Date.now(),
                    text: this.newTask.trim(),
                    done: false,
                    created: new Date().toISOString(),
                    subtasks: [],
                };
                this.tasks.unshift(task);
                this.newTask = '';
                this.saveTasks();
            }
        },
        deleteTask(taskId) {
            this.tasks = this.tasks.filter((task) => task.id !== taskId);
            this.saveTasks();
        },
        updateTask(updatedTask) {
            const index = this.tasks.findIndex(
                (task) => task.id === updatedTask.id
            );
            if (index !== -1) {
                this.tasks.splice(index, 1, updatedTask);
                this.saveTasks();
            }
        },
        toggleTask(taskId) {
            const task = this.tasks.find((task) => task.id === taskId);
            if (task) {
                task.done = !task.done;
                this.saveTasks();
            }
        },
        saveTasks() {
            localStorage.setItem(this.projectName, JSON.stringify(this.tasks));
        },
        saveSearchFilter() {
            localStorage.setItem('searchFilter', this.searchFilter);
        },
        restoreSearchFilter() {
            const savedSearchFilter = localStorage.getItem('searchFilter');
            if (savedSearchFilter) {
                this.searchFilter = savedSearchFilter;
            }
        },
    },
    created() {
        const savedTasks = localStorage.getItem(this.projectName);
        if (savedTasks) {
            this.tasks = JSON.parse(savedTasks);
        }
        this.restoreSearchFilter();
    },
};
</script>

<style scoped>
.task-list {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
}

input[type='text'] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 20px;
    box-sizing: border-box;
    /* Ensures padding is included in the width */
}

ul {
    list-style: none;
    padding: 0;
}

li {
    padding: 10px;
    border-bottom: 1px solid #eee;
    display: flex;
    /* Aligns task text and buttons horizontally */
    justify-content: space-between;
    /* Spaces out the task text and buttons */
    align-items: center;
    /* Centers items vertically */
}

li:last-child {
    border-bottom: none;
}

li span {
    margin-left: 10px;
}

li span.done {
    text-decoration: line-through;
    color: #999;
}
</style>
