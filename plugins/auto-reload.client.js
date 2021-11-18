export default (nuxt) => {
  const fetchPayload = nuxt.app.methods.fetchPayload
  nuxt.app.methods.fetchPayload = async function (route, prefetch) {
    try {
      return await fetchPayload.call(this, route, prefetch)
    } catch (err) {
      console.error(`Error ${prefetch ? 'pre' : ''}fetching static payload: ` + err)
      if (!prefetch && !window.location.pathname.endsWith('#reload')) {
        setTimeout(() => { window.location.replace(window.location.pathname + '#reload') }, 1000)
      }
    }
  }
}
