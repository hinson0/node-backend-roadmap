app.get('/users', async () => {
  const users = await db.user.findMany()

  return users
})
