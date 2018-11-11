import Route from '@ember/routing/route';
//import hasEmberVersion from 'ember-test-helpers/has-ember-version';

import {inject} from '@ember/service';

export default Route.extend({
     valuesService: inject("perfil"),
    // //servicio1: inject("comunicacion"),
    // servicio2: inject("comunicacion"),
    // servicio3: inject("contacto"),
    // servicio4: inject("idiomas"),
    // servicio5: inject("memos"),
   
    model(){
             
        var valuesService = this.get("valuesService");
        var servicio2 = this.get("servicio2");
        var servicio3 = this.get("servicio3");
        var servicio4 = this.get("servicio4");
        var resultTotal = {};
       // console.log("Ingresa");

        // return valuesService.callPerfil()
        //         .then(resultado=>{
        //             return servicio2.getComunicacion()
        //                 .then(resultado2=>{
        //                     return servicio3.getContacto()
        //                         .then((resultado3)=>{
        //                             resultTotal.resultA= resultado;
        //                             resultTotal.resultB= resultado2;  
        //                             resultTotal.resultC= resultado3;  
        //                             //console.log(resultTotal);
        //                             //console.log("Ingresa return");
        //                             return resultTotal;
        //                     })
        //                 })
        //         })
        // .catch(error=>{
        //     return [];
        // });

        return valuesService.callPerfil()
            .then(resultado=>{
                resultTotal.resultA= resultado;
                //console.log(resultTotal);
                return resultTotal;
            })
            // .then(resultTotal=>{
            //     return servicio2.getComunicacion()
            //     .then(resultado=>{
            //         resultTotal.resultB= resultado;
            //         //console.log(resultTotal);
            //         return resultTotal;
            //     })
            // })
            // .then(resultTotal=>{
            //     return servicio3.getContacto()
            //     .then(resultado=>{
            //         resultTotal.resultC= resultado;
            //         //console.log(resultTotal);
            //         return resultTotal;
            //     })
            // })    
            // .then(resultTotal=>{
            //     return servicio4.callIdiomas()
            //     .then(resultado=>{
            //         resultTotal.resultD= resultado;
            //         console.log(resultTotal.resultD);
            //         return resultTotal;
            //     })
            // })     
                 
            .catch(()=>{
                return resultTotal;
            });       




    },   
    
    // asignamos el modelo al controlador
    setupController(controller , model ){     
        //console.log("Ingresa controller" , controller.set('webapidata',model.resultA));           
        controller.set('webapidata',model.resultA);
        // controller.set('webapidata2',model.resultB);
        // controller.set('webapidata3',model.resultC);
        // controller.set('webapidata4',model.resultD);

    }
    
});



















// import Route from '@ember/routing/route';
// //import hasEmberVersion from 'ember-test-helpers/has-ember-version';

// import {inject} from '@ember/service';

// export default Route.extend({
//     valuesService: inject("perfil"),
//     //servicio1: inject("comunicacion"),
//     servicio2: inject("comunicacion"),
//     servicio3: inject("contacto"),
   
//     model(){
             
//         var valuesService = this.get("valuesService");
//         var servicio2 = this.get("servicio2");
//         var servicio3 = this.get("servicio3");
//         var resultTotal = {};
//         console.log("Ingresa");

//         return valuesService.callPerfil()
//                 .then(resultado=>{
//                     return servicio2.getComunicacion()
//                         .then(resultado2=>{
//                             return servicio3.getContacto()
//                                 .then((resultado3)=>{
//                                     resultTotal.resultA= resultado;
//                                     resultTotal.resultB= resultado2;  
//                                     resultTotal.resultC= resultado3;  
//                                     console.log(resultTotal);
//                                     console.log("Ingresa return");
//                                     return resultTotal;
//                             })
//                         })
//                 })
//         .catch(error=>{
//             return [];
//         });
//     },   
    
//     // asignamos el modelo al controlador
//     setupController(controller , model ){     
//         console.log("Ingresa controller" , controller.set('webapidata',model.resultA));           
//         controller.set('webapidata',model.resultA);
//         controller.set('webapidata2',model.resultB);
//         controller.set('webapidata3',model.resultC);
//     }
    
// });

