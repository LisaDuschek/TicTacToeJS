function Player(mark){
  this.mark = mark;
};

function Space(x_coordinate, y_coordinate){
  this.x_coordinate = x_coordinate;
  this.y_coordinate = y_coordinate;
  this.markedBy = "empty";
};

Space.prototype.markWith = function(mark) {
  return this.markedBy = mark;
};

function Board(){
  this.spaces = {
    space1: new Space(1,1),
    space2: new Space(1,2),
    space3: new Space(1,3),
    space4: new Space(2,1),
    space5: new Space(2,2),
    space6: new Space(2,3),
    space7: new Space(3,1),
    space8: new Space(3,2),
    space9: new Space(3,3)
  };
};

function Game(){
  this.board = new Board;
  this.player1 = new Player("X");
  this.player2 = new Player("O");
  this.currentTurn = "X";
  this.gameOver = false;
};

Game.prototype.nextTurn = function(){
  if (this.currentTurn = "X"){
    return this.currentTurn = "O";
  };
  if (this.currentTurn = "O"){
    return this.currentTurn = "X";
  };
};

Game.prototype.checkWin = function() {
  if ((this.board.spaces.space1.markedBy === this.board.spaces.space2.markedBy && this.board.spaces.space1.markedBy === this.board.spaces.space3.markedBy) ||
  (this.board.spaces.space4.markedBy === this.board.spaces.space5.markedBy && this.board.spaces.space4.markedBy === this.board.spaces.space6.markedBy) ||
  (this.board.spaces.space7.markedBy === this.board.spaces.space8.markedBy && this.board.spaces.space7.markedBy === this.board.spaces.space9.markedBy) ||
  (this.board.spaces.space1.markedBy === this.board.spaces.space4.markedBy && this.board.spaces.space1.markedBy === this.board.spaces.space7.markedBy) ||
  (this.board.spaces.space2.markedBy === this.board.spaces.space5.markedBy && this.board.spaces.space2.markedBy === this.board.spaces.space8.markedBy) ||
  (this.board.spaces.space3.markedBy === this.board.spaces.space6.markedBy && this.board.spaces.space3.markedBy === this.board.spaces.space9.markedBy) ||
  (this.board.spaces.space1.markedBy === this.board.spaces.space5.markedBy && this.board.spaces.space1.markedBy === this.board.spaces.space9.markedBy) ||
  (this.board.spaces.space3.markedBy === this.board.spaces.space5.markedBy && this.board.spaces.space3.markedBy === this.board.spaces.space7.markedBy)) {
    if (confirm("Game over! Player " + this.currentTurn + " wins! Play a new game?")) {
      window.location.reload(); // while testing be sure to click cancel on this prompt. If you click ok it will refresh the page and prompt you again.
    } else {
      return this.gameOver = true; // for testing purposes only.
    };
  } else if (this.checkTie) { //need to finish checkTie
    if (confirm("Game ends in a tie! Play a new game?")) {
      window.location.reload(); // while testing be sure to click cancel on this prompt. If you click ok it will refresh the page and prompt you again.
    } else {
      return this.gameOver = true; // for testing purposes only.
    };
  } else {
    this.nextTurn();
  };
};


// behold this majestic code
Game.prototype.checkTie = function(){
  var winSpaces = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

  return winSpaces.every(function(combo){
    empties = 0;
    xs = 0;
    os = 0;

    for(i=0;i<combo.length;i++){
      var spaceMark = game.board.spaces["space"+combo[i]].markedBy;

      if (spaceMark === "empty") {
        return empties += 1;
      };

      if (spaceMark === "X") {
        return xs += 1;
      };

      if (spaceMark === "O") {
        return os += 1;
      };
    };

    if (empties === 1 && xs === 1 ||
    os === 2 && xs === 1 ||
    os === 1 && xs ===2) {
      return true;
    };

  });
};
