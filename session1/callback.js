let  data;
function fetchdata(cb){
    setTimeout(()=>{
        data={sId:1001,sName:"keerthi"};        
        cb();
    },
    2000)
}

var cbfunction = function displaydata(){
    console.log(data);
    console.log("End");
}


function printHello(){
    console.log("Hellooooo!");
}
console.log("start");
fetchdata(cbfunction);
printHello();