/*
 * @Author: hejp
 * @Date:   10:46
 * @Last Modified by:   hejp
 * @Last Modified time: 10:46
 */
import { get, post } from '../fetch'

export default {
    // 获取令牌
    test(params) {
        return get('test', params, 'test')
    }
}
