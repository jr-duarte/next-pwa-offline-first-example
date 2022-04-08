import { styled } from '@Styles/theme/stitches.config';

export const Wrapper = styled('header', {
  backgroundColor: '$brandPrimaryPure',
  paddingTop: '$xsmall',
  paddingBottom: '$xsmall',
  '@lgUp': {
    paddingTop: '20px',
    paddingBottom: '20px',
  },
});

export const Content = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const WrapperSendingStatusOnline = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const LogoBreve = styled('img', {
  width: '50px',
  height: '24px',
  marginLeft: '$medium',
  '@lgUp': {
    width: '84px',
    height: '40px',
    marginLeft: '$xlarge',
  },
});

export const StatusOnline = styled('img', {
  width: '80px',
  height: '32px',
});
