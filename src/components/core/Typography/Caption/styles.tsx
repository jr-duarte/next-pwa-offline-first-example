import { styled } from '@Styles/theme/stitches.config';

const Wrapper = styled('p', {
  fontFamily: '$base',
  fontSize: '$xnano',
  lineHeight: '$medium',
  fontWeight: '$regular',

  variants: {
    onContrast: {
      true: {
        color: '$neutralLowPure',
      },
      false: {
        color: '$neutralLowPure',
      },
    },
  },

  defaultVariants: {
    onContrast: 'false',
  },
});

export default Wrapper;
