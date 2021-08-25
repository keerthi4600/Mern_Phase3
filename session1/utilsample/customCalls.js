function testCustomCall(message,callback){
    console.log("custom call running"+message);
    if(typeof callback =="function"){
        callback();
    }
}

testCustomCall("Tesing callback fucntion")