import { exec } from "child_process";

export async function getResults(searchTerm = "iphone") {
  console.log("searchterm:", searchTerm);
  let request = `curl -H 'Content-Type: application/json' -d '{ "prompt": { "text": "Give me 50 ${searchTerm} reviews both good and bad in a json array with two field rating and review "} }' "https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=AIzaSyBE-myxHyuWxQHJfIZXLYzILLVghP6nkhA"`;

  let reviews = [];

  let child = exec(request, function (error, stdout, stderr) {
    let data = JSON.parse(stdout);
    let jsonString = "";
    jsonString = data.candidates[0].output; // Accessing the first candidate's output property
    jsonString = jsonString.replace("```json", "");
    while (
      jsonString[jsonString.length - 1] != `"` ||
      jsonString[jsonString.length - 1] != `'`
    ) {
      jsonString = jsonString.slice(0, jsonString.length - 1);
    }
    jsonString += "}]";

    console.log(jsonString);
    // TODO:  return json parsed object, still not working in some cases
  });
}

getResults();
