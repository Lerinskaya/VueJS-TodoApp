import { mount, createLocalVue } from '@vue/test-utils';
import Footer from '@/components/organisms/Footer.vue';
import Vuex from 'vuex';
import TabButton from '@/components/atoms/TabButton.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Footer.vue', () => {
    let getters;
    let store;
    let state;

    beforeEach(() => {
        getters = {
            allTodos: () => jest.fn(),
            getActiveTasks: () => jest.fn(),
        };
        state = {
            filter: 'All',
        };

        store = new Vuex.Store({
            modules: {
                todo: {
                    getters,
                    state,
                }
            }
        });
    });

    it('has Tabs', () => {
        const wrapper = mount(Footer, { store, localVue });
        expect(wrapper.findAllComponents(TabButton).length).toBe(3)
    });
});

