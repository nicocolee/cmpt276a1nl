var tbl = document.getElementById("tbl");

//function to calculate percentage of each activity
function calculatePercent(event) {
    var actualGrade = event.srcElement.parentNode.childNodes[1].value;
    var maxGrade = event.srcElement.parentNode.childNodes[3].value;
    var percent = actualGrade/maxGrade;
    var percentCell = event.srcElement.parentNode.parentNode.childNodes[9];
    percentCell.innerHTML = (percent*100).toFixed(2);
}

//set EventListener for grade entries
function setEventListener(){
    var myGradeList = document.getElementsByClassName("grade");
    for (var i = 0; i < myGradeList.length; i++) {
        myGradeList[i].onchange = calculatePercent;
    }
}
setEventListener();

//function to add rows to the activity table
function addActivity()
{
    var currentIndex = tbl.rows.length-1;
    var tr = document.getElementById("sampleRow").cloneNode(true);
    tr.cells[0].innerHTML = "Activity " + currentIndex;
    tr.cells[1].innerHTML = "A" + currentIndex;
    tr.removeAttribute("style");
    tbl.appendChild(tr);
    setEventListener();
};

//function to calculate weighted result
function calculateWeighted() {
    console.log(1);
    var weightList = document.getElementsByClassName("weight");
    var percentList = document.getElementsByClassName("percent");
    var sum = 0;
    var weightedResult = 0;
    var weightCount = 0;
    for (var i = 0; i < percentList.length; i++) {
        if (percentList[i].innerHTML != null && percentList[i].innerHTML !='') {
            if(weightList[i].value == null || weightList[i].value == ''){
                weightList[i].value = 1;
                sum += (parseFloat(percentList[i].innerHTML) * parseFloat(weightList[i].value));
                weightCount += parseFloat(weightList[i].value);
            } else {
                sum += (parseFloat(percentList[i].innerHTML) * parseFloat(weightList[i].value));
                weightCount += parseFloat(weightList[i].value);
            }
        }
    }
    weightedResult = sum / weightCount;
    document.getElementById("result").innerHTML = weightedResult.toFixed(3);
}

//funciton to calculate mean result
function calculateMean() {
    var percentList = document.getElementsByClassName("percent");
    var sum = 0;
    var mean = 0;
    var count = 0;
    for (var i = 0; i < percentList.length; i++) {
        if (percentList[i].innerHTML != null && percentList[i].innerHTML !='') {
            sum += parseFloat(percentList[i].innerHTML);
            count++;
        }
    }
    mean = sum / count;
    document.getElementById("result").innerHTML = mean.toFixed(3);
}