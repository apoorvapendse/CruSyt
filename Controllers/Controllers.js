import { getSentiment } from "../utils/getSentiment.js";
import { scrape } from "../utils/reddit.js";

const homepageGet = (req, res) => {
  res.render("homepage.ejs");
};

export const redditPostsGet = async (req, res) => {
  let postsObj = await scrape();

  let returnObj = {};
  for (let key in postsObj) {
    let comment = postsObj[key];
    const sentiment = getSentiment(comment);
    returnObj[key] = { comment, sentiment };
  }

  res.json(returnObj);
};
export { homepageGet };
