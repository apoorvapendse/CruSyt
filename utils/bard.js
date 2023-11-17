import { exec } from "child_process";

export async function getResults(searchTerm) {
  if(searchTerm===undefined)return;
  console.log("searchterm:", searchTerm);
  const request = `curl -H "Content-Type: application/json" -d "{ \\"prompt\\": { \\"text\\": \\"Give me 50 ${searchTerm} reviews both good and bad in a json array with two field rating and review \\" } }" "https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=AIzaSyBE-myxHyuWxQHJfIZXLYzILLVghP6nkhA"`;
  let reviews = [];

  return new Promise((resolve, reject) => {
    let child = exec(request, function (error, stdout, stderr) {
      if (error) {
        console.error(`Error: ${error.message}`);
        reject(error);
        return;
      }

      try {
        let data = JSON.parse(stdout);
        if (data.candidates && Array.isArray(data.candidates) && data.candidates.length > 0) {
          let obj = data.candidates[0];
          if (obj.output && typeof obj.output === 'string') {
            obj.output = obj.output.replace("```", "").replace("```", "").replace("json", "");
            delete obj.safetyRatings;
            try {
              let jsonString = obj.output.replace(/\n/g, '');
              while (jsonString[jsonString.length - 1] != "}") {
                jsonString = jsonString.slice(0, jsonString.length - 1);
              }
              console.log(jsonString);
              jsonString += "]";
              const parsedData = JSON.parse(jsonString);
              console.log(parsedData);
              resolve(parsedData);
            } catch (err) {
              console.log("error parsing obj.output:", err);
              reject(err);
            }
          }
        }
      } catch (parseError) {
        console.error(`Error parsing JSON: ${parseError.message}`);
        reject(parseError);
      }
    });
  });
}
getResults();