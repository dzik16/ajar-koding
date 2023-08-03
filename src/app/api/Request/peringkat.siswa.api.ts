import { CreatePeringkatType } from '../../interface/peringkat.interface';
import BaseApi from '../BaseApi';

export const createPeringkatByUID = async (uid: string, props: CreatePeringkatType): Promise<CreatePeringkatType> => {
  const { data } = await BaseApi().request<CreatePeringkatType>({
    url: `peringkat/${uid}.json?auth=hB09j1EeteUxTJq9ybjjoEpxFg9k84a9KtOzkijK`,
    method: 'POST',
    data: props
  })

  return data
}

export const getDetailPeringkatSiswaByUID = async (uid: string): Promise<CreatePeringkatType> => {
  const { data } = await BaseApi().request<CreatePeringkatType>({
    url: `peringkat/${uid}.json?auth=hB09j1EeteUxTJq9ybjjoEpxFg9k84a9KtOzkijK`,
    method: 'GET',
  })

  return data
}

export const getDetailPeringkatSiswaByID = async (uid: string, id: string): Promise<CreatePeringkatType> => {
  const { data } = await BaseApi().request<CreatePeringkatType>({
    url: `peringkat/${uid}/${id}.json?auth=hB09j1EeteUxTJq9ybjjoEpxFg9k84a9KtOzkijK`,
    method: 'GET',
  })

  return data
}

export const updatePoinByUD = async (uid: string, id: string, poin: number): Promise<CreatePeringkatType> => {
  const { data } = await BaseApi().request<CreatePeringkatType>({
    url: `peringkat/${uid}/${id}.json?auth=hB09j1EeteUxTJq9ybjjoEpxFg9k84a9KtOzkijK`,
    method: 'PATCH',
    data: { poin }
  })

  return data
}

export const getAllPeringkatSiswa = async (): Promise<CreatePeringkatType[][]> => {
  const { data } = await BaseApi().request<CreatePeringkatType[][]>({
    url: `peringkat.json?auth=hB09j1EeteUxTJq9ybjjoEpxFg9k84a9KtOzkijK`,
    method: 'GET',
  })
  return data
}