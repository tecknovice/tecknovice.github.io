const db = {
    get: function () {
        let menu
        if (typeof (Storage) !== "undefined") {
            let dataString = localStorage.getItem('menu')
            try {
                menu = JSON.parse(dataString) || []
            } catch (error) {
                menu = []
            }
        } else {
            alert("Sorry! I'm in WC...")
            menu = []
        }
        return menu
    },
    set: function (menu) {
        localStorage.setItem('menu', JSON.stringify(menu))
    }
}
const menu = db.get()
class SubMenu{
    title = ''
    links = []
    constructor(title,links){
        this.title = title
        this.links = links
    }
    insertLink(link){
        this.links.push(link)
    }
    deleleLink(link){
        
    }
}
class Menu{
    menu = []
    constructor(menu){
        this.menu = menu
    }
    readSubMenu(title) {
        for (let index = 0; index < this.menu.length; index++) {
            let subMenu = menu[index];
            if (subMenu.title == title) return subMenu
        }
        return null
    }
    setSubMenu(title, links) {
        let subMenu
        for (let index = 0; index < this.menu.length; index++) {
            subMenu = menu[index];
            if (subMenu.title == title) break;
        }
        if (subMenu == undefined)
        subMenu = new SubMenu(title,links)
        if (links)
        subMenu.links = links
    }
}

let app = {
    
    
    addLink(e, type, input) {
        if (e.keyCode === 13 && $(input).val().trim() !== '') {
            let todo = $(input).val().trim()
            if (!this.getSubMenu(title)) this.setSubMenu(title)
            const subMenu = this.getSubMenu(title)
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
