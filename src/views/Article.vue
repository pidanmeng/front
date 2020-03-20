<template lang="pug">
    el-container
        el-header
            el-form(:model="articleData")
                el-form-item
                    el-input
        el-main
            mavon-editor

    //.content
</template>

<script>
    import MavonEditor from '@/components/MavonEditor';
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
                }
            }
        }
    }
</script>

<style scoped lang="scss">

</style>