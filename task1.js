const os = require('os');
const path = require('path');
const fs = require('fs');
const readOSInfo =async () =>{
    const information = {
        platform:  os.platform(),
        architecture: os.arch(),     
    }
const desktopDir = path.join(os.homedir(), "Desktop");
const jsonString = JSON.stringify(information)
try{
    await fs.promises.writeFile(`${desktopDir}/output.json`, jsonString)
    console.log("File Written on your desktop")
}
catch(err)
{console.log("Error in written file")} 
}
readOSInfo();