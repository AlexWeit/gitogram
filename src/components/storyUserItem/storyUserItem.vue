<template>
  <button
    class="c-story-user-item"
    @click="$emit('onPress')"
  >
    <div class="avatar__wrap">
      <avatar :avatarUrl="avatarUrl" :size="size"></avatar>
    </div>
    <div class="username mt-10">{{ username }}</div>
  </button>
</template>

<script>
import { avatar } from '@/components/avatar'

export default {
  name: 'StoryUserItem',
  components: {
    avatar
  },
  emits: ['onPress'],
  props: {
    avatarUrl: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped src="./storyUserItem.scss"></style>
