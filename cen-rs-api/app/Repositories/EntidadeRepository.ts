import Entidade from 'App/Models/Entidade'

export class EntidadeRepository {
  public async index(params) {
    var query = Entidade.query()

    if (params.nom_entidades) {
      var stringNomes = ''
      for (let nomEntidade of params.nom_entidades) {
        stringNomes.concat([nomEntidade, ', '])
      }
      query.whereRaw(`nom_entidade in []`)
    }
  }
}
