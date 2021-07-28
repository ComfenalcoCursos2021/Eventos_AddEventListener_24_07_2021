const EnviarDatosFomulario = ({...arg})=>{
    const fragmen = new DocumentFragment();
    const formularioFragmen = document.createElement('FORM');
    formularioFragmen.id = "myFormularioFragmen";
    fragmen.append(formularioFragmen);

    document.querySelector(arg.id).form.addEventListener("submit", (e)=>{
        for(let formulario of arg.form){
            Array.from(document.querySelector(formulario.value)).forEach(element => {
                fragmen.children.myFormularioFragmen.appendChild(element);
            });
        }
        arg.myFormFragmen = fragmen;
        let myData = arg.validarFormularios(arg);
        for(let datos of myData.keys()){
            console.log(`Identificador del id segun DOM: ${datos} datos del input: '${myData.get(datos)}'`);
        }
            alert("Usuario el formulario fue enviado exitosamente porfavor revisar la consola para ver los datos F12")
            e.preventDefault();
        })
    
   
}

export default EnviarDatosFomulario;
