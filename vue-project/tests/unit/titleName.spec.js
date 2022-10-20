import { mount } from '@vue/test-utils';
import TitleName from '@/components/atoms/TitleName.vue';

describe('TitleName.vue', () => {
    const wrapper = mount(TitleName);
    it('has name', () => {
        expect(wrapper.html()).toContain('<h1 class="title">to do list</h1>');
    });
});
