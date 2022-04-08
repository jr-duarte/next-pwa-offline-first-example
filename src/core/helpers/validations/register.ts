import moment from 'moment';
import * as yup from 'yup';

export const RegistrationValidation = yup.object().shape({
  email: yup.string().required('Campo obrigatório').email('E-mail inválido'),

  name: yup.string().required('Campo obrigatório'),

  birthDate: yup
    .string()
    .required('Campo obrigatório')
    .min(10, 'Data inválida')
    .test('validDate', 'Data inválida', (value) => {
      const dateFormat = 'DD/MM/YYYY';
      const toDateFormat = moment(value, dateFormat);
      return moment(toDateFormat).isValid();
    }),

  cellPhone: yup.string().required('Campo obrigatório'),

  acceptLGPDConsent: yup
    .boolean()
    .test(
      'acceptLGPDConsent',
      'É necessário aceitar o termo',
      (value) => !!value,
    ),

  // acceptMediaConsent: yup
  //   .boolean()
  //   .test(
  //     'acceptMediaConsent',
  //     'É necessário aceitar o termo',
  //     (value) => !!value,
  //   ),
});

export default RegistrationValidation;
