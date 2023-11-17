import axios from "axios";
import cheerio from "cheerio";
import { getResults } from "./bard.js";

export async function scrape(searchTerm) {
  let reviews = await getResults(searchTerm);
  console.log("fetched reviews:", reviews);
  return reviews;
}

scrape();
