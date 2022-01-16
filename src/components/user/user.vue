<template>
  <div class="user">
    <avatar
      class="user__avatar mr-12"
      :avatar="avatar"
      :size="size"
    ></avatar>
    <div>
      <div class="user__name mb-4">{{ username }}</div>
      <div v-if="type" class="user__type">{{ type }}</div>
    </div>
  </div>
</template>

<script>
import { avatar } from '@/components/avatar'

export default {
  name: 'User',
  components: {
    avatar
  },
  props: {
    avatar: {
      type: String,
      required: true
      // default: 'https://picsum.photos/300/300'
    },
    username: {
      type: String,
      required: true
      // default: 'John Doe'
    },
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'avatar_m'
    }
  },
  setup (props) {
    return {}
  }
}
</script>

<style src="./user.scss" scoped lang="scss"></style>
