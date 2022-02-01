<template>
  <div class="c-slide" :class="{ active }">
    <x-progress :active="active" class="mt-8 ml-8 mr-8"></x-progress>
    <user :username="data.username" :avatarUrl="data.avatarUrl" class="mt-12 ml-12 mr-12"></user>
    <div class="slide__content mt-12">
      <div class="loader" v-if="loading">
        <spinner></spinner>
      </div>
      <div class="slide__content-wrap ml-18 mr-18" v-else>
        <div v-if="data.content?.length"
             class="content__text"
             v-html="data.content"
        ></div>
        <placeholder v-else :paragraphs="2"></placeholder>
        <div class="slide__img">
          <img src="https://picsum.photos/300/300" alt="slide__img">
        </div>
        <div class="slide__text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consequatur deleniti dolor dolorem
            dolores eveniet, fuga, ipsam,
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consequatur deleniti dolor dolorem
            dolores eveniet, fuga, ipsam, labore optio reiciendis voluptatem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consequatur deleniti dolor dolorem
            dolores eveniet, fuga, ipsam, labore optio reiciendis voluptatem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consequatur deleniti dolor dolorem
            dolores eveniet, fuga, ipsam, labore optio reiciendis voluptatem.
          </p>
        </div>
      </div>
    </div>
    <div class="slide__button">
      <x-button :hover-text="Unfollow" class="mt-24">Following</x-button>
    </div>

    <button class="btn btn-next">
      <div class="icon icon_arrow">
        <icon name="arrow-left"></icon>
      </div>
    </button>
    <button class="btn btn-prev">
      <div class="icon icon_arrow">
        <icon name="arrow-right"></icon>
      </div>
    </button>
    <template>

    </template>
  </div>
</template>

<script>
import { xProgress } from '@/components/xProgress'
import { user } from '@/components/user'
import { spinner } from '@/components/spinner'
import { placeholder } from '@/components/placeholder'
import { xButton } from '@/components/xButton'
import { icon } from '@/icons'

export default {
  name: 'Slide',
  components: {
    xProgress,
    user,
    spinner,
    placeholder,
    xButton,
    icon
  },
  props: {
    active: Boolean,
    loading: Boolean,
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>

<style src="./slide.scss" scoped lang="scss"></style>
