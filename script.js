const handleAgeCheck = () => {
    const checkAge = document.getElementById("age").value;

    const resultElement = document.getElementById("result");

    const remainingAge = 18 - checkAge;

    if (isNaN(checkAge) || checkAge <= 0) {
        alert("Please enter a valid age.");
        return;
    }


    if(checkAge === ""){
        alert("Please enter you age");
    }else{
        if(checkAge >= 18){
            resultElement.textContent = "you are allow for Vote";
            resultElement.style.color = "green";
        }else{
            resultElement.textContent =  "Wait " + remainingAge+ " More years";
            resultElement.style.color = "orange";
        }
    }
    
};