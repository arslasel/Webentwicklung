let state = Array(6).fill('').map(el => Array(7).fill(''))
let lastMoveRed = false;

function elt(type, attrs, ...children) {
    let node = document.createElement(type)
    for (a in attrs) {
        node.setAttribute(a, attrs[a])
    }
    for (let child of children) {
        if (typeof child != "string") node.appendChild(child)
        else node.appendChild(document.createTextNode(child))
    }
    return node
}

function addPiece(index, color) {
    document.querySelector("div[index='" + index + "']").appendChild(elt('div', { "class": color + " piece" }))
}

function showBoard() {

    for (let index = 0; index < 42; index++) {
        document.getElementById("board").appendChild(
            elt('div', { "class": "field", "index": index }))
    }

    document.getElementById("board").addEventListener("click", (event) => {
        let clickedIndex = event.target.getAttribute('index')
        console.log("Clicked field " + clickedIndex)
        clickedColumn = clickedIndex % 7
        row = 5
        exit = false
        do {
            clickedIndex = clickedColumn + 7 * row
            if (document.querySelector("div[index='" + (clickedColumn + 7 * row) + "']").hasChildNodes()) {
                row -= 1
            } else {
                exit = true
                if (lastMoveRed) {
                    addPiece(clickedIndex, 'blue')
                    document.getElementById('nextMove').innerHTML = "Next move: RED"
                    lastMoveRed = false
                } else {
                    addPiece(clickedIndex, 'red')
                    document.getElementById('nextMove').innerHTML = "Next move: BLUE"
                    lastMoveRed = true
                }
            }
        } while ((!exit) || row < 0)
    })
}

function reset(){
    let board = document.getElementById('board')
    board.childNodes.forEach(element => {
        if(element.hasChildNodes()){
            element.firstChild.remove()
        }
    });
}




