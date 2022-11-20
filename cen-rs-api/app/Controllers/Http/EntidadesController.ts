import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { EntidadeRepository } from './../../Repositories/EntidadeRepository'

export default class EntidadesController {
  public async index({ request, response }: HttpContextContract) {
    try {
      await new EntidadeRepository()
        .index(request.all())
        .catch()
        .then((res) => {
          return response.ok(res)
        })
    } catch (error) {
      return response.internalServerError(error)
    }
  }
}
