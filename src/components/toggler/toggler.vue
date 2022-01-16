<template>
  <button :class="[{ active: show }, 'toggler button']"
          @click="onToggle">
    <div class="toggler__inner">
      <span>{{ buttonText }} issues</span>
      <span>
        <div class="icon icon_home ml-5">
          <icon name="triangle"></icon>
        </div>
      </span>
    </div>
  </button>
</template>

<script>
import { icon } from '@/icons'
export default {
  name: 'Toggler',
  components: {
    icon
  },
  emits: ['onToggle'],
  data () {
    return {
      show: false
    }
  },
  computed: {
    buttonText () {
      return this.show ? 'Hide' : 'Show'
    }
  },
  methods: {
    onToggle () {
      this.show = !this.show
      this.$emit('onToggle', this.show)
    }
  }
}
</script>

<style src="./toggler.scss" lang="scss" scoped></style>
