import { domToObject } from "./getinfo"
import { Modehouse } from "./modehouse"
const ciicConfig = new domToObject("#ciic-config")

if (ciicConfig.modules.length > 0) {
    const compiledComponents = _.template(`
    <% _.forEach(modules,item=>{ %>
        <div class='module <%= item.mode %>'>
            <div class='module-title'><%- item.columnName %></div>
        </div>
    <% }) %>`)
    document.querySelector('#expand-modules').insertAdjacentHTML('beforeend', compiledComponents({ 'modules': ciicConfig.modules }))
    const moduleItems = document.querySelectorAll('.module');
    _.forEach(ciicConfig.modules, (item, index) => {
        const moduleDom = new Modehouse(item, moduleItems[index], index)
    })
}