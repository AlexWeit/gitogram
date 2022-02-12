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
    SET_ISSUES_TO_REPO: (state, { id, issues }) => {
      state.data = state.data.map((repo) => {
        const editedRepo = repo
        if (repo.id === id) {
          editedRepo.issues = issues
        }
        return editedRepo
      })
    }
  },
  actions: {
    async fetchStarred ({ commit }, payload) {
      try {
        const { data } = await api.starred.getStarredReposApi({ limit: payload?.limit })
        commit('SET_STARRED', data)
      } catch (error) {
        console.log(error)
        throw error
      }
    },
    async fetchIssuesForRepo ({ commit }, { id, owner, repo }) {
      commit('SET_ISSUES_TO_REPO', {
        id,
        issues: {
          loading: true
        }
      })

      try {
        const { data } = await api.issues.getIssues({ owner, repo })

        commit('SET_ISSUES_TO_REPO', {
          id,
          issues: {
            data,
            loading: false
          }
        })
      } catch (e) {
        commit('SET_ISSUES_TO_REPO', {
          id,
          issues: {
            loading: false,
            error: e
          }
        })
        console.log(e)
        throw e
      }
    }
  }
}
