import puppeteer from "puppeteer";
import { blogScraper } from './blog-scraper.js';

const url = "https://swizec.com/blog/";

const swizec = async () => {
    return await blogScraper(url, '.css-ktxhrn', 'a');
}

export { swizec };