const undoList = {
  success: true,
  data: [
    { value: 1, status: 'div' },
    { value: 2, status: 'div' }
  ]
}
export default {
  get (url) {
    if (url === '/getUndoList.json') {
      return new Promise((resolve, reject) => {
        if (this.success) {
          resolve(undoList)
        } else {
          reject(new Error())
        }
      })
    }
  }
}
