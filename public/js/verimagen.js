class Imagen{
  static verImagen(img){
   
  document.querySelector('#myModal').style.display = "block";
  //document.querySelector('.close').style.display = "block";
  document.querySelector('#img01').src = img.src;
  }

  static closeModal(){
    document.querySelector('#myModal').style.display = "none";
   // document.querySelector('.close').style.display = "none";
  }
}


