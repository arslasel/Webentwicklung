let state = undefined

function elt(type, attrs, ...children) {
    let node = document.createElement(type)
    for (a in attrs) {
        node.setAttribute(a, attrs[a])
    }
    for (let child of children) {
        if (typeof child != 'string') {
            node.appendChild(child)
        } else {
            node.appendChild(document.createTextNode(child))
        }
    }
    return node
}

function generateField(rowIndex, fieldIndex) {
    let childs = []
    let fieldState = state[rowIndex][fieldIndex]

    if (fieldState === 'r') {
        childs.push(elt('div', { class: 'red piece' }))
    }
    if (fieldState === 'b') {
        childs.push(elt('div', { class: 'blue piece' }))
    }

    return elt('div', { class: 'flexitem field' }, ...childs)
}

function generateRow(rowIndex) {
    let fields = []

    for (let index = 0; index < 7; index++) {
        fields.push(generateField(rowIndex, index))
    }

    return elt('div', { class: 'flexparent' }, ...fields)
}

function showBoard() {
    document.getElementById('board').innerHTML = ''
    for (let index = 0; index < 6; index++) {
        document.getElementById('board').appendChild(generateRow(index))
    }
}
function initGame() {
    state = Array(6)
        .fill('placeholder')
        .map((el) => Array(7).fill(''))
    showBoard()
}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function insertRdmPiece() {
    let rowindex = randomIntFromInterval(0,5)
    let colindex = randomIntFromInterval(0,6)
    let piece = randomIntFromInterval(0,2)
    
    if(piece === 0){
        state[rowindex][colindex] = ""
    }
    if(piece === 1){
        state[rowindex][colindex] = "r"
    }
    if(piece === 2){
        state[rowindex][colindex] = "b"
    }
}

function gameEvent() {
    insertRdmPiece()
    showBoard()
}

setInterval(() => {
    gameEvent()
}, 1000);

setTimeout(() => {
    initGame()
}, 50)