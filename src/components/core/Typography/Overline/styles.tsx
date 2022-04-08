import { styled } from '@Styles/theme/stitches.config';

const Wrapper = styled('p', {
  fontFamily: '$highLight',
  fontSize: '$nano',
  lineHeight: '$xtight',
  fontWeight: '$regular',
  letterSpacing: '$loose',
  textTransform: 'uppercase',

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
