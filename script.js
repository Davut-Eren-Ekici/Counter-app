const resetBtn  = document.querySelector("#ButonSifirla");
const increaseBtn = document.querySelector("#ButonArttir");
const decreaseBtn  = document.querySelector("#ButonAzalt");
const totalSpan = document.querySelector(".total span");
const saveBtn = document.querySelector("#saveBtn");


let count=0;
const savedCount = localStorage.getItem("counter");

if(savedCount !== null){
    count=Number(savedCount);

}
function updateCounter(){

        totalSpan.textContent = count;

        if(count > 0){
            totalSpan.style.color= "green";

        }

        else if(count < 0){
            totalSpan.style.color= "red";

        }
        else{
            totalSpan.style.color= "white";

        }

}
        updateCounter();


increaseBtn.addEventListener("click", function(){
    count +=  1;
    
   updateCounter();

});   
decreaseBtn.addEventListener("click", function(){
    count -=  1;
    updateCounter();

});
resetBtn.addEventListener("click", function(){
    count =  0;
    localStorage.removeItem("counter");
    updateCounter();

});

saveBtn.addEventListener("click",function(){
    localStorage.setItem("counter",count);
});

