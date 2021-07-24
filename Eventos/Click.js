const Enviar = ({...arg})=>{
    const myBoton = document.querySelector(arg.id);
    myBoton.addEventListener("click", (e)=>{
        const myFormulario = document.querySelector(arg.form);
        let mysInput = Array.from(myFormulario);
        let myData = new FormData();

        mysInput.map((value, indice)=>{
       
            if(value.type == "radio" && value.checked){
                myData.set(value.id, value.value);
            }else if(value.localName == "select"){
                myData.set(value.id, value.value);
            }else if(value.localName == "input" && value.type != "radio"){
                myData.set(value.id, value.value);
            }
        })
        //Arreglar :V
        const MyFormHobis = document.querySelector("#myFormularioPasatiempos");
        const MysChec = Array.from(MyFormHobis);
            MysChec.map((value,indice)=>{
            myData.append(value.name, (value.checked) ? value.value : null);
     
        })
        let mesaje = ``;
        for (var value of myData.keys()) {
            mesaje += (value!='inputHobbis') ? `Key: ${value} data: ${myData.get(value)}\n` : `Key: ${value} data: ${myData.getAll(value)}\n`;
        }
        alert(mesaje);
        e.preventDefault();
    })
}

export default Enviar;
