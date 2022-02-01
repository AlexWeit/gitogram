import slide from './slide.vue'
import { xProgress } from '@/components/xProgress'
import { user } from '@/components/user'
import { spinner } from '@/components/spinner'
import { placeholder } from '@/components/placeholder'
import { xButton } from '@/components/xButton'

export default {
  title: 'slide',
  component: { slide },
  subcomponents: {
    xProgress,
    user,
    spinner,
    placeholder,
    xButton
  }
}

const template = () => ({
  components: {
    slide,
    xProgress,
    user,
    spinner,
    placeholder,
    xButton
  },
  template: `
    <slide></slide>
  `
});

export const Default = template.bind({});
