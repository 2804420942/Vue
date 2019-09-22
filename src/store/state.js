/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-09-21 13:24:25
 * @version $Id$
 状态对象
 */
import StorageUtil from '../util/StorageUtil'
export default {
	todos: StorageUtil.getTodos()
}
