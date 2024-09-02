import { Cell, PlayerType } from "../../src"

test("Deve criar uma célula preenchida", () => {
    const cell = new Cell(0, 2, PlayerType.X)
    expect(cell.row).toBe(0)
    expect(cell.col).toBe(2)
    expect(cell.type).toBe(PlayerType.X)
    expect(cell.isEmpty()).toBeFalsy()
    expect(cell.isNotEmpty()).toBeTruthy()
})

test("Deve criar uma célula vazia", () => {
    const cell = new Cell(0,2)
    expect(cell.row).toBe(0)
    expect(cell.col).toBe(2)
    expect(cell.type).toBeNull()
    expect(cell.isEmpty()).toBeTruthy()
    expect(cell.isNotEmpty()).toBeFalsy()
})

test('Deve transformar uma célula vazia em preenchida', () => {
    const emptyCell = new Cell(0,2)
    const cell = emptyCell.markWith(PlayerType.X)
    expect (emptyCell.type).toBeNull()
    expect(cell.type).toBe(PlayerType.X)
})

test('Deve ignorar marcação em uma célula já marcada', () => {
    const cell = new Cell(0, 2, PlayerType.O)
    const markedCell = cell.markWith(PlayerType.X)
    expect(markedCell.type).not.toEqual(PlayerType.X)
    expect(cell).toEqual(markedCell)

})