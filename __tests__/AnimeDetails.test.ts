import { mount } from '@vue/test-utils';
import AnimeDetails from '@/views/AnimeDetails.vue';
import { expect, describe, test } from '@jest/globals';

describe('AnimeDetails', () => {
  test('renders anime details correctly', async () => {
    const wrapper = mount(AnimeDetails, {
      propsData: {
        animeDetails: {
          title: {
            english: 'Fullmetal Alchemist: Brotherhood',
            romaji: 'Hagane no Renkinjutsushi: Fullmetal Alchemist'
          },
          coverImage: {
            large: 'https://i.imgur.com/Ve45ym1.png'
          },
          averageScore: 93,
          description: '<p>Two brothers search for the philosopher\'s stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.</p>',
          format: 'TV',
          genres: ['Action', 'Adventure', 'Drama', 'Fantasy', 'Magic', 'Military', 'Shounen'],
          characters: {
            edges: [
              {
                node: {
                  name: {
                    full: 'Edward Elric'
                  },
                  image: {
                    medium: 'https://i.imgur.com/TotxThd.png'
                  }
                },
                role: 'Main'
              },
              {
                node: {
                  name: {
                    full: 'Alphonse Elric'
                  },
                  image: {
                    medium: 'https://i.imgur.com/ASZohro.png'
                  }
                },
                role: 'Main'
              }
            ]
          },
          trailer: {
            id: 'tqaLZHhYXVM'
          }
        }
      },
      stubs: ['v-row', 'v-col', 'v-card', 'v-card-title', 'v-card-subtitle', 'v-card-text', 'v-btn', 'v-icon', 'v-chip', 'v-responsive', 'v-img', 'v-avatar', 'v-slide-group', 'v-slide-group-item', 'v-parallax']
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.findBy('h2').text()).toMatch(/characters/i);
    expect(wrapper.findAll('.v-col').length).toBe(4);
    expect(wrapper.findBy('.v-img').attributes('src')).toBe('https://i.imgur.com/Ve45ym1.png');
    expect(wrapper.findBy('.v-card-title').text()).toBe('Fullmetal Alchemist: Brotherhood');
    expect(wrapper.findBy('.v-card-subtitle').text()).toBe('2009');
    expect(wrapper.findBy('.mdi-star').text()).toBe('mdi-star');
    expect(wrapper.findBy('h4').text()).toBe('9.3/10');
  })
})
