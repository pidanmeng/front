<template lang="pug">
    p {{userId}}
</template>

<script>
    export default {
        name: "User",
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

<style scoped>

</style>
