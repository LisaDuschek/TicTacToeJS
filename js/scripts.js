function Player(mark){
    this.mark = mark;
};

function Space(x_coordinate, y_coordinate){
    this.x_coordinate = x_coordinate;
    this.y_coordinate = y_coordinate;
};

Space.prototype.markWith = function(mark) {
    this.markedBy = mark;
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
};

Game.prototype.nextTurn = function(){
   if (this.currentTurn = "X"){
       return this.currentTurn = "O";
   };
   if (this.currentTurn = "O"){
       return this.currentTurn = "X";
   };

};
