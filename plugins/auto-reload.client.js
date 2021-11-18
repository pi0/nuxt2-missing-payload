export default (nuxt) => {
  const fetchPayload = nuxt.app.methods.fetchPayload
  nuxt.app.methods.fetchPayload = async function (route, prefetch) {
    try {
      return await fetchPayload.call(this, route, prefetch)
    } catch (err) {
      console.error(`Error ${prefetch ? 'pre' : ''}fetching static payload: ` + err)
      const path = window.location.pathname
      if (!prefetch && !path.endsWith('#reload')) {
        setTimeout(() => { window.location.replace(path + '#reload') }, 1000)
      }
    }
  }
}
