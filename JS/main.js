var api = new XMLHttpRequest();


var result;



var url = "https://poloniex.com/public?command=returnCurrencies"
async function goo() {
    var data;

    let response = await fetch(url);
    if (response.ok) {
        
        data = await response.json();
        result = Object.keys(data).map(function(key) {
            return  data[key];
          });
        console.log(result);

        var arr = [];
        hide();
    for (var i=0;i<result.length;i++) {
        document.getElementById("stable").innerHTML +=
            `<tr id=${i}><td><button onClick="delet(${i})" class="btn btn-danger">Delete</button></td><td>${result[i].id}</td><td>${result[i].name}</td> <td>${result[i].humanType}</td> <td>${result[i].currencyType} <td>${result[i].txFee}</td> <td>${result[i].minConf}</td>$`;
    }
    }
    else {
        alert(response.status)
    }


    console.log(result);
}
goo();
function delet(i)
{
    document.getElementById("stable").innerHTML="";
    result.splice(i,i+1);
    reftresh();

}
function reftresh()
{
     for (var i=0;i<result.length;i++) {
        document.getElementById("stable").innerHTML +=
        `<tr id=${i}><td><button onClick="delet(${i})" class="btn btn-danger">Delete</button></td><td>${result[i].id}</td><td>${result[i].name}</td> <td>${result[i].humanType}</td> <td>${result[i].currencyType} <td>${result[i].txFee}</td> <td>${result[i].minConf}</td>$`;
    }
    hide();
}

function find()
{
    var res = $("#srch").val().toLowerCase();
    if(res=="")
    {
        reftresh();
    }
    for(var i=0;i<result.length;i++)
    {
        if((result[i].name).toLowerCase().includes(res))
    {
        document.getElementById("stable").innerHTML="";
        document.getElementById("stable").innerHTML +=
        `<tr id=${i}><td><button onClick="delet(${i})" class="btn btn-danger">Delete</button></td><td>${result[i].id}</td><td>${result[i].name}</td> <td>${result[i].humanType}</td> <td>${result[i].currencyType} <td>${result[i].txFee}</td> <td>${result[i].minConf}</td>$`;

    }
    }


}



function show()
{

}

function hide()
{
    document.getElementById("lds-ellipsis").remove();
    document.getElementById("123").style="visibility: visible;";
}















