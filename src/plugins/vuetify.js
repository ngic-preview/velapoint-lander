import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: '#83ba40',
        primarylight: '#bed63a',
        greybg: '#f2f5f8',
        accent: colors.grey.darken3,
        secondary: '#1a3664',
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
      },
      light: {
        primary: '#83ba40',
        primarylight: '#bed63a',
        greybg: '#f2f5f8',
        accent: colors.grey.darken3,
        secondary: '#1a3664',
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
      },
    },
  },
})
