const regex = /\[object (.*?)\]/

export default (arg) => {
  const [, type = ''] = Object.prototype.toString.call(arg).match(regex) || []
  return type.toLowerCase()
}
