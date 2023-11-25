import axios from "axios";
import cheerio from "cheerio";

const url =
  "https://www.reddit.com/search/?q=macbook_pro_review&type=comment&sort=top&rdt=48111";



    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
async function scrape() {
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

    console.log(comment1);
    console.log(comment2);
    console.log(comment3);
    console.log(comment4);
    console.log(comment5);
    console.log(comment6);
    console.log(comment7);
    console.log(comment8);
    console.log(comment9);
    console.log(comment10);
    
  } 

scrape();