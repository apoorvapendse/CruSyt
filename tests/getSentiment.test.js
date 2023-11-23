

import { getSentiment } from "../utils/getSentiment.js";

describe("Sentiment Analysis", () => {
  test("Negative input should result in a sentiment score less than 0", () => {
    const negativeReview = "This is the worst product I have ever, never buy it";
    expect(getSentiment(negativeReview)).toBeLessThan(0);
  });
  test("positive input should result in a sentiment score greater than 0", () => {
    const negativeReview = "This is the best product I have ever used, value for money";
    expect(getSentiment(negativeReview)).toBeGreaterThan(0);
  });
});
