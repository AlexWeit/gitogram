<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="headline__wrap fl-jc-between">
          <h1 class="mainTitle">Gitogram /</h1>
          <div class="headline__right fl">
            <div class="icon icon_home mr-12">
              <icon name="home"></icon>
            </div>
            <avatar :size="avatar_s" class="ml-16 mr-16"></avatar>
            <div class="icon icon_logout ml-8">
              <icon name="logout"></icon>
            </div>
          </div>
        </div>

      </template>
      <template #content>
        <div class="stories">
          <ul class="stories__list fl">
            <li
              class="stories__item mr-15 ml-15"
              v-for="story in stories"
              :key="story.id"
            >
              <story-user-item
                :avatar="story.avatar"
                :username="story.username"
                :size="avatar_l"
                @onPress="handlePress(story.id)"
              ></story-user-item>
            </li>
          </ul>
        </div>
      </template>
    </topline>
  </div>
  <div class="feeds">
    <ul class="feeds__list">
      <li
        class="feeds__item mt-24"
        v-for="item in stories"
        :key="item.id"
      >
        <feed-item :avatarUrl="item.avatar" :username="item.username">
          <template #card>
            <card :title="item.title"></card>
          </template>
        </feed-item>
      </li>
    </ul>
  </div>
</template>

<script>
import { topline } from '@/components/topline'
import { avatar } from '@/components/avatar'
import { icon } from '@/icons'
import { storyUserItem } from '@/components/storyUserItem'
import stories from './dataUsers.json'
import { feedItem } from '@/components/feed'
import { card } from '@/components/card'

export default {
  name: 'feeds',
  components: {
    topline,
    avatar,
    icon,
    storyUserItem,
    feedItem,
    card
  },
  data () {
    return {
      stories,
      avatar_s: 'avatar_s',
      avatar_m: 'avatar_m',
      avatar_l: 'avatar_l'
    }
  }
}
</script>

<style src="./feeds.scss" scoped lang="scss"></style>
