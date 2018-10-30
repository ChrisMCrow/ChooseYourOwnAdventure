export class Player {
    constructor(public name: string, public points: number, public character: Character) {}
}

export class Character {
    constructor(public name: string, public attributes: string) {}
}