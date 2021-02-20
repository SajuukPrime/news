import { divide } from 'lodash';
import regeneratorRuntime from 'regenerator-runtime'
import api from './api'
class LoadSubList {
    constructor(nodeHash) {
        this.id = nodeHash.split('#/node_')[1];
    };
    init() {
        if (this.id == 'index') {
            this.pageIndex()
        } else {
            this.renderHtml()
        }
    }
    pageIndex() {
        document.querySelectorAll('.sub-page')[0].innerHTML = ''
        document.querySelectorAll('.page-default')[0].style.display = 'block'
    }
    async getJson(columnId) {
        const data = await api.get("/node_" + columnId + ".json").then(data => {
            return data.data;
        })
        return data;
    }
    async renderHtml() {
        const data = await this.getJson(this.id);
        if (!document.querySelectorAll('.sub-page')[0]) {
            const subPage = `<div class='sub-page'></div>`;
            document.querySelectorAll('.page-default')[0].insertAdjacentHTML('afterend', subPage);
        }
        document.querySelectorAll('.sub-page')[0].innerHTML = ''
        const compiledSub = _.template(`
            <div class='sub-page-column'><%- data.column_name %></div>
            <ul>
                <% _.forEach(data.art_list, function(article) { %>
                    <li>
                        <% if(article.article_pic !=''){ %><div class="sub-page-image">
                            <img src='<%= article.article_pic %>'/>
                        </div>
                        <div class="sub-page-text"><% } %>
                        <div class="sub-page-title">
                            <a href="<%- article.article_url %>" target='_blank'><%= article.article_title %></a>
                        </div>
                        <div class="sub-page-summary">
                            <%= article.article_summary %>
                        </div>
                        <% if(article.article_pic !=''){ %></div><% } %>
                    </li>
                <% }); %>
            </ul>
        `)
        document.querySelectorAll('.sub-page')[0].insertAdjacentHTML('afterbegin', compiledSub(data))
        document.querySelectorAll('.page-default')[0].style.display = 'none'
    }
}
export { LoadSubList }