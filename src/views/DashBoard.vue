<template>
  <div>
    <div class="container">
        <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
        <a class="navbar-brand float-left" target="_blank">
           <h2 class="apptext">VQuiz</h2>
        </a>
        <ul class="nav navbar-nav flex-row float-left">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">
            <img src="https://img.icons8.com/small/2x/compass.png">
              Discover
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="#">
            <img src="https://img.icons8.com/small/2x/questions.png">
              Quizzes
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="#">
            <img src="https://img.icons8.com/small/2x/combo-chart.png">
              Reports
            </router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-4" to="/playquiz">
            <img src="https://img.icons8.com/small/2x/create-new.png">
              create
            </router-link>
          </li>
          <br>
          <li class="nav-item">
            <router-link class="nav-link pr-4" to="/profile">
            <img src="https://img.icons8.com/small/2x/user-male-circle.png">
              profile
            </router-link>
          </li>
        </ul>
        </nav>
    </div>
  </div>
</template>

<script>
export default { }
</script>>

<style>
</style>
