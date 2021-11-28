describe("Test connect4winner", function() {
    var state
    beforeEach(function(){
        state = {
            board: [
              ['', '', '', '', '', '', ''],
              ['', '', '', '', '', '', ''],
              ['', '', '', '', '', '', ''],
              ['', '', '', '', '', '', ''],
              ['', '', '', '', '', '', ''],
              ['', '', '', '', '', '', '']
            ],
            next: 'b'
        }
    })

    it("should return 0", function(){
        win = new Connect4Winner();
        expect(win.connect4Winner(state)).toEqual(0)
    });

    it("should be r (vertikal)", function(){
        win = new Connect4Winner();
        state.board[0][0] = 'r'
        state.board[0][1] = 'r'
        state.board[0][2] = 'r'
        state.board[0][3] = 'r'
        expect(win.connect4Winner(state)).toBe('r')
    });

    it("should be b (horizontal)", function(){
        win = new Connect4Winner();
        state.board[0][0] = 'b'
        state.board[1][0] = 'b'
        state.board[2][0] = 'b'
        state.board[3][0] = 'b'
        expect(win.connect4Winner(state)).toBe('b')
    });

    it("should be b (Diagonal)", function(){
        win = new Connect4Winner();
        state.board[0][0] = 'b'
        state.board[1][1] = 'b'
        state.board[2][2] = 'b'
        state.board[3][3] = 'b'
        expect(win.connect4Winner(state)).toBe('b')
    });

    it("should be 0 ", function(){
        win = new Connect4Winner();
        state.board[0][0] = 'b'
        state.board[1][0] = 'r'
        state.board[2][0] = 'b'
        state.board[3][0] = 'b'
        expect(win.connect4Winner(state)).toEqual(0)
    });

    it("should be 0", function(){
        win = new Connect4Winner();
        state.board[0][0] = 'b'
        state.board[1][0] = 'b'
        state.board[2][0] = 'b'
        state.board[4][0] = 'b'
        expect(win.connect4Winner(state)).toEqual(0)
    });
});