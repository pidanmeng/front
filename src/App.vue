<template lang="pug">
  #app
    router-view#content
</template>

<style lang="scss">
*{
    &::selection{
        color: $selectionColor;
        font-size: 0.1;
    }
}
body{
    margin: 0;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    color: $textColor;
    background-color: $bg;
    height: 100vh;
    text-align: center;
    #content{
        width: 100%;
    }
}
</style>

<script>
    export default {
        name: "App",
        data: ()=>{
            return{}
        },
        async mounted() {
            await this.checkLogin();
        },
        methods: {
            async checkLogin() {
                console.log(`checkLogin`);
                let res = await this.axios.get('/api/users/checkLogin');
                this.$store.commit("setUserInfo", res.data.userInfo);
            }
        }
    }
</script>
