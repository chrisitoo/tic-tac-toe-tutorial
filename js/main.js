/*----- constants -----*/

/*----- app's state (variables) -----*/
let board; 
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/
function init(){
    board = [
        'i', 'i', 'i',
        'i', 'i', 'i',
        'i', 'i', 'i'
    ];
    render();
};

init();

function render(){

    board.forEach(function(mark, index){
        console.log(mark, index);
    });
} ;