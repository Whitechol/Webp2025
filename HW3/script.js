var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";
var xhr = new XMLHttpRequest();
xhr.open("GET", openUrl, true);
xhr.send();

const datas = [];
const rowsPerPage = 10;
let curPage = 1;
let filteredData = [];

xhr.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        dataset = JSON.parse(this.responseText);
        dataset.forEach(function(data, index) {
            datas.push({
                title: data["title"],
                location: data["showInfo"][0]["location"],
                price: data["showInfo"][0]["price"]
            })
        })
        filteredData = [...datas];
        renderTable();
    }
};

function renderTable() {
    var myTable = document.getElementById("csie");
    while (myTable.rows.length > 1) myTable.deleteRow(1);

    const start = (curPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageData = filteredData.slice(start, end);

    pageData.forEach(function(data, index) {
        var row = myTable.insertRow(-1);
        row.insertCell(0).innerHTML = data["title"];
        row.insertCell(1).innerHTML = data["location"];
        row.insertCell(2).innerHTML = data["price"];
    });

    const totalPage = Math.ceil(filteredData.length / rowsPerPage);
    document.getElementById('pageInfo').innerText = ` ${curPage} / ${totalPage} 頁`;
};

function prevPage() {
    if (curPage > 1) {
        curPage--;
        renderTable();
    }
}

function nextPage() {
    const totalPage = Math.ceil(filteredData.length / rowsPerPage);
    if (curPage < totalPage) {
        curPage++;
        renderTable();
    }
}

function searchTable() {
    const keyword = document.getElementById('searchInput').value.toLowerCase();
    filteredData = datas.filter(item => item.title.toLowerCase().includes(keyword));
    curPage = 1;
    renderTable();
}

function delOldData() {
    var myTable = document.getElementById("csie");
    var rowCount = myTable.rows.length;
    if (rowCount > 1) {
        var row = myTable.deleteRow(rowCount-1);
    }
}