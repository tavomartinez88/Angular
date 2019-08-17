function activar(quien:string, objeto:string="batiseñal", momento?:Date){
    let mensaje:string;
    

    if(momento) {
        mensaje = `${quien} activo la ${objeto} a las ${momento.getDay}`;
    } else{
        mensaje = `${quien} activo la ${objeto}`;
    }

    console.log(mensaje);
}

activar("Gordon", "señal", new Date());