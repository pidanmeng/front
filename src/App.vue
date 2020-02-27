<template lang="pug">
  #app
    router-view#content
</template>

<style lang="scss">
@font-face {
    font-family: SiyuanHei;
    src: url('./assets/SourceHanSansCN-Light-2.otf');
}
*{
    letter-spacing: 2px;
    &::selection{
        color: $selectionColor;
        font-size: 0.1;
    }
}
body{
    margin: 0;
}
::-webkit-scrollbar {
    width: 5px;
    height: 7px;
}
::-webkit-scrollbar-button {
    width: 0;
    height: 0;
}
::-webkit-scrollbar-thumb {
    background: $selectedComponent;
    border: 0 none #ffffff;
    border-radius: 0;
}
::-webkit-scrollbar-thumb:hover {
    background: #525965;
}
::-webkit-scrollbar-thumb:active {
    background: #525965;
}
::-webkit-scrollbar-track {
    background: transparent;
    border: 0 none #ffffff;
    border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
    background: transparent;
}
::-webkit-scrollbar-track:active {
    background: transparent;
}
::-webkit-scrollbar-corner {
    background: transparent;
}
#app {

    font-family: "Segoe UI", SiyuanHei,serif;
    font-size: 0.9rem;
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
