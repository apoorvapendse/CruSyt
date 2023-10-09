import axios from "axios";
import cheerio from "cheerio";

const url =
  "https://www.reddit.com/search/?q=mrf_tyres&type=comment&sort=top&rdt=48111";
export async function scrape() {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    let comment0 = $("#comment-content-0").text();
    let comment1 = $("#comment-content-1").text();
    let comment2 = $("#comment-content-2").text();
    let comment3 = $("#comment-content-3").text();
    let comment4 = $("#comment-content-4").text();
    let comment5 = $("#comment-content-5").text();
    let comment6 = $("#comment-content-6").text();
    let comment7 = $("#comment-content-7").text();
    let comment8 = $("#comment-content-8").text();
    let comment9 = $("#comment-content-9").text();
    let comment10 = $("#comment-content-10").text();

    return {
      comment0,
      comment1,
      comment2,
      comment3,
      comment4,
      comment5,
      comment6,
      comment7,
      comment8,
      comment9,
      comment10,
    };
  } catch (error) {
    console.log(error);
  }
}

scrape();
