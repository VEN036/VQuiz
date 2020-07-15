import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/landingPage'
import LoginPage from '@/components/LoginPage'
import SignupPage from '@/components/SignupPage'
import ForgotPassword from '@/components/ForgotPassword'
import Profile from '@/views/Profile'
import DashBoard from '@/views/DashBoard'
import PlayQuiz from '@/views/PlayQuiz'
import CreateQuestions from '@/views/CreateQuestions'
import QuestionType from '@/views/QuestionType'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/loginpage',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/signuppage',
      name: 'SignupPage',
      component: SignupPage
    },
    {
      path: '/forgotpassword',
      name: 'ForgotPassword',
      component: ForgotPassword
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/dashboard',
      name: 'DashBoard',
      component: DashBoard
    },
    {
      path: '/playquiz',
      name: 'PlayQuiz',
      component: PlayQuiz
    },
    {
      path: '/createquestions',
      name: 'CreateQuestions',
      component: CreateQuestions
    },
    {
      path: '/questiontype',
      name: 'QuestionType',
      component: QuestionType
    }
  ]
})
