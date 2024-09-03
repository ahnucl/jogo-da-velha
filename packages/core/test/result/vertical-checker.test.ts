import { Board, PlayerType, VerticalChecker } from "../../src"

test('Deve finalizar com vitória do jogador O', () => {
    const board = Board.create()
        .set(0, 1, PlayerType.O)
        .set(1, 1, PlayerType.O)
        .set(2, 1, PlayerType.O)
    const result = new VerticalChecker().check(board)
    expect(result.finished).toBeTruthy()
    expect(result.oWins).toBeTruthy()
    expect(result.xWins).toBeFalsy()
})

test('Deve continuar em progresso sem vitória', () => {
    const board = Board.create()
        .set(0, 0, PlayerType.X)
        .set(1, 1, PlayerType.X)
        .set(2, 2, PlayerType.O)
    const result = new VerticalChecker().check(board)
    expect(result.inProgress).toBeTruthy()
    expect(result.xWins).toBeFalsy()
    expect(result.oWins).toBeFalsy()
})