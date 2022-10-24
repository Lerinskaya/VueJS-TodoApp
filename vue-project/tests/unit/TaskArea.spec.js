import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import TaskArea from '@/components/organisms/TaskArea.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('TaskArea.vue', () => {
    let store;
    let mutations;
    let getters;

    beforeEach(() => {
        mutations = {
            addTodo: jest.fn(),
            deleteTask: jest.fn(),
            changeTaskStatus: jest.fn(),
        };
        getters = {
            filterTasks: () => jest.fn(),
        };
        store = new Vuex.Store({
            mutations,
            getters,
        });
    });

    it('calls mutation addTodo', () => {
        const wrapper = mount(TaskArea, {
            store, localVue
        });
        wrapper.find('input').trigger('keyup.enter');
        expect(mutations.addTodo).toHaveBeenCalled();
    });
});