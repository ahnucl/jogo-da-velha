import { Cell, GameResult, PlayerType } from "../../src"

test('Deve marcar vitória do X', () => {
    const result = new GameResult([
        new Cell(0, 0, PlayerType.X),
        new Cell(0, 1, PlayerType.X),
        new Cell(0, 2, PlayerType.X),
    ])

    expect(result.xWins).toBeTruthy()
    expect(result.oWins).toBeFalsy()
    expect(result.finished).toBeTruthy()
    expect(result.tied).toBeFalsy()
})

test('Deve conter as células do movimento vencedor', () => {
    const result = new GameResult([
        new Cell(0, 0, PlayerType.X),
        new Cell(0, 1, PlayerType.X),
        new Cell(0, 2, PlayerType.X),
    ])

    expect(result.hasCell(0, 0)).toBeTruthy()
    expect(result.hasCell(0, 1)).toBeTruthy()
    expect(result.hasCell(0, 2)).toBeTruthy()
    
    expect(result.hasCell(1, 2)).toBeFalsy()
})