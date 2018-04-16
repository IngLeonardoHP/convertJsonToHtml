var convertir=new ConvertJsonToHtml();
//botones
var btn={
    element:"button",
    atrib:{
        class:"btn blue"
    },
    into:[
        {
            text:""
        }
    ]
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
                placeholder:"",
                id:"",
                type:"text"
            }
        },
        {
            element:"label",
            atrib:{
                for:""
            },
            into:[
                {
                    text:""
                }
            ]
        }
    ]
}
convertir.setValue("input",input);