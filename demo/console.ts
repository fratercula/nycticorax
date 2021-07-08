export default function (fn: (...p: unknown[]) => void) {
  const origin = window.console.log
  window.console.log = (...args: unknown[]) => {
    fn(...args)
  }
  return function () {
    window.console.log = origin
  }
}
