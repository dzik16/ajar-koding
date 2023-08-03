import { ArrayCreateMateri, CreateMateriTypeResponse, DetailMateriTypeResponse, UpdateRangkumanTypeResponse } from '../../interface/materi/materi.interface';
import BaseApi from '../BaseApi';

export const getMateriSiswaByUID = async (uid: string): Promise<DetailMateriTypeResponse[]> => {
  const { data } = await BaseApi().request<DetailMateriTypeResponse[]>({
    url: `materi/${uid}.json?auth=hB09j1EeteUxTJq9ybjjoEpxFg9k84a9KtOzkijK`,
    method: 'GET',
  })

  return data
}

export const createDetailMateriByUID = async (uid: string, props: DetailMateriTypeResponse): Promise<CreateMateriTypeResponse> => {
  const { data } = await BaseApi().request<CreateMateriTypeResponse>({
    url: `materi/${uid}.json?auth=hB09j1EeteUxTJq9ybjjoEpxFg9k84a9KtOzkijK`,
    method: 'POST',
    data: props
  })

  return data
}

export const getDetailMateriSiswaByID = async (uid: string, id: string): Promise<DetailMateriTypeResponse> => {
  const { data } = await BaseApi().request<DetailMateriTypeResponse>({
    url: `materi/${uid}/${id}.json?auth=hB09j1EeteUxTJq9ybjjoEpxFg9k84a9KtOzkijK`,
    method: 'GET',
  })

  return data
}

export const updateStep = async (uid: string, id: string, step: number): Promise<DetailMateriTypeResponse> => {
  const { data } = await BaseApi().request<DetailMateriTypeResponse>({
    url: `materi/${uid}/${id}.json?auth=hB09j1EeteUxTJq9ybjjoEpxFg9k84a9KtOzkijK`,
    method: 'PATCH',
    data: { step }
  })

  return data
}

export const updateRangkuman = async (uid: string, id: string, rangkuman: string): Promise<UpdateRangkumanTypeResponse> => {
  const { data } = await BaseApi().request<UpdateRangkumanTypeResponse>({
    url: `materi/${uid}/${id}.json?auth=hB09j1EeteUxTJq9ybjjoEpxFg9k84a9KtOzkijK`,
    method: 'PATCH',
    data: { rangkuman }
  })

  return data
}

export const updateFinishModul = async (uid: string, id: string, status: string): Promise<DetailMateriTypeResponse> => {
  const { data } = await BaseApi().request<DetailMateriTypeResponse>({
    url: `materi/${uid}/${id}.json?auth=hB09j1EeteUxTJq9ybjjoEpxFg9k84a9KtOzkijK`,
    method: 'PATCH',
    data: { status }
  })
  return data
}