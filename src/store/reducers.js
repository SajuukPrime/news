import { domToObject } from './getDefaultInfo'
const ciicConfig = new domToObject("#ciic-config")
const defaultState = ciicConfig; //默认数据
const reducers = (state = defaultState, action) => { //就是一个方法函数
    return state
}
export default reducers