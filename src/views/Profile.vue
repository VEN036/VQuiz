<template>
  <div class="vertical-center">
  <div class="inner-block">
    <div class="vue-tempalte">
        <h3>Welcome To Quiz</h3>
           <p>{{user.displayName}}</p>
           <p>{{user.email}}</p>

        <button
        type="submit"
        class="btn btn-dark btn-lg btn-block"
        @click="logOut()">
            Log out
        </button>
    </div>
  </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      user: null
    }
  },
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user
      } else {
        this.user = null
      }
    })
  },
  methods: {
    logOut () {
      firebase.auth().signOut().then(() => {
        firebase.auth().onAuthStateChanged(() => {
          this.$router.push('/loginPage')
        })
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
