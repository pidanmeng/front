<template lang="pug">
    .editor
        mavon-editor.mavon(ref='editor' v-model='doc' v-bind="mavonConf" @imgAdd="$imgAdd")
    //div
</template>

<script>
    import {mavonEditor} from 'mavon-editor';
    import 'mavon-editor/dist/css/index.css'

    export default {
        name: "MavonEditor",
        components: {mavonEditor},
        data: () => {
            return {
                title: 'Title',
                tag: ['code'],
                mavonConf: {
                    boxShadowStyle: '#000',
                    toolbarsBackground: '#00000000',
                    editorBackground: '#00000000',
                    previewBackground: '#00000000',
                    codeStyle: 'atom-one-dark',
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
        },
        computed: {
            doc: {
                get() {
                    let res = `# ${this.title}\n`;
                    for (var i of this.tag) {
                        res += `\`${i}\``;
                    }
                    res += '\n';
                    return res;
                },
                set(doc) {
                }
            }
        },
        methods: {
            $imgAdd(pos, $file) {
                var data = new FormData();
                data.append('smfile', $file);
                data.append('ssl', true);
                const loading = this.$loading({
                    text: '正在上传图片…',
                    lock: true,
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                this.axios.post(
                    '/smms/upload',
                    data
                ).then(doc => {
                    let url = '';
                    if('image_repeated'===doc.data.code){
                        url = doc.data.images;
                    }else if ('success'===doc.data.code){
                        url = doc.data.data.url;
                    }
                    if(!!url){
                        this.$refs.editor.$img2Url(pos, url);
                        this.$message({
                            showClose: true,
                            message: '图片上传成功',
                            type: 'success'
                        });
                    }else{
                        this.$message({
                            showClose: true,
                            message: `图片上传失败: ${doc.data.message}`,
                            type: 'error'
                        });
                    }
                }).catch(err=>{
                    console.error(JSON.stringify(err));
                    this.$message({
                        showClose: true,
                        message: `图片上传失败: ${err}`,
                        type: 'error'
                    });
                }).finally(()=>{
                    loading.close();
                })
            }
        }
    }
</script>

<style lang="scss">
    .editor {
        display: flex;

        .mavon {
            background-color: $componentBg;
            flex: 1;
            .v-note-op {
                border-bottom: 1px solid $borderColor;

                .v-right-item, .v-left-item {
                    border-radius: 4px 4px 0 0;

                    .op-icon-divider {
                        border-left: 1px solid $borderColor;
                    }

                    .op-icon {
                        color: $textColor;

                        &:hover {
                            color: $mainColor;
                            background-color: $selectedComponent;

                            &::before {
                                text-shadow: 0 0 5px $mainColor;
                            }
                        }

                        &.selected {
                            color: $mainColor;
                            background-color: $selectedComponent;

                            &::before {
                                text-shadow: 0 0 5px $mainColor;
                            }
                        }

                        .popup-dropdown {
                            box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
                            background-color: $selectedComponent;
                            border-width: 0;

                            .dropdown-item {
                                background-color: $componentBg;

                                &:hover {
                                    color: $mainColor;
                                    text-shadow: 0 0 5px $mainColor;
                                }
                            }
                        }
                    }
                }
            }

            .v-note-panel {
                .v-note-navigation-wrapper {
                    position: static;
                    background-color: $componentBg;
                    border: 0;
                    box-shadow: -1px 0 4px $shadowColor;

                    &.slideTop-enter {
                        width: 0;
                        height: auto;
                    }

                    &.slideTop-leave-active {
                        width: 0;
                        height: auto;
                    }

                    .v-note-navigation-title {
                        color: $textColor;
                        border-bottom: 1px solid $borderColor;
                    }

                    .v-note-navigation-content {
                        &::-webkit-scrollbar {
                            background-color: $selectedComponent !important;
                        }

                        color: $textColor;

                        h1, h2, h3, h4, h5, h6 {
                            @include anime(.2s);
                            color: $textColor;

                            &:hover {
                                color: $brightMainColor;
                                text-decoration-line: none;
                            }
                        }
                    }
                }

                .v-note-edit {
                    &.divarea-wrapper {
                        flex: 1;
                    }

                    &::-webkit-scrollbar {
                        background-color: $selectedComponent !important;
                    }

                    .content-input-wrapper {
                        .content-input {
                            .auto-textarea-input {
                                background-color: #00000000;
                                color: $textColor;
                            }
                        }
                    }
                }

                .v-note-show {
                    flex: 1;
                    color: $textColor;

                    &.single-show {
                        flex: 1;
                    }

                    .v-show-content {
                        &::-webkit-scrollbar {
                            background-color: $selectedComponent !important;
                        }

                        table {
                            tbody {
                                tr {
                                    background-color: $componentBg;

                                    th, td {
                                        border: 1px solid $borderColor;
                                        color: $textColor;
                                    }

                                    &:nth-child(2n) {
                                        background-color: $borderColor;
                                    }
                                }
                            }

                            thead {
                                tr {
                                    background-color: $selectedComponent;

                                    th, td {
                                        border: 1px solid $borderColor;
                                        color: $textColor;
                                    }
                                }
                            }
                        }

                        img {
                            background-color: #00000000;
                            max-height: 100vh;
                        }

                        pre {
                            background-color: $selectedComponent;

                            code {
                                background-color: #00000000;
                                color: $textColor;
                            }

                            .hljs {
                                code {
                                    background-color: #00000000;
                                    color: $textColor;
                                }
                            }
                        }

                        blockquote {
                            border-left: .25em solid $mainColor;
                        }

                        code {
                            background-color: $selectedComponent;
                            color: $mainColor;
                        }

                        h1, h2 {
                            border-bottom: 1px solid $borderColor;
                        }

                        mark {
                            background-color: $brightYellow;
                        }

                        ul {
                            padding-left: 1rem;

                            li {
                                margin: 0 0 16px 0;
                                list-style: none;
                                background-position: 0 0.62em;
                                padding-left: 28px;
                                position: relative;
                                height: 1.5rem;
                            }

                            li::before {
                                content: "";
                                display: block;
                                height: 1px;
                                width: 14px;
                                background-color: $mainColor;
                                position: absolute;
                                top: 50%;
                                left: 4px;
                            }

                            li[class]::before {
                                display: none;
                            }
                        }
                    }
                }
            }
        }
    }

</style>
