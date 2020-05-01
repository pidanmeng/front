import axios from '@/utils/requests';
import { Message } from "element-ui";

const state = {
    _id: "",
    userInfo: {}
};

const getters = {

};

const actions = {
    login: function ({ commit }) {
        axios.get('/users').then(res=>{
            Message({
                message: '登录成功',
                type: 'success'
            });
        })
    }
};

const mutations = {
    set_id(state, value) {
        state._id = value;
    },
    setUserInfo(state, value) {
        state.userInfo = value;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
