const state = {
  content: ''
}

const mutations = {
  SETCONTENT (state, { content }) {
    console.log(2)
    state.content = content
  }
}

const actions = {
  setContent ({ commit }, { content }) {
    // do something async
    console.log(1)
    console.log(arguments)
    commit('SETCONTENT', { content })
  }
}

export default {
  state,
  mutations,
  actions
}
