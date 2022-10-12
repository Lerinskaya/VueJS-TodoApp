import { mount } from '@vue/test-utils'
import App from "@/components/App.vue";

describe('App.vue', () => {
  it('отрисовывает приветствие', () => {
    const wrapper = mount(App)

    console.log(wrapper.html())
  })
});

// describe("App.vue", () => {
//   it("renders props.msg when passed", () => {
//     const msg = "new message";
//     const wrapper = shallowMount(App, {
//       propsData: { msg },
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });
