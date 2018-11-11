import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('ruta-formacion-academica');
  this.route('route-perfil');
  this.route('route-idiomas');
  this.route('route-entrenamineto');
  this.route('route-entrenamiento');
  this.route('route-documentos');
  this.route('route-exp-laboral');
  this.route('route-memo');
  this.route('route-vacaciones');
  this.route('route-medico-cabecera');
  this.route('route-contacto-emergencia');
  this.route('navbar');
  this.route('bachiller');
  this.route('route-bachiller');
  this.route('route-comunicacion');
  this.route('route-declaracion');
  this.route('route-perfil-completo');
  this.route('pruebas-estilos');
});

export default Router;
