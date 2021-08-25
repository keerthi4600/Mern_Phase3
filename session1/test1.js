let  data;
function fetchdata(){
    setTimeout(()=>{
        data={sId:1001,sName:"keerthi"};        
        displaydata();
    },
    2000)
}

function displaydata(){
    console.log(data);
    console.log("End");
}

console.log("start");
fetchdata();