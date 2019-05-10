import Vue from 'vue'
import RCat from '../components/Randomcat.vue'

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('RCat', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    expect(typeof MyComponent.created).toBe('function')
  })

  // Evaluate the results of functions in
  // the raw component options
  it('has the right image', () => {
    expect(wrapper.html()).toContain('<img :src="image" style="max-width:80%; height:auto;display:block; margin-left:auto; margin-right:auto;border: 3px solid #296AAB; padding: 20px;"></img>')
  })
})