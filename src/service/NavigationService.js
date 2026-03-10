import router from '@/router/index.js'

export default {

  navigateToErrorView(){
    router.push({route: 'errorRoute'})
  }

}
