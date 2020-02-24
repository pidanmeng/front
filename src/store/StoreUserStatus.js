
const state = {
    _id: "",
    userInfo: {}
};

const getters = {

};

const actions = {

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
