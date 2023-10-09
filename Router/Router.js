import express from "express";
import * as controllers from "../Controllers/Controllers.js";

const router = express.Router();

router.get("/", controllers.homepageGet);
router.get("/reddit-posts", controllers.redditPostsGet);
export default router;
