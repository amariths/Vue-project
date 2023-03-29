import {createStore} from "vuex"

const store = createStore ({
    state: {
        counter: 1
    },

    mutations: {
        increment(state) {
            state.counter += 1
          },
          oncrement(state) {
            state.counter -= 1
          }
    },

    strict: true

})


export default store
