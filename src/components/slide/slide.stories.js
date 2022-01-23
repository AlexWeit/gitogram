import slide from './slide.vue'
import { xProgress } from '@/components/xProgress'
import { user } from '@/components/user'
import { xButton } from '@/components/xButton'

export default {
  title: 'slide',
  component: { slide },
  subcomponents: {
    xProgress,
    user,
    xButton
  }
}

const template = () => ({
  components: {
    slide,
    xProgress,
    user,
    xButton
  },
  template: `
    <slide></slide>
  `
});

export const Default = template.bind({});
