<template lang="pug">
    .content
        SideBar.sideBar(:title="'haha'")
    //p
</template>

<script>
    import SideBar from '@/components/SideBar';
    export default {
        name: "User",
        components: {SideBar},
        data: ()=>{
            return{}
        },
        computed: {
            userId() {
                console.log(this.$store.state.userStatus.userInfo.userId);
                return this.$store.state.userStatus.userInfo.userId;
            }
        }
    }
</script>

<style scoped lang="scss">
    .sideBar{
        width: 15vw;
        height: 100vh;
    }
</style>
