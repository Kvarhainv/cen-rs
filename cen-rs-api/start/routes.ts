import Route from '@ioc:Adonis/Core/Route'
import './routes/entidades'

Route.get('/', async () => {
  return { hello: 'world' }
})
