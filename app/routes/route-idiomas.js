import Route from '@ember/routing/route';
//import hasEmberVersion from 'ember-test-helpers/has-ember-version';

import {inject} from '@ember/service';

export default Route.extend({
    servicio4: inject("idiomas"),
   
    model(){
            
        var servicio4 = this.get("servicio4");
        
        var resultTotal = {};
      
        return servicio4.callIdiomas()
            .then(resultado=>{
                resultTotal.resultO= resultado;
                console.log(resultTotal);
                return resultTotal;
            })  
            .catch(()=>{
                return resultTotal;
            });      
    },   
    
    // asignamos el modelo al controlador
    setupController(controller , model ){                   
        controller.set('webapidata4',model.resultO);
    }
    
});
