<template>
  <q-form @submit.prevent="submitForm">
    <div class="row q-mb-md">
      <q-banner class="col bg-grey-3">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary" />
        </template>
        Register to access your Buddy everywhere!
      </q-banner>
    </div>
    <div class="row q-mb-md">
      <q-input
        :rules="[ val => isValidEmailAddress(val) || 'Please use valid email address']" 
        lazy-rules 
        outlined 
        class="col"
        v-model="formData.email" 
        label="Email" 
        stack-label />
    </div>
    <div class="row q-mb-md">
      <q-input
        :rules="[ val => val.length >= 6 || 'Please use min 6 characters']" 
        lazy-rules
        outlined 
        class="col"
        v-model="formData.password" 
        label="Password"
        type="password" 
        stack-label />
    </div>
    <div class="row">
      <q-space/>
      <q-btn 
        type="submit"
        color="primary"
        label="Register"/>
    </div>
  </q-form>

</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm() {
      console.log('Submit')
    },
    isValidEmailAddress(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    }
  }
}
</script>

<style lang="scss">

</style>