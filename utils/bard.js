import util from 'util';
import { exec } from 'child_process';

let request = `curl -H 'Content-Type: application/json' -d '{ "prompt": { "text": "Give me 50 macbook reviews both good and bad in a json array "} }' "https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=AIzaSyBE-myxHyuWxQHJfIZXLYzILLVghP6nkhA"`;

let answer ;

let child = exec(request, function(error, stdout, stderr) {
    
     let data = JSON.parse(stdout);
     console.log(data.candidates[0].output)

    console.log('stderr: ' + stderr);

    if (error !== null) {
        console.log('exec error: ' + error);
    }
});