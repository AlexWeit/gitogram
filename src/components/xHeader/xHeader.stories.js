import xHeader from './xHeader.vue'
import { logo } from '@/components/logo'
import { icon } from '@/icons'
import { avatar } from '@/components/avatar'

export default {
  title: 'xHeader',
  component: { xHeader },
  argTypes: {

  }
}

const template = (args) => ({
  components: {
    xHeader
  },
  subcomponents: {
    logo,
    icon,
    avatar
  },
  data () {
    return { args }
  },
  template: `
    <x-header v-bind="args">Following</x-header>
  `
});

export const Default = template.bind({});

Default.args = {

}
