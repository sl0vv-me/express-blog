<template>
  <div class="field">
    <label v-if="label" :for="'input-'+_uid">{{label}}</label>
    <input :id="'input-'+_uid" :type="type" :name="name" :value="value"
      @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
  export default {
    name: 'Input',
    data: _ => ({

    }),
    props: {
      type: {
        type: String,
        default: 'text'
      },
      label: {
        type: String,
        default: null
      },
      name: {
        type: String,
        default: ''
      },
      value: {}
    },
    created() {
      // console.log(this)
    }
  }
</script>

<style lang="scss">
  .field {
    
  }
</style>
