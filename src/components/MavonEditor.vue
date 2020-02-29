<template lang="pug">
    .editor
        mavon-editor.mavon(ref='editor' v-model='doc')
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
                doc: ''
            }
        }
    }
</script>

<style scoped lang="scss">
    .editor{
        display: flex;
        .mavon{
            flex: 1;
            margin: 5rem;
        }
    }
</style>
