var str = "hackeryg";
var target = "0000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF";
var i;   
for(i=1;;i++){
    let str1= str;
    str1 = str1 + String(i);
    var hash = require("crypto")
   .createHash("sha256")
   .update(str1)
   .digest("hex");
    console.log(i);
    console.log(hash);
    if(hash<target){
        console.log(str1);
        console.log(i);
        console.log(hash);
        break;
    }
}