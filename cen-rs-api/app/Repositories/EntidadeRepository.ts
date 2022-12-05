import Database from '@ioc:Adonis/Lucid/Database'
import Entidade from 'App/Models/Entidade'

export class EntidadeRepository {
  public async index(params) {
    if (params.entity_codes) {
      var codes = params.entity_codes as Array<string>
      var searchString = ``
      if (codes.length > 0) {
        for (let code of codes) {
          if (searchString.length === 0) {
            searchString = `'${code}'`
          } else {
            searchString = `'${code}', ${searchString}`
          }
          console.log(searchString)
        }
        return (
          await Database.rawQuery(
            `SELECT * FROM entidades e WHERE e.cod_entidade in (${searchString})`
          )
        ).rows
      }
    }

    if (params.pop_absoluta_total) {
      return (
        await Database.rawQuery(`SELECT * FROM entidades e ORDER BY
      ABS(
      CAST(
        COALESCE(
                  NULLIF(
                      regexp_replace(e.pop_absoluta_total, '[^-0-9.]+', '', 'g'),
                      ''),
                  '0')
             AS NUMERIC) - ${params.pop_absoluta_total}::NUMERIC)`)
      ).rows
    }

    if (params.pop_absoluta_urbana_total) {
      return (
        await Database.rawQuery(`SELECT * FROM entidades e ORDER BY
      ABS(
      CAST(
        COALESCE(
                  NULLIF(
                      regexp_replace(e.pop_absoluta_urbana_total, '[^-0-9.]+', '', 'g'),
                      ''),
                  '0')
             AS NUMERIC) - ${params.pop_absoluta_urbana_total}::NUMERIC)`)
      ).rows
    }

    if (params.pop_absoluta_urbana_sede) {
      return (
        await Database.rawQuery(`SELECT * FROM entidades e ORDER BY
      ABS(
      CAST(
        COALESCE(
                  NULLIF(
                      regexp_replace(e.pop_absoluta_urbana_sede, '[^-0-9.]+', '', 'g'),
                      ''),
                  '0')
             AS NUMERIC) - ${params.pop_absoluta_urbana_sede}::NUMERIC)`)
      ).rows
    }

    if (params.pop_relativa_urbana_total) {
      return (
        await Database.rawQuery(`SELECT * FROM entidades e ORDER BY
      ABS(
      CAST(
        COALESCE(
                  NULLIF(
                      regexp_replace(e.pop_relativa_urbana_total, '[^-0-9.]+', '', 'g'),
                      ''),
                  '0')
             AS NUMERIC) - ${params.pop_relativa_urbana_total}::NUMERIC)`)
      ).rows
    }

    if (params.pop_relativa_urbana_sede) {
      return (
        await Database.rawQuery(`SELECT * FROM entidades e ORDER BY
      ABS(
      CAST(
        COALESCE(
                  NULLIF(
                      regexp_replace(e.pop_relativa_urbana_sede, '[^-0-9.]+', '', 'g'),
                      ''),
                  '0')
             AS NUMERIC) - ${params.pop_relativa_urbana_sede}::NUMERIC)`)
      ).rows
    }

    if (params.area_total) {
      return (
        await Database.rawQuery(`SELECT * FROM entidades e ORDER BY
      ABS(
      CAST(
        COALESCE(
                  NULLIF(
                      regexp_replace(e.area_total, '[^-0-9.]+', '', 'g'),
                      ''),
                  '0')
             AS NUMERIC) - ${params.area_total}::NUMERIC)`)
      ).rows
    }

    if (params.densidade_demografica) {
      return (
        await Database.rawQuery(`SELECT * FROM entidades e ORDER BY
      ABS(
      CAST(
        COALESCE(
                  NULLIF(
                      regexp_replace(e.densidade_demografica, '[^-0-9.]+', '', 'g'),
                      ''),
                  '0')
             AS NUMERIC) - ${params.densidade_demografica}::NUMERIC)`)
      ).rows
    }

    var query = Entidade.query()
    return await query
  }
}
