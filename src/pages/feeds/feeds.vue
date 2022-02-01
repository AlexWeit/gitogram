<template>
  <div><router-link to="/testPage/">Go to testPage</router-link></div>
  <div><router-link to="/user/">Go to user Page</router-link></div>
  <div><router-link to="/storiesPage">Go to storiesPage</router-link></div>

  <div class="topline">
    <topline>
      <template #headline>
        <div class="headline__wrap fl-jc-between">
          <logo :color="logo_black"></logo>
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
              v-for="item in items"
              :key="item.id"
            >
              <story-user-item
                v-bind="getFeedData(item)"
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
        v-for="item in items"
        :key="item.id"
      >
        <feed-item
          v-bind="getFeedData(item)"
        >
          <template #card>
            <card v-bind="getFeedData(item)"></card>
          </template>
        </feed-item>
      </li>
    </ul>
  </div>
</template>

<script>
import * as api from '@/api'
import { logo } from '@/components/logo'
import { topline } from '@/components/topline'
import { avatar } from '@/components/avatar'
import { icon } from '@/icons'
import { storyUserItem } from '@/components/storyUserItem'
import stories from './dataUsers.json'
import { feedItem } from '@/components/feed'
import { card } from '@/components/card'

export default {
  name: 'Feeds',
  components: {
    logo,
    topline,
    avatar,
    icon,
    storyUserItem,
    feedItem,
    card
  },
  data () {
    return {
      items: [],
      stories,
      avatar_s: 'avatar_s',
      avatar_m: 'avatar_m',
      avatar_l: 'avatar_l',
      logo_white: 'logo_white',
      logo_black: 'logo_black'
    }
  },
  methods: {
    getFeedData (item) {
      return {
        title: item.name,
        description: item.description,
        username: item.owner.login,
        avatarUrl: item.owner.avatar_url,
        stars: item.stargazers_count,
        forks: item.forks_count
      }
    }
  },
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style src="./feeds.scss" scoped lang="scss"></style>
