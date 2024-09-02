import { Cell } from "../shared/cell";
import { PlayerType } from "../shared/player-type";

export class Board {
    private constructor(readonly state: Cell[][]) {}

    static create() {
        const newGameState = [
            [new Cell(0, 0, null), new Cell(0, 1, null), new Cell(0, 2, null)],
            [new Cell(1, 0, null), new Cell(1, 1, null), new Cell(1, 2, null)],
            [new Cell(2, 0, null), new Cell(2, 1, null), new Cell(2, 2, null)]
        ]

        return new Board(newGameState)
    }

    get rows(): number {
        return this.state.length
    }

    get cols(): number {
        return this.state[0]!.length
    }

    get items(): Cell[] {
        return this.state.flat()
    }

    get(row: number, col: number): Cell | null {
        return this.state[row]?.[col] ?? null
    }

    isEmpty(row: number, col: number): boolean {
        return this.get(row, col)?.isEmpty() ?? true
    }

    isNotEmpty(row: number, col: number): boolean {
        return !this.isEmpty(row, col)
    }

    isFull() {
        return this.items.every(cell => cell.isNotEmpty())
    }

    set(row: number, col: number, type: PlayerType): Board {
        const cell = this.get(row, col)
        if (!cell || cell.isNotEmpty()) return this

        const state = this.state.map(row => [...row]) // clone state
        state[row]![col] = state[row]![col]!.markWith(type)
        return new Board(state)
    }
}