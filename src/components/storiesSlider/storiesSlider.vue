<template>
  <div class="c-stories-slider">
    <div class="stories-container">
      <slide active></slide>
    </div>
  </div>
</template>

<script>
import { slide } from '@/components/slide'

export default {
  components: {
    slide
  },
  data () {
    return {}
  },
  computed: {},
  methods: {
    getStoryData (obj) {
      return {
        id: obj.id
      }
    }
  }
}
</script>

<style src="./storiesSlider.scss" scoped lang="scss"></style>
