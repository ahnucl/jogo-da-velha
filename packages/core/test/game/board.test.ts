import { Board, PlayerType } from "../../src"

test('Deve criar um tabuleiro vazio', () => {
    const board = Board.create()
    expect(board.cols).toBe(3)
    expect(board.rows).toBe(3)
    expect(board.isFull()).toBeFalsy()
})

test ('Deve retornar todas as células do tabuleiro', () => {
    const board = Board.create()
    expect(board.items.length).toBe(9)
})

test ('Deve marcar uma célula por linha e coluna', () => {
    const board = Board.create().set(1, 1, PlayerType.X)
    expect(board.isEmpty(1, 1)).toBeFalsy()
    expect(board.isNotEmpty(1, 1)).toBeTruthy()
})

test('Deve retornar com vazio para célula inexistente', () => {
    const board = Board.create()
    expect(board.isEmpty(4, 1)).toBeTruthy()
    expect(board.isNotEmpty(4, 1)).toBeFalsy( )
})

test('Deve ignorar marcar uma célula inexistente', () => {
    const board = Board.create()
    const sameBoard = board.set(1, 10, PlayerType.O)
    expect(sameBoard).toEqual(board)
})