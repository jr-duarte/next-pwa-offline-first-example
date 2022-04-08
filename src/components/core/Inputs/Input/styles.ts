import { styled } from '@Styles/theme/stitches.config';

export const Wrapper = styled('div', {
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',

  '> label': {
    display: 'block',
    fontFamily: '$highLight',
    fontSize: '$xnano',
    lineHeight: '$xtight',
    fontWeight: '$medium',
    marginBottom: '$xxsmall',
    color: '$neutralLowPure',
  },

  '> span': {
    display: 'block',
    fontFamily: '$base',
    fontSize: '$xnano',
    lineHeight: '$medium',
    fontWeight: '$regular',
    color: '$statusNegativePure',
    marginTop: '$xsmall',
  },
});

export const WrapperInput = styled('div', {
  position: 'relative',

  svg: {
    position: 'absolute',
    right: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
  },
});

export const Input = styled('input', {
  height: '48px',
  width: '100%',

  borderWidth: '$hairline',
  borderStyle: 'solid',
  borderColor: '$neutralHighDark',

  padding: '$small',

  fontFamily: '$base',
  fontSize: '$nano',
  lineHeight: '$medium',
  fontWeight: '$regular',
  color: '$neutralLowPure',

  backgroundColor: '$neutralHighLight',

  '&:focus': {
    border: '2px solid $statusFocusPure',
    outline: 'none',
  },

  '.placeholder': {
    color: '$neutralLowMedium',
  },

  variants: {
    onError: {
      true: {
        borderWidth: '$thin',
        borderStyle: 'solid',
        borderColor: '$statusNegativePure',
      },
    },
  },

  defaultVariants: {
    onError: 'false',
  },
});
