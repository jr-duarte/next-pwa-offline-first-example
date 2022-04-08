import type * as Stitches from '@stitches/react';

import Wrapper from './styles';

type IconUploadOffProps = {
  css?: Stitches.CSS;
};

export default function IconUploadOff({ css, ...props }: IconUploadOffProps) {
  return (
    <Wrapper
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={css}
      {...props}
    >
      <path
        d="M14.74 13.3067L1.59332 0.15332L0.73999 0.999987L4.37332 4.63332L3.33332 5.66665H5.40666L5.99999 6.25999V9.66665H9.40666L10.74 11H3.33332V12.3333H12.0733L13.8933 14.1533L14.74 13.3067ZM9.99999 5.66665H12.6667L7.99999 0.999987L6.06666 2.93332L9.99999 6.86665V5.66665Z"
        fill="#A6301F"
      />
    </Wrapper>
  );
}
