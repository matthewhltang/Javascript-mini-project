import puppeteer from "puppeteer";
import { blogScraper } from './blog-scraper.js';

const url = "https://www.joshwcomeau.com/";

const joshwcomeau = async () => {
   blogScraper(url, 'article', 'h3');
}

export { joshwcomeau };