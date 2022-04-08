import { useState } from 'react';
import { toast } from 'react-toastify';

import Container from '@Components/core/Container';
import GridCol from '@Components/core/Grid/Col';
import GridRow from '@Components/core/Grid/Row';
import Heading from '@Components/core/Typography/Heading';
import FormRegister from '@Components/FormRegister';
import { setItemLocalStorage } from '@Core/helpers/localstorage/register';
import { IRegistration } from '@Core/interfaces/IRegistration';

import Wrapper from './styles';

export default function SectionRegister() {
  const [btnSubmitText, setBtnSubmitText] = useState('Enviar');
  const [btnSubmitDisable, setBtnSubmitDisable] = useState(false);

  const onSubmit = async (data: IRegistration) => {
    setBtnSubmitDisable(true);
    setBtnSubmitText('Aguarde...');
    setItemLocalStorage(data);
    setBtnSubmitText('Enviar');
    setBtnSubmitDisable(false);
    toast.success('Cadastro realizado!', {
      position: 'bottom-right',
    });
  };

  return (
    <Wrapper>
      <Container>
        <GridRow>
          <GridCol col={1} colLg={2} />
          <GridCol col={10} colLg={8}>
            <Heading
              tag="h1"
              size="xlarge"
              css={{ textAlign: 'center', marginBottom: '$xlarge' }}
            >
              Cadastro
            </Heading>
            <FormRegister
              btnSubmitText={btnSubmitText}
              btnDisabled={btnSubmitDisable}
              onSubmit={onSubmit}
            />
          </GridCol>
        </GridRow>
      </Container>
    </Wrapper>
  );
}
