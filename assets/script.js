

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



//DOM

let currentSlide = 0; 


changeSlideTxt(currentSlide);
createDots();
majDot();


const buttonLeft = document.querySelector('.arrow_left');
const buttonRight = document.querySelector('.arrow_right');




buttonLeft.addEventListener("click",  () => {
    if (currentSlide == 0) {
        currentSlide = slides.length - 1;
    }
    else {
        currentSlide--;
    }
        changeSlideTxt(currentSlide);
});

buttonRight.addEventListener("click",  () => {
    if (currentSlide == slides.length - 1) {
        currentSlide = 0;
    } else {
            currentSlide++;
    }
    changeSlideTxt(currentSlide);

});


// function //

function createDots(){
	 const dots = document.querySelector(".dots");	
	for (let index = 0; index < slides.length; index++) {
		// Pour chaque element dans la boucle je vais créer un dot
		const dot= document.createElement("div");
		dot.setAttribute("class", "dot");
		dots.appendChild(dot);
	} 
}

function majDot() {
  const allDot = document.querySelectorAll(".dot");	
   for (let index = 0; index < allDot.length; index++) {
   
    const dot = allDot[index];
	if (index == currentSlide){
		dot.classList.add('dot_selected');		
  }
  else{
    dot.classList.remove('dot_selected');	 
  }
    
	}  
}

function changeSlideTxt(currentSlide){
	
  	const element = slides[currentSlide];
		//console.log(element);
		const img = document.querySelector(".banner-img");
		img.setAttribute("src" , "./assets/images/slideshow/"+ element.image);

		const p = document.querySelector(".banner-txt");
		p.innerHTML= element.tagLine;

    majDot();
}