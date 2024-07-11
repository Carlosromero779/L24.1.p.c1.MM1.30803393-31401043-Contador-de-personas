export default class Cl_ersonas{
    constructor(){
        this.contPersonas = 0;
        this.contHombres = 0;
        this.contMujeres = 0;
    }
procesarPersonas(personas){
    if(personas.sexo == "M"){
        this.contHombres++;
    }else if(personas.sexo == "F"){
        this.contMujeres++;
    }
    this.contPersonas++;
}
cantidadPersonas(){
    return this.contPersonas;
}
cantidadHombres(){
    return this.contHombres;
}
cantidadMujeres(){
    return this.contMujeres;
}  
}