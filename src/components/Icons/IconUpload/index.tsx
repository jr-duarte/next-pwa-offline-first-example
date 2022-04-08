import type * as Stitches from '@stitches/react';

import Wrapper from './styles';

type IconUploadProps = {
  css?: Stitches.CSS;
  className: string;
};

export default function IconUpload({ css, ...props }: IconUploadProps) {
  return (
    <Wrapper
      width="10"
      height="12"
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={css}
      {...props}
    >
      <path
        d="M2.99998 8.66667V4.66667H0.333313L4.99998 0L9.66665 4.66667H6.99998V8.66667H2.99998ZM0.333313 11.3333V10H9.66665V11.3333H0.333313Z"
        fill="#0A6CFF"
      />
    </Wrapper>
  );
}
