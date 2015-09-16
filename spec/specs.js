describe('Player', function() {
    it("returns the player's mark", function() {
        var testPlayer = new Player("X");
        expect(testPlayer.mark).to.equal("X");
    });
});

describe('Space', function() {
    it("returns the space's x coordinate", function() {
        var testSpace = new Space(1,2);
        expect(testSpace.x_coordinate).to.equal(1);
    });

    it("returns the space's y coordinate", function() {
        var testSpace = new Space(1,2);
        expect(testSpace.y_coordinate).to.equal(2);
    });

    it("lets a player mark a space", function() {
        var testPlayer = new Player("X");
        var testSpace = new Space(1,2);
        testSpace.markWith(testPlayer);
        expect(testSpace.markedBy).to.equal(testPlayer);
    });
});

describe('Board', function(){
    it("creates nine spaces when initialized", function() {
        var testBoard = new Board();
        expect(Object.keys(testBoard.spaces).length).to.equal(9);
    });
});

describe('Game', function(){
    it("creates a board", function() {
        var testGame = new Game();
        expect(testGame.board).to.eql(new Board);
    });

    it("creates two players", function() {
        var testGame = new Game();
        expect(testGame.player1.mark).to.equal("X");
        expect(testGame.player2.mark).to.equal("O");
    });

    it("knows which player's turn it is", function() {
        var testGame = new Game();
        expect(testGame.currentTurn).to.equal("X");
        testGame.nextTurn();
        expect(testGame.currentTurn).to.equal("O");
    });
});
