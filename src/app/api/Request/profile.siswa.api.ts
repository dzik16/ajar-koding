import { CreateProfileSiswaType, ProfileSiswaTypeResponse } from '../../interface/profile.siswa.interface';
import BaseApi from '../BaseApi';

export const getProfileSiswa = async (uid: string): Promise<any> => {
  const { data } = await BaseApi().request<any>({
    url: `users/siswa/${uid}.json?auth=hB09j1EeteUxTJq9ybjjoEpxFg9k84a9KtOzkijK`,
    method: 'GET',
  });

  return data;
};

export const createProfileSiswa = async (uid: string, props: CreateProfileSiswaType): Promise<any> => {
  const { data } = await BaseApi().request<any>({
    url: `users/siswa/${uid}.json?auth=hB09j1EeteUxTJq9ybjjoEpxFg9k84a9KtOzkijK`,
    method: 'POST',
    data: props
  })

  return data
}