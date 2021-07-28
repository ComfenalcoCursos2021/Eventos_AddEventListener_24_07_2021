import EnviarDatosFomulario from './Eventos/Click.js';
import validarFormularios from './Logica/validarFormularios.js';

addEventListener("DOMContentLoaded", (e)=>{
    const config = {
        EnviarDatosFomulario,
        validarFormularios,
        id: "#myBoton",
        form: document.getElementsByName('formulario[]')
    }
    EnviarDatosFomulario(config);
    
})
