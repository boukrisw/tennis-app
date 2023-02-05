export class Player {
  id: number
  firstname: string
  lastname: string
  shortname: string
  sex: Sex
  country: Country
  picture: string
  data: PlayerData
}

export class Country {
  picture: string
  code: string
}

export class PlayerData {
  rank: number
  points: number
  weight: number
  height: number
  age: number
  last: number[]
}

export enum Sex {
  M,
  F,
}
