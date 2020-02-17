<template lang="pug">
  #app
    #nav
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
    #nav {
        flex-grow: 1;
    }
    #content{
        flex-grow: 1;
    }
}


</style>
