import DeleteButton from '@/components/atoms/DeleteButton.vue';
import { mount } from '@vue/test-utils';

describe('DeleteButton.vue', () => {
    it('is on click', () => {
        const wrapper = mount(DeleteButton);
        wrapper.find('button').trigger('click');
    });
});