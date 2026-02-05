const form = document.querySelector('form');
/*
const height = parseInt(document.querySelector("#height").value) 
if we write it here then it will store before the user enters the value and it will be NaN. So we have to write it inside the event listener function.
*/
addEventListener("submit",function(e)
{
    e.preventDefault();
    //document.querySelectorAll(".card").style.backgroundColor = "white"; //will not reset the background color of all the cards because querySelectorAll returns a NodeList and we cannot apply style to a NodeList. We have to loop through the NodeList and apply the style to each card.
    document.querySelectorAll(".card").forEach(function(card){
        card.style.backgroundColor = "white";
    });
    const weight = parseInt(form.querySelector("#weight").value);
    const height = parseInt(form.querySelector("#height").value);
    const result = this.document.querySelector(".result");
    if(weight === "" || isNaN(weight) || weight<=0)
    {
        result.innerHTML = "Please enter a valid weight.";
    }
    else if(height === "" || isNaN(height) || height<=0)
    {
        result.innerHTML = "Please enter a valid height.";
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        result.innerHTML = `Your BMI is ${bmi}.`; //its ` and not ' because we are using ${} to insert the value of bmi in the string.
        result.innerHTML = "Your BMI is " + bmi + "."; //this is also correct but we have to use + to concatenate the string and the variable.

        if(bmi < 18.5)
    {
        document.querySelector(".card[data-bmi='0']").style.backgroundColor = "lightblue";
    }
    else if(bmi >= 18.5 && bmi < 25)
    {
        document.querySelector(".card[data-bmi='18.5']").style.backgroundColor = "lightgreen";
    }
    else if(bmi >= 25 && bmi < 30)
    {
        document.querySelector(".card[data-bmi='25']").style.backgroundColor = "orange";
    }
    else
    {
        document.querySelector(".card[data-bmi='30']").style.backgroundColor = "red";
    }

    }
})