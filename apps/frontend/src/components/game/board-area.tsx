'use client'

import { GameContext } from '@/contexts/game-context'
import { useContext } from 'react'
import { CellArea } from './cell-area'

interface CellCoordinates {
  row: number
  col: number
}

export default function BoardArea() {
    const { board, result, addMove } = useContext(GameContext)

    function renderCells() {
        const cells = []
        for (let row = 0; row < board.rows; row++) {
            for (let col = 0; col < board.cols; col++) {
                const selected = result.hasCell(row, col)
                cells.push(
                    <div key={`${row}-${col}`} onClick={() => addMove(row, col)}>
                        <CellArea type={board.get(row, col)?.type} selected={selected} />
                    </div>
                )
            }
        }
        return cells
    }

    const cells: CellCoordinates[] = board.items.map(cell => ({
      row: cell.row,
      col: cell.col,
    }))


    return (
        <div className="grid grid-cols-3 gap-5">
            {/* {renderCells()} */}
            {cells.map(({ row, col }) => (
              <div key={`${row}-${col}`} onClick={() => addMove(row, col)}>
                <CellArea type={board.get(row, col)?.type} selected={result.hasCell(row, col)} />
              </div>
            ))}
        </div>
    )
}