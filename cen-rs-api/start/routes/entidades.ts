import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
  Route.get('/entidades', 'EntidadesController.index')
}).prefix('cen-rs')
