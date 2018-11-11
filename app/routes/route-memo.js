import Route from '@ember/routing/route';
//import hasEmberVersion from 'ember-test-helpers/has-ember-version';

import {inject} from '@ember/service';

export default Route.extend({
    servicio5: inject("servicio-memos"),
   
    model(){            
        var servicio5 = this.get("servicio5");        
        var resultTotal = {};
      
        return servicio5.getMemos()
            .then(resultado=>{
                resultTotal.resultM= resultado;
                console.log(resultTotal);
                return resultTotal;
            })  
            .catch(()=>{
                return resultTotal;
            });      
    },   
    
    // asignamos el modelo al controlador
    setupController(controller , model ){                   
        controller.set('webapidata',model.resultM);
    }
    
});
