import { mount } from '@vue/test-utils'
import Rcat from '@/components/Randomcat.vue'

describe('RCat', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(RCat)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<img :src="image" style="max-width:80%; height:auto;display:block; margin-left:auto; margin-right:auto;border: 3px solid #296AAB; padding: 20px;"></img>')
  })
})