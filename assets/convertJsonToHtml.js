function ConvertJsonToHtml(json)    {
    this.json=json;
    this.convertir=convertir;
    this.render=render;
    this.isEmpty=isEmpty;
    this.html = this.convertir(json);
}

function convertir(json){
    var etiquetas="";
    for(var i=0; i<json.length;i++){
        var etiqueta="";
        etiqueta="<"+json[i].element+" ";
        var texto="";
        if(json[i].text){  
            texto = json[i].text;  
        }
        if(json[i].atrib){
            var atributos="";
            for(j in json[i].atrib){
                var json_temp=json[i].atrib;
                atributos+=j+"='"+json_temp[j]+"' ";
            }
            etiqueta+=atributos+">"+texto;
            if(json[i].into && json[i].into.length>0){
                var intoHtml= convertir(json[i].into);
                etiqueta+=intoHtml;
                etiqueta+="</"+json[i].element+">";
            }
        }else{
            etiqueta+=">"+texto;
            if(json[i].into && json[i].into.length>0){
                var intoHtml= convertir(json[i].into);
                etiqueta+=intoHtml;
                etiqueta+="</"+json[i].element+">";
            }
        }
        etiquetas+=etiqueta;
    }
    return etiquetas;
}

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return JSON.stringify(obj) === JSON.stringify({});
}

function render(){
    return this.html;
}