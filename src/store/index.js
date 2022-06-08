import {createStore} from 'vuex';

let userStored = window.localStorage.getItem('user_stored');
if (userStored === null) {
    userStored = undefined;
}

let userListStored = window.localStorage.getItem('user_list_stored');
if (userListStored === null) {
    userListStored = undefined;
}

export default createStore({
    // Store Variables
    state: {
        newsFeed: undefined,
        user: userStored,
        userList: userListStored,
    },
    // Get the values
    getters: {
        getNewsFeed: state => {
            return state.newsFeed;
        },
        getUser: state => {
            return state.user;
        },
        getUserList: state => {
            return state.userList;
        },
    },
    //Change Variables values
    mutations: {
        update_newsFeed(state, newNewsFeed) {
            state.newsFeed = newNewsFeed;
        },
        update_user(state, newUser) {
            window.localStorage.setItem('user_stored', newUser);
            state.user = newUser;
        },
        update_userList(state, newUserList) {
            window.localStorage.setItem('user_list_stored', newUserList);
            state.userList = newUserList;
        }
    },
    actions: {},
    modules: {}
})
