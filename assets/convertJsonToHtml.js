function ConvertJsonToHtml(json)    {
    this.json=json;
    this.array=[];
    this.convert=convert;
    this.render=render;
    this.setValue=setValue;
    this.getValue=getValue;
    this.addInto=addInto;
    this.addAtrib=addAtrib;
    this.removeInto=removeInto;
    if(json){
        this.html = this.convert(json);
    }
}

function convert(json){
    var etiquetas="";
    var work=[]
    if(Array.isArray(json)){
        work=json;
    }else{
        work[0]=json;
    }
    for(var i=0; i<work.length;i++){
        var etiqueta="";
        if(work[i].element){
            etiqueta="<"+work[i].element+"";
            var texto="";
            if(work[i].text){  
                texto = work[i].text;  
            }
            if(work[i].atrib){
                var atributos="";
                for(j in work[i].atrib){
                    var json_temp=work[i].atrib;
                    atributos+=" "+j+"='"+json_temp[j]+"'";
                }
                etiqueta+=atributos+">"+texto;
                if(work[i].into){
                    var intoHtml= convert(work[i].into);
                    etiqueta+=intoHtml;
                    etiqueta+="</"+work[i].element+">";
                }
            }else{
                etiqueta+=">"+texto;
                if(work[i].into){
                    var intoHtml= convert(work[i].into);
                    etiqueta+=intoHtml;
                    etiqueta+="</"+work[i].element+">";
                }
            }
        }else{
            var texto="";
            if(work[i].text){  
                texto = work[i].text;  
            }
            etiqueta+=texto;
        }
        etiquetas+=etiqueta;
    }
    return etiquetas;
}

function render(){
    return this.html;
}

function setValue(name, obj){
    this.array[name]=JSON.stringify(obj);
}

//new

function getValue(name,values){
    if(!this.array[name]){
        console.log("Error, obj value no defined")
        return {};
    }
    if(values){
        stringValue=this.array[name];
        for(var i=0;i<values.length;i++){
            var code_sus="#"+i;
            var pala_sus=values[i];
            var temp_pala_sus=pala_sus.split("\n");
            pala_sus=temp_pala_sus.join("");
            regex = new RegExp(String.fromCharCode(13), "gi");
            pala_sus = pala_sus.replace(regex, "");
            console.log(pala_sus);
            regex = new RegExp(code_sus, "gi");
            stringValue=stringValue.replace(regex,pala_sus);
        }
        var _obj_json=JSON.parse(stringValue);
    }else{
        var _obj_json=JSON.parse(this.array[name]);
    }
    return _obj_json;
}

function addInto(obj_f,obj_s){
    var work=[]
    if(Array.isArray(obj_s)){
        work=obj_s;
    }else{
        work[0]=obj_s;
    }
    for(var i=0;i<work.length;i++){
        if(obj_f.into){
            var j = obj_f.into.length;
            obj_f.into[j]=work[i];
        }else{
            obj_f.into=[];
            obj_f.into[0]=work[i];
        }
    }
    return obj_f;
}

function addAtrib(obj_f,type_value,_id){
    var work = [];
    var obj_worK;
    if(Array.isArray(type_value)){
        work = type_value;
    }else{
        work[0] = type_value;
    }
    if(_id){
        var array_temp=[];
        if(Array.isArray(obj_f)){
            array_temp=obj_f;
        }else{
            array_temp[0]=obj_f;
        }
        for(var j=0; j<array_temp.length;j++){
            if(array_temp[j].id==_id){
                for(var i=0; i<work.length;i++){
                    var sp_type_value=work[i].split(":");
                    var type=sp_type_value[0];
                    var value=sp_type_value[1];
                    array_temp[j].atrib[type]=value;
                }
                return array_temp;
            }else{
                if(array_temp[j].into){
                    obj = this.addAtrib(array_temp[j].into,type_value,_id);
                }
            }
        }
    }else{
        for(var i=0; i<work.length;i++){
            var sp_type_value=work[i].split(":");
            var type=sp_type_value[0];
            var value=sp_type_value[1];
        }
        obj_f.atrib[type]=value;
    }
    return obj_f;
}

function removeInto(obj_f,id){
    var objWork=[];

    if(Array.isArray(obj_f)){
        objWork=obj_f;
    }else{
        objWork[0]=obj_f;
    }
    
    for(var i=0;i<objWork.length;i++){
        if(objWork[i].id){
            if(objWork[i].id==id){
                objWork.splice(i,1);
            }else{
                if(objWork[i].into){
                    this.removeInto(objWork[i].into,id);
                }
            }
        }else{
            if(objWork[i].into){
                this.removeInto(objWork[i].into,id);
            }
        }
    }

    return obj_f;
}