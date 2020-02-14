<template lang="pug">
  .home
    img(alt="Vue logo" src="@/assets/logo.png" @click="get")
    hello-world
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
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
