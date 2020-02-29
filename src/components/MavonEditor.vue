<template lang="pug">
    .editor
        mavon-editor.mavon(ref='editor' v-model='doc' v-bind="mavonConf")
    //div
</template>

<script>
    import {mavonEditor} from 'mavon-editor';
    import 'mavon-editor/dist/css/index.css'
    export default {
        name: "MavonEditor",
        components: {mavonEditor},
        data: () => {
            return{
                doc: '',
                mavonConf: {
                    boxShadowStyle: '#000',
                    toolbarsBackground: '#00000000',
                    editorBackground: '#00000000',
                    previewBackground: '#00000000',
                    codeStyle: 'kimbie.dark',
                    tabSize: 4,
                    toolbars: {
                        bold: true, // 粗体
                        italic: true, // 斜体
                        header: true, // 标题
                        underline: true, // 下划线
                        strikethrough: true, // 中划线
                        mark: true, // 标记
                        superscript: true, // 上角标
                        subscript: true, // 下角标
                        quote: true, // 引用
                        ol: true, // 有序列表
                        ul: true, // 无序列表
                        link: true, // 链接
                        imagelink: true, // 图片链接
                        code: true, // code
                        table: true, // 表格
                        readmodel: true, // 沉浸式阅读
                        htmlcode: true, // 展示html源码
                        help: true, // 帮助
                        undo: true, // 上一步
                        redo: true, // 下一步
                        trash: true, // 清空
                        save: true, // 保存（触发events中的save事件）
                        navigation: true, // 导航目录
                        alignleft: true, // 左对齐
                        aligncenter: true, // 居中
                        alignright: true, // 右对齐
                        subfield: true, // 单双栏模式
                        preview: true, // 预览
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
    .editor{
        display: flex;
        .mavon{
            background-color: $selectedComponent;
            flex: 1;
            margin: 5rem;
            .v-note-op{
                border-bottom: 1px solid $borderColor;
                .v-right-item, .v-left-item{
                    border-radius: 4px 4px 0 0;
                    .op-icon-divider{
                        border-left: 1px solid $borderColor;
                    }
                    .op-icon{
                        color: $textColor;
                        &:hover{
                            color: $mainColor;
                            background-color: $componentBg;
                            &::before{
                                text-shadow: 0 0 5px $mainColor;
                            }
                        }
                        &.selected{
                            color: $mainColor;
                            background-color: $componentBg;
                            &::before{
                                text-shadow: 0 0 5px $mainColor;
                            }
                        }
                        .popup-dropdown{
                            box-shadow: 0 0 6px 0 rgba(0,0,0,0.5);
                            background-color: $componentBg;
                            border-width: 0;
                            .dropdown-item{
                                background-color: $selectedComponent;
                                &:hover{
                                    color: $mainColor;
                                    text-shadow: 0 0 5px $mainColor;
                                }
                            }
                        }
                    }
                }
            }
            .v-note-panel{
                .v-note-edit{
                    &::-webkit-scrollbar{
                        background-color: $componentBg !important;
                    }
                    .content-input-wrapper{
                        .content-input{
                            .auto-textarea-input{
                                background-color: #00000000;
                                color: $textColor;
                            }
                        }
                    }
                }
                .v-note-show{
                    color: $textColor;
                    .v-show-content{
                        &::-webkit-scrollbar{
                            background-color: $componentBg !important;
                        }
                        table{
                            thead, tbody{
                                tr{
                                    background-color: $selectedComponent;
                                    th, td{
                                        border: 1px solid $borderColor;
                                        color: $textColor;
                                    }
                                    &:nth-child(2n){
                                        background-color: $borderColor;
                                    }
                                }
                            }
                        }
                        img{
                            background-color: #00000000;
                        }
                        pre{
                            background-color: $componentBg;
                            code{
                                background-color: #00000000;
                                color: $textColor;
                            }
                            .hljs{
                                code{
                                    background-color: #00000000;
                                    color: $textColor;
                                }
                            }
                        }
                        blockquote{
                            border-left: .25em solid $mainColor;
                        }
                        code{
                            background-color: $componentBg;
                            color: $mainColor;
                        }
                        h1, h2{
                            border-bottom: 1px solid $borderColor;
                        }
                    }
                }
            }
        }
    }

</style>
