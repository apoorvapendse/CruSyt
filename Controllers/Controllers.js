import { getSentiment } from "../utils/getSentiment.js";
import { scrape } from "../utils/reddit.js";

//Handling all the page requests
const homepageGet = (req, res) => {
  res.render("homepage.ejs");
};

export function searchPageGet(req, res) {
  res.render("searchpage.ejs");
}

//Doing the fetching and analysing of reddit Posts
export const redditResultsGet = async (req, res) => {
  let postsObj = await scrape(req.body.searchQuery);

  let returnObj = {};
  for (let key in postsObj) {
    let comment = postsObj[key];
    const sentiment = getSentiment(comment);
    returnObj[key] = { comment, sentiment };
  }

  res.json(returnObj);
};
export { homepageGet };
