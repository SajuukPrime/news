import _ from 'lodash'
class domToObject {
    constructor(el) {
        this.el = document.querySelectorAll(el)[0];
        this.output = {
            'config': {
                'index': {
                    'headline': {
                        'id': '',
                        'mode': 'headline'
                    },
                    'left-swiper': {
                        'id': '',
                        'mode': 'left-swiper'
                    },
                    'left-list': {
                        'id': '',
                        'mode': 'left-list'
                    },
                    'right-list-pic': {
                        'id': '',
                        'mode': 'right-list-pic'
                    },
                    'right-list-text': {
                        'id': '',
                        'mode': 'right-list-text'
                    }
                }
            },
            'articleData': {
                '_8019911': {},
                '_8019912': {},
                '_8019913': {}
            }
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
                // const colorInfo = _.trim(item.querySelectorAll('.banner-color')[0].innerText);
                banner[name] = {};
                if (imagesInfo) {
                    banner[name]['background-image'] = `url(${imagesInfo})`
                }
                // if (colorInfo) {
                //     banner[name]['background-color'] = colorInfo
                // }
            })
            this.output['banner'] = banner;
        }
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
        this.output["modules"] = modules;

    }
    init() {
        this.getBanner()
        this.getNav()
        this.getModules()
    }
}

export { domToObject }