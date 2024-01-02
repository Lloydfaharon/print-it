let boutonGauche = document.getElementById("buttonL")
buttonL.addEventListener("click",() =>{
	let slide = document.querySelector("src")
image.src = "./assets/images/slideshow/slide3.jpg"	
	//console.log("j'ai cliqué sur le bouton gauche")
});


const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//function ChangeSlide(sens) {
	document.getElementById("slide").src ="./assets/images/slideshow/" + slides[0][0];
//}

//for (const i = 0; i < slides.length; i++) {
  //console.log(slides[i]);
//}






