<template>
  <div>
    <h3> Create new account </h3>
  <div class="vertical-center">
  <div class="inner-block">
    <div class="vue-tempalte">
        <form @submit.prevent="userRegistration">
            <h3>Sign Up</h3>

            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control form-control-lg" v-model="user.name" />
            </div>

            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control form-control-lg" v-model="user.email" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" v-model="user.password" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">
               Sign Up
            </button>

            <p class="forgot-password text-right">
                Already registered
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>
        </form>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    userRegistration () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then((res) => {
          res.user
            .updateProfile({
              displayName: this.user.name
            })
            .then(() => {
              this.$router.push('/loginpage')
            })
        })
        .catch((error) => {
          alert(error.message)
        })
    }
  }
}
</script>

<style>

  .inner-block {
  width: 450px;
  margin: auto;
  background: #81bfc7;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;
}

  .vertical-center {
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;
}

.vertical-center .form-control:focus {
  border-color: #2554FF;
  box-shadow: none;
}

.vertical-center h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}

</style>
