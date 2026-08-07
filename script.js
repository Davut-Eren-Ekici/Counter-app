const resetBtn  = document.querySelector("#ButonSifirla");
const increaseBtn = document.querySelector("#ButonArttir");
const decreaseBtn  = document.querySelector("#ButonAzalt");
const totalSpan = document.querySelector(".total span");


let count=0;

function updateCounter(){

        totalSpan.textContent = count;

        if(count > 0){
            totalSpan.style.color= "green";

        }

        else if(count < 0){
            totalSpan.style.color= "Red";

        }
        else{
            totalSpan.style.color= "White";

        }

}

increaseBtn.addEventListener("click", function(){
    count +=  1;
    
   updateCounter();

});   
decreaseBtn .addEventListener("click", function(){
    count -=  1;
    updateCounter();

});
resetBtn .addEventListener("click", function(){
    count =  0;
    updateCounter();

});

