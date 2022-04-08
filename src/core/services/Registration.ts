import { IRegistration } from '@Core/interfaces/IRegistration';
import api from '@Core/services/ApiService';

export const create = async (data: IRegistration): Promise<any> => {
  try {
    const response = await api.post('/producer', data);
    return response.data;
  } catch (error: any) {
    const httpError = error?.response?.data?.message || '';
    throw new Error(
      httpError || 'Ocorreu um erro ao cadastrar, tente novamente mais tarde!',
    );
  }
};

export default create;
