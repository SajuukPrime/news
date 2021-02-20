import api from "./api"
import { moduleS1 } from "./moduleS1";
import { moduleS2 } from "./moduleS2";
import { moduleS3 } from "./moduleS3";
import { moduleS4 } from "./moduleS4";

const map = {
    'script-1': moduleS1,
    'script-2': moduleS2,
    'script-3': moduleS3,
    'script-4': moduleS4,
}

class Modehouse {
    constructor(el, target, swiperSerial) {
        this.column = el.column;
        this.mode = el.mode;
        this.module = target
        this.outputData = {};
        this.swiperSerial = swiperSerial;
        api.get("/node_" + this.column + ".json")
            .then(data => {
                return this.getJson(data)
            })
            .then(n => {
                const temp = {
                    mode: this.mode,
                    art_list: {
                        headline: [],
                        pic: [],
                        important: [],
                        common: []
                    }
                }
                _.forEach(n.art_list, el => {
                    switch (el.article_attr) {
                        case "61":
                            temp.art_list.pic.push(el);
                            break;
                        case "62":
                            temp.art_list.headline.push(el);
                            break;
                        case "64":
                            temp.art_list.important.push(el);
                            break;
                        default:
                            temp.art_list.common.push(el);
                    }

                })
                this.outputData = temp;
                return this.outputData
            })
            .then(m => {
                this.render(m)
                this.scriptOption(m, this.module)
            })
    }
    getJson(data) {
        this.articleData = data.data.data
        return this.articleData
    }
    render = (data) => {
        for (let item in data.art_list) {
            const el_ul = document.createElement("div")
            const tempString = "";
            el_ul.className = "article-" + item;

            if (data.art_list[item].length > 0) {
                _.forEach(data.art_list[item], article => {
                    let articleString =
                        `<div class="article-item">
                        <div class="article_pic">
                            <a href="${article.article_url}"><img src="${article.article_pic}" title="${article.article_title}"></a>
                        </div>
                        <div class="article_title">
                            <a href="${article.article_url}">${article.article_title}</a>
                        </div>
                        <div class="article_summary">
                            ${article.article_summary}<a href="${article.article_url}">[详细]</a>
                        </div>
                        <div class="article_info">
                            ${article.article_source} ${article.article_author} ${article.article_pubTime} 
                        </div>
                        <div class="article_subtitle">${article.article_subTitle}</div>
                    </div>`;
                    tempString += articleString;

                })
            }
            if (tempString != "") {
                el_ul.innerHTML = tempString;
                this.module.appendChild(el_ul)
            }
        }
    }
    scriptOption(data) {
        const entrance = data.mode.match(/script-\d/);
        if (entrance && !!map[data.mode]) {
            const scriptModule = new map[data.mode](this.module, this.swiperSerial);
        }
    }
}
export { Modehouse }