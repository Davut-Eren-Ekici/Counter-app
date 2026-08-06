const BtnSifirla = document.querySelector("#ButonSifirla");
const BtnArttir = document.querySelector("#ButonArttir");
const BtnAzalt = document.querySelector("#ButonAzalt");
const TotalSpan = document.querySelector(".total span");


let Cont=0;

function updateCounter(){
        TotalSpan.textContent = Cont;
        if(Cont > 0){
            TotalSpan.style.color= "green";
            updateCounter();
        }

        else if(Cont < 0){
            TotalSpan.style.color= "Red";
            updateCounter();
        }
        else{
            TotalSpan.style.color= "White";
            updateCounter();
        }

}

BtnArttir.addEventListener("click", function(){
    Cont +=  1;
    
   updateCounter();

});   
BtnAzalt.addEventListener("click", function(){
    Cont -=  1;
    updateCounter();

});
BtnSifirla.addEventListener("click", function(){
    Cont =  0;
    updateCounter();

});

