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
      return new Promise((resolve) => {
        resolve(undoList)
      })
    }
  }
}
