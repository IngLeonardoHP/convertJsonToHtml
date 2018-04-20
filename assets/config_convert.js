var convertir=new ConvertJsonToHtml();
//botones
var btn={
    element:"button",
    atrib:{
        class:"btn blue"
    },
    text:"#0"
}
convertir.setValue("boton",btn);

//inputs
var input={
    element:"div",
    atrib:{
        class:"input-field"
    },
    into:[
        {
            element:"input",
            atrib:{
                class:"validate",
                name:"#0",
                id:"#1",
                placeholder:"#2",
                type:"text"
            },
            id:"#1"
        },
        {
            element:"label",
            atrib:{
                for:"#1"
            },
            text:"#2"
        }
    ]
}

convertir.setValue("input",input);

var form={
    element:"form",
    atrib:{
        method:"#0",
        action:"#1"
    }
}

convertir.setValue("form",form);