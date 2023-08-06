/* eslint-disable jsx-a11y/anchor-is-valid */
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getProfileSiswa } from '../../api/Request/profile.siswa.api'

const EvaluasiFile: FC = () => {
  const auth = getAuth()
  const [uuid, setUuid] = useState<string>()
  //@ts-ignore
  const location = useLocation<data>()
  const [page, setPage] = useState<string>("")
  const [noAbsen, setNoAbsen] = useState<string>("")

  useEffect(() => {
    onAuthStateChanged(auth, e => {
      //@ts-ignore
      setUuid(e?.uid)
      handleGetProfile(e?.uid)
    })
  }, [page, noAbsen])

  const handleGetProfile = async (uid: string | undefined) => {
    try {
      if (uid) {
        const resGetPertanyaan = await getProfileSiswa(uid)
        const output = Object.entries(resGetPertanyaan)
        output.map(e => {
          // @ts-ignore
          setNoAbsen(e[1].nomor_absen.toString())
        });
      }

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='d-flex flex-column flex-lg-row rounded pt-2 shadow-sm p-2' style={{ justifyContent: 'center', alignContent: 'center' }}>
      <iframe width="100%" height="620" src={`https://villageharmony.fun:9001/p/${noAbsen}`} title="Forum Diskusi" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; camera https://villageharmony.fun:9001; microphone https://villageharmony.fun:9001" allowFullScreen></iframe>
    </div >
  )
}

export default EvaluasiFile
