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
    debugger;
  } else {
    return this.currentTurn = "X";
    debugger;
  };
};

Game.prototype.checkWin = function() {
  var space1 = this.board.spaces.space1.markedBy
  var space2 = this.board.spaces.space2.markedBy
  var space3 = this.board.spaces.space3.markedBy
  var space4 = this.board.spaces.space4.markedBy
  var space5 = this.board.spaces.space5.markedBy
  var space6 = this.board.spaces.space6.markedBy
  var space7 = this.board.spaces.space7.markedBy
  var space8 = this.board.spaces.space8.markedBy
  var space9 = this.board.spaces.space9.markedBy

  if ((space1 !== "empty" && space2 !== "empty" && space3 !== "empty" && space1 === space2 && space1 === space3) ||
  (space4 !== "empty" && space5 !== "empty" && space6 !== "empty" && space4 === space5 && space4 === space6) ||
  (space7 !== "empty" && space8 !== "empty" && space9 !== "empty" && space7 === space8 && space7 === space9) ||
  (space1 !== "empty" && space4 !== "empty" && space7 !== "empty" && space1 === space4 && space1 === space7) ||
  (space2 !== "empty" && space5 !== "empty" && space8 !== "empty" && space2 === space5 && space2 === space8) ||
  (space3 !== "empty" && space6 !== "empty" && space9 !== "empty" && space3 === space6 && space3 === space9) ||
  (space1 !== "empty" && space5 !== "empty" && space9 !== "empty" && space1 === space5 && space1 === space9) ||
  (space3 !== "empty" && space5 !== "empty" && space7 !== "empty" && space3 === space5 && space3 === space7)) {

    if (confirm("Game over! Player " + this.currentTurn + " wins! Play a new game?")) {
      window.location.reload(); // while testing be sure to click cancel on this prompt. If you click ok it will refresh the page and prompt you again.
    } else {
      return this.gameOver = true; // for testing purposes only.
    };

  };
};


// behold this majestic code
// but also see majestic code above

Game.prototype.checkTie = function(){
  var winSpaces = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  var game = this
  debugger;
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

    return empties === 1 && xs === 1 || os === 2 && xs === 1 || os === 1 && xs === 2;

    });
  };


  $(document).ready(function() {
    var currentGame = new Game;

    $("#1").click(function() {
      $(this).text(currentGame.currentTurn);
      currentGame.checkTie();
      currentGame.checkWin();
      currentGame.nextTurn();
      debugger;
    });

    $("#2").click(function() {
      $(this).text(currentGame.currentTurn);
      currentGame.checkTie();
      currentGame.checkWin();
      currentGame.nextTurn();
    });

    $("#3").click(function() {
      $(this).text(currentGame.currentTurn);
      currentGame.checkTie();
      currentGame.checkWin();
      currentGame.nextTurn();
    });

    $("#4").click(function() {
      $(this).text(currentGame.currentTurn);
      currentGame.checkTie();
      currentGame.checkWin();
      currentGame.nextTurn();
    });

    $("#5").click(function() {
      $(this).text(currentGame.currentTurn);
      currentGame.checkTie();
      currentGame.checkWin();
      currentGame.nextTurn();
    });

    $("#6").click(function() {
      $(this).text(currentGame.currentTurn);
      currentGame.checkTie();
      currentGame.checkWin();
      currentGame.nextTurn();
    });

    $("#7").click(function() {
      $(this).text(currentGame.currentTurn);
      currentGame.checkTie();
      currentGame.checkWin();
      currentGame.nextTurn();
    });

    $("#8").click(function() {
      $(this).text(currentGame.currentTurn);
      currentGame.checkTie();
      currentGame.checkWin();
      currentGame.nextTurn();
    });

    $("#9").click(function() {
      $(this).text(currentGame.currentTurn);
      currentGame.checkTie();
      currentGame.checkWin();
      currentGame.nextTurn();
    });

  });
