import { Board } from "../game/board";
import { CellCheker } from "./cell-checker";
import { GameResult } from "./game-result";
import { ResultChecker } from "./result-checker";

export class TieChecker implements ResultChecker {
    check(board: Board): GameResult {
        return board.isFull()
            ? new GameResult([], true)
            : new GameResult()
    }
}