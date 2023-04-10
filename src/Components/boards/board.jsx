import Square from "../Square/Squares";
import './board.css';



const Board = ({squares, onClick, turn, winningSquare}) => {

    const createSquare = value => (
        value.map( value => (
            <Square 
                winner={winningSquare.includes(value)}
                turn={turn}
                onClick={() => onClick(value)}
                value={squares[value]}
                key={`square_${value}`}
            />
        ))
    );


    return (
        <div className="board">
            <div className="row">
                {createSquare([0, 1, 2])}
            </div>
            <div className="row">
                {createSquare([3, 4, 5])}
            </div>
            <div className="row">
                {createSquare([6, 7, 8])}
            </div>
        </div>
    )
}


export default Board;