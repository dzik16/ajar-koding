import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toAbsoluteUrl } from '../../../_molekul/helpers'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { CreateProfileSiswaType } from '../../interface/profile.siswa.interface'
import { getAllSiswa, getProfileSiswa } from '../../api/Request/profile.siswa.api'
import Lottie from 'lottie-react'
import animLoading from '../../../_molekul/assets/loading/animLoading.json'
import clsx from 'clsx'
import { isEvaluasi } from '../../api/Request/materi.siswa.api'
import Swal from 'sweetalert2'

const Evaluasi = () => {
  const navigate = useNavigate()
  const auth = getAuth()
  const [uuid, setUuid] = useState<string>()
  const [profileSiswa, setProfileSiswa] = useState<CreateProfileSiswaType>()
  const [loading, setLoading] = useState<boolean>(false)
  const [listPeringkat, setListPeringkat] = useState<CreateProfileSiswaType[]>([])

  useEffect(() => {
    onAuthStateChanged(auth, e => {
      setUuid(e?.uid)
      handleGetProfile(e?.uid)
    })
  }, [uuid])

  const handleGetProfile = async (uid: string | undefined) => {
    setLoading(true)
    try {
      if (uid) {
        const resGetPertanyaan = await getProfileSiswa(uid)
        const output = Object.entries(resGetPertanyaan)
        if (output[0][1].type.toLowerCase() === "siswa") {
          output.map(e => {
            // @ts-ignore
            setProfileSiswa(e[1])
          });
          setLoading(false)
        } else {
          handleGetAllProfile()
        }
      }

    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  }

  const handleGetAllProfile = async () => {
    setLoading(true)
    try {
      const res = await getAllSiswa()
      if (res) {
        const la = Object.entries(res)
        la.map((e, i) => {
          const ha = Object.entries(e[1])
          const body: CreateProfileSiswaType = {
            name: ha[0][1].name,
            nomor_absen: ha[0][1].nomor_absen,
            type: ha[0][1].type,
            kelompok: ha[0][1].kelompok,
            email: ha[0][1].email,
            imageProfile: ha[0][1].imageProfile
          }
          setListMateri(body)
        })
        setLoading(false)
      }

    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  }

  const setListMateri = (list: CreateProfileSiswaType) => {
    const found = listPeringkat.find((obj) => {
      return obj.name === list.name
    })
    if (!found) {
      listPeringkat.push(list)
    }
  }

  const handleNavigate = async (navigateParams: string, page: string, ke: string) => {
    try {
      const resGetIsEvaluasi = await isEvaluasi()
      if (resGetIsEvaluasi.isEvaluasi) {
        navigate(navigateParams, { state: { page: page, ke: ke } })
      } else {
        const swalSuccess = Swal.mixin({
          customClass: {
            confirmButton: 'btn btn-danger',
          },
          buttonsStyling: false
        })
        swalSuccess.fire({
          title: `Mohon maaf Evaluasi belum dibuka!`,
          icon: 'error',
          confirmButtonText: 'Dismiss',
        })
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {
        loading ? (
          <div className='d-flex'
            style={{ width: '100%', height: '100%', justifyContent: 'center', justifyItems: 'center' }}
          >
            <Lottie style={{ width: '55%', height: '55%' }} animationData={animLoading} />
          </div>
        ) : (

          <div className="d-flex row">
            {
              profileSiswa?.type.toLowerCase() === "siswa"
                ?
                <>
                  <h1 className='mb-10 ms-20' style={{ fontSize: '30px' }}>Evaluasi Harian</h1>
                  <div className="d-flex row" style={{ justifyContent: 'center' }}>
                    <div className="card col-sm-4 p-0 rounded shadow-sm"
                      onClick={() =>
                        handleNavigate('/evaluasi/lkpd', 'r.59bd020134faab4ae5fac989f158c6af?showControls', '1')
                        // navigate('/evaluasi/lkpd', { state: { page: "r.59bd020134faab4ae5fac989f158c6af?showControls", ke: "1" } })}
                      }
                      style={{ width: '30%', height: '200px', cursor: 'pointer' }}>
                      <div className="card-body p-0">
                        <div className='d-flex rounded-top ' style={{ backgroundColor: '#E108B1', height: '60%', justifyContent: 'center' }}>
                          <div className='me-5'>
                            <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__Annual Report.svg')} alt='' />
                          </div>
                        </div>
                        <div className='p-5'>
                          <h3>Evaluasi Pertemuan 1</h3>
                          {/* <span className='badge badge-light-success'>Selesai</span> */}
                        </div>
                      </div>
                    </div>
                    <div className="card col-sm-4 p-0 rounded shadow-sm ms-10 me-10"
                      onClick={() => handleNavigate('/evaluasi/lkpd', 'r.0e7760b9b82d6338a9bf3c774f56384f', '2')}
                      style={{ width: '30%', height: '200px', cursor: 'pointer' }}>
                      <div className="card-body p-0">
                        <div className='d-flex rounded-top ' style={{ backgroundColor: '#08E138', height: '60%', justifyContent: 'center' }}>
                          <div className='me-5'>
                            <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__goods.svg')} alt='' />
                          </div>
                        </div>
                        <div className='p-5'>
                          <h3>Evaluasi Pertemuan 2</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='mt-20'>
                    <h1 className='mb-10 ms-20' style={{ fontSize: '30px' }}>Evaluasi Soal</h1>
                    <div className="d-flex row mt-10" style={{ justifyContent: 'center' }}>
                      <div className="card col-sm-4 p-0 rounded shadow-sm me-5" onClick={() => navigate('/evaluasi/soal', { state: { materiParent: "pretest" } })} style={{ width: '25%', height: '200px', cursor: 'pointer' }}>
                        <div className="card-body p-0">
                          <div className='d-flex rounded-top ' style={{ backgroundColor: '#E1D808', height: '60%', justifyContent: 'center' }}>
                            <div className='me-5'>
                              <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__telescope.svg')} alt='' />
                            </div>
                          </div>
                          <div className='p-5'>
                            <h3>Pre-Test</h3>
                            <span className='badge badge-light-danger'>Belum Mulai</span>
                          </div>
                        </div>
                      </div>

                      <div className="card col-sm-4 p-0 border rounded shadow-sm" onClick={() => navigate('/evaluasi/soal', { state: { materiParent: "posttest" } })} style={{ width: '25%', height: '200px', cursor: 'pointer' }}>
                        <div className="card-body p-0">
                          <div className='d-flex rounded-top ' style={{ backgroundColor: '#0893E1', height: '60%', justifyContent: 'center' }}>
                            <div className='me-5'>
                              <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__moneybox.svg')} alt='' />
                            </div>
                          </div>
                          <div className='p-5'>
                            <h3>Post-Test</h3>
                            <span className='badge badge-light-danger'>Belum Mulai</span>
                          </div>
                        </div>
                      </div>

                      <div className="card col-sm-4 p-0 rounded shadow-sm ms-5" onClick={() => navigate('/evaluasi/soal', { state: { materiParent: "preLogic" } })} style={{ width: '25%', height: '200px', cursor: 'pointer' }}>
                        <div className="card-body p-0">
                          <div className='d-flex rounded-top ' style={{ backgroundColor: '#E10856', height: '60%', justifyContent: 'center' }}>
                            <div className='me-5'>
                              <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__to add.svg')} alt='' />
                            </div>
                          </div>
                          <div className='p-5'>
                            <h3>Pre Logic</h3>
                            <span className='badge badge-light-danger'>Belum Mulai</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex row mt-10" style={{ justifyContent: 'center' }}>
                      <div className="card col-sm-4 p-0 rounded shadow-sm me-5" onClick={() => navigate('/evaluasi/soal', { state: { materiParent: "postLogic" } })} style={{ width: '25%', height: '200px', cursor: 'pointer' }}>
                        <div className="card-body p-0">
                          <div className='d-flex rounded-top ' style={{ backgroundColor: '#E108B1', height: '60%', justifyContent: 'center' }}>
                            <div className='me-5'>
                              <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__Annual Report.svg')} alt='' />
                            </div>
                          </div>
                          <div className='p-5'>
                            <h3>Post Logic</h3>
                            <span className='badge badge-light-danger'>Belum Mulai</span>
                          </div>
                        </div>
                      </div>
                      <div className="card col-sm-4 p-0 rounded shadow-sm ms-5" onClick={() => navigate('/evaluasi/soal', { state: { materiParent: "penilaianMedia" } })} style={{ width: '25%', height: '200px', cursor: 'pointer' }}>
                        <div className="card-body p-0">
                          <div className='d-flex rounded-top ' style={{ backgroundColor: '#08E138', height: '60%', justifyContent: 'center' }}>
                            <div className='me-5'>
                              <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__goods.svg')} alt='' />
                            </div>
                          </div>
                          <div className='p-5'>
                            <h3>Penilaian Media</h3>
                            <span className='badge badge-light-danger'>Belum Mulai</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
                :
                <>
                  <h1 className='mb-10' style={{ fontSize: '30px' }}>Hasil Evaluasi Siswa</h1>
                  <div className="d-flex row" style={{ justifyContent: 'center' }}>
                    <div className="card col-sm-4 p-0 rounded shadow-sm"
                      onClick={() =>
                        navigate("/hasil/evaluasi", { state: { ke: 1 } })
                        // navigate('/evaluasi/lkpd', { state: { page: "r.59bd020134faab4ae5fac989f158c6af?showControls", ke: "1" } })}
                      }
                      style={{ width: '30%', height: '200px', cursor: 'pointer' }}>
                      <div className="card-body p-0">
                        <div className='d-flex rounded-top ' style={{ backgroundColor: '#E108B1', height: '60%', justifyContent: 'center' }}>
                          <div className='me-5'>
                            <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__Annual Report.svg')} alt='' />
                          </div>
                        </div>
                        <div className='p-5'>
                          <h3>Evaluasi Pertemuan 1</h3>
                          <span className='badge badge-light-info'>Lihat Nilai Siswa -{'>'}</span>
                        </div>
                      </div>
                    </div>
                    <div className="card col-sm-4 p-0 rounded shadow-sm ms-10 me-10"
                      onClick={() => navigate("/hasil/evaluasi", { state: { ke: 2 } })}
                      style={{ width: '30%', height: '200px', cursor: 'pointer' }}>
                      <div className="card-body p-0">
                        <div className='d-flex rounded-top ' style={{ backgroundColor: '#08E138', height: '60%', justifyContent: 'center' }}>
                          <div className='me-5'>
                            <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__goods.svg')} alt='' />
                          </div>
                        </div>
                        <div className='p-5'>
                          <h3>Evaluasi Pertemuan 2</h3>
                          <span className='badge badge-light-info'>Lihat Nilai Siswa -{'>'}</span>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className='mt-20'>
                    <h1 className='mb-10' style={{ fontSize: '30px' }}>Evaluasi Soal</h1>
                    <div className="d-flex row mt-10" style={{ justifyContent: 'center' }}>
                      <div className="card col-sm-4 p-0 rounded shadow-sm me-5" onClick={() => navigate("/hasil/evaluasi")} style={{ width: '25%', height: '200px', cursor: 'pointer' }}>
                        <div className="card-body p-0">
                          <div className='d-flex rounded-top ' style={{ backgroundColor: '#E1D808', height: '60%', justifyContent: 'center' }}>
                            <div className='me-5'>
                              <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__telescope.svg')} alt='' />
                            </div>
                          </div>
                          <div className='p-5'>
                            <h3>Pre-Test</h3>
                            <span className='badge badge-light-info'>Lihat Nilai Siswa -{'>'}</span>
                          </div>
                        </div>
                      </div>

                      <div className="card col-sm-4 p-0 border rounded shadow-sm" onClick={() => navigate("/hasil/evaluasi")} style={{ width: '25%', height: '200px', cursor: 'pointer' }}>
                        <div className="card-body p-0">
                          <div className='d-flex rounded-top ' style={{ backgroundColor: '#0893E1', height: '60%', justifyContent: 'center' }}>
                            <div className='me-5'>
                              <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__moneybox.svg')} alt='' />
                            </div>
                          </div>
                          <div className='p-5'>
                            <h3>Post-Test</h3>
                            <span className='badge badge-light-info'>Lihat Nilai Siswa -{'>'}</span>
                          </div>
                        </div>
                      </div>

                      <div className="card col-sm-4 p-0 rounded shadow-sm ms-5" onClick={() => navigate("/hasil/evaluasi")} style={{ width: '25%', height: '200px', cursor: 'pointer' }}>
                        <div className="card-body p-0">
                          <div className='d-flex rounded-top ' style={{ backgroundColor: '#E10856', height: '60%', justifyContent: 'center' }}>
                            <div className='me-5'>
                              <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__to add.svg')} alt='' />
                            </div>
                          </div>
                          <div className='p-5'>
                            <h3>Pre Logic</h3>
                            <span className='badge badge-light-info'>Lihat Nilai Siswa -{'>'}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex row mt-10" style={{ justifyContent: 'center' }}>
                      <div className="card col-sm-4 p-0 rounded shadow-sm me-5" onClick={() => navigate("/hasil/evaluasi")} style={{ width: '25%', height: '200px', cursor: 'pointer' }}>
                        <div className="card-body p-0">
                          <div className='d-flex rounded-top ' style={{ backgroundColor: '#E108B1', height: '60%', justifyContent: 'center' }}>
                            <div className='me-5'>
                              <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__Annual Report.svg')} alt='' />
                            </div>
                          </div>
                          <div className='p-5'>
                            <h3>Post Logic</h3>
                            <span className='badge badge-light-info'>Lihat Nilai Siswa -{'>'}</span>
                          </div>
                        </div>
                      </div>
                      <div className="card col-sm-4 p-0 rounded shadow-sm ms-5" onClick={() => navigate("/hasil/evaluasi")} style={{ width: '25%', height: '200px', cursor: 'pointer' }}>
                        <div className="card-body p-0">
                          <div className='d-flex rounded-top ' style={{ backgroundColor: '#08E138', height: '60%', justifyContent: 'center' }}>
                            <div className='me-5'>
                              <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__goods.svg')} alt='' />
                            </div>
                          </div>
                          <div className='p-5'>
                            <h3>Penilaian Media</h3>
                            <span className='badge badge-light-info'>Lihat Nilai Siswa -{'>'}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
            }
          </div >
        )
      }
    </>

  )
}

export default Evaluasi