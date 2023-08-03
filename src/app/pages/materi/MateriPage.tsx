import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toAbsoluteUrl } from '../../../_molekul/helpers'
import { getDataMateri, setDataMateri } from '../../helpers/MateriHelpers'
import { createDetailMateriByUID, getMateriSiswaByUID } from '../../api/Request/materi.siswa.api'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { DetailMateriState, DetailMateriTypeResponse } from '../../interface/materi/materi.interface'
import Lottie from 'lottie-react'
import animLoading from '../../../_molekul/assets/loading/animLoading.json'
import { useIsMateri } from './context/isMateriProvider'
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

const MateriPage = () => {
  const navigate = useNavigate()
  const auth = getAuth()
  const [uuid, setUuid] = useState<string | undefined>("")
  const [detailMateri] = useState<DetailMateriState[]>([])
  const [isLoading, setLoading] = useState<boolean>(false)
  const { setIsMateri } = useIsMateri()

  useEffect(() => {
    // Cek apakah halaman sudah pernah di-reload sebelumnya dari local storage
    const hasReloaded = localStorage.getItem('hasReloaded');
    // Jika belum di-reload sebelumnya, maka lakukan reload halaman
    if (hasReloaded === "true") {
      window.location.reload();
      localStorage.removeItem("titleMateri")
      localStorage.setItem('hasReloaded', 'false'); // Simpan status reload ke local storage agar tidak me-reload lagi
    }
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, e => {
      handleGetMateri(e?.uid)
      setUuid(e?.uid)
    })
  }, [uuid, detailMateri])


  const handleGetMateri = async (uid: string | undefined) => {
    setLoading(true)
    try {
      if (uid) {
        const res = await getMateriSiswaByUID(uid)
        const la = Object.entries(res)
        la.map((e, i) => {
          const body: DetailMateriState = {
            idMateri: e[0],
            name: e[1].name,
            status: e[1].status,
            fullname: e[1].fullname,
            step: e[1].step,
            latihan: e[1].latihan,
            rangkuman: e[1].rangkuman
          }
          setListMateri(body)
        })
      }
      setLoading(false)
    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  }

  const setListMateri = (list: DetailMateriState) => {
    const found = detailMateri.find((obj) => {
      return obj.name === list.name
    })
    if (!found) {
      detailMateri.push(list)
    }
  }


  const handleNavigate = async (materi: string, nama: string, i?: number) => {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'dd MMMM yyyy', { locale: id });

    if (uuid) {
      if (i && i > 1) {
        if (detailMateri[i - 2] && detailMateri[i - 2].status !== "On Progress") {
          if (detailMateri[i - 1]) {
            setDataMateri(materi)
            setIsMateri(true)
            navigate("/materi/details", { state: { materiParent: materi, idMateri: detailMateri[i - 1].idMateri } })
          } else {
            setLoading(true)
            try {
              const body: DetailMateriTypeResponse = {
                name: nama,
                status: "On Progress",
                fullname: '-',
                step: 1,
                latihan: [],
                rangkuman: '',
                tanggalMulai: formattedDate
              }
              const res = await createDetailMateriByUID(uuid, body)
              if (res) {
                setLoading(false)
                setDataMateri(materi)
                setIsMateri(true)
                navigate("/materi/details", { state: { materiParent: materi, idMateri: res.name } })
              }
            } catch (error) {
              console.error(error);
              setLoading(false)
            }
          }
        } else {
          console.log("Mohon Maaf anda harus menyelesaikan terlebih dahulu modul sebelumnya");
        }
      } else if (i && i === 1) {
        if (detailMateri[i - 1]) {
          setDataMateri(materi)
          setIsMateri(true)
          navigate("/materi/details", { state: { materiParent: materi, idMateri: detailMateri[i - 1].idMateri } })
        } else {
          setLoading(true)
          try {
            const body: DetailMateriTypeResponse = {
              name: nama,
              status: "On Progress",
              fullname: '-',
              step: 1,
              latihan: [],
              rangkuman: '',
              tanggalMulai: formattedDate
            }
            const res = await createDetailMateriByUID(uuid, body)
            if (res) {
              setLoading(false)
              setDataMateri(materi)
              setIsMateri(true)
              navigate("/materi/details", { state: { materiParent: materi, idMateri: res.name } })
            }
          } catch (error) {
            console.error(error);
            setLoading(false)
          }
        }
      }
    }
  }


  return (
    <div className="d-flex row">
      <h1 className='mb-10 ms-20' style={{ fontSize: '30px' }}>Materi</h1>
      {
        isLoading ? (
          <div className='d-flex'
            style={{ width: '100%', height: '100%', justifyContent: 'center', justifyItems: 'center' }}
          >
            <Lottie style={{ width: '55%', height: '55%' }} animationData={animLoading} />
          </div>
        ) :
          <>
            <div className="d-flex row" style={{ justifyContent: 'center' }}>
              <div className="card col-sm-4 p-0 rounded shadow-sm"
                onClick={() => handleNavigate("m-k-a", "Operator Logika, Relasional, dan Kesaman", 1)}
                style={{ width: '25%', height: '236px', cursor: 'pointer' }}>
                <div className="card-body p-0">
                  <div className='d-flex rounded-top ' style={{ backgroundColor: '#E108B1', height: '50%', justifyContent: 'center' }}>
                    <div className='me-5'>
                      <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__Annual Report.svg')} alt='' />
                    </div>
                  </div>
                  <div className='p-5'>
                    <h3>Operator Logika, Relasional, dan Kesaman</h3>
                    <span className={`badge 
              ${detailMateri && detailMateri[0] && detailMateri[0].status === "Selesai" ? "badge-light-success" : detailMateri && detailMateri[0] && detailMateri[0].status === "On Progress" ? "badge-light-warning" : "badge-light-danger"}
              `}>
                      {detailMateri && detailMateri[0] && detailMateri[0].status ? `${detailMateri[0].status}` : "Belum Mulai"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="card col-sm-4 p-0 rounded shadow-sm ms-10 me-10"
                onClick={() => handleNavigate("m-k-b", "Struktur Percabangan If ", 2)}
                style={{ width: '25%', height: '236px', cursor: 'pointer' }}>
                <div className="card-body p-0">
                  <div className='d-flex rounded-top ' style={{ backgroundColor: '#08E138', height: '50%', justifyContent: 'center' }}>
                    <div className='me-5'>
                      <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__goods.svg')} alt='' />
                    </div>
                  </div>
                  <div className='p-5'>
                    <h3>Struktur Percabangan If </h3>
                    <span className={`badge 
              ${detailMateri && detailMateri[1] && detailMateri[1].status === "Selesai" ? "badge-light-success" : detailMateri && detailMateri[1] && detailMateri[1].status === "On Progress" ? "badge-light-warning" : "badge-light-danger"}
              `}>
                      {detailMateri && detailMateri[1] && detailMateri[1].status ? `${detailMateri[1].status}` : "Belum Mulai"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="card col-sm-4 p-0 border rounded shadow-sm"
                onClick={() => handleNavigate("m-k-c", "Struktur Percabangan If - Else dan If - Else If", 3)}
                style={{ width: '25%', height: '236px', cursor: 'pointer' }}>
                <div className="card-body p-0">
                  <div className='d-flex rounded-top ' style={{ backgroundColor: '#0893E1', height: '50%', justifyContent: 'center' }}>
                    <div className='me-5'>
                      <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__moneybox.svg')} alt='' />
                    </div>
                  </div>
                  <div className='p-5'>
                    <h3>Struktur Percabangan If - Else dan If - Else If</h3>
                    <span className={`badge 
              ${detailMateri && detailMateri[2] && detailMateri[2].status === "Selesai" ? "badge-light-success" : detailMateri && detailMateri[2] && detailMateri[2].status === "On Progress" ? "badge-light-warning" : "badge-light-danger"}
              `}>
                      {detailMateri && detailMateri[2] && detailMateri[2].status ? `${detailMateri[2].status}` : "Belum Mulai"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex row mt-10" style={{ justifyContent: 'center' }}>
              <div className="card col-sm-4 p-0 rounded shadow-sm me-5"
                onClick={() => handleNavigate("m-k-d", "Struktur Percabangan Depend On (Case)", 4)}
                style={{ width: '25%', height: '236px', cursor: 'pointer' }}>
                <div className="card-body p-0">
                  <div className='d-flex rounded-top ' style={{ backgroundColor: '#E1D808', height: '50%', justifyContent: 'center' }}>
                    <div className='me-5'>
                      <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__telescope.svg')} alt='' />
                    </div>
                  </div>
                  <div className='p-5'>
                    <h3>Struktur Percabangan Depend On (Case) </h3>
                    <span className={`badge 
              ${detailMateri && detailMateri[3] && detailMateri[3].status === "Selesai" ? "badge-light-success" : detailMateri && detailMateri[3] && detailMateri[3].status === "On Progress" ? "badge-light-warning" : "badge-light-danger"}
              `}>
                      {detailMateri && detailMateri[3] && detailMateri[3].status ? `${detailMateri[3].status}` : "Belum Mulai"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="card col-sm-4 p-0 rounded shadow-sm ms-5"
                onClick={() => handleNavigate("m-k-e", "Struktur Percabangan If bersarang (Nested If) ", 5)}
                style={{ width: '25%', height: '236px', cursor: 'pointer' }}>
                <div className="card-body p-0">
                  <div className='d-flex rounded-top ' style={{ backgroundColor: '#E10856', height: '50%', justifyContent: 'center' }}>
                    <div className='me-5'>
                      <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__to add.svg')} alt='' />
                    </div>
                  </div>
                  <div className='p-5'>
                    <h3>Struktur Percabangan If bersarang (Nested If) </h3>
                    <span className={`badge 
              ${detailMateri && detailMateri[4] && detailMateri[4].status === "Selesai" ? "badge-light-success" : detailMateri && detailMateri[4] && detailMateri[4].status === "On Progress" ? "badge-light-warning" : "badge-light-danger"}
              `}>
                      {detailMateri && detailMateri[4] && detailMateri[4].status ? `${detailMateri[4].status}` : "Belum Mulai"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
      }
    </div>

  )
}

export default MateriPage