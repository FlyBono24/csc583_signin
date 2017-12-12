<template>
  <div class="container">
    <div v-if="!this.$store.state.user.displayName">
     <form id="register" @submit.prevent="validateBeforeSubmit" method="post" action='/users'>
      <div class="form-group">
        <input type="text" class="form-control" v-validate="'required'" placeholder="Full name" v-model="displayName" name="displayName">
         <p class="text-danger" align="left" v-if="errors.has('displayName')">{{ errors.first('displayName') }}</p>
      </div>
      <div class="form-group" >
            <input v-model="email" name="email" v-validate="'required|email'" data-vv-delay="500" type="text" data-vv-as="email address" placeholder="Email" class="form-control">
            <p class="text-danger" align="left" v-if="errors.has('email')">{{ errors.first('email') }}</p>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" v-validate="'required'" placeholder="Telephone" v-model="telephone" name="telephone">
         <p class="text-danger" align="left" v-if="errors.has('telephone')">{{ errors.first('telephone') }}</p>
      </div>       
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Company" v-model="company" name="company">
         <p class="text-danger" align="left" </p>
      </div>     
      // Checkboxes here

      <div class="form-group">
        <input type="text" class="form-control" placeholder="Escort Name (if needed)" v-model="escortName" name="escortName">
         <p class="text-danger" align="left" </p>
      </div>   
      <button class="btn btn-primary" type="submit">Register</button>
    </div>
    <div v-else>
      <h3>You cannot register while you are logged in!</h3>
    </div>
  </div>
</template>

<style scoped>
.btn-primary {
  border: 0;
  background: #860038;
  color: white;
}
.btn-primary:hover {
  background: #EFBA08;
  color: white;
}
</style>

<script>
export default {
  name: 'Visitor',
  methods: {
    validateBeforeSubmit(e) {
      e.preventDefault()
      this.$validator.validateAll().then((result) => {
        if (result) {
          const newUser = {
            displayName: this.displayName,
            email: this.email,
            password: this.password,
            createdOn: new Date
          }
          this.$store.dispatch('registerUser', newUser).then(res => {
            if (res.status == 409) {
              if (res.statusText == 'username') {
                this.errors.add('username', 'This username is already taken.', 'auth')
                this.errors.first('username:auth')
              }
              else if (res.statusText == 'email') {
                this.errors.add('email', 'This email is already taken.', 'auth')
                this.errors.first('username:email')
              }
            }
            else if (res.status == 200) {
              alert('Registration successful!')
              this.$router.push('/login')
            }
          }, err => {
            alert('Registration failed!')
            this.$router.push('/register')
          })

          return
        }
      })
    }
  },
  mounted() {
    this.$store.dispatch('getUser')
  }
}
</script>
