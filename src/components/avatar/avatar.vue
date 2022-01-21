<template>
  <div class="avatar" :class="size">
    <img :src="avatarUrl" class="img" alt="avatar">
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    avatarUrl: {
      type: String,
      default: 'https://picsum.photos/300/300',
      required: true
    },
    size: {
      type: String,
      required: true
    }
  }
}
</script>

<style src="./avatar.scss" scoped lang="scss"></style>
