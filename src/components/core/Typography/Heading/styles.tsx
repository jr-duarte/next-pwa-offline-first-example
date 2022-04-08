import { styled } from '@Styles/theme/stitches.config';

const Wrapper = styled('h1', {
  fontFamily: '$highLight',
  fontWeight: '$medium',
  textTransform: 'uppercase',
  lineHeight: '$tight',

  variants: {
    onContrast: {
      true: {
        color: '$neutralLowPure',
      },
      false: {
        color: '$neutralLowPure',
      },
    },
    size: {
      xsmall: {
        fontSize: '$xxsmall',
        '@lgUp': {
          fontSize: '$xsmall',
        },
      },
      small: {
        fontSize: '$xsmall',
        '@lgUp': {
          fontSize: '$medium',
        },
      },
      medium: {
        fontSize: '$small',
        '@lgUp': {
          fontSize: '$large',
        },
      },
      large: {
        fontSize: '$medium',
        '@lgUp': {
          fontSize: '$xlarge',
        },
      },
      xlarge: {
        fontSize: '$large',
        '@lgUp': {
          fontSize: '$xxlarge',
        },
      },
      xxlarge: {
        fontSize: '36px',
        '@lgUp': {
          fontSize: '$huge',
        },
      },
    },
  },

  defaultVariants: {
    onContrast: 'false',
    size: 'medium',
  },
});

export default Wrapper;
