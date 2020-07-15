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
            <router-link class="nav-link pr-4" to="/createquestions">
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
    <br>
    <div>
      <div class="search_bar">
        <input class="form-control" type="text" placeholder="Search" aria-label="Search">
      </div>
    </div>
    <br>
    <div class="card_row">
      <div class="ds_card">
        <div class="card_inner">
          <img class="card_img" src="https://img.icons8.com/ios/2x/university.png">
          <div class="card_title" href="#"> Education </div>
        </div>
      </div>
      <div class="ds_card">
        <div class="card_inner">
          <img class="card_img" src="https://img.icons8.com/ios/2x/trophy.png">
          <div class="card_title" href="#"> Sports </div>
        </div>
      </div>
      <div class="ds_card">
        <div class="card_inner">
          <img class="card_img" src="https://img.icons8.com/ios/2x/cinema-film-play.png">
          <div class="card_title" href="#"> Cinema </div>
        </div>
      </div>
      <div class="ds_card">
        <div class="card_inner">
          <img class="card_img" src="https://img.icons8.com/ios/2x/artificial-intelligence.png">
          <div class="card_title" href="#"> Technology </div>
        </div>
      </div>
    </div>
    <br>
    <div class="card_row">
      <div class="ds_card">
        <div class="card_inner">
          <img class="card_img" src="https://img.icons8.com/ios/2x/historical.png">
          <div class="card_title" href="#"> History </div>
        </div>
      </div>
      <div class="ds_card">
        <div class="card_inner">
          <img class="card_img" src="https://img.icons8.com/ios/2x/globe-earth.png">
          <div class="card_title" href="#"> World </div>
        </div>
      </div>
      <div class="ds_card">
        <div class="card_inner">
          <img class="card_img" src="https://img.icons8.com/ios/2x/plant-under-rain.png">
          <div class="card_title" href="#"> Agriculture </div>
        </div>
      </div>
      <div class="ds_card">
        <div class="card_inner">
          <img class="card_img" src="https://img.icons8.com/ios/2x/money.png">
          <div class="card_title" href="#"> Economics </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>>

<style>
  .search_bar {
    border: 1px solid #f48fb1;
    box-shadow: 0 0 0 1px #f48fb1;
    margin-left: 30%;
    margin-right: 30%;
  }

  .card_row {
    display: flex;
    flex-flow: row;
    margin: 0 -6px;
    justify-content:center;
  }

  .ds_card {
    position: center;
    width: 150px;
    height: 130px;
    margin: 2%;
    margin-left: 8%;
    transition: all 0.2s ease-in-out;
    border-radius: 4px;
    background: #e7cd3c;
    box-shadow: 0px 1.6px 3.6px rgba(0,0,0,0.13), 0px 0px 2.9px rgba(0,0,0,0.11);
  }

  .card_inner {
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    padding: 12px;
    border-radius: 4px;
  }

  .card_img {
    max-height: 80px;
    margin-top: 10px;
  }

  .card_title {
    align-items: baseline;
    display: flex;
    justify-content: center;
    margin: 8px 0 0 0;
    width: 100%;
  }
</style>
