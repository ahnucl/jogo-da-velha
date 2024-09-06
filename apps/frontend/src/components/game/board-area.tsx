'use client'

import { GameContext } from '@/contexts/game-context'
import { useContext } from 'react'
import { CellArea } from './cell-area'

// O Cell do @repo/core funcionaria diretamente.
interface CellCoordinates {
  row: number
  col: number
}

export default function BoardArea() {
    const { board, result, addMove } = useContext(GameContext)

    const cells: CellCoordinates[] = board.items.map(cell => ({
      row: cell.row,
      col: cell.col,
    }))

    return (
        <div className="grid grid-cols-3 gap-5">
            {cells.map(({ row, col }) => (
              <div key={`${row}-${col}`} onClick={() => addMove(row, col)}>
                <CellArea type={board.get(row, col)?.type} selected={result.hasCell(row, col)} />
              </div>
            ))}
        </div>
    )
}