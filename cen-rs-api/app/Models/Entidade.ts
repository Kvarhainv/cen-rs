import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Entidade extends BaseModel {
  public static get table() {
    return 'entidades'
  }

  @column({ isPrimary: true })
  public cod_entidade: number

  @column()
  public nom_entidade: string

  @column()
  public pop_absoluta_total: string

  @column()
  public pop_absoluta_urbana_total: string

  @column()
  public pop_absoluta_urbana_sede: string

  @column()
  public pop_relativa_urbana_total: string

  @column()
  public pop_relativa_urbana_sede: string

  @column()
  public area_total: string

  @column()
  public densidade_demografica: string
}
