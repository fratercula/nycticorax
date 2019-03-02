export default function (...message) {
  if (window.console && window.console.warn) {
    window.console.warn(...message)
  }
}
