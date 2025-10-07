
import { BaseModel } from '@adonisjs/lucid/orm'
import { column } from '@adonisjs/lucid/orm'
export default class Task extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare completed: boolean
}
