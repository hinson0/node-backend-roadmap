function getUser(): Promise<{ id: number; name: string }> {
  // 这段代码的意思是:
  // 会立即返回一个filled的promise对象
  // 这个promise对象内部的内容数据类型为{id: number, name: string}
  return Promise.resolve({
    id: 1,
    name: 'yangzi',
  })
}

function getOrders(userId: number): Promise<{ id: number; userId: number }[]> {
  // 这个getOrders返回的也是一个filled的promise
  // 这个promise的结果值是一个数组
  // 数组内的每个item是一个object literal,且object type是{id: number, userId: number}
  return Promise.resolve([
    { id: 101, userId },
    { id: 102, userId },
  ])
}

/**
 * 类型是指: 这个值允许涨什么样子
 * 数据类型: 数据怎么组织+存放
 */

getUser()
  .then((user) => {
    console.log(`user: ${user.id}`)

    return getOrders(user.id)
  })
  .then((orders) => {
    console.log(orders)

    return orders.length
  })
  .then((count) => {
    console.log(`订单数量: ${count}`)
  })
  .catch((error) => {
    console.error(error)
  })
