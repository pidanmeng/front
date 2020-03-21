<template lang="pug">
    el-container(direction='vertical')
        el-main
            el-form(:model="articleData" :style="{margin:0}" label-width='80px')
                el-form-item(label='Title')
                    el-input(v-model="articleData.title")
                el-form-item(label='Tags')
                    el-select(v-model="articleData.tags" :style="{width:'100%'}" allow-create filterable multiple default-first-option)
            mavon-editor
    //.content
</template>

<script>
    import MavonEditor from '../components/MavonEditor';
    import common from "../utils/commonModel";

    export default {
        name: "Article",
        components: {
            MavonEditor
        },
        data: ()=>{
            return {
                articleData: {
                    title: '',
                    tags: '',
                    notebook_id: ''
                },
                common
            }
        },
        computed: {
            tag(){
                return common
            }
        },
        mounted() {
            common.tags;
        }
    }
</script>

<style scoped lang="scss">

</style>