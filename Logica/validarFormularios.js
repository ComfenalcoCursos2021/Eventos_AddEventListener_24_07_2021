export function validarFormularios({...arg}){
    const myFormulario = (arg.myForm) ? document.querySelector(arg.myForm) : arg.myFormFragmen.children.myFormularioFragmen;
    const mysInput = Array.from(myFormulario);
    const myData = new FormData();
    mysInput.map((value, indice)=>{
        (
            value.type == "radio" && value.checked || 
            value.type == "checkbox" && value.checked
        )? myData.append(value.name, value.value)
        :(
            (
                value.localName == "select" || 
                value.localName == "textarea"
            )? myData.set(value.id, value.value)
            :(
                (
                    value.type != "radio" && 
                    value.type != "checkbox" &&
                    value.type != "submit"
                )? myData.set(value.id, value.value)
                : undefined
            )
        );
        
        // if(value.type == "radio" && value.checked || value.type == "checkbox" && value.checked){
        //     myData.append(value.name, value.value);
        // }else if(value.localName == "select" || value.localName == "textarea"){
        //     myData.set(value.id, value.value);
        // }else if(value.type != "radio" && value.type != "checkbox" & value.type != "submit"){
        //     myData.set(value.id, value.value);
        // }
    })
    return myData;
}
export default validarFormularios;