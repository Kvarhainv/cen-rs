import Route from '@ioc:Adonis/Core/Route'
import './routes/entidade'

Route.get('/', async () => {
  return { hello: 'world' }
})
