import Checkbox from '@/components/atoms/Checkbox.vue';
import { mount } from '@vue/test-utils';

describe('Checkbox.vue', () => {
    it('is on click', () => {
        const wrapper = mount(Checkbox);
        wrapper.find('input').trigger('click');
    });
});