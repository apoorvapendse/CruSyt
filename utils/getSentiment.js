import natural from "natural";
import { removeStopwords } from "stopword";

export function getSentiment(text) {
  /**
   * Removing non-alphabetical and special characters
   * Converting to lowercase
   */
  const alphaOnlyReview = text.replace(/[^a-zA-Z\s]+/g, "");

  /**
   * Tokenization
   */
  const tokenizer = new natural.WordTokenizer();
  const tokenizedText = tokenizer.tokenize(alphaOnlyReview);

  /** Remove stop words */
  const filteredText = removeStopwords(tokenizedText);

  const analyzer = new natural.SentimentAnalyzer(
    "English",
    natural.PorterStemmer,
    "afinn"
  );
  return analyzer.getSentiment(filteredText);
}
