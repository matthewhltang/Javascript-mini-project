import puppeteer from "puppeteer";
import { jobsdb } from './jobsdb.js';
import { joshwcomeau } from './joshwcomeau.js'
import { swizec } from "./swizec.js";

const main = async () => {
    jobsdb();
    joshwcomeau();
     swizec();
}

main();