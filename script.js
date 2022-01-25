function compute()
{
    var principal = document.getElementById("amount").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var f_amt = parseInt(principal)+parseInt(interest)
    var year = new Date().getFullYear()+parseInt(years);
    
    if(principal<0||principal==0)
    {alert("Invalid input")}

    if(principal>0)
    {let output ="If you deposit "+principal+
    " at an interest rate of "+rate+
    " You will receive an amount of "+f_amt+
    " in the year "+year
    document.getElementById("myText").innerHTML = output;
    
    }
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        
