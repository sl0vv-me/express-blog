<template>
  <div id="app">
    <header class="main">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-auto">
            Очередной блог
          </div>
          <div class="col-auto">
            Очередной блог
          </div>
        </div>
      </div>
    </header>
    <main class="main">
      <router-view/>
    </main>
    <footer class="main">
      <div class="container">
        <div class="row">
          <div class="col">
            Подвал
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import './assets/scss/styles';

</style>
