const { isArray, isFunction } = require('../util/index')
const { _difference } = require('./difference')
const { _identify } = require('./identify')

/*
	_.differenceBy(array, [values], [iteratee=_.identity])
		- 这个方法类似 _.difference ，除了它接受一个 iteratee （迭代器）， 调用 array 和 values 中的每个元素以产生比较的标准。 结果值是从第一数组中选择。iteratee 会调用一个参数：(value)。（首先使用迭代器分别迭代 array 和 values中的每个元素，返回的值作为比较值）。

	Note: 不像 _.pullAllBy，这个方法会返回一个新数组。

	参数
		- array (Array): 要检查的数组。
		- [values] (...Array): 排除的值。
		- [iteratee=_.identity] (Array|Function|Object|string): iteratee 调用每个元素。

	返回值
		- (Array): 返回一个过滤值后的**新数组**。

	例子
		_.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor);
		// => [3.1, 1.3]

		// The `_.property` iteratee shorthand.
		_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
		// => [{ 'x': 2 }]
*/


function _differenceBy(array, value, fn = _identify) {
	let result = []
	// 没有第一个参数或者第一个参数不是 array
	if (!array && !isArray(array)) {
		return result
	}

	// 不存在第二个参数或者第二个参数不是 array，返回第一个参数
	if (!value || value && !isArray(value)) {
		result = [...result]
		return result
	}

	// 如果存在第三个参数（即指定 iteratee）
	if (fn) {
		if (isFunction(fn)) {
			// 指定参数是一个函数

		} else {
			// 指定参数不是函数
		}
	} else {
		// 默认参数
	}
}

module.exports = {
	_differenceBy
}
