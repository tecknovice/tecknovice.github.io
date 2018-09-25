let app  = new Vue({
    el: '#app',
    data() {
        return {
            name: "Adam",
            tasks: [],
            hideCompleted: true,
            newItemText: ""
        }
    },
    computed: {
        filteredTasks() {
            return this.hideCompleted ?
                this.tasks.filter(t => !t.done) : this.tasks
        }
    },
    methods: {
        addNewTodo() {
            this.tasks.push({
                action: this.newItemText,
                done: false
            });
            this.storeData();
            this.newItemText = "";
        },
        storeData() {
            localStorage.setItem("todos", JSON.stringify(this.tasks));
        },
        deleteCompleted() {
            this.tasks = this.tasks.filter(t => !t.done);
            this.storeData();
        }
    },
    created() {
        let data = localStorage.getItem("todos");
        if (data != null) {
            this.tasks = JSON.parse(data);
        }
    }
});