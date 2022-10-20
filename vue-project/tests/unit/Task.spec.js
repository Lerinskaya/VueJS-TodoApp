import { mount } from '@vue/test-utils';
import Task from '@/components/molecules/Task.vue';
import Checkbox from "@/components/atoms/Checkbox";
import DeleteButton from "@/components/atoms/DeleteButton";

describe('Task.vue', () => {
    const wrapper = mount(Task);
    it('has components', () => {
        expect(wrapper.findComponent(Checkbox).exists()).toBe(true);
        expect(wrapper.findComponent(DeleteButton).exists()).toBe(true);
    });
});