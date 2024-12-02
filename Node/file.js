const fs=require("fs")
// fs.writeFileSync("./wfile.txt","This is written from code,sync");

// fs.writeFileSync("./wfile.txt","This is written from code, async",()=>{
//     if(err){
//         console.log("Error",arr);
//     }   
      
// });

// fs.readFileSync("./rfile.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error:",err);
//     }
//     else{
//         console.log("Result",result);

        
//     }
// });

// fs.appendFileSync("./wfile.txt",`${Math.random()}"new lines from append\n`);
// fs.cpSync("./wfile.txt","./wcopy.txt");
// fs.unlinkSync("./wcopy.txt");
// console.log(fs.statSync("./file.js"));
// fs.mkdirSync('dircode/a/b',{recursive:true});

// const os=require("os");
// console.log(os);
// console.log(os.cpus().lenght);
// console.log(os.totalmem());

console.log("Before Sync");
const result=fs.read