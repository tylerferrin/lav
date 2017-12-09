import {createClient} from '~/plugins/contentful.js'
import _ from 'lodash'

const client = createClient()

export const state = () => ({
  events: []
})

export const mutations = {
  setEvents (state, events) {
    state.events = events
  }
}

export const actions = {
  async nuxtServerInit ({commit}) {
    return client.getEntries()
      .then((response) => {
        let filteredDownResponse = _.map(response.items, (item) => {
          return Object.assign({}, item.fields, item.sys.contentType.sys)
        })
        let events = _.orderBy(_.filter(filteredDownResponse, (item) => {
          return item.id === 'event'
        }), 'dateAndTime')

        commit('setEvents', events)
      })
      .catch(console.error)
  }
}
