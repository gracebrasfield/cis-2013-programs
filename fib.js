//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
}


var generate = function ()
{
    var intCount, i, j, k, stringOutput /*declaring variables*/
    
    i=0; /*sets the first fib number to 0*/
	j=1;  /*sets the second fib number to 1*/
	stringOutput = i + " " +j; /*sets the stringOutput to include the first two initial numbers of the sequence*/
    
	intCount = parseInt($("total_fib").value);  /*gets the value of the total fib numbers from the DOM*/


if (intCount>100||intCount<1||isNaN(intCount)) /*validates that intCount is a number between 1 and 100*/
{
    alert("Error, please enter a number between 1 and 100"); /*error message if intCount is invalid*/
    $("total_fib").value=""; /*clears input box*/
    $("output").value=""; /*clears output box*/
}
    else /*the part of the program that executes if intCount is valid*/
    {
        while (intCount >2) /*this loop creates the appropriate string of fib numbers based on the value of intCount*/
        {
            k=i+j; 
            i=j;
            j=k;
            intCount--;
            stringOutput = stringOutput + " " +k;
        }
         $("output").value = stringOutput; /*pushes output back to DOM*/
    }
}
window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
}