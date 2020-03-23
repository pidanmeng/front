<template lang="pug">
    el-container(direction='vertical')
        el-main(:style="{display:'flex', flexDirection:'column'}")
            el-form(:model="articleData" :style="{margin:0}" label-width='80px')
                el-form-item(label='Title')
                    el-input(v-model="articleData.title")
                el-form-item(label='Tags')
                    el-select(v-model="articleData.tags" :style="{width:'100%'}" allow-create filterable multiple default-first-option)
                        el-option(v-for='item in common.$tags' :key="item" :label="item" :value="item")
            mavon-editor(:style="{flex:1}")
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
            common.init(['tags']);
        }
    }
</script>

<style scoped lang="scss">

</style>
