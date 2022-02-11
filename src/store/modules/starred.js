import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    SET_STARRED: (state, starred) => {
      state.data = starred.map((repo) => {
        repo.following = true
        return repo
      })
    },
    SET_FOLLOWING: (state, payload) => {
      state.data = state.data.map((repo) => {
        if (payload.id === repo.id) {
          repo.following = payload.following
        }
        return repo
      })
    }
  },
  getters: {
    getStarredRepo: (state) => (id) => state.data.find((repo) => repo.id === id)
  },
  actions: {
    async fetchStarred ({ commit }, payload) {
      try {
        const { data } = await api.starred.getStarredRepos({ limit: payload?.limit })
        commit('SET_STARRED', data)
      } catch (error) {
        console.log(error)
        throw error
      }
    },
    async starRepo ({ commit, getters }, id) {
      console.log(id)
      console.log(getters.getStarredRepo(id))
      // const { name: repo, owner } = getters.getStarredRepo(id)
      // try {
      //   await api.starred.starRepo({ owner: owner.login, repo })
      //   commit('SET_FOLLOWING', {
      //     id,
      //     following: {
      //       status: true
      //     }
      //   })
      // } catch (error) {
      //   console.log(error)
      //   throw error
      // }
    },
    async unStarRepo ({ commit, getters }, id) {
      const { name, owner } = getters.getStarredRepo(id)
      try {
        await api.starred.unStarRepo({ owner: owner.login, name })
        commit('SET_FOLLOWING', { id, following: false })
      } catch (error) {
        console.log(error)
        throw error
      }
    }
  }
}
