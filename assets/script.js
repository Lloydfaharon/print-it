
let currentSlide = 0

//DOM

const boutonGauche = document.getElementById("buttonL");
const boutonDroit = document.getElementById("buttonR");
const pointCarou = document.querySelectorAll(".dot");
const cSlide = document.getElementById("currentSlide").src;





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

   


	buttonL.addEventListener("click",(buttonL) => {
		const calcNextbot= buttonL.target.id === buttonL ? 1 : -1;
		const dotSeclect = document.querySelector(".dot_selected");
		const pixSelected = document.querySelector(".banner-img").src; 
		//const pixSelect = cSlide + ("./assets/images/slideshow/");
		//ne = calcNextbot + "./assets/images/slideshow/"+slides[0].image;	

		nexIndex = calcNextbot + [...pointCarou] . indexOf(dotSeclect);
		
		if(nexIndex < 0) nexIndex = [...pointCarou] .length -1;

		
		pointCarou[nexIndex] .classList.add("dot_selected")
		dotSeclect.classList.remove("dot_selected")

		//nexIndexPix = calcNextbot +[ slides] . indexOf(pixSelected);

		//if(nexIndexPix < 0) nexIndexPix = [slides] .length -1;



		
    });
	buttonR.addEventListener("click",(buttonR) => {
		const calcNextbot= buttonR.target.id === buttonR ? -1 : 1;
		const dotSeclect = document.querySelector(".dot_selected");

		nexIndex = calcNextbot + [...pointCarou] . indexOf(dotSeclect);

		if(nexIndex >= [...pointCarou] .length) nexIndex = 0 ;

		pointCarou[nexIndex] .classList.add("dot_selected")
		dotSeclect.classList.remove("dot_selected")

	});



//let slide = document.querySelector("src");
//image.src = "./assets/images/slideshow/"+slide[i].image;	
	//console.log("j'ai cliqué sur le bouton gauche")
//});
//function remove()





//function ChangeSlide(sens) {
	//document.getElementById("slide").src ="./assets/images/slideshow/" + slides[0][0];
//}

//for (const i = 0; i < slides.length; i++) {
  //console.log(slides[i]);
//}

//if ( currenslide)
//document.querySelector('.banner-img').src = './assets/images/slideshow/' + slides[currentSlide].image;
//document.getElementById('slide-text').innerHTML = slides[currentSlide].tagLine;




//function changeSlide(direction) {
    // Calcul de l'index du nouveau slide
    //currentSlide += direction;

    // Boucle infinie
    //if (currentSlide < 0) {
        //currentSlide = slides.length - 1;
    //} else if (currentSlide >= slides.length) {
        //currentSlide = 0;
    //}
//}
