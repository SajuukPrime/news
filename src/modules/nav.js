import { domToObject } from "./getinfo"
const ciicConfig = new domToObject("#ciic-config")

if (ciicConfig.nav) {
    const nav = `<div class='nav'><a href='http://www.china.com.cn/'>中国网首页</a><a href='http://news.china.com.cn/'>新闻中心首页</a><span class='router-element' data-id="index">首页</span></div>`
    document.querySelector('.banner').insertAdjacentHTML("afterend", nav)
    const compiled = _.template(`<% _.forEach(columns, function(column) { %><span class='router-element' data-id="<%= column.id %>"><%- column.text %></span><% }); %>`);
    document.querySelectorAll('.nav')[0].insertAdjacentHTML('beforeend', compiled({ 'columns': ciicConfig.nav.columns }))
}