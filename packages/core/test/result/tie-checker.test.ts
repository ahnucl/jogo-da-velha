
import { Board, PlayerType } from '../../src'
import { TieChecker } from '../../src/result/tie-checker'

test('Deve retornar jogo em progresso', () => {
    const board = Board.create()
        .set(0, 0, PlayerType.O)
        .set(1, 1, PlayerType.O)
        .set(2, 2, PlayerType.O)
    const result = new TieChecker().check(board)
    expect(result.finished).toBeFalsy()
    expect(result.tied).toBeFalsy()
    expect(result.xWins).toBeFalsy()
    expect(result.oWins).toBeFalsy()
})

test('Deve retornar jogo como empatado', () => {
    const board = Board.create()
        .set(0, 0, PlayerType.O)
        .set(0, 1, PlayerType.X)
        .set(0, 2, PlayerType.O)
        .set(1, 0, PlayerType.O)
        .set(1, 1, PlayerType.X)
        .set(1, 2, PlayerType.O)
        .set(2, 0, PlayerType.X)
        .set(2, 1, PlayerType.O)
        .set(2, 2, PlayerType.X)
    const result = new TieChecker().check(board)
    expect(result.finished).toBeTruthy()
    expect(result.tied).toBeTruthy()
    expect(result.xWins).toBeFalsy()
    expect(result.oWins).toBeFalsy()
})
