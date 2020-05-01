import axios from 'axios';
import { Message } from "element-ui";

class Requests {
    constructor() {
    }
    static post(url, data){
        return axios.post('/blogApi'+url, data).then((res)=>{
            return Promise((resove, reject)=>{
                if(!!(res.data.status)){
                    resove(res.data);
                } else {
                    Message({
                        message: res.message,
                        type: 'error'
                    });
                    reject(res.message);
                }
            })
        })
    }
    static get(url, data){
        return axios.get('/blogApi'+url, data).then((res)=>{
            return Promise((resove, reject)=>{
                if(!!(res.data.status)){
                    resove(res.data);
                } else {
                    Message({
                        message: res.message,
                        type: 'error'
                    });
                    reject(res.message);
                }
            })
        })
    }
}

export default Requests;