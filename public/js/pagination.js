let desde =0;
let flag = true;
const pagination = async () =>{
    document.querySelector('.loadmore').classList.add('hide');
    document.querySelector(".spin").classList.add("spinner-3");
try{
    if(flag){
        document.querySelector('#main-template').innerHTML='';
        flag=false;        
    }
    const limit ={desde};
    const url = 'api/imagenes?&q=' +JSON.stringify(limit);
   
   const respuesta = await fetch(url, { 
        method: 'GET',
         headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin'
       });
      
    let datos = JSON.parse(await respuesta.text());
   
    let template =
    `${datos.map(img =>
        `<img class="imgthumb" src="${img.image}" alt="img" onclick="Imagen.verImagen(this);"/>`
    ).join('')}`;
  
document.querySelector('#main-template').innerHTML += template; 
desde +=5;
if(desde < 62){
    document.querySelector('.loadmore').classList.remove('hide');
}else{
    document.querySelector('.loadmore').classList.add('hide');
}
document.querySelector(".spin").classList.remove("spinner-3");
      }catch (err) {
        console.log('error ',err);
        throw new Error(err);

}
};
