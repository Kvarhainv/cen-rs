import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'entidades'

  public async up() {
    await this.raw(`CREATE TABLE ${this.tableName}(
      nom_entidade VARCHAR(100),
      cod_entidade VARCHAR(100) PRIMARY KEY,
      pop_absoluta_total VARCHAR(100),
      pop_absoluta_urbana_total VARCHAR(100),
      pop_absoluta_urbana_sede VARCHAR,
      pop_relativa_urbana_total VARCHAR(100),
      pop_relativa_urbana_sede VARCHAR,
      area_total VARCHAR,
      densidade_demografica VARCHAR(100)
      );`)
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
