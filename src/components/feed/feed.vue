<template>
  <div class="c-feed mt-32">
    <div class="feed__user">
      <user :avatar="avatarUrl" :username="username"></user>
    </div>
    <div class="feed__card mt-16">
      <slot name="card"></slot>
    </div>
    <div class="toggler__wrap mt-18">
      <toggler @onToggle="toggle"></toggler>
    </div>
    <div class="comments mt-12" v-if="shown">
      <ul class="comments__list">
        <li
          class="comments__item"
          v-for="n in 5" :key="n"
        >
          <comment
            text="Some comment text"
            username="John"
          ></comment>
        </li>
      </ul>
    </div>
    <div class="date mt-10">
      <div class="day">15 may</div>
    </div>
  </div>
</template>

<script>
import { user } from '@/components/user'
import { toggler } from '@/components/toggler'
import { comment } from '@/components/comment'

export default {
  name: 'Feed-item',
  components: {
    user,
    toggler,
    comment
  },
  props: {
    avatarUrl: {
      type: String,
      default: 'https://picsum.photos/300/300'
    },
    username: {
      type: String,
      default: 'User Loft',
      required: true
    }
  },
  data () {
    return {
      shown: false
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style src="./feed.scss" scoped lang="scss"></style>
