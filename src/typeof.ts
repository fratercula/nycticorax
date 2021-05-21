const regex = /\[object (.*?)\]/

export default (arg: any): string => {
  const [, type = ''] = Object.prototype.toString.call(arg).match(regex) || []
  return type.toLowerCase()
}
