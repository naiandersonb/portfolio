import { api } from '@/@lib/axios';

export const getUser = async (username: string) => {
  try {
    const { data } = await api.get(`/users/${username}`);
    return data;
  } catch (error) {
    console.log({ error });
    throw new Error('Error when searching for user');
  }
};
