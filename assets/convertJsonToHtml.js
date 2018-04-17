function ConvertJsonToHtml(json)    {
    this.json=json;
    this.array=[];
    this.convert=convert;
    this.render=render;
    this.isEmpty=isEmpty;
    this.setValue=setValue;
    this.getValue=getValue;
    if(json){
        this.html = this.convert(json);
    }
}

function convert(json){
    var etiquetas="";
    for(var i=0; i<json.length;i++){
        var etiqueta="";
        if(json[i].element){
            etiqueta="<"+json[i].element+"";
            var texto="";
            if(json[i].text){  
                texto = json[i].text;  
            }
            if(json[i].atrib){
                var atributos="";
                for(j in json[i].atrib){
                    var json_temp=json[i].atrib;
                    atributos+=" "+j+"='"+json_temp[j]+"'";
                }
                etiqueta+=atributos+">"+texto;
                if(json[i].into){
                    var intoHtml= convert(json[i].into);
                    etiqueta+=intoHtml;
                    etiqueta+="</"+json[i].element+">";
                }
            }else{
                etiqueta+=">"+texto;
                if(json[i].into){
                    var intoHtml= convert(json[i].into);
                    etiqueta+=intoHtml;
                    etiqueta+="</"+json[i].element+">";
                }
            }
        }else{
            var texto="";
            if(json[i].text){  
                texto = json[i].text;  
            }
            etiqueta+=texto;
        }
        alert(etiqueta);
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

function setValue(name, obj){
    this.array[name]=JSON.stringify(obj);
}

function getValue(name){
    var _obj_json=JSON.parse(this.array[name]);
    return _obj_json;
}