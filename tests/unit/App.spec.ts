import Vue from "vue"
import App from '@/views/App.vue';
import {mount} from "@vue/test-utils";

describe("The app", () => {
    it('should render the hero and villain labels', () => {
        const wrapper = mount(App)

        expect(wrapper.text()).toContain('Hero')
        expect(wrapper.text()).toContain('Villain')
    })
})
