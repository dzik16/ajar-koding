import { ArrayCreateMateri, CreateMateriTypeResponse, DetailMateriTypeResponse, HasilSoalType, PertanyaanType, PertanyaanTypeResponse, UpdateRangkumanTypeResponse, UpdateSteptypeResponse } from '../../interface/materi/materi.interface';
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

export const updateStep = async (uid: string, id: string, step: number): Promise<UpdateSteptypeResponse> => {
  const { data } = await BaseApi().request<UpdateSteptypeResponse>({
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

export const sendPertanyaan = async (kel: string, pertanyaan: PertanyaanType): Promise<any> => {
  const { data } = await BaseApi().request<any>({
    url: `/pertanyaanSiswa/${kel}.json?auth=hB09j1EeteUxTJq9ybjjoEpxFg9k84a9KtOzkijK`,
    method: 'POST',
    data: { pertanyaan }
  })

  return data
}

export const updatePertanyaan = async (kel: string, id: string, pertanyaan: PertanyaanType[]): Promise<PertanyaanType[]> => {
  const { data } = await BaseApi().request<PertanyaanType[]>({
    url: `/pertanyaanSiswa/${kel}/${id}.json?auth=hB09j1EeteUxTJq9ybjjoEpxFg9k84a9KtOzkijK`,
    method: 'PATCH',
    data: { pertanyaan }
  })

  return data
}

export const getPertanyaan = async (kel: string): Promise<PertanyaanTypeResponse[]> => {
  const { data } = await BaseApi().request<PertanyaanTypeResponse[]>({
    url: `/pertanyaanSiswa/${kel}.json?auth=hB09j1EeteUxTJq9ybjjoEpxFg9k84a9KtOzkijK`,
    method: 'GET',
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

export const updateSoal = async (uid: string, id: string, latihan: HasilSoalType[]): Promise<HasilSoalType> => {
  const { data } = await BaseApi().request<HasilSoalType>({
    url: `materi/${uid}/${id}.json?auth=hB09j1EeteUxTJq9ybjjoEpxFg9k84a9KtOzkijK`,
    method: 'PATCH',
    data: { latihan }
  })
  return data
}