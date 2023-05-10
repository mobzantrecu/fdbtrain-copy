const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512, 1024],
  sizes: {
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
    '40': '10rem',
    '48': '12rem',
    '56': '14rem',
    '64': '16rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem'
  },
  colors: {
    primary: '#604BE9',
    primaryDark: '#7D0CFF',
    secondary: '#0047FF',
    background: '#FFFFFF',
    darkBackgroundAnchor: '#896BFF',
    muted: '#F9FAFF',
    text: '#000000',
    softerText: '#212B36',
    gray: '#CDCDD2',
    gray1: '#F7F9FA',
    gray2: '#F9F9F9',
    gray8: '#64696C',
    gray10: '#363A3D',
    lilac2: '#F2F0F8',
    lilac6: '#6742F1',
    border: '#D9DFF1',
    footer: '#F8F7FB',
    softViolet: '#C18EFF',
    green: '#00CD00',
    red: '#FF3434',
    primaryLight: '#943CFF',
    iconPrimary: '#3F00A5',
    mediaCards: '#F8F7FB',
    sage2: '#EEF7F7',
    sage8: '#4C5A5A',
    logosCard: '#222222',
    purpleDark: '#1F1244'
  },
  fonts: {
    body:
      'proxima-nova, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading:
      'proxima-nova, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    mono: 'monospace'
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 28, 32, 40, 48, 56],
  breakpoints: ['640px', '832px', '1025px', '1280px', '1442px'],
  radii: {
    none: '0',
    sm: '0.125rem',
    default: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '50%'
  },
  lineHeights: {
    body: 1.5,
    loose: 1.6,
    large: 1.72,
    heading: 1.25
  },
  shadows: {
    input: '0 1px 2px 0 rgba(0,0,0,.08)',
    sm: '0px 1px 2px rgba(0, 0, 0, 0.1)',
    md: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    lg:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    float: '30px 20px 60px rgba(0, 0, 0, 0.1)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    long: '0px 8px 32px rgba(0, 0, 0, 0.12)',
    magical:
      '0px 30px 30px rgba(0, 0, 0, 0.02), 0px 0px 8px rgba(0, 0, 0, 0.03), 0px 1px 0px rgba(0, 0, 0, 0.05)',
    border: '0px 1px 0px rgba(0, 0, 0, 0.08)',
    cardNew:
      '0px 1px 1px rgba(0, 0, 0, 0.06), 0px 5px 25px rgba(0, 0, 0, 0.03)',
    cardHover:
      '0px 6px 16px rgba(0, 0, 0, 0.2), 0px 6px 12px -2px rgba(50, 50, 100, 0.16)',
    cardWithIllustration:
      '0px 1px 1px rgba(0, 0, 0, 0.05), 0px 4px 30px rgba(0, 0, 0, 0.08)',
    card:
      '0px 1px 2px 1px rgba(47, 56, 61, 0.15), 0px 1px 2px rgba(47, 56, 61, 0.2)',
    cardInteractive:
      '0px 2px 8px -2px rgba(0, 0, 0, 0.15), 0px 6px 12px -2px rgba(50, 50, 100, 0.16)'
  },
  zIndices: {
    modal: 110,
    dropdown: 100,
    header: 90,
    loader: 80,
    general2: 20,
    general: 10,
    behind: -1
  },
  // VARIANTS
  layout: {
    container: {
      maxWidth: [null, null, null, null, null, null],
      mx: 'auto',
      py: 3,
      px: 4
    },
    section: {
      variant: 'layout.container',
      position: 'relative',
      px: 4,
      py: ['64px', null, '80px']
    },
    sectionSmall: {
      variant: 'layout.container',
      position: 'relative',
      px: 4,
      py: ['64px', null, '80px'],
      maxWidth: [1024, null, null, null, null, 1200]
    },
    sectionContent: {
      pt: [3, null, 4]
    },
    blogPost: {
      position: 'relative',
      px: 3,
      maxWidth: 964,
      py: '48px',
      mx: 'auto'
    }
  },
  text: {
    heading: {
      1: {
        fontFamily: 'heading',
        fontSize: [8, 9],
        lineHeight: 'heading',
        fontWeight: 500,
        letterSpacing: '-2px'
      },
      2: {
        fontFamily: 'heading',
        fontSize: [9, 9],
        lineHeight: '#363A3D',
        fontWeight: 600,
        letterSpacing: '-1px'
      },
      3: {
        fontFamily: 'heading',
        fontSize: ['24px', '28px'],
        lineHeight: 'heading',
        fontWeight: 400,
        letterSpacing: '-1px'
      },
      4: {
        fontFamily: 'heading',
        fontSize: ['24px', '34px', '48px'],
        lineHeight: 'heading',
        fontWeight: 600,
        letterSpacing: '-1px'
      },
      base: {
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontSize: 3,
        fontWeight: 400
      }
    },
    normal: {
      fontSize: [1, 2],
      lineHeight: 'loose',
      fontWeight: 400
    },
    small: {
      fontSize: ['13px', 1],
      lineHeight: 'large',
      fontWeight: 400
    },
    large: {
      fontSize: [2, 3],
      lineHeight: 'body',
      fontWeight: 400
    },
    xl: {
      fontSize: [4, '22px'],
      lineHeight: 'body',
      fontWeight: 400
    },
    blog: {
      heading: {
        1: {
          variant: 'text.heading.base',
          fontSize: '32px',
          mb: '24px',
          mt: ['64px', null, '80px'],
          fontWeight: 500
        },
        2: {
          variant: 'text.heading.base',
          fontSize: '28px',
          mb: '24px',
          mt: '64px',
          fontWeight: 500
        },
        3: {
          variant: 'text.heading.base',
          fontSize: '24px',
          mb: '24px',
          mt: '48px',
          fontWeight: 500
        }
      }
    }
  },
  buttons: {
    primary: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'default',
      bg: 'primary',
      color: 'background',
      py: 2,
      px: 4,
      height: 12,
      fontWeight: 600,
      boxShadow: 'magical',
      transition: 'background .2s',
      '&:hover': {
        background: '#3A1AB6'
      },
      '&:focus': {
        boxShadow: '0 0 0 4px rgb(149 63 255 / 0.15)',
        outline: 'none'
      },
      '&:disabled': {
        cursor: 'wait',
        opacity: 0.6,
        '&:hover': {
          opacity: 0.6
        }
      },
      small: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'default',
        variant: 'gradients.button',
        color: 'background',
        py: 2,
        px: '24px',
        height: 10,
        fontWeight: 600,
        boxShadow: 'magical',
        transition: 'background .2s',
        '&:hover': {
          background: '#3A1AB6'
        },
        '&:focus': {
          boxShadow: '0 0 0 4px rgb(149 63 255 / 0.15)',
          outline: 'none'
        }
      }
    },
    secondary: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'default',
      bg: 'background',
      color: 'primary',
      py: 2,
      px: 4,
      height: 12,
      fontWeight: 600,
      boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.12)',
      transition: 'box-shadow .2s, outline 0.1s, color 0.2s',
      '&:focus': {
        boxShadow: '0 0 0 4px rgb(0 0 0 / 0.08)',
        outline: 'none'
      },
      '&:hover': {
        boxShadow: 'lg',
        outline: 'solid',
        outlineColor: '#3A1AB6',
        color: '#3A1AB6'
      }
    },
    darkSecondary: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'default',
      color: 'darkBackgroundAnchor',
      py: 2,
      px: 4,
      height: 12,
      fontWeight: 600,
      boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.12)',
      transition: 'box-shadow .2s, color 0.2s, border-color 0.2s',
      border: '1px solid',
      borderColor: 'darkBackgroundAnchor',
      background: 'rgb(30, 21, 65)',
      '&:focus': {
        boxShadow: '0 0 0 4px rgb(0 0 0 / 0.08)'
      },
      '&:hover': {
        boxShadow: 'lg',
        borderColor: '#6742F1',
        color: '#6742F1'
      }
    },
    newDarkSecondary: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'default',
      bg: '#6742F1',
      color: 'background',
      py: 2,
      px: 4,
      height: 12,
      fontWeight: 600,
      boxShadow: 'magical',
      transition: 'background .2s',
      '&:hover': {
        background: '#3A1AB6'
      },
      '&:focus': {
        boxShadow: '0 0 0 4px rgb(149 63 255 / 0.15)',
        outline: 'none'
      },
      '&:disabled': {
        cursor: 'wait',
        opacity: 0.6,
        '&:hover': {
          opacity: 0.6
        }
      }
    },
    outline: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'default',
      bg: 'background',
      color: 'primary',
      py: 2,
      px: 4,
      height: 12,
      fontWeight: 600,
      boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.12)',
      transition: 'all .2s',
      border: '1px solid',
      borderColor: 'primary',
      '&:focus': {
        boxShadow: '0 0 0 4px rgb(149 63 255 / 0.15)',
        outline: 'none'
      },
      '&:hover': {
        bg: 'primary',
        color: 'background'
      }
    },
    icon: {
      p: 2,
      borderRadius: 'md',
      height: 'auto',
      width: 'auto'
    }
  },
  gradients: {
    button: {
      background: `#604BE9`
    },
    buttonSoft: {
      background: `linear-gradient(90deg, #C18EFF 0%, #943CFF 100%)`
    },
    green: {
      background: `linear-gradient(90deg, #64CCAF 0%, #14CC98 100%)`
    },
    circle: {
      background: `linear-gradient(26deg, #3344FF 0%, rgba(148, 60, 255, 0) 100%)`
    },
    circleSoft: {
      background: `linear-gradient(326deg, rgba(103, 66, 241, 0.325151) 0%, rgba(220, 239, 255, 0) 100%)`,
      opacity: 1,
      backgroundColor: 'rgba(220,239,255, 1)'
    },
    muted: {
      background: `linear-gradient(26deg, #FFFFFF 0%, #F9FAFF 100%)`
    },
    eventCard: {
      background: `linear-gradient(180deg, #FFFFFF 0%, #F9FAFF 100%)`
    },
    caseStudies: {
      background: `linear-gradient(324.87deg, #411CD7 -6.43%, rgba(225, 238, 255, 0) 25.61%), #E1EDFF`
    }
  },
  links: {
    accent: {
      color: 'primary',
      fontWeight: 600
    },
    darkAccent: {
      color: 'darkBackgroundAnchor',
      fontWeight: 600
    },
    accentLightGray: {
      color: 'gray1',
      fontWeight: 600
    },
    slider: {
      color: 'lilac6',
      fontWeight: 600
    },
    accentLightPreFooter: {
      color: '#896BFF'
    },
    accentLight: {
      color: 'background',
      ':hover': {
        opacity: 0.8,
        color: 'background'
      }
    },
    noUnderline: {
      transition: 'color .2s',
      ':hover': {
        textDecoration: 'none',
        color: 'primary'
      },
      ':focus': {
        color: 'primary',
        outline: 'none'
      },
      ':active': {
        opacity: 0.8
      }
    },
    nav: {
      fontSize: 1,
      transition: 'color .2s',
      '&:hover': { textDecoration: 'none', color: 'primary' },
      '&:focus': { outline: 'none', color: 'primary' }
    },
    topLevelBanner: {
      display: 'inline-block',
      width: '100%',
      fontWeight: 600,
      fontSize: '18px',
      color: 'background',
      ':hover': {
        textDecoration: 'none',
        color: 'background'
      }
    }
  },
  cards: {
    primary: {
      backgroundColor: 'background',
      borderRadius: 'lg',
      p: 4,
      boxShadow: 'cardNew',
      overflow: 'hidden',
      transition: 'box-shadow .2s',
      whiteSpace: 'normal'
    }
  },
  grids: {
    two: {
      gridTemplateColumns: ['1fr', null, '1fr 1fr'],
      columnGap: '24px',
      rowGap: '24px'
    },
    three: {
      gridTemplateColumns: ['1fr', '1fr 1fr', null, 'repeat(3, 1fr)'],
      columnGap: '24px',
      rowGap: '24px'
    },
    four: {
      gridTemplateColumns: [
        '1fr',
        '1fr 1fr',
        'repeat(3, 1fr)',
        'repeat(4, 1fr)'
      ],
      columnGap: '24px',
      rowGap: '24px'
    }
  },
  forms: {
    input: {
      display: 'block',
      height: '50px',
      border: '1px solid',
      borderColor: 'border',
      px: 3,
      borderRadius: 'md',
      bg: 'background',
      boxShadow: 'input',
      '&:focus': {
        outline: 'none',
        borderColor: 'primary',
        boxShadow: '0 0 0 4px rgb(149 63 255 / 0.15)'
      }
    },
    select: {
      display: 'block',
      height: '50px',
      border: '1px solid',
      borderColor: 'border',
      maxWidth: '100%',
      bg: 'background',
      px: 3,
      borderRadius: 'md',
      boxShadow: 'input',
      '&:focus': {
        outline: 'none',
        borderColor: 'primary',
        boxShadow: '0 0 0 4px rgb(149 63 255 / 0.15)'
      }
    },
    label: {
      pb: 1,
      fontSize: 1,
      fontWeight: 500
    }
  },
  badges: {
    base: {
      height: '28px',
      px: '12px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '4px',
      fontSize: 2,
      fontWeight: 700
    },
    primary: { variant: 'badges.base', bg: 'primary' },
    secondary: { variant: 'badges.base', bg: 'secondary' }
  },
  table: {
    backgroundColor: 'background',
    textAlign: 'left',
    fontSize: 1,
    th: {
      color: 'gray8',
      textTransform: 'uppercase',
      p: '8px',
      borderBottom: '1px solid',
      borderColor: 'border'
    },
    td: {
      p: 2,
      borderBottom: '1px solid',
      borderColor: 'border',
      whiteSpace: 'break-spaces',
      fontSize: '16px'
    }
  },
  // STYLES
  styles: {
    root: {
      fontFamily: 'body',
      color: 'text',
      bg: 'background',
      lineHeight: 1.5
    },
    a: {
      transition: 'color .2s',
      ':hover': {
        color: 'primary',
        textDecoration: 'underline'
      },
      ':focus': {
        color: 'primary',
        outline: 'none'
      },
      ':active': {
        opacity: 0.8
      }
    }
  }
}

export default theme
