/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables

import { createVuetify, ThemeDefinition } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides


const myCustomLightTheme: ThemeDefinition = {
  dark: true,
  colors: {
    // background: '#FFFFFF',
    // surface: '#FFFFFF',
    primary: '#ffb601',
    'primary-darken-1': '#ffb601',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    }
  }
})
