import { useForm, Controller } from 'react-hook-form';

import Button from '@Components/core/Button';
import CheckboxComponent from '@Components/core/Inputs/Checkbox';
import InputComponent from '@Components/core/Inputs/Input';
import { RegistrationValidation } from '@Core/helpers/validations/register';
import { IRegistration } from '@Core/interfaces/IRegistration';
import { yupResolver } from '@hookform/resolvers/yup';
import moment from 'moment';

export type FormRegistrationProps = {
  onSubmit: (data: IRegistration) => void;
  btnSubmitText: string;
  btnDisabled?: boolean;
};

export default function FormRegister({
  onSubmit,
  btnSubmitText,
  btnDisabled,
}: FormRegistrationProps) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IRegistration>({
    resolver: yupResolver(RegistrationValidation),
    defaultValues: { acceptMediaConsent: false },
  });

  async function onSubmitForm(data: any) {
    // Format Data
    const dataFormat = data;
    dataFormat.birthDate = moment(data.birthDate, 'DD / MM / YYYY').format(
      'YYYY-MM-DD',
    );

    dataFormat.cellPhone = data.cellPhone.replace(/[^\d]+/g, '');

    onSubmit(dataFormat);
    reset();
  }

  return (
    <form action="post" onSubmit={handleSubmit(onSubmitForm)} noValidate>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <InputComponent
            label="E-MAIL"
            placeholder="email@email.com"
            type="email"
            value={value}
            onChange={(email) => onChange(email)}
            name="email"
            css={{ marginBottom: '$xlarge' }}
            error={errors.email?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <InputComponent
            label="NOME COMPLETO"
            type="text"
            placeholder="Nome completo"
            value={value}
            onChange={(name) => onChange(name)}
            name="name"
            css={{ marginBottom: '$xlarge' }}
            error={errors.name?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="birthDate"
        render={({ field: { onChange, value } }) => (
          <InputComponent
            label="DATA DE NASCIMENTO"
            type="date"
            placeholder="00 / 00 / 0000"
            value={value}
            onChange={(birthDate) => onChange(birthDate)}
            name="cpf"
            css={{ marginBottom: '$xlarge' }}
            error={errors.birthDate?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="cellPhone"
        render={({ field: { onChange, value } }) => (
          <InputComponent
            label="TELEFONE"
            placeholder="(00) 000000000"
            type="cellphone"
            value={value}
            onChange={(cellphone) => onChange(cellphone)}
            name="cellphone"
            css={{ marginBottom: '$xlarge' }}
            error={errors.cellPhone?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="acceptLGPDConsent"
        render={({ field: { onChange, value } }) => (
          <CheckboxComponent
            value={value}
            onChange={(acceptLGPDConsent) => onChange(acceptLGPDConsent)}
            name="acceptLGPDConsent"
            label="Termo 2"
            css={{ marginBottom: '$large' }}
            error={errors.acceptLGPDConsent?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="acceptMediaConsent"
        render={({ field: { onChange, value } }) => (
          <CheckboxComponent
            value={value}
            onChange={(acceptMediaConsent) => onChange(acceptMediaConsent)}
            name="acceptMediaConsent"
            label="Termo 1"
            css={{ marginBottom: '$large' }}
            error={errors.acceptMediaConsent?.message}
          />
        )}
      />

      <Button
        disabled={btnDisabled}
        text={btnSubmitText}
        type="submit"
        icon="chevronRight"
        iconSize={24}
        iconEnd
        css={{ width: '100%' }}
      />
    </form>
  );
}
