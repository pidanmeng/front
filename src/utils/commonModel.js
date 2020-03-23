import axios from 'axios';

class CommonModel {
    constructor() {
        this.$tags = null;
        this.models = [
            {
                name: 'tags',
                method: 'post',
                url: '/blogApi/static',
                data: {
                    name: 'tags'
                },
                preHandle:(doc)=>{
                    return doc.data.value;
                },
                postHandle: {
                    first: function(){
                        let doc = this;
                        if(doc instanceof Array && doc.length>0){
                            return doc[0];
                        }else{
                            return doc;
                        }
                    }
                }
            }
        ];
        this.bindModels();
    }
    bindModels(){
        for( let item of this.models ){
            Object.defineProperty(this, `${item.name}`, {
                get: () => {
                    let method = item.method || 'post';
                    axios[method](item.url, item.data).then(doc=>{
                        let res = doc;
                        if(!!item.preHandle){
                            res = item.preHandle(doc);
                        }
                        this[`$${item.name}`] = res;
                        if(item.postHandle instanceof Array && !!item.postHandle.length){
                            for( let handle in item.postHandle ){
                                if(item.postHandle.hasOwnProperty(handle)){
                                    this[`$${item.name}`][handle] = item.postHandle[handle];
                                }
                            }
                        }
                    }).catch(err=>{
                        console.error(err);
                    });
                },
                set: data => {
                    item.data = data;
                }
            });
        }
    }
    init(array){
        for(let item of array){
            this[item];
        }
    }
}
let common = new CommonModel();

export default common;
