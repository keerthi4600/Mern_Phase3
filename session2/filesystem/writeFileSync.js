var fs = require('fs');

fs.writeFileSync('input2.txt','Welcome onboard Folks.............!', function(err){
    if(err){
        console.log(err);
    }
    else {
        console.log('Write operation complete.');
    }
});

