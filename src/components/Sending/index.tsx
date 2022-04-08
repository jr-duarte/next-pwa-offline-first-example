import Caption from '@Components/core/Typography/Caption';
import IconUpload from '@Components/Icons/IconUpload';
import IconUploadOff from '@Components/Icons/IconUploadOff';
import type * as Stitches from '@stitches/react';

import { Wrapper } from './styles';

export type ComponentSendingProps = {
  onlineStatus: boolean;
  fetchIndex: number;
  storageLength: number;
  css?: Stitches.CSS;
};

export default function Sending({
  onlineStatus,
  fetchIndex,
  storageLength,
  css,
}: ComponentSendingProps) {
  return (
    <>
      {storageLength > 0 && (
        <Wrapper css={css}>
          {onlineStatus ? (
            <>
              <IconUpload className="icon-upload" />
              <Caption
                css={{
                  color: '$brandPrimaryMedium',
                  marginLeft: '$xxsmall',
                  marginRight: '$nano',
                }}
              >
                ENVIANDO
              </Caption>
              <Caption css={{ color: '$statusFocusPure' }}>
                {fetchIndex} de {storageLength}
              </Caption>
            </>
          ) : (
            <>
              <IconUploadOff />
              <Caption
                css={{
                  color: '$statusNegativePure',
                  marginLeft: '$xxsmall',
                }}
              >
                {storageLength} NA FILA
              </Caption>
            </>
          )}
        </Wrapper>
      )}
    </>
  );
}
