import express from "express";
import * as controllers from "../Controllers/Controllers.js";

const router = express.Router();

router.get("/", controllers.homepageGet);
router.post("/reddit-results", controllers.redditResultsGet);
router.get("/search", controllers.searchPageGet);
export default router;
