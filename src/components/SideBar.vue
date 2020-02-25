<template lang="pug">
    #sideBar
        .sideBarHead {{title}}
        .sideBarBody
        .sideBarFoot
            icon(name="home")
    //#sideBar
</template>

<script>

    export default {
        name: "SideBar",
        data: () => {
            return {
            }
        },
        props: {
            title: {
                type: String,
                default: "皮蛋萌"
            }
        }
    }
</script>

<style scoped lang="scss">
    #sideBar{
        background-color: $componentBg;
        box-shadow:0.1rem 0 1rem 0 $shadowColor;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: space-between;
        .sideBarHead{
            height: 20vh;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: space-around;
        }
        .sideBarBody{
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
        }
        .sideBarFoot{
            height: 2rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
        }
    }

</style>
