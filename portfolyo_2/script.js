function searchTable(){
    var input = document.getElementById("search-root");
    var filter = input.value.toLowerCase();
    console.log(filter)

    var tbl= document.getElementById("data-table");
    console.log(tbl);

    var tblRow=tbl.querySelectorAll("tbody tr");
    console.log(tblRow);

    var tblData;

    for(let i = 0 ; i<tblRow.length;i++){
        tblData = tblRow.querySelectorAll("tr");
        console.log(tblData);
        
    }

}

function GetCellValues() {
    var table = document.getElementById('data-table');
    var input = document.getElementById("search-root");
    var filter = input.value.toLowerCase();
    console.log(filter)
    var tblData;

    for (var r = 1, n = table.rows.length; r < n; r++) {
       
           tblData=table.rows[r].cells[0].innerHTML;
          if(tblData.toLowerCase().indexOf(filter) >-1){
            table.rows[r].style.display="";
          }else{
            table.rows[r].style.display="none";
          }
        
    }
}