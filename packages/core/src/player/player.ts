import { PlayerType } from "../shared/player-type";

export class Player {
    constructor(
        readonly name: string,
        readonly type: PlayerType,
        readonly score: number = 0,
    ) {}

    addScore(score: number): Player {
        if (score === 0) return this // não muda o objeto, por isso retornar o mesmo
        return new Player(this.name, this.type, this.score + score)
    }
    
    clear(): Player {
        return new Player(this.name, this.type)
    }
}