const fs = require('fs');
const dirName="testDir";

try{
    if(fs.existsSync(dirName)){
        fs.mkdirSync(dirName);
    } else{
        throw new Error('directory already exists');
    }
} catch(error){
    console.log("Error Found");
    console.log(error)
}