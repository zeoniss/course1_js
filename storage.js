function storage() {
  let obj = {}
  return {
    setStorage: (key, value) => {
      obj[key] = value
    },
  }
}
const propsStorage = storage()
