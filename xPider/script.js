const nextbtn = document.getElementById('next-button')
const prevbtn = document.getElementById('prev-button')
const slides = document.getElementById('categories').children

const app = {
    getActiveItem: function () {
        let check = ''
        for (let i = 0; i < slides.length; i++) {
            let element = slides[i];
            check = getComputedStyle(element, null).display;
            if (check === 'inline-block') {
                return i;
            }
        }
    },
    setActiveItem: function (activeItem) {
        for (let i = 0; i < slides.length; i++) {
            let element = slides[i];
            if (i === activeItem) {
                element.style.display = 'inline-block'
            }
            else {
                element.style.display = 'none'
            }
        }
    }
}

nextbtn.addEventListener('click', () => {
    let activeItem = app.getActiveItem()
    let nextItem = (activeItem + 1) % 4
    app.setActiveItem(nextItem)
})

prevbtn.addEventListener('click', () => {
    let activeItem = app.getActiveItem()
    let prevItem = activeItem - 1
    if (prevItem < 0) prevItem = 3
    app.setActiveItem(prevItem)
})