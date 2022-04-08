import type * as Stitches from '@stitches/react';

import Wrapper from './styles';

type CheckboxComponentProps = {
  value?: boolean;
  onChange: (value: boolean) => void;
  label?: string;
  error?: string;
  className?: string;
  css?: Stitches.CSS;
  name: string;
};
export default function CheckboxComponent({
  value = false,
  onChange,
  label = '',
  error = '',
  name,
  ...props
}: CheckboxComponentProps) {
  return (
    <Wrapper {...props}>
      <label htmlFor={`checkbox-${name}`}>
        <input
          type="checkbox"
          name={name}
          id={`checkbox-${name}`}
          checked={value}
          onChange={(e) => {
            onChange(e.target.checked);
          }}
        />
        <span className="checkbox" />
      </label>
      {!!label && <p dangerouslySetInnerHTML={{ __html: label }} />}
      {!!error && <span className="error">{error}</span>}
    </Wrapper>
  );
}
