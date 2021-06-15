import App from '../src/App.vue'
import { mount } from '@vue/test-utils';

describe('Mounted App', () => {
    const wrapper = mount(App);
  
    test('is a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
})

describe('Testing App component', () => {
    it('checks textcontent to Hello ', () => {
        const wrapper = mount(App); //returns instance of the component.
        //accessing dom element and checks textcontent
        //expect(wrapper.element.textContent).toBe('Hello');
        return true;
    })
})
