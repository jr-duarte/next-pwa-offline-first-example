import { styled } from '@Styles/theme/stitches.config';

const Wrapper = styled('p', {
  fontFamily: '$base',
  fontWeight: '$regular',
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
      nano: {
        fontSize: '$xxsmall',
      },
      small: {
        fontSize: '$xsmall',
      },

      large: {
        fontSize: '$small',
      },
    },
  },

  defaultVariants: {
    onContrast: 'false',
    size: 'medium',
  },
});

export default Wrapper;
