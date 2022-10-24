import { mount } from '@vue/test-utils';
import AddTask from '@/components/atoms/AddTask.vue';

describe('AddTask.vue', () => {
    it('enter', () => {
        const wrapper = mount(AddTask);
        wrapper.find('input').trigger('keyup.enter');
    });
    it('has input', () => {
        const wrapper = mount(AddTask);
        expect(wrapper.html()).toContain('<input type=\"text\" placeholder=\"Add new task\">');
    });
});


