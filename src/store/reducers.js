import { domToObject } from './getDefaultInfo'
const ciicConfig = new domToObject("#ciic-config")
const defaultState = ciicConfig; 
const reducers = (state = defaultState, action) => {
    return state
}
export default reducers