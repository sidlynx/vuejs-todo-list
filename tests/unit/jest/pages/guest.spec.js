import { shallowMount } from "@vue/test-utils";
import GuestComponent from "@/pages/guest";

describe('Component', () => {
    test('is a Vue instance', () => {
        const wrapper = shallowMount(GuestComponent)
        expect(wrapper.isVueInstance()).toBeTruthy()
        let a = true;
        expect(a).toBeTruthy();
        expect(true).toBe(true);
        console.log(wrapper.vm.mode)
        expect(wrapper).toMatchSnapshot()
    })
})
