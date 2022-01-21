<template>
  <div class="c-slide">
    <x-progress class="mt-8 ml-8 mr-8"></x-progress>
    <user class="mt-12 ml-12 mr-12"></user>
    <div class="slide__content mt-12">
      <div class="slide__content-wrap ml-18 mr-18">
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
  </div>
</template>

<script>
import xProgress from '../xProgress/xProgress'
import user from '../user/user'
import xButton from '../xButton/xButton'

export default {
  name: 'Slide',
  components: {
    xProgress,
    user,
    xButton
  }
}
</script>

<style src="./slide.scss" scoped lang="scss"></style>
