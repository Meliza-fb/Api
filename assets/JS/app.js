$(document).ready(function() {
  /* Api marvel*/
  let inputText = document.getElementById('input-text');
  let btnSearch = document.getElementById('btn-search');
  let searchedForText;

btnSearch.addEventListener('click',function(){
	$('.marvelDate').empty();
	$('.imgMarvel').empty();
	fetch('http://gateway.marvel.com/v1/public/comics?apikey=a60bd159889749a73669c0be9f91ce67&ts=9&hash=45cbdbeb188c66926f8b050dde897f1b')
  .then(function(response){
    console.log(response);
    return response.json();
  })
  .then(function(data){
    console.log(data.data.results);
    let content = [];
    for(let i = 0; i < marvelDescription.length; i++){//cuento mi database
      content.push(marvelDescription[i].title);//rescato los title de mki database
      console.log(content);
  }
  $('#marvelDate').append('<ol><li>' + content + '</li></ol>');
  /*$('.imgMarvel').append('<img src="http://i.annihil.us/u/prod/marvel/i/mg/1/e0/4bb4ecb6aa5a9'  + '.jpg">')*/
 });
});
});
 /*
   let img = document.getElementById('imgMarvel');//llamo a mi contenedor de imagenes
   for (let j = 0; j < data.data.results.length; j++) {//recorro la API
     let title= data.data.results[j].title;//rescato los title de API
     console.log(content[i]);
     if (title === content[i]) { //comparo la title de API con mi data base

      // let BoxContainer= document.getElementById('container-box');//llamo a mi caja contenedora
      // BoxContainer.appendChild(img);//agrego mi  content de imagenes a mi BoxContainer
       //img.appendChild(marvelDescription[j].image);//a img le agrego mi database buscando imagenes
console.log(marvelDescription[i].image);
       $('#container-box').append('<img src='+marvelDescription[i].image+'>');
       /*let textContainer = document.getElementById('container-text');//llamo a mi caja contenedora
       textContainer.append(content[j]);//le agrego a mi caja contenedora los title de la Api
       content.appendChild(content[j].title);//?????*/



   /*
   for (let i = 0; i < data.data.results[0].thumbnail.length; i++) {
     characters.push(data.data.results[0].thumbnail[i].path);
   }*/

/* fghjklñ{fghjklñfghjkl   sacarrrrrrrrrr  } */
