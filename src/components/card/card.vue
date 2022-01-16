<template>
  <div class="card">
    <div class="card__title_wrap mb-16">
      <h2 class="card__title mb-16">{{ title }}</h2>
    </div>
    <div class="card__desc mb-32">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti excepturi itaque minus natus obcaecati
      vel vitae voluptatem? Ad aspernatur consequuntur dicta libero odio quia repellat voluptatibus. Aliquam asperiores
      atque consectetur corporis cumque delectus dicta dolores, eum incidunt ipsa laudantium magnam maxime, nam nemo
      nobis rem sequi sit. Facilis, quis.
    </div>
    <div class="card__stats">
      <stats :stars="10" :forks="5"></stats>
    </div>
  </div>
</template>

<script>
import { stats } from '@/components/stats'
export default {
  name: 'Card',
  components: {
    stats
  },
  props: {
    title: {
      type: String,
      default: 'default title'
    }
  }
}
</script>

<style src="./card.scss" lang="scss" scoped></style>
