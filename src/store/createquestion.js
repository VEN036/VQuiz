import { firestoreAction } from 'vuexfire'
import { quizRef } from '@/firebase'

const state = () => ({
  quizid: null,
  quiz: {
    questions: [],
    name: '',
    createdAt: '',
    updatedAt: '',
    userId: ''
  }
})

const mutations = {
  SET_QUIZ_ID: (state, payload) => {
    state.quiz.quizid = payload
  },
  ADD_QUESTION: (state, payload) => {
    state.quiz.questions.push(payload)
  }
}

const getters = {}

const actions = {
  getQuiz: firestoreAction(async ({ bindFirestoreRef }, id) => {
    console.log(id)
    await bindFirestoreRef('quiz', quizRef.doc(id))
  })
}

export default { state, mutations, getters, actions }
