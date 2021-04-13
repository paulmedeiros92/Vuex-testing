import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it("displays a non authorized message", () => {
    const msg = "submit"
    const wrapper = shallowMount(HelloWorld,{
      props: {
        msg
      },
      store: {
          state: { count: 999 }
        }
    })

    console.log(wrapper.html())

    expect(wrapper.find("h1").text()).toBe("submit")
  })
})