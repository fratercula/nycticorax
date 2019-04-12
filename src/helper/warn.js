export default function (...message) {
  if (process.env.NODE_ENV === 'development') {
    window.console.warn(...message)
  }
}
