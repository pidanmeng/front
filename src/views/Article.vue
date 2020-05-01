<template lang="pug">
    el-container(direction='vertical')
        el-main(:style="{display:'flex', flexDirection:'column'}")
            el-form(:model="articleData" :style="{margin:0}" label-width='80px')
                el-form-item(label='Title')
                    el-input(v-model="articleData.title")
                el-form-item(label='Tags')
                    el-select(v-model="articleData.tags" :style="{width:'100%'}" allow-create filterable multiple default-first-option)
                        el-option(v-for='item in common.$tags' :key="item" :label="item" :value="item")
            mavon-editor(:style="{flex:1}" v-model="articleData.md")
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
                    tags: [],
                    md:''
                },
                common
            }
        },
        computed: {
            preMD(){
                let res = '';
                res += `# ${this.articleData.title}\n`;
                let arr = this.articleData.tags.map(item=>{
                    return `\`${item}\``;
                });
                if(arr.length>=1){
                    res += arr.reduce((a,b)=>{
                        return a+' '+b;
                    });
                }
                return res;
            }
        },
        mounted() {
            common.init(['tags']);
        }
    }
</script>

<style scoped lang="scss">

</style>
