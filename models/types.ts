export interface KidsData {
  name: string
  photo: string
  age: number
  description: string
}

export interface Kids extends KidsData {
  id: number
}
