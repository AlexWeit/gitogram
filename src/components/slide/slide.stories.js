import slide from './slide.vue'

export default {
  title: 'slide',
  component: { slide }
}

const template = () => ({
  components: {
    slide
  },
  template: `
    <slide></slide>
  `
});

export const Default = template.bind({});
