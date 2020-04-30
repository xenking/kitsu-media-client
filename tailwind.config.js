module.exports = {
  theme: {
    customForms: theme => ({
      default: {
        select: {
          iconColor: theme('colors.white'),
        },
        checkbox: {
          iconColor: theme('colors.indigo.700'),
        },
        radio: {
          iconColor: theme('colors.indigo.700'),
        },
      },
    }),
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      default: '3rem',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
      large: '2rem',
    },
    fontFamily: {
      'sans': 'Noto Sans, sans-serif'
    },
    textColor: {
      'primary': '#3a415e',
      'secondary': '#8a8e99',
      'yellow': '#ffcf00',
      'indigo': '#7e60fa',
      'black': '#3a415e',
      'gray': '#e5dffa'
    },
    extend: {
      color: {
        indigo: '#7e60fa',
        yellow: '#ffcf00',
        black: '#3a415e',
        gray: '#e5dffa'
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms')
  ],
}
