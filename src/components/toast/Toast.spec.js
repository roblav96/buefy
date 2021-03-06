import { shallow } from '@vue/test-utils'
import BToast from '@components/toast/Toast'

describe('BToast', () => {
    HTMLElement.prototype.insertAdjacentElement = jest.fn()

    it('is called', () => {
        const wrapper = shallow(BToast)
        expect(wrapper.name()).toBe('BToast')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
