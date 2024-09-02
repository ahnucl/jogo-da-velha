import { PlayerType } from "./player-type";

export class Cell {
    constructor(
        readonly row: number,
        readonly col: number,
        readonly type: PlayerType | null = null
    ) {}

    markWith(type: PlayerType): Cell {
        if (this.type !== null) return this
        return new Cell(this.row, this.col, type)
    }

    isEmpty() {
        return this.type === null
    }

    isNotEmpty() {
        return this.type !== null
    }
}