export default fns => Promise.resolve(
  fns.reduce((a, b) => arg => Promise.resolve(a(() => b(arg))))(() => Promise.resolve()),
)
