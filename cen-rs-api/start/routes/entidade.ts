import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
  Route.get('/entidade', 'EntidadeController.index')
}).prefix('cen-rs')
