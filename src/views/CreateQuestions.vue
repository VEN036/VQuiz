<template>
  <div>
    <h1 class="heading">add new question</h1>
    <div>
      <input class="questionbox"
        v-model="question.title"
        placeholder="your question goes here..."
      />
    </div>
    <br>
    <div>
      <QuestionType
        v-for="(questiontype, index) in questiontypes"
        :key="index"
        :option="questiontype"
        v-model="question.type"
        :questiontype="question.type"
        tabindex="0"
      >
        <input type = "radio"
          name="checkmark"
          v-if="questiontype.code === question.type"
        >
      </QuestionType>
    </div>
    <div v-if="question.type == 'T'" class="tf-answer-section">
      <QuestionType
        v-for="(tfchoice, index) in tfchoices"
        :key="index"
        v-model="question.tfanswer"
        :option="tfchoice"
      >
      </QuestionType>
    </div>
    <div v-if="question.type == 'M'">
      <textarea
        v-for="(answer, index) in question.mcqanswers"
        :key="index"
        class="mcqanswers"
        v-model="answer.value"
        theme="small"
        :placeholder="`answer ${index + 1}`"
        v-bind:icon="true"
      >
        <input type="radio"
          name="cancel"
          v-if="!answer.correct"
          v-model="answer.correct"
          @click="answer.correct = !answer.correct"
          v-bind:interactive="true"
        />
        <input type="radio"
          name="checkmark"
          v-if="answer.correct"
          v-model="answer.correct"
          @click="answer.correct = !answer.correct"
          v-bind:interactive="true"
        />
      </textarea>
    </div>
    <div>
      <button
        theme="primary"
        value="save and add more"
        @click="handleAddQuestion()"
      />
      <button theme="secondary" value="discard" />
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
  .heading {
    font-size: 2.7rem;
    font-weight: 500;
  }
  .questionbox {
    height: calc(3.0em + 1rem + 4px);
    width: calc(50.5em + 1rem + 4px);
    padding: .5rem 1rem;
    margin-right:30%;
    font-size: 1.25rem;
    line-height: 5.5;
    border-radius: .3rem;
  }

  .ques_type1 {
    margin: auto;
  }

  .select_radio {
    position: absolute;
    top: .25rem;
    left: -1.5rem;
    display: block;
    width: 1rem;
    height: 1rem;
    content: "";
    background: no-repeat 50% / 50% 50%;
  }
</style>
