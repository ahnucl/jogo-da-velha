import { Board } from "../game/board";
import { Cell } from "../shared/cell";
import { GameResult } from "./game-result";
import { ResultChecker } from "./result-checker";

export class CellCheker implements ResultChecker {
    constructor(private readonly cells: [number, number][]) {}
    
    check(board: Board): GameResult {
        const cells = this.cells.map(([row, col]) => board.get(row, col))
        const types = cells.map(cell => cell!.type)
        return types.every((type) => type !== null && type === types[0]) 
            ? new GameResult(cells as Cell[])
            : new GameResult()
    }
}