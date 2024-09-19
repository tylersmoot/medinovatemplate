let card = document.querySelector("#services .card");
let arrow = document.querySelector("#services .arrow");


function mouseOver1() {
    let arrow = document.querySelector("#services .arrow");
    arrow.style.animationName = "appear"
    arrow.style.animationDuration ="1s"; 
    arrow.style.animationFillMode = "forwards";
}

function mouseOut1() {
    let arrow = document.querySelector("#services .arrow");
    arrow.style.animationName = "fadeOut";
    arrow.style.animationDuration = "1s";
    
}

function mouseOver2() {
    let arrow = document.querySelector("#services #arrow2")
    arrow.style.animationName = "appear"
    arrow.style.animationDuration ="1s"; 
    arrow.style.animationFillMode = "forwards";
}

function mouseOut2() {
    let arrow = document.querySelector("#services #arrow2");
    arrow.style.animationName = "fadeOut";
    arrow.style.animationDuration = "1s";
    
}


function mouseOver3() {
    let arrow = document.querySelector("#services #arrow3")
    arrow.style.animationName = "appear"
    arrow.style.animationDuration ="1s"; 
    arrow.style.animationFillMode = "forwards";
}

function mouseOut3() {
    let arrow = document.querySelector("#services #arrow3");
    arrow.style.animationName = "fadeOut";
    arrow.style.animationDuration = "1s";
    
}


function mouseOver4() {
    let arrow = document.querySelector("#services #arrow4")
    arrow.style.animationName = "appear"
    arrow.style.animationDuration ="1s"; 
    arrow.style.animationFillMode = "forwards";
}

function mouseOut4() {
    let arrow = document.querySelector("#services #arrow4");
    arrow.style.animationName = "fadeOut";
    arrow.style.animationDuration = "1s";
    
}

function mouseOver5() {
    let arrow = document.querySelector("#services #arrow5")
    arrow.style.animationName = "appear"
    arrow.style.animationDuration ="1s"; 
    arrow.style.animationFillMode = "forwards";
}

function mouseOut5() {
    let arrow = document.querySelector("#services #arrow5");
    arrow.style.animationName = "fadeOut";
    arrow.style.animationDuration = "1s";
    
}


function mouseOver6() {
    let arrow = document.querySelector("#services #arrow6")
    arrow.style.animationName = "appear"
    arrow.style.animationDuration ="1s"; 
    arrow.style.animationFillMode = "forwards";
}

function mouseOut6() {
    let arrow = document.querySelector("#services #arrow6");
    arrow.style.animationName = "fadeOut";
    arrow.style.animationDuration = "1s";
    
}




const customer = [];





let formBtn = document.querySelector("#appointment #appt-btn");
formBtn.addEventListener("click", pushCustomer);





function pushCustomer() {




    let dep = document.querySelector("#appointment #department");
    let doc = document.querySelector("#appointment #doctor");
    let name = document.querySelector("#appointment #name");
    let email = document.querySelector("#appointment #email");
    let date = document.querySelector("#appointment #date");
    let time = document.querySelector("#appointment #time");

    console.log("Hello" + " " + name.value);
    console.log("You selected" + " "  + dep.value);
    console.log("You chose" + " " + doc.value + " " + "as your Doctor");
    console.log("Your email is" + " " + email.value);
    console.log("You chose" + " " + date.value + " " + time.value + " " + "as your designated appointment time");



   customer.push(name.value, email.value, dep.value, doc.value, date.value, time.value);
   console.log(customer);

};







//setInterval
//animate margin-left
//if it's last slide, go to position 1 (0px);





//listen for mouseenter and pause
//resume on mouseleave



//configuration
let width = 500;
let animationSpeed = 3000;
let pause = 6000;
let currentSlide = 1;

//cache DOM
let $slider = $('#slider');
let $slideContainer = $slider.find('.slides');
let $slides = $slideContainer.find('.slide');



var interval;

function startSlider() {



interval = 
setInterval(function() {
    $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {

        currentSlide++;
        if(currentSlide === $slides.length) {
            currentSlide =1;
            $slideContainer.css('margin-left', 0);
        }


    });
    

    
}, pause);
}

function pauseSlider() {
    clearInterval(interval);
}

startSlider();

$slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);





// the patients testimonials with quotes and image automatic image slider



let slidesCount = 1;
let sliders = document.querySelectorAll(".testSlides");
let slidesLength = document.querySelectorAll(".testSlides").length;
let slideList = document.querySelector(".testSlide");
let sliderWidth = 1000;
let slideWidth = 3000;




function nextSlide () {
    
   
     console.log(slidesCount);
    
   
        if(slidesCount < slidesLength) {
     
        
         slideList.style.marginLeft =  "-" + slidesCount * sliderWidth + "px";
         slidesCount++;
     
        }
        

    else if (slidesCount === slidesLength) {
        console.log("slideCount mathches slides length");
       
        slideList.style.marginLeft = "0px";
        slidesCount = 0;
        nextSlide();
        // clearInterval(newInterval);
        
        
     } 
  
     
     
}






// let newInterval = 
// setInterval(function(){
// nextSlide();
// }, 5000)






//configuration for card slider in programs section

let right = document.querySelector("#arrowRight");
let left = document.querySelector("#arrowLeft");
let cardFrame = document.querySelector("#cardSlider .cardSlide");
let cardItem = document.querySelectorAll("#packages .card").length - 1;
let currentCard = 1;
let frameWidth = 500;



// moves card to the right by 500px in programs section




function cardLeft() {
    left.addEventListener("click", function() {
       
        if (currentCard < cardItem) {
            cardFrame.style.marginLeft = "0px";
           currentCard = 1;
            
         } else {
            cardRight();
         }

    });
    
}














function cardRight () {
right.addEventListener("click",function() {
   
    if (currentCard < cardItem) {
       cardFrame.style.marginLeft = "-" + frameWidth * currentCard + "px";
    
        currentCard++;
 
    } else if (currentCard === cardItem)  {
        console.log("no");
        cardFrame.style.marginLeft = "0px";
        currentCard = 1;
      
    } 
})
};








