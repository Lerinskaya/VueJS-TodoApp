import AddTask from '@/components/atoms/AddTask.vue';
import { mount } from '@vue/test-utils';

describe('AddTask.vue', () => {
    it('enter', () => {
        const wrapper = mount(AddTask, {
            propsData: {
                todoText: '',
            }
        });
        wrapper.find('input').trigger('keyup.enter');
    });
    it('has input', () => {
        const wrapper = mount(AddTask, {
            propsData: {
                todoText: '',
            }
        });
        expect(wrapper.html()).toContain('<input type=\"text\" placeholder=\"Add new task\">');
    });
});


