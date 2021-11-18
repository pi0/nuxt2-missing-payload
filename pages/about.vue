<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  // Result will be extracted to payload on generate time
  async asyncData() {
    const text = await fetch('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1').then(r => r.json()[0])
    return {
      title: 'About us',
      text
    }
  }
}
</script>
