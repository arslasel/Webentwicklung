let start_state = {
    board: [
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
    ],
    next: 'r',
}

let stateSeq = [start_state]

function showBoard() {
    console.log('-- loading board')

    //  Components
    //
    const App = () => [Board, { board: stateSeq[stateSeq.length - 1].board }]

    const Board = ({ board }) => {
        let flatBoard = [].concat(...board)
        let fields = flatBoard.map((type) => [Field, { type }])
        return ['div', { className: 'board' }, ...fields]
    }
    const Field = ({ type }) => {
        let value = ''
        if (type == 'r') value = 'red'
        if (type == 'b') value = 'blue'
        return [
            'div',
            { className: 'field' },
            ['div', { className: 'piece ' + value }],
        ]
    }

    const app = document.getElementById('app')
    render([App], app)

    document.querySelectorAll('.field').forEach((f) => {
        f.addEventListener('click', () => {
            insertPiece(
                Array.prototype.indexOf.call(f.parentNode.childNodes, f)
            )
        })
    })
}

function getCurrentState() {
    return stateSeq[stateSeq.length - 1]
}

function calcToBeInsertedIndex(index) {
    let res = undefined
    let skip = false
    getCurrentState().board.forEach((row) => {
        if (row[index % 7] == '') {
            res = {
                i: Array.prototype.indexOf.call(getCurrentState().board, row),
                j: index % 7,
            }
        }
    })
    return res
}

function getNextPlayer() {
    let current = getCurrentState().next
    return current == 'r' ? 'b' : 'r'
}

function insertPiece(index) {
    console.log('-- insert piece at :', index)
    try {
        let { i, j } = calcToBeInsertedIndex(index)
        let next = getNextPlayer()
        //insert piece into state
        stateSeq.push(
            setInObject(
                setInObject(
                    stateSeq[stateSeq.length - 1],
                    'board',
                    setInList(
                        stateSeq[stateSeq.length - 1].board,
                        i,
                        setInList(
                            stateSeq[stateSeq.length - 1].board[i],
                            j,
                            getCurrentState().next
                        )
                    )
                ),
                'next',
                next
            )
        )
    } catch (error) {
        console.log(error)
    }

    showBoard()
}

setTimeout(() => {
    document.getElementById('undo').addEventListener('click', () => {
        if (stateSeq.length > 0) {
            start_state = stateSeq.pop()
            showBoard()
        }
    })

    showBoard()
}, 100)