import { mount } from '@vue/test-utils'
import feedItem from './feed'

describe('feedItem component', () => {
  it('do emit of event loadContent', async () => {
    const wrapper = mount(feedItem)

    await wrapper.find('.toggler__wrap button').trigger('click')

    expect(wrapper.emitted().loadContent.length).toBe(1)
  })

  it('отрисует список элементов', async () => {
    // const issue = {
    //   title: 'test-title',
    //   user: {
    //     login: 'test-name'
    //   }
    // }

    const wrapper = mount(feedItem, {
      // propsData: {
      //   feedItem: Array.from({ length: 6 }).map(x => issue)
      // }
      propsData: {
        issues: [
          {
            title: 'test-title',
            user: {
              login: 'test-name'
            }
          },
          {
            title: 'test-title',
            user: {
              login: 'test-name'
            }
          }
        ]
      }
    })

    expect(wrapper.find('.comments').exists()).toBe(false)

    await wrapper.find('.toggler__wrap button').trigger('click')

    expect(wrapper.findAll('.comments__item').length).toBe(6)
  })

  it('не вызывает событие contentLoaded если внутри есть список issues', async () => {

    const wrapper = mount(feedItem, {
      propsData: {
        issues: [
          {
            title: 'test-title',
            user: {
              login: 'test-name'
            }
          },
          {
            title: 'test-title',
            user: {
              login: 'test-name'
            }
          }
        ]
      }
    })

    await wrapper.find('.toggler__wrap button').trigger('click')

    expect(wrapper.emitted().loadContent).toBeUndefined()
  })
})
