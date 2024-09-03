import { Board } from "../game/board";
import { GameResult } from "./game-result";

export interface ResultChecker {
    check(board: Board): GameResult
}