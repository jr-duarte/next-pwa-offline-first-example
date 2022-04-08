import { styled } from '@Styles/theme/stitches.config';

const Wrapper = styled('div', {
  display: 'block',
  position: 'relative',
  paddingLeft: '30px',

  '> label': {
    position: 'absolute',
    top: '4px',
    left: '0',
    width: '18px',
    height: '18px',
    '> input[type="checkbox"]': {
      position: 'absolute',
      visibility: 'hidden',
      '&:checked': {
        '+ span.checkbox': {
          borderColor: '$neutralLowPure',
          backgroundColor: '$neutralLowPure',
          '&::before': {
            display: 'block',
          },
        },
      },
    },

    '> span.checkbox': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      width: '18px',
      height: '18px',
      border: '2px solid $neutralLowPure',
      borderRadius: '4px',
      position: 'relative',
      '&::before': {
        display: 'none',
        position: 'absolute',
        top: '3px',
        left: '3px',
        content: '',
        width: '10px',
        height: '6px',
        border: '2px solid $neutralHighPure',
        borderTop: '0',
        borderRight: '0',
        transform: 'rotate(-45deg)',
      },
    },
  },

  '> p': {
    fontFamily: '$base',
    fontSize: '$nano',
    lineHeight: '$medium',
    color: '$neutralLowDark',
    fontWeight: '$regular',

    a: {
      fontFamily: '$base',
      color: '$brandSecondaryPure',
    },
  },

  '> span.error': {
    display: 'block',
    fontFamily: '$base',
    fontSize: '$xnano',
    lineHeight: '$medium',
    fontWeight: '$regular',
    color: '$statusNegativeMedium',
    marginTop: '$xsmall',
  },
});

export default Wrapper;
