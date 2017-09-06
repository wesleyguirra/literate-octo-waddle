import store from '../store/store'

const needAuth = auth => auth === true

const beforeEach = (to, from, next) => {
  const auth = to.meta.requiresAuth

  /**
   * Clears all global feedback message
   * that might be visible
   */

  /**
   * If route doesn't require authentication be normally accessed.
   */
  if (!needAuth(auth)) {
    next()
    return // return to prevent the code from continuing in its flow
    // With this flow `else` or `else if` is not necessary
  }

  /**
   * Otherwise  if authentication is required login.
   */
}

export default beforeEach
