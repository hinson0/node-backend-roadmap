/**
 * 
function createUser(user: User) {
  saveUser(user)

  sendEmail(user)
  writeAuditLog(user)
  giveCoupon(user)
  reportAnalytics(user)
}

没有 事件机制 createUser 和sendEmail/writeAuditLog/giveCoupon/reportAnalytics 都耦合在了一起

// 有了事件机制后,
function createUser(user: User) {
  saveUser(user)

  // 这里相当于给emitter绑定了一个事件,名字叫:userCreated;然后参数是user
  emitter.emit('userCreated', user)
}











 * 
 */
