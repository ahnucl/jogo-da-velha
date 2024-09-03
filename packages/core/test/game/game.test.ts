import { Game, Player, PlayerType } from "../../src"

test('Deve retornar o próximo jogador', () => {
    const game = Game.create(new Player('P1', PlayerType.O), new Player('P1', PlayerType.X))
    expect(game.currentPlayer.type).toBe(PlayerType.O)
    expect(game.nextRound().currentPlayer.type).toBe(PlayerType.X)
})

test('Deve finalizar o jogo com vitória #1', () => {
    const game = Game.create(new Player('P1', PlayerType.O), new Player('P1', PlayerType.X))
        .addMove(0, 0)
        .addMove(1, 1)
        .addMove(0, 1)
        .addMove(1, 2)
        .addMove(0, 2)

    expect(game.result.finished).toBeTruthy()
    expect(game.result.xWins).toBeFalsy()
    expect(game.result.oWins).toBeTruthy()
})