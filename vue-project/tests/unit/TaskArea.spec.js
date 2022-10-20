import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
// import AddTask from '@/components/atoms/AddTask.vue';
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
            store, localVue, propsData: {
                todoText: '',
            }
        });
        wrapper.find('input').trigger('keyup.enter');
        expect(mutations.addTodo).toHaveBeenCalled();
    });
    // it('calls mutation deleteTask', () => {
    //     const wrapper = mount(TaskArea, { store, localVue });
    //     wrapper.find('button').trigger('click');
    //     expect(mutations.deleteTask).toHaveBeenCalled();
    // });
    // it('calls mutation changeTaskStatus', () => {
    //     const wrapper = mount(TaskArea, { store, localVue });
    //     wrapper.find('input').trigger('click');
    //     expect(mutations.changeTaskStatus).toHaveBeenCalled();
    // });
});