import { AddMore } from "./addmore"
const newslist = document.querySelectorAll("li");
const btn = document.querySelectorAll(".more-btn")[0]
const myAddMore = new AddMore(newslist, btn, 6)