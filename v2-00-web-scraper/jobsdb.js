import puppeteer from "puppeteer";
import { blogScraper } from './blog-scraper.js';

const url = "https://hk.jobsdb.com/hk/search-jobs/digital-marketing-manager/1?createdAt=1d";

const jobsdb = async () => {
    blogScraper(url, 'article', 'h1');
}

export { jobsdb };