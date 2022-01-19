import avatar from './avatar.vue'

export default {
  title: 'avatar',
  components: {
    avatar
  }
}

export const defaultView = () => ({
  components: {
    avatar
  },
  template: '<avatar></avatar>'
})

defaultView.story = {
  name: 'Standart view'
}

// export const borderView = () => ({
//   template: '<p style="border: 1px solid red">test storybook</p>'
// });
//
// borderView.story = {
//   name: "With border"
// }
