class UserController {
  async login(ctx, next) {
    const { userId } = ctx
    ctx.body = {
      message: {
        userId
      }
    }
  }
}
module.exports = new UserController()