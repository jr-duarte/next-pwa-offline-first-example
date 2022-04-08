import Container from '@Components/core/Container';
import IconOffline from '@Components/Icons/IconOffline';
import IconOnline from '@Components/Icons/IconOnline';
import Sending from '@Components/Sending';
import useLocalStorage from '@Hooks/useLocalStorage';

import * as S from './styles';

export default function Header() {
  const { onlineStatus, fetchIndex, storageLength } = useLocalStorage();

  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <div />
          <S.WrapperSendingStatusOnline>
            <Sending
              onlineStatus={onlineStatus}
              fetchIndex={fetchIndex}
              storageLength={storageLength}
              css={{ marginRight: '$medium' }}
            />
            {onlineStatus ? <IconOnline /> : <IconOffline />}
          </S.WrapperSendingStatusOnline>
        </S.Content>
      </Container>
    </S.Wrapper>
  );
}
