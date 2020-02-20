<template lang="pug">
  #app
    router-view#content
</template>

<style lang="scss">
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
