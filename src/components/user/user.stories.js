import user from './user.vue'

export default {
  title: 'user',
  components: { user }
}

const template = () => ({
  components: {
    user
  },
  template: `
    <user></user>
  `
});

export const Default = template.bind({});
