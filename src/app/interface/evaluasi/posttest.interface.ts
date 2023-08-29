export interface listIsiMateri {
    judulMateri: string,
    isiMateri: string,
    htmlMateri?: string
    Image: string,
    UrlYoutube: string,
    type?: string
    soal?: string
    imageSoal?: string
    typePilihanSoal?: string
    kunjawSoal?: number
    pilihanSoal?: string[]
  }
  
  export interface DataSubTitle {
    titleModul: string,
    isiMateri: listIsiMateri[]
  }
  
  export interface DataMateri {
    // title: string;
    materi: DataSubTitle;
    status: string;
  }
  
  export interface DataSoal {
    title: string
    typeSoal: string
    Pertanyaan: string
    jawaban: string
    pilihanJawaban: string[]
  }
  
  export const soalPosttest: DataMateri[] = [
    {
      // title: "Operator Logika, Relasional, dan Kesaman",
      materi:
      {
        titleModul: "Evaluasi Post-test",
        isiMateri: [
          {
            judulMateri: "1",
            isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
            Image: "",
            soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program berikut!<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/1.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>   
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Pilihlah jawaban yang tepat berdasarkan program di atas:
                  <br/>Jika nilai yang dimasukkan adalah 55, output yang dihasilkan adalah...                  
                  </span>
                </div>         
              </div>
              `,
            pilihanSoal: [
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Nilai Anda adalah A.
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Nilai Anda adalah B.
                  </span>
                </div>        
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Nilai Anda adalah C.
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Nilai Anda adalah D.
                  </span>
                </div>
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Nilai Anda adalah E.
                  </span>
                </div>
              </div>
              `
            ],
            kunjawSoal: 4,
            UrlYoutube: "",
            type: "soal"
          },
          {
            judulMateri: "2",
            isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
            Image: "",
            soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program berikut!<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/2.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>   
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Dalam bahasa Pascal, apakah pernyataan berikut valid untuk switch case?
                  </span>
                </div>         
              </div>
              `,
            pilihanSoal: [
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Ya, pernyataan di atas valid dan tidak akan menimbulkan kesalahan saat kompilasi.
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Tidak, pernyataan tersebut tidak valid karena mencampur tipe data karakter dan bilangan bulat dalam satu switch case.
                  </span>
                </div>        
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Tidak, karena sintaks switch case harus menggunakan kata kunci case of bukan hanya case.
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Tergantung pada nilai variabel nilai.
                  </span>
                </div>
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Tidak ada jawaban yang benar.
                  </span>
                </div>
              </div>
              `
            ],
            kunjawSoal: 1,
            UrlYoutube: "",
            type: "soal"
          },
          {
            judulMateri: "3",
            isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
            Image: "",
            soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program berikut!<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/3.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Kesimpulan apa yang dapat ditarik berdasarkan kode di atas?
                  </span>
                </div>         
              </div>
              `,
            pilihanSoal: [
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Program memeriksa apakah seorang siswa memenuhi syarat untuk kursus apa pun atau tidak.
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Program memeriksa apakah seorang siswa memenuhi syarat untuk kursus lanjutan.                  
                  </span>
                </div>        
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Program memeriksa apakah siswa berusia 18 tahun atau belum.
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Program memeriksa apakah nilai seorang siswa adalah A, B, atau C.
                  </span>
                </div>
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Program memeriksa apakah seorang siswa memenuhi syarat untuk kursus reguler.
                  </span>
                </div>
              </div>
              `
            ],
            kunjawSoal: 1,
            UrlYoutube: "",
            type: "soal"
          },
          {
            judulMateri: "4",
            isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
            Image: "",
            soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Dalam bahasa Pascal, berikut adalah potongan kode yang hendak mengevaluasi nilai dari variabel "x" dan "y"<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/4.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Apa hasil yang tepat untuk variabel "hasil" jika x = 5 dan y = -3?
                  </span>
                </div>  
              </div>
              `,
            pilihanSoal: [
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  'Kuadran I'
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  'Kuadran II'
                  </span>
                </div>        
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  'Kuadran III'
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  'Kuadran IV'
                  </span>
                </div>
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Error
                  </span>
                </div>
              </div>
              `
            ],
            kunjawSoal: 4,
            UrlYoutube: "",
            type: "soal"
          },
          {
            judulMateri: "5",
            isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
            Image: "",
            soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Diberikan potongan kode berikut dalam bahasa Pascal:<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/5.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Hasil dari program diatas adalah?
                  </span>
                </div>  
              </div>
              `,
            pilihanSoal: [
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Balita
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Anak-anak
                  </span>
                </div>        
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Remaja
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Dewasa
                  </span>
                </div>
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Lansia
                  </span>
                </div>
              </div>
              `
            ],
            kunjawSoal: 4,
            UrlYoutube: "",
            type: "soal"
          },
          {
            judulMateri: "6",
            isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
            Image: "",
            soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  "Budi diminta pergi ke warung untuk membeli gula dengan harga Rp. 6.500 dengan membawa uang sebesar Rp. 10.000. Ibu berpesan jika uang yang Budi bawa memiliki sisa setelah membeli gula, maka uang tersebut boleh Budi ditabungkan."<br/>
                  <br/>Berdasarkan pernyataan di atas, code yang tepat adalah... 
                  </span>
                </div>
              </div>
              `,
            pilihanSoal: [
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/6.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/7.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/8.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/9.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/10.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>           
              </div>
              `
            ],
            kunjawSoal: 1,
            UrlYoutube: "",
            type: "soal"
          },
          {
            judulMateri: "7",
            isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
            Image: "",
            soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan flowchart berikut!<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/11.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Apa yang akan terjadi saat flowchart tersebut dijalankan 
                  </span>
                </div>
              </div>
              `,
            pilihanSoal: [
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  kondisi akan selalu benardan aksi diialankan
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  kondisi akan selalu salah dan aksi dijalankan
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  kondisi akan selalu benar dan aksi tidak dijalankan
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  kondisi akan selalu salah dan aksi tidak dijalankan
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  kondisi akan selalu benardan aksi selalu dijalankan
                  </span>
                </div>           
              </div>
              `
            ],
            kunjawSoal: 4,
            UrlYoutube: "",
            type: "soal"
          },
          {
            judulMateri: "8",
            isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
            Image: "",
            soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan pseuducode berikut:<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/12.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Berdasarkan algoritma di atas jika diinputkan nilai a = 3, nilai b = 5 dan nilai c = 2, output yang dihasilkan adalah… 
                  </span>
                </div>
              </div>
              `,
            pilihanSoal: [
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  3 5 2
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5 2 3
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  4 1 0
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  2 3 5
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  2 8 1
                  </span>
                </div>           
              </div>
              `
            ],
            kunjawSoal: 0,
            UrlYoutube: "",
            type: "soal"
          },
          {
            judulMateri: "9",
            isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
            Image: "",
            soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan pseudocode berikut:<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/13.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Berdasarkan algoritma di atas, jika diinputkan kategori mobil nomor 3 dan jumlah hari penyewaan mobil selama 2 hari, maka output yang dihasilkan adalah…
                  </span>
                </div>
              </div>
              `,
            pilihanSoal: [
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1025000
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1000000
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  25000
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  500000
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  515000
                  </span>
                </div>           
              </div>
              `
            ],
            kunjawSoal: 0,
            UrlYoutube: "",
            type: "soal"
          },
          {
            judulMateri: "10",
            isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
            Image: "",
            soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan pseudocode berikut:<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/14.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Jika diinputkan p = 4 dan q = 7, maka apakah output yang dihasilkan dari program tersebut…
                  </span>
                </div>
              </div>
              `,
            pilihanSoal: [
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  4
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  7
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  3
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  -3
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  11
                  </span>
                </div>           
              </div>
              `
            ],
            kunjawSoal: 0,
            UrlYoutube: "",
            type: "soal"
          },
          {
            judulMateri: "11",
            isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
            Image: "",
            soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan pseudocode berikut:<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/15.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Jika diinputkan nilai a = 4 dan b = 10, maka hasil output dari algoritma tersebut adalah…
                  </span>
                </div>
              </div>
              `,
            pilihanSoal: [
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  18 dan 16
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  14 dan 6
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  14 dan -6
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  18 dan 4
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  14 dan 16
                  </span>
                </div>           
              </div>
              `
            ],
            kunjawSoal: 0,
            UrlYoutube: "",
            type: "soal"
          },
          {
            judulMateri: "12",
            isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
            Image: "",
            soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan pseudocode berikut:<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/16.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Jika diinputkan jumlah uang = 200000 dan total = 50000, maka output yang dihasilkan adalah…
                  </span>
                </div>
              </div>
              `,
            pilihanSoal: [
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  175000
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  150000
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  110000
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  100000
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  125000
                  </span>
                </div>           
              </div>
              `
            ],
            kunjawSoal: 1,
            UrlYoutube: "",
            type: "soal"
          },
          {
            judulMateri: "13",
            isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
            Image: "",
            soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program berikut!<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/17.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Jika input a adalah -2 maka output yang dihasilkan adalah... 
                  </span>
                </div>
              </div>
              `,
            pilihanSoal: [
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  -2
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  4
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  0
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  -4
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  2
                  </span>
                </div>           
              </div>
              `
            ],
            kunjawSoal: 4,
            UrlYoutube: "",
            type: "soal"
          },
          {
            judulMateri: "14",
            isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
            Image: "",
            soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan pseuducode berikut:<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/18.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Berdasarkan pseudocode di atas manakah pernyataan yang benar di bawah ini…
                  </span>
                </div>
              </div>
              `,
            pilihanSoal: [
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Tidak mendapat beasiswa apabila peringkat 10
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Apabila peringkat 10 maka mendapatkan beasiswa sampai tamat sekolah
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Apabila peringkat 5 maka mendapatkan beasiswa selama 2 semester
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Apabila peringkat 5 dan apabila pengasilan 1500000 maka mendapatkan beasiswa sampai tamat sekolah
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Apabila peringkat 5 dan apabila pengasilan 1500000 maka tidak mendapatkan beasiswa
                  </span>
                </div>           
              </div>
              `
            ],
            kunjawSoal: 4,
            UrlYoutube: "",
            type: "soal"
          },
          {
            judulMateri: "15",
            isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
            Image: "",
            soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan Program berikut:<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/19.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Jika diinputkan tinggi badan 160cm dan berat badan 70kg, maka output dari program tersebut adalah…
                  </span>
                </div>
              </div>
              `,
            pilihanSoal: [
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Obesitas
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Gemuk
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Normal
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Kurus
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Cukup 
                  </span>
                </div>           
              </div>
              `
            ],
            kunjawSoal: 1,
            UrlYoutube: "",
            type: "soal"
          },
          {
            judulMateri: "16",
            isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
            Image: "",
            soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program berikut!<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/20.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Jika kita menginputkan suhu -8 derajat celcius, maka output dari program tersebut adalah…
                  </span>
                </div>
              </div>
              `,
            pilihanSoal: [
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Suhu di bawah titik beku air
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Suhu membeku air
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Suhu dalam kisaran normal
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Suhu mendidih air
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Suhu di atas titik didih air 
                  </span>
                </div>           
              </div>
              `
            ],
            kunjawSoal: 0,
            UrlYoutube: "",
            type: "soal"
          },
          {
            judulMateri: "17",
            isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
            Image: "",
            soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program berikut!<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/21.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Jika diinputkan jam mulai pukul 3.45 dan jam selesai 7.15, apakah output dari program di atas…
                  </span>
                </div>
              </div>
              `,
            pilihanSoal: [
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Biaya penggunaan warnet: Rp 30000
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Biaya penggunaan warnet: Rp 35000
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Biaya penggunaan warnet: Rp 15000
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Biaya penggunaan warnet: Rp 10500
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Tidak ada output
                  </span>
                </div>           
              </div>
              `
            ],
            kunjawSoal: 3,
            UrlYoutube: "",
            type: "soal"
          },
          {
            judulMateri: "18",
            isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
            Image: "",
            soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program case berikut:<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/22.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Pernyataan yang sesuai dengan program di atas, kecuali…
                  </span>
                </div>
              </div>
              `,
            pilihanSoal: [
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Jika mempunyai pakaian sebanyak 43 buah maka dibutuhkan sebanyak 3 lemari
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Jika mempunyai pakaian sebanyak 29 buah maka dibutuhkan sebanyak 2 lemari
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Jika mempunyai pakaian sebanyak 58 buah maka dibutuhkan sebanyak 3 lemari
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Jika mempunyai pakaian sebanyak 76 buah maka dibutuhkan sebanyak 3 lemari
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Jika mempunyai pakaian sebanyak 87 
                  </span>
                </div>           
              </div>
              `
            ],
            kunjawSoal: 3,
            UrlYoutube: "",
            type: "soal"
          },
          {
            judulMateri: "19",
            isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
            Image: "",
            soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan algoritma berikut!<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/23.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Apakah output yang akan dihasilkan dari algoritma di atas…
                  </span>
                </div>
              </div>
              `,
            pilihanSoal: [
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Jumlah mobil untuk laki-laki: 3<br/>
                  Jumlah mobil untuk perempuan: 4
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Jumlah mobil untuk laki-laki: 4
                  <br/>Jumlah mobil untuk perempuan: 3
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Mobil laki-laki = 4
                  <br/>Mobil perempuan = 4
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Mobil laki-laki = 4
                  <br/>Mobil perempuan = 2
                  </span>
                </div>           
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Tidak ada output
                  </span>
                </div>           
              </div>
              `
            ],
            kunjawSoal: 1,
            UrlYoutube: "",
            type: "soal"
          },
          {
            judulMateri: "20",
            isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
            Image: "",
            soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Seorang pemilik café ingin membuat sebuah program menggunakan case untuk harga setelah diskon dari produk yang dijual. Program tersebut harus sesuai dengan ketentuan:<br/>
                  </span>
                  <ul>
                    <li>
                      jika pelanggan membeli makanan maka mendapatkan diskon sebesar 10%
                    </li>
                    <li>
                      jika pelanggan membeli minuman maka mendapatkan diskon sebesar 5%
                    </li>
                    <li>
                      jika pelanggan membeli dessert maka mendapatkan diskon sebesar 8%
                    </li>
                    <li>
                      jika pelanggan membeli paket makanan dan minuman maka mendapatkan diskon sebesar 15%
                    </li>
                    <li>
                      jika pelanggan membeli paket komplit diskon sebesar 25%
                    </li>
                  </ul>
                </div> 
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>manakah dari program berikut yang sesuai dengan ketentuan di atas…
                  </span>
                </div>
              </div>
              `,
            pilihanSoal: [
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/24.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>            
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/25.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>            
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/26.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>            
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/27.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>            
              </div>
              `,
              `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/28.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>            
              </div>
              `
            ],
            kunjawSoal: 0,
            UrlYoutube: "",
            type: "soal"
          },
        ]
      },
      status: "materi"
    }
  ];