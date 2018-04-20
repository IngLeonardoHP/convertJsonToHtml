var convertir = new ConvertJsonToHtml();

convertir.setValue("formulario",{
    element:"form",
    atrib:{
        method:"#0",
        action:"#1"
    },
    into:[]
});

convertir.setValue("input",{
    id:"#3",
    element:"div",
    atrib:{
        class:"input-field"
    },
    into:[
        {
            element:"input",
            atrib:{
                class:"validate",
                type:"text",
                name:"#0",
                id:"#1",
                placeholder:"#2"
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
});

convertir.setValue("btn",{
    element:"div",
    atrib:{
        class:"los-botones"
    },
    into:[
        {
            element:"button",
            id:"elboton",
            atrib:{
                class:"btn #0"
            },
            text:"#1"
        }
    ]
})