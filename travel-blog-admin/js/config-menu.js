const TYPE = ['TODO', 'DOING', 'DONE']
const DB = {
    get: function () {
        let data
        if (typeof (Storage) !== "undefined") {
            let dataString = localStorage.getItem('DATA')
            try {
                data = JSON.parse(dataString) || {}
            } catch (error) {
                data = {}
            }
        } else {
            alert('Sorry! No Web Storage support..')
            data = {}
        }
        return data
    },
    set: function (data) {
        localStorage.setItem('DATA', JSON.stringify(data))
    }
}
const DATA = DB.get()
let app = {
    addTodo(e, type, input) {
        if (e.keyCode === 13 && $(input).val().trim() !== '') {
            let todo = $(input).val().trim()
            if (!DATA[type]) DATA[type] = []
            DATA[type].push(todo)
            DB.set(DATA)
            app.updateHeader()
            app.insertIntoList(todo, type)
            $(input).val('')
        }
    },
    insertIntoList(todo, type) {
        let text = `<li class="list-group-item">
                        <div>${todo}</div>
                        <i class="fa fa-trash" onclick="app.deleteTodo(this)"></i>
                    </li>`
        $('#' + type).append(text)
    },
    deleteTodo(icon) {
        $('#confirmModal').modal('show')
        $('#OK').off('click')
        $('#OK').on('click', function (event) {
            let item = $(icon).parent()
            let type = item.parent().attr('id')
            let index = $(`#${type} .list-group-item`).index(item)
            DATA[type].splice(index, 1)
            DB.set(DATA)
            app.updateHeader()
            item.remove()
            $('#confirmModal').modal('hide')
        })
    },
    updateHeader() {
        TYPE.forEach(type => {
            let list = DATA[type] || []
            let length = list.length
            $(`#num${type}`).html(list.length)
        });
    }
}
$(function () {
    TYPE.forEach(type => {
        let list = DATA[type] || []
        list.forEach(item => {
            app.insertIntoList(item, type)
        });
        $(`#num${type}`).html(list.length)
    });
    $(".list-group").sortable({
        connectWith: ".list-group",
        placeholder: "ui-state-highlight",
        start: function (event, ui) {
            ui.item.oldType = ui.item[0].parentElement.getAttribute('id')
            ui.item.oldIndex = ui.item.index()
            $(ui.item[0]).addClass("dragging")
        },
        stop: function (event, ui) {
            let oldType = ui.item.oldType
            let oldIndex = ui.item.oldIndex
            let newType = ui.item[0].parentElement.getAttribute('id')
            let newIndex = ui.item.index()
            $(ui.item[0]).removeClass("dragging")
            //Remove and add
            let item = DATA[oldType][oldIndex]
            DATA[oldType].splice(oldIndex, 1)
            if (!DATA[newType]) DATA[newType] = [item]
            else DATA[newType].splice(newIndex, 0, item)
            //Save
            DB.set(DATA)
            app.updateHeader()
        }
    });
});
