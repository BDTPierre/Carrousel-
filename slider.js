let images = document.getElementsByTagName("img")
let buttons = document.getElementsByClassName("buttoncss")
let count = 0
// console.log(images[count])
// count++
// console.log(images[count])
// count++
// console.log(images[count])

function nextSlide() {
    // etape 1: supprime la classe active
    images[count].classList.remove("active");
    // étape 2: rajouter 1 au compteur (accrémenté)
    if (count < images.length-1) {
        count++;
    } else {
        count = 0
    }
    // // étape 3: rajoute la classe active
    images[count].classList.add("active");
}

let buttonnext = document.getElementById("next");
buttonnext.addEventListener("click", nextSlide) 

function prevSlide() {
    // etape 1: supprime la classe active
    images[count].classList.remove("active");
    // étape 2: rajouter 1 au compteur (accrémenté)
    ;
    if (count > 0) {
        count--;
    } else {
        count = images.length-1
    }
    // // étape 3: rajoute la classe active
    images[count].classList.add("active");
}

let buttonprev = document.getElementById("prev");
buttonprev.addEventListener("click", prevSlide) 
