<template>
  <div>
    <h3> Welcome to VQuiz </h3>
    <br>
  <div class="vertical-center">
  <div class="inner-block">
    <div class="vue-tempalte">
        <form @submit.prevent="enterPin">
            <h3>VQuiz</h3>

            <div class="form-group">
                <input type="number" placeholder="Enter quiz pin here..." class="form-control form-control-lg" v-model="invite" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Play</button>
            <button type="submit" class="btn btn-dark btn-lg btn-block" @click="goBack()">Back</button>
        </form>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'PlayQuiz',
  data: () => ({
    invite: ''
  }),
  methods: {
    goBack () {
      this.$router.push('/')
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
