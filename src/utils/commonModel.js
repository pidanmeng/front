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
                    first: ()=>{
                        let doc = this['$tags'];
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
                    if(item.postHandle instanceof Array && !!item.postHandle.length){
                        for( let handle in item.postHandle ){
                            if(item.postHandle.hasOwnProperty(handle)){
                                this[`$${item.name}`]['__proto__'][handle] = item.postHandle[handle];
                            }
                        }
                    }
                    let method = item.method || 'post';
                    axios[method](item.url, item.data).then(doc=>{
                        let res = doc;
                        if(!!item.preHandle){
                            res = item.preHandle(doc);
                        }
                        this[`$${item.name}`] = res;
                    });
                },
                set: data => {
                    item.data = data;
                }
            });
        }
    }
}
let common = new CommonModel();

console.log(common.$tags);
export default common;