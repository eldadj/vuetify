export default {
  props: {
    append: Boolean,
    disabled: Boolean,
    href: {
      type: [String, Object],
      default: '#'
    },
    nuxt: Boolean,
    replace: Boolean,
    ripple: Boolean,
    router: Boolean,
    tag: {
      type: String,
      default: 'a'
    }
  },

  methods: {
    click () {},
    generateRouteLink () {
      let tag

      const data = {
        attrs: {},
        class: this.classes,
        props: {},
        directives: [
          {
            name: 'ripple',
            value: this.ripple || false
          }
        ]
      }

      if (this.href && this.router) {
        tag = this.nuxt ? 'nuxt-link' : 'router-link'
        data.props.to = this.href
        data.props.exact = this.href === '/'
        data.props.activeClass = this.activeClass
        data.props.append = this.append
        data.props.replace = this.replace
        data.nativeOn = { click: this.click }
      } else {
        tag = this.tag
        data.attrs.href = this.href
        data.on = { click: this.click }
      }

      return { tag, data }
    }
  }
}
