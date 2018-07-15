<template>
  <form class="form" @submit.prevent="onSubmit">
    <c-input label="Username" name="username" v-model="form.username"/>
    <c-input type="email" label="Email" name="email" v-model="form.email"/>
    <c-input type="password" label="Password" name="password" v-model="form.password"/>
    <button>Sign Up</button>
  </form>
</template>

<script>
  export default {
    name: 'Signup',
    data: _ => ({
      form: {
        username: '',
        email: '',
        password: ''
      }
    }),
    methods: {
      onSubmit() {
        this.$http.post('/signup', this.form, {
          
        }).then(res => {
          console.log(res)
        }).catch(err => {
          console.error(err.response)
        })
      }
    }
  }
</script>

<style lang="scss">

</style>
