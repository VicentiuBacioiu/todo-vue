(function () {
    var todoApp = new Vue({
        el: '#todoApp',
        data: {
            todos: [
                { text: 'Learn JavaScript' },
                { text: 'Learn Vue' },
                { text: 'Build something awesome' }
            ]
        },
        methods: {
            addNew: function () {
                this.todos.push({ text: '' })
            },
            remove: function (idx) {
                this.todos.splice(idx, 1);
            }
        }
    })
})();