import { styled } from '@Styles/theme/stitches.config';

export const Text = styled('span', {
  display: 'block',
  fontFamily: '$highLight',
  fontSize: '$xnano',
  lineHeight: '$xtight',
  fontWeight: '$medium',
  textAlign: 'center',
});

export const Wrapper = styled('button', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  outline: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  textDecoration: 'none',
  padding: '$small $medium',

  '.icon-start': {
    marginRight: '$xsmall',
  },

  '.icon-end': {
    marginLeft: '$xsmall',
  },

  variants: {
    onContrast: {
      true: {
        backgroundColor: '$neutralHighPure',
        color: '$neutralLowPure',

        '&:hover': {
          backgroundColor: '$brandPrimaryLight',
        },

        svg: {
          fill: '$neutralLowPure',
        },
      },
      false: {
        backgroundColor: '$brandPrimaryPure',
        color: '$neutralLowPure',

        svg: {
          fill: '$neutralLowPure',
        },

        '&:hover': {
          backgroundColor: '$brandPrimaryLight',
        },
      },
    },

    disabledStyled: {
      true: {
        cursor: 'not-allowed',
        backgroundColor: '$neutralHighMedium',
        color: '$neutralLowLight',

        svg: {
          fill: '$neutralLowLight',
        },
      },
    },

    border: {
      true: {
        backgroundColor: 'transparent',
        border: '1px solid $neutralLowPure',
        color: '$neutralLowPure',

        svg: {
          fill: '$neutralLowPure',
        },

        '&:hover': {
          backgroundColor: '$brandPrimaryPure',
          color: '$neutralLowPure',

          svg: {
            fill: '$neutralLowPure',
          },
        },
      },
    },
  },

  compoundVariants: [
    {
      disabledStyled: true,
      onContrast: true,
      css: {
        backgroundColor: '$neutralHighMedium',
        color: '$neutralLowLight',

        svg: {
          fill: '$neutralLowLight',
        },

        '&:hover': {
          backgroundColor: '$neutralHighMedium',
          color: '$neutralLowLight',

          svg: {
            fill: '$neutralLowLight',
          },
        },
      },
    },
    {
      disabledStyled: true,
      onContrast: false,
      css: {
        backgroundColor: '$neutralHighMedium',
        color: '$neutralLowLight',

        svg: {
          fill: '$neutralLowLight',
        },

        '&:hover': {
          backgroundColor: '$neutralHighMedium',
          color: '$neutralLowLight',

          svg: {
            fill: '$neutralLowLight',
          },
        },
      },
    },
    {
      disabledStyled: false,
      onContrast: false,
      border: true,
      css: {
        backgroundColor: 'transparent',
        border: '1px solid $neutralLowPure',
        color: '$neutralLowPure',

        svg: {
          fill: '$neutralLowPure',
        },

        '&:hover': {
          backgroundColor: '$brandPrimaryPure',
          color: '$neutralLowPure',

          svg: {
            fill: '$neutralLowPure',
          },
        },
      },
    },
    {
      disabledStyled: false,
      onContrast: true,
      border: true,
      css: {
        backgroundColor: 'transparent',
        border: '1px solid $neutralLowPure',
        color: '$neutralLowPure',

        svg: {
          fill: '$neutralLowPure',
        },

        '&:hover': {
          backgroundColor: '$neutralHighPure',
          color: '$neutralLowPure',

          svg: {
            fill: '$neutralLowPure',
          },
        },
      },
    },
  ],

  defaultVariants: {
    onContrast: 'false',
    disabledStyled: 'false',
    border: 'false',
  },
});
