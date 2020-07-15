<template>
  <div>
    <h1 class="title">Add New Question</h1>
    <br>
    <div>
      <input class="questionbox"
        v-model="question.title"
        placeholder="your question goes here..."
      />
    </div>
    <br>
    <div class="type_select">
      <QuestionType class="ques_type"
        v-for="(questiontype, index) in questiontypes"
        :key="index"
        :option="questiontype"
        v-model="question.type"
        :questiontype="question.type"
        tabindex="0"
      >
        <input type="checkbox" value="checkbox"
          name="checkbox"
          v-if="questiontype.code === question.type"
        />
      </QuestionType>
    </div>
    <br>
    <div v-if="question.type == 'T'" class="true_false">
      <QuestionType class="tf_ans"
        v-for="(tfchoice, index) in tfchoices"
        :key="index"
        v-model="question.tfanswer"
        :option="tfchoice"
      >
      </QuestionType>
    </div>
    <div v-if="question.type == 'M'" class="mcq">
      <textarea
        v-for="(answer, index) in question.mcqanswers"
        :key="index"
        class="mcqanswers"
        v-model="answer.value"
        theme="small"
        :placeholder="`answer ${index + 1}`"
        v-bind:icon="true"
      >
        <input type="checkbox"
          name="cancel"
          v-if="!answer.correct"
          v-model="answer.correct"
          @click="answer.correct = !answer.correct"
          v-bind:interactive="true"
        />
        <input type="checkbox"
          name="checkmark"
          v-if="answer.correct"
          v-model="answer.correct"
          @click="answer.correct = !answer.correct"
          v-bind:interactive="true"
        />
      </textarea>
    </div>
    <br>
    <div class="final_button">
      <button class="btn btn-success" @click="handleAddQuestion()"> Save and More</button>
      <button class="btn btn-danger" value="discard"> Cancel </button>
    </div>
  </div>
</template>

<script>
import QuestionType from '../views/QuestionType'
import { mapState } from 'vuex'
import { quizRef, usersRef } from '@/firebase'

export default {
  name: 'CreateQuestions',
  components: {
    QuestionType
  },
  data: () => ({
    questiontypes: [
      { name: 'multiple choice', code: 'M' },
      { name: 'true or false', code: 'T' },
      { name: 'open-ended', code: 'O' }
    ],
    tfchoices: [
      { name: 'true', code: true },
      { name: 'false', code: false }
    ],
    question: {
      title: '',
      type: 'M',
      tfanswer: false,
      mcqanswers: [
        {
          value: '',
          correct: false,
          placeholder: 'Answer 1'
        },
        {
          value: '',
          correct: false,
          placeholder: 'Answer 2'
        },
        {
          value: '',
          correct: false,
          placeholder: 'Answer 3'
        },
        {
          value: '',
          correct: false,
          placeholder: 'Answer 4'
        }
      ]
    }
  }),
  computed: {
    ...mapState({
      quizid: (state) => state.quiz.quizid,
      user: (state) => state.authstore.currentUser,
      quiz: (state) => state.quiz.quiz,
      userProfile: (state) => state.authstore.userProfile
    })
  },
  methods: {
    async handleAddQuestion () {
      const clone = JSON.parse(JSON.stringify(this.question))
      this.$store.commit('ADD_QUESTION', clone)
      console.log(this.quiz)
      console.log(this.userProfile.id)
      try {
        if (!this.quizid) {
          const res = await quizRef.add(this.quiz)
          await this.$store.commit('SET_QUIZ_ID', res.id)
          await usersRef
            .doc(this.userProfile.id)
            .set({ last_draft: res.id }, { merge: true })
        } else {
          await quizRef.doc(this.quizid).set(this.quiz, { merge: true })
        }
      } catch (err) {
        alert(err.message)
      }
    }
  }
}
</script>

<style>
  .backgroud {
    color:aquamarine;
  }
  .title {
    font-weight: normal;
    font-size: 28px;
    color: #55d644;
    line-height: 1.0;
    margin: 20px 0;
  }
  .questionbox {
    height: calc(3.0em + 1rem + 4px);
    width: calc(50.5em + 1rem + 4px);
    padding: .5rem 1rem;
    margin-right:30%;
    margin-left:60px;
    font-size: 1.25rem;
    line-height: 5.5;
    border-radius: .3rem;
  }

  .type_select {
    float: center;
    margin-right: 70%;
    z-index: 499;
    font-size:1.50rem;
    color:limegreen;
  }

  .ques_type {
    background-color: rgb(103, 174, 195);
    margin:15px;
    margin-left: 100px;
    border:powderblue;
    color: rgb(0, 0, 0);
    font-family: "Source Sans Pro", system-ui, sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 15px 20px;
    text-transform: uppercase;
    -webkit-transition: .2s ease all;
    -o-transition: .2s ease all;
    transition: .2s ease all;
  }

  .true_false {
    display: flex;
    color:teal;
    border:springgreen;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    min-height: 20vh;
    flex: 1;
    display: flex;
  }

  .tf_ans {
    height: 45px;
    width: 70px;
    color: rgb(255, 255, 255);
    background-color: rgb(15, 200, 157);
    font-family: "Source Sans Pro", system-ui, sans-serif;
    font-size: 20px;
    text-align: center;
    line-height: 38px;
    font-weight: 600;
    margin: 0px 8px 10px 0px;
    border-radius: 15px;
    padding: 0px 12px;
    text-decoration: none;
  }

  .mcq {
    display: flex;
    min-height: 10vh;
    justify-content: center;
    margin: 0px 8px 10px 0px;
  }

  .final_button {
    flex: 1;
    align-self: flex-end;
    align-items: flex-end;
    justify-content: flex-end;
  }
</style>
