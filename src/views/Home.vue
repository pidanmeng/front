<template lang="pug">
  .home
    img(alt="Vue logo" src="@/assets/logo.png" @click="get")
    LoginItem
</template>

<script>
// @ is an alias to /src
import LoginItem from '@/components/LoginItem'

export default {
  name: 'home',
  components: {
      LoginItem
  },
  methods:{
      get:function(){
          this.axios.get('/api/users')
              .then(res=>{
                  console.log(res)
              })
      }
  }
}
</script>
