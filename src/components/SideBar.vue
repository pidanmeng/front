<template lang="pug">
    #sideBar
        .nav(:class="{hide:!hide}", @click="toggle")
            icon(name="align-left")
        .sideBarItem(:class="{hide}")
            .sideBarHead
                .item.title
                    p {{title}}
                    icon.close(name="times", scale=1.5, @click="toggle")
                .item.userInfo
                    img.face(:src="faceUrl")
                    .info
                        p.userName {{userName}}
                        p.userAuthority {{userAuthority}}
                        p.userStatus {{userStatus}}
                form.item.searchBar(@submit.prevent="searchBar.search(query)")
                    input.search(type="text" placeholder="Search..." v-model="query")
            .sideBarBody
                .group(v-for="group in sideBarItems")
                    .block(v-if="!group.groupItems" @click="group.method" class="clickable")
                        p.groupTitle.row {{group.groupName}}
                    .block(v-if="group.groupItems")
                        p.groupTitle.row {{group.groupName}}
                        .groupItem(v-for="item in group.groupItems")
                            .groupSubTitle.row(v-if="!item.children" @click="item.method" class="clickable")
                                i
                                    icon(:name="item.icon")
                                p.row {{item.itemName}}
                            .block(:key="item.index" v-if="item.children" :class="{showChildren:currentIndex === item.index}" )
                                .groupSubTitle.row(@click="switchIndex(item.index)" :class="{clickable:true}")
                                    i
                                        icon(:name="item.icon")
                                    p.row {{item.itemName}}
                                    icon.arrow(name="chevron-right" scale=0.75)
                                .itemChild(v-for="child in item.children")
                                    .row(@click="child.method") {{child.name}}

            .sideBarFoot
                .icon(v-for="icon in icons" @click="icon.method")
                    icon(:name="icon.name")
    //#sideBar
</template>

<script>

    export default {
        name: "SideBar",
        data: () => {
            return {
                hide: false,
                query: "",
                currentIndex: -1
            }
        },
        props: {
            title: {
                type: String,
                default: "PRO SIDEBAR"
            },
            faceUrl: {
                type: String,
                default: "https://www.z4a.net/images/2020/02/26/face.jpg"
            },
            userName: {
                type: String,
                default: "皮蛋萌"
            },
            userAuthority: {
                type: String,
                default: "Administrator"
            },
            userStatus: {
                type: String,
                default: "Online"
            },
            searchBar: {
                type: Object,
                default: () => {
                    return{
                        search: query => {
                            console.log(query);
                        }
                    }
                }
            },
            sideBarItems: {
                type: Array,
                default: () => {
                    return [
                        {
                            groupName: "General",
                            method: ()=> {},
                            groupItems: [
                                {
                                    index: 1,
                                    itemName: "Posts",
                                    icon: "keyboard",
                                    method: () => {},
                                    children: [
                                        {
                                            name: "Markdown Editor",
                                            method: () => {}
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            icons: {
                type: Array,
                default:() => {
                    return [
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
        },
        methods: {
            toggle(){
                this.hide = !this.hide;
            },
            switchIndex(index){
                this.currentIndex = this.currentIndex===index? -1: index;
            }
        }
    }
</script>

<style scoped lang="scss">
    .clickable{
        cursor: pointer;
    }
    .hide{
        transform: translateX(-120%);
    }
    .nav{
        @include anime(0.5s);
        position: fixed;
        display: flex;
        top: 2rem;
        width: 2rem;
        height: 2rem;
        border-radius: 0 0.5rem 0.5rem 0;
        background-color: $componentBg;
        justify-content: center;
        align-items: center;
        box-shadow:0.1rem 0 1rem 0 $shadowColor;
        cursor: pointer;
        &:hover{
            background-color: $selectedComponent;
            color: $blue;
            svg{
                filter: drop-shadow( 0 0 1rem $blue);
            }
        }

     }
    .sideBarItem{
        @include anime(0.5s);
        height: 100%;
        color: $textColor;
        background-color: $componentBg;
        box-shadow:0.1rem 0 1rem 0 $shadowColor;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: space-between;

        .sideBarHead{
            flex: 0;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            .item{
                border-bottom: 1px solid $borderColor;
                padding: 1rem 2rem;
            }
            .title{
                font-weight: bold;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                p{
                    margin: 0;
                }
                .close{
                    @include anime(0.2s);
                    &:hover{
                        color: white;
                        transform: rotate(90deg);
                        cursor: pointer;
                    }
                }
            }
            .userInfo{
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                .face{
                    width: 60px;
                    height: 60px;
                    border-radius: 15%;
                }
                .info{
                    margin-left: 1rem;
                    p{
                        margin: 0;
                        text-align: left;
                        &.userName{
                            font-weight: bold;
                        }
                        &.userAuthority{
                            font-size: 0.7rem;
                        }
                        &.userStatus{
                            font-size: 0.7rem;
                        }
                    }
                }
            }
            .searchBar{
                display: flex;
                .search{
                    flex: 1;
                    padding-block: 0.7rem;
                    outline: 0;
                    border: 0;
                    color: $textColor;
                    background-color: $selectedComponent;
                    border-radius: 0.2rem;
                    text-indent: 1rem;
                }
            }
        }
        .sideBarBody{
            flex: 1;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;

            .group{
                display: flex;
                align-items: stretch;

                .block{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: stretch;
                    .row{
                        padding: 0.5rem 0;
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;
                        align-items: center;
                        flex: 1;
                    }
                    p{
                        margin: 0;
                        font-weight: bold;
                    }
                    .groupTitle{
                         margin: 0 1rem;
                    }
                }
                .groupItem{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    .row, .block{
                        justify-content: space-between;
                        i{
                            @include anime(0.2s);
                            width: 2rem;
                            height: 2rem;
                            flex: none;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border-radius: 20%;
                            background-color: $selectedComponent;
                        }
                        p{
                            @include anime(0.2s);
                            font-weight: normal;
                            margin-left: 1rem;
                        }
                        .arrow{

                            @include anime(0.2s);
                        }
                        .groupSubTitle{
                            margin: 0 1rem;
                        }
                        .itemChild{
                            div{
                                display: flex;
                                align-items: center;
                                justify-content: center;
                            }
                        }
                    }
                    .showChildren{
                        .arrow{
                            transform: rotate(90deg);
                        }
                        .itemChild{
                            height: 100%;
                        }
                    }
                    .itemChild{
                        @include anime(.2s);
                        background-color: $selectedComponent;
                        height: 0;
                        overflow: hidden;
                    }

                }
            }
        }
        .sideBarFoot{
            flex: none;
            height: 2rem;
            display: flex;
            flex-direction: row;
            align-items: stretch;
            justify-content: space-around;
            border-top: 1px solid $borderColor;
            background-color: $selectedComponent;
            box-shadow: 0 -1px 5px $shadowColor;
            .icon{
                @include anime(.2s);
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                &:hover{
                    background-color: $borderColor;
                }
            }
        }
    }

</style>
