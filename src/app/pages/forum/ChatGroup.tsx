/* eslint-disable jsx-a11y/anchor-is-valid */
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { FC, useEffect, useState } from 'react'
import { getPertanyaan } from '../../api/Request/materi.siswa.api'
import { PertanyaanType, PertanyaanTypeResponse } from '../../interface/materi/materi.interface'

const ChatGroup: FC = () => {
  const auth = getAuth()
  const [uuid, setUuid] = useState<string>()
  const [pertanyaan, setPertanyaan] = useState<PertanyaanType[]>([])

  useEffect(() => {
    onAuthStateChanged(auth, e => {
      setUuid(e?.uid)
    })
    handleGetPertanyaan()
  }, [pertanyaan])

  const handleGetPertanyaan = async () => {
    try {
      const resGetPertanyaan = await getPertanyaan("kel1")
      const output = Object.entries(resGetPertanyaan)
      output.map(e => {
        //@ts-ignore
        pertanyaan.push(e[1].pertanyaan)
      });

      console.log(pertanyaan);

    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className='d-flex flex-column flex-lg-row rounded pt-2' style={{ justifyContent: 'center', alignContent: 'center' }}>
      <div className="card col-xl-4 rounded shadow-sm mb-1 me-5"
      // style={{ width: '25%', height: '100%', cursor: 'pointer' }}
      >
        <span className='fw-bold p-3 ms-7 mt-2' style={{ fontSize: '20px' }}> List Pertanyaan :</span>
        <div className="card-body ms-1 mt-1 overflow-auto" style={{ maxHeight: '580px', maxWidth: '100%' }}>
          {
            pertanyaan && pertanyaan.map((e, i) => {
              return (
                <div className='border border-secondary border-1 rounded p-2 mb-2' key={i}>
                  <span className='text-gray-500' style={{ fontSize: '15px' }}>Dari {e.fullname}</span>
                  <br />
                  <span style={{ fontSize: '20px' }} className='text-dark'>{e.pertanyaan}</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="card col-xl-8 rounded shadow-sm p-2"
      // style={{ width: '25%', height: '180px', cursor: 'pointer' }}
      >
        <iframe width="100%" height="620" src="https://villageharmony.fun:9001" title="Forum Diskusi" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; camera https://villageharmony.fun:9001; microphone https://villageharmony.fun:9001" allowFullScreen></iframe>
      </div>
    </div >
  )
}

export default ChatGroup
