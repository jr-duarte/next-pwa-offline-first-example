import { keyframes } from '@stitches/react';
import { styled } from '@Styles/theme/stitches.config';

const blink = keyframes({
  from: { fillOpacity: 1 },
  to: { fillOpacity: 0.4 },
});

export const Wrapper = styled('div', {
  backgroundColor: 'rgba(255, 255, 255, 0.32)',
  padding: '$nano $xxsmall $nano $xsmall',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',

  '.icon-upload': {
    animation: `${blink} 0.7s infinite alternate`,
  },
});

export default Wrapper;
