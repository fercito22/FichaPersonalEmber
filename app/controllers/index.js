import Controller from '@ember/controller';

export default Controller.extend({
    customMensaje:"Mensaje desde el Controlador",
    tipoComunicacionIDCelular: "1",
    visible: false,
    lista: [],
    lista2: [],
    actions:{
        clicked(){
            var value = this.get("visible");
            this.set("visible" , !value);
            this.set("nombre", this.get("res").nombre);
        }
    }
    
});
