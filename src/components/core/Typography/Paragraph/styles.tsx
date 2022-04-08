import { styled } from '@Styles/theme/stitches.config';

const Wrapper = styled('p', {
  fontFamily: '$base',
  fontWeight: '$regular',
  lineHeight: '$medium',

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
      small: {
        fontSize: '$xnano',
      },
      medium: {
        fontSize: '$nano',
      },
      large: {
        fontSize: '$xxsmall',
      },
    },
  },

  defaultVariants: {
    onContrast: 'false',
    size: 'medium',
  },
});

export default Wrapper;
