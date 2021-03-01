import _ from 'lodash'
class domToObject {
    constructor(el) {
        this.el = document.querySelectorAll(el)[0];
        this.output = {
            config:{}
        }
        this.init();
        return this.output;
    }
    getBanner() {
        const desktop = this.el.querySelector('#banner-desktop');
        const mobile = this.el.querySelector('#banner-mobile');
        if (desktop || mobile) {
            const banner = {};
            _.forEach([desktop, mobile], item => {
                const name = _.replace(item.getAttribute('id'), 'banner-', '')
                const imagesInfo = _.trim(item.querySelectorAll('.banner-images')[0].innerText);
                banner[name] = {};
                if (imagesInfo) {
                    banner[name]['backgroundImage'] = `url(${imagesInfo})`
                }
            })
            this.output['banner'] = banner;
        }
    }
    getIndex(){
        const elIndex = this.el.querySelector('#index-columns');
        const Index={}
        _.forEach(elIndex.querySelectorAll('div'),item=>{
            const thisItem={};
            const thisItemInfo = _.split(item.innerText, ',', 3);
            thisItem['id'] = thisItemInfo[0];
            thisItem['name'] = thisItemInfo[1];
            thisItem['mode'] = thisItemInfo[2];
            Index[thisItem['mode']]=thisItem
        })
        this.output.config.index = Index;
    }
    getNav() {
        const elNav = this.el.querySelectorAll('#nav')[0];
        if (elNav) {
            const nav = {};
            const columns = elNav.querySelectorAll('.column');
            const style = elNav.querySelectorAll('.nav-style')[0];
            if (columns) {
                nav['columns'] = []
                _.forEach(columns, item => {
                    const column = {};
                    const columnInfo = _.split(item.innerText, ',', 2)
                    column['id'] = columnInfo[0]
                    column['text'] = columnInfo[1];
                    column['path'] = `/node_${columnInfo[0]}`
                    nav['columns'].push(column)
                })
            }
            if (style) {
                const styleInfo = style.innerText;
                nav['style'] = styleInfo
            }
            this.output['nav'] = nav;
        }
    }
    getIframes(){
        const iframeDom=document.querySelector("#iframe-list").innerHTML;
        this.output.config.iframeDom = _.trim(iframeDom)
    }
    getModules() {
        const domList = this.el.querySelectorAll("#article-list .content");
        const modules = []
        _.forEach(domList, element => {
            const temp = element.innerText.split(",");
            const obj = {};
            obj["column"] = temp[0]
            obj["mode"] = temp[1]
            obj["columnName"] = temp[2]
            modules.push(obj)
        });
        this.output.config.expand_components = modules;

    }
    init() {
        this.getBanner()
        this.getNav()
        this.getIndex()
        this.getModules()
        this.getIframes()
    }
}

export { domToObject }