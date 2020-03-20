<template lang="pug">
    .Users
        SideBar.sideBar(v-bind="sideBarData", @sideBarClosed="sideBarClosed")
        router-view.content(:class="{fullDisplay: hideSideBar}")
    //p
</template>

<script>
    import SideBar from '@/components/SideBar';
    export default {
        name: "User",
        components: {SideBar},
        data:() => {
            return{
                sideBarData: {},
                hideSideBar: false
            }
        },
        methods: {
            routeFac(path){
                return function () {
                    this.$router.push(path);
                }
            },
            sideBarClosed(hide){
                this.hideSideBar = hide;
            }
        },
        computed: {
            userId() {
                return this.$store.state.userStatus.userInfo.userId;
            }
        },
        created() {
            let _this = this;
            _this.sideBarData = {
                title: '博客后台',
                userName: _this.$store.state.userStatus.userInfo.userId,
                sideBarItems: [
                    {
                        groupName: 'General',
                        groupItems: [
                            {
                                index: 1,
                                itemName: 'Article',
                                icon: 'keyboard',
                                children: [
                                    {
                                        name: 'Markdown Editor',
                                        method(){_this.$router.push({name: 'article_editor'})}
                                    },
                                    {
                                        name: 'History',
                                        method(){_this.$router.push('article_history')}
                                    },
                                    {
                                        name: 'Settings',
                                        method(){_this.$router.push('article_settings')}
                                    }
                                ]
                            },
                            {
                                index: 2,
                                itemName: 'Design',
                                icon: 'paint-brush',
                                children: [
                                    {
                                        name: 'Upload',
                                        method(){_this.$router.push('design_upload')}
                                    },
                                    {
                                        name: 'Gallery Configuration',
                                        method(){_this.$router.push('design_gallery_conf')}
                                    },
                                    {
                                        name: 'Settings',
                                        method(){_this.$router.push('design_settings')}
                                    }
                                ]
                            },
                            {
                                index: 3,
                                itemName: 'Micro Blog',
                                icon: 'rss',
                                children: [
                                    {
                                        name: 'Upload',
                                        method(){_this.$router.push('blog_upload')}
                                    },
                                    {
                                        name: 'History',
                                        method(){_this.$router.push('blog_history')}
                                    },
                                    {
                                        name: 'Settings',
                                        method(){_this.$router.push('blog_settings')}
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        groupName: 'Extra',
                        groupItems: [
                            {
                                index: 4,
                                itemName: 'Settings',
                                icon: 'cog',
                                method(){_this.$router.push('user_settings')}
                            }
                        ]
                    }
                ],
                icons: [
                    {
                        name: "home",
                        method: ()=>{ console.log("home")}
                    },
                    {
                        name: "bell",
                        method: ()=>{ console.log("bell")}
                    },
                    {
                        name: "cog",
                        method: ()=>{ console.log("cog")}
                    },
                    {
                        name: "power-off",
                        method: ()=>{ console.log("power-off")}
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .sideBar{
        position: fixed;
        width: 250px;
        height: 100vh;
    }
    .content{
        @include anime(.5s);
        padding-left: 250px;
        height: 100vh;
        overflow: scroll;
        &.fullDisplay{
            padding-left: 0;
        }
    }
</style>
