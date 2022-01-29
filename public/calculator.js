var tbl = document.getElementById("tbl");

function addActivity()
{
    var tr = document.getElementById("copyRow").cloneNode(true);
    var currentIndex = tbl.rows.length;
    tr.cells[0].innerHTML = "Activity " + currentIndex;
    tr.cells[1].innerHTML = "A" + currentIndex;
    tbl.appendChild(tr);
}
function calculatePercent() {

}