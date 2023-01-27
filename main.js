let ground = document.querySelector('.ground');
const amountOfBoxes = 725;


for(let i = 0; i < amountOfBoxes; i++) {
    let box = document.createElement('div')
    box.classList.add('box')
    ground.append(box) // append() - указывает что появится внутри элемента, к которому вы обращаетесь
    box.addEventListener('mouseover', () => setColor(box))
    box.addEventListener('mouseleave', () => removeColor(box))
}

function setColor(el) {
    el.style.background = `rgb(${randColor(0,256)}, ${randColor(0,256)}, ${randColor(0,256)})`
}

function removeColor(el) {
    el.style.background = 'rgb(64, 60, 60)'
}

function randColor(min,max) {
    let asd = Math.floor(Math.random() * (max - min) + min);
    return asd
}
