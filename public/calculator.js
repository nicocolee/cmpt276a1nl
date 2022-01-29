var tbl = document.getElementById("tbl");



//function to add rows to the activity table
function addActivity()
{
    var currentIndex = tbl.rows.length-1;
    var tr = document.getElementById("sampleRow").cloneNode(true);
    tr.cells[0].innerHTML = "Activity " + currentIndex;
    tr.cells[1].innerHTML = "A" + currentIndex;
    tr.removeAttribute("style");
    tbl.appendChild(tr);
}
   
    
//function to calculate percentage of each activity
function calculatePercent(x) {
    var actualGrade = document.getElementsByName("actualGrade");
    var maxGrade = document.getElementsByName("maxGrade");
    var percent = actualGrade/maxGrade;
    percent.addEventListener("percent", calculatePercent)
    
    var tr = document.getElementById("sampleRow");
    tr.cells[4].innerHTML = percent;
    log.textContent = percent.target.value;
    

}
//get listener for the grade
//"Percent" cell onchange of "grade"
//display percent under the "Percent" cell



//function to calculate weighted result
function calculateWeighted() {
    
}

//funciton to calculate mean result
function calculateMean() {
    var result = getElementById("result");
    result = 10;
}