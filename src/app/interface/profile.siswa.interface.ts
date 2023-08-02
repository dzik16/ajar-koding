export interface ProfileSiswaTypeResponse {
  materi: number
  name: string
  nomor_absen: string
  post_test: number
  pre_test: number
  submateri: number
}

export interface CreateProfileSiswaType {
  name: string
  nomor_absen: string
  email: string
}


