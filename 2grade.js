var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function () 
{

//Declare variables intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade
//Get user input to determine grade
//Calculate floatTotalPts (sum of HW and exam pts)
//Get user input on whether the course is audit pass/fail (1) or letter grade (2)
//If the grade option is audit, evaluate total score based upon 80% cutoff scorefor pass/fail
//Else determine letter grade based upon the typical A = 90%, B - 80%, etc.
//Output stringFinalGrade

var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

floatHwPts = parseFloat($("hw_pts").value); 

floatMidPts = parseFloat($("mid_pts").value);

floatFinPts = parseFloat($("fin_pts").value); 

floatTotalPts = parseFloat(floatHwPts + floatMidPts + floatFinPts); 

intGradeOption = parseInt($("grade_option").value);

if (intGradeOption===1)
{
    if(floatTotalPts >= 80)
    {
        stringFinalGrade = "Pass";
    }
    else
    {
    if (floatTotalPts <= 80) 
    {
        stringFinalGrade = "Fail";
    }
    }
}
if (intGradeOption===2)
{
    if (floatTotalPts >= 90)
    {
        stringFinalGrade = "A";
    }
        else
        {
            if (floatTotalPts >= 80 && floatTotalPts < 90)
                {
                    stringFinalGrade = "B";
                }
            else
            {
                if (floatTotalPts >= 70 && floatTotalPts < 80)
                    {
                        stringFinalGrade = "C";
                    }
                    else
                        {
                            if (floatTotalPts >= 60 && floatTotalPts < 70)
                                {
                                    stringFinalGrade = "D";
                                }
                            else
                            {
                                if (floatTotalPts < 60)
                                 {
                                        stringFinalGrade = "F";
                                 }
                            }
                        }
            }
        }
}

$("final_grade").value = stringFinalGrade;

};

window.onload = function () 
{
    $("final_grade").value = ""; //blanks the final grade text box upon page load
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hw_pts").focus(); //puts the cursor on the first DOM text input box
};