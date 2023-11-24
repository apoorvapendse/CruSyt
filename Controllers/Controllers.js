import { getResults } from "../utils/bard.js";
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
  let postsObj = await getResults(req.body.searchQuery)

  let results = []
  postsObj.forEach((item)=>{
    let review = item.review;
    let sentiment =  getSentiment(review)
    let category=""


    //analysing category by the sentiment index
    if(sentiment>=0.4){
      category="excellent"
    }
    if(sentiment>=0.2){
      category="good"
    }
    else if(sentiment>=-0.1){
      category = "neutral"
    }
    else if(sentiment>= -0.4 ){
        category = "bad"
    }
    else if(sentiment< -0.4 ){
        category = "very bad"
    }


    
    results.push({
      review:item.review,
      sentiment:sentiment,
      category
    })
  })
  // res.json(results);
  res.send('dashboard.ejs')
};
export { homepageGet };
