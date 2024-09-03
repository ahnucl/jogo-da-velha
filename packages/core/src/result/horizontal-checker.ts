import { Board } from "../game/board";
import { CellCheker } from "./cell-checker";
import { GameResult } from "./game-result";
import { ResultChecker } from "./result-checker";

export class HorizontalChecker implements ResultChecker {
    check(board: Board): GameResult {
        const result = [
            new CellCheker([[0, 0], [0, 1], [0, 2]]).check(board),
            new CellCheker([[1, 0], [1, 1], [1, 2]]).check(board),
            new CellCheker([[2, 0], [2, 1], [2, 2]]).check(board),
        ].find((result => result.finished))
        return result ?? new GameResult()
    }
}