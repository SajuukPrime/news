import { createStore } from 'redux'; // 引入createStore方法
import reducers from './reducers'
const store = createStore(reducers); // 创建数据存储仓库
export default store;