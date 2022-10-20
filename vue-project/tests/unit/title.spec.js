import { mount } from '@vue/test-utils';
import Title from '@/components/organisms/Title.vue';
import TitleName from '@/components/atoms/TitleName.vue';

describe('Title.vue', () => {
    it('has name', () => {
        const wrapper = mount(Title);
        expect(wrapper.findComponent(TitleName).exists()).toBe(true);
    });
});
