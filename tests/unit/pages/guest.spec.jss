import { shallowMount } from '@vue/test-utils';
import { expect } from "chai";
import GuestComponent from '../../../src/pages/guest.vue'

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
//*
describe('GuestPage', () => {
    // Inspect the raw component options
    it('has a created hook', async () => {
        const wrapper = shallowMount(GuestComponent)
        console.log(wrapper.data);
        console.log(GuestComponent.methods);
    })
})
//*/

/*
describe('Component', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(GuestComponent)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
//*/