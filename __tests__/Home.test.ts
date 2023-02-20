import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import { expect,describe,it,jest } from '@jest/globals';

describe("Home.vue", () => {
  it("fetches data on created hook", async () => {
    const fetchAnimeListcMock = jest.fn();
    const fetchTopAnimeListMock = jest.fn();
    const fetchAiringThisWeekAnimeMock = jest.fn();

    shallowMount(Home, {
      global: {
        mocks: {
          $store: {
            dispatch: fetchAnimeListcMock,
          },
        },
        stubs: ["router-link", "router-view"],
        // Inject mock functions for mapActions
        $store: {
          dispatch: fetchAnimeListcMock,
        },
      },
    });

    await expect(fetchAnimeListcMock).toBeCalled();
    await expect(fetchTopAnimeListMock).toBeCalled();
    await expect(fetchAiringThisWeekAnimeMock).toBeCalled();
  });

  it("shows an error message if data cannot be fetched", async () => {
    const fetchAnimeListcMock = jest.fn(() => Promise.reject(new Error()));
    const wrapper = shallowMount(Home, {
      global: {
        mocks: {
          $store: {
            dispatch: fetchAnimeListcMock,
          },
        },
        stubs: ["router-link", "router-view"],
      },
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.find("v-alert").exists()).toBe(true);
  });

  it("refreshes data on button click", async () => {
    const fetchAnimeListcMock = jest.fn();
    const fetchTopAnimeListMock = jest.fn();
    const fetchAiringThisWeekAnimeMock = jest.fn();

    const wrapper = shallowMount(Home, {
      global: {
        mocks: {
          $store: {
            dispatch: fetchAnimeListcMock,
          },
        },
        stubs: ["router-link", "router-view"],
        $store: {
          dispatch: fetchAnimeListcMock,
        },
      },
    });

    await wrapper.find("v-btn").trigger("click");

    await expect(fetchAnimeListcMock).toBeCalled();
    await expect(fetchTopAnimeListMock).toBeCalled();
    await expect(fetchAiringThisWeekAnimeMock).toBeCalled();
  });
});
