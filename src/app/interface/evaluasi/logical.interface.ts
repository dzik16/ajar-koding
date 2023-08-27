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

export const soalLogic: DataMateri[] = [
  {
    // title: "Operator Logika, Relasional, dan Kesaman",
    materi:
    {
      titleModul: "Kuesioner Logical Thinking",
      isiMateri: [
        {
          judulMateri: "Pembentukan pengertian",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Saya dapat menghanalisis ciri-ciri sejumlah objek yang sejenis.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
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
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "Pembentukan pengertian",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Saya dapat membandingkan ciri-ciri untuk ditemukan ciri yang sama dan selalu ada serta yang hakiki.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
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
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "Pembentukan pengertian",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Saya dapat mengabstraksikan, yaitu menyisihkan, membuang ciri-ciri yang tidak hakiki dan menangkap ciri-ciri yang hakiki.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
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
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "Pembentukan pendapat",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Saya mampu menyatakan 1 pendapat afirmatif/positif yaitu pendapat yang mengiyakan, yang secara tegas mengatakan keadaan sesuatu.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
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
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "Pembentukan pendapat",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Saya mampu menyatakan pendapat negatif yaitu pendapat yang secara tegas menerangkan tentang tidak adanya sesuatu sifat pada sesuatu hal.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
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
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "Pembentukan pendapat",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Saya mampu menyatakan pendapat modalitas (kemungkinan) yaitu pendapat yang menerangkan kemungkinan- kemungkinan sesuatu sifat pada sesuatu hal.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
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
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "Penarikan kesimpulan/pembentukan keputusan",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Saya mampu membuat keputusan induktif, yaitu keputusan yang diambil dari pendapat-pendapat khusus menuju ke satu pendapat umum.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
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
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "Penarikan kesimpulan/pembentukan keputusan",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Saya mampu membuat keputusan deduktif, yaitu keputusan yang diambil dari pendapat umum ke khusus.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
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
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "Penarikan kesimpulan/pembentukan keputusan",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Saya mampu membuat keputusan analogis, yaitu keputusan yang diperoleh dengan jalan membandingkan atau menyesuaikan dengan pendapat khusus yang sudah ada.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
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
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "Keruntutan berpikir",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Saya mampu menyebutkan seluruh informasi dari apa yang diketahui dan apa yang ditanyakan soal dengan tepat.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
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
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "Keruntutan berpikir",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Saya mampu menentukan langkah yang ditempuh dengan teratur dalam menyelesaikan permasalahan yang diberikan dari awal hingga akhir.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
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
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "Kemampuan berargumen",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Saya mampu mengungkapkan pendapat atau alasan logis pada langkah-langkah penyelesaian yang digunakan untuk menyelesaikan permasalahan yang diberikan dari awal hingga akhir.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
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
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "Kemampuan berargumen",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Saya dapat menyelesaikan soal secara tepat pada setiap langkah serta dapat memberi argumen pada setiap langkah.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
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
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "Kemampuan berargumen",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Saya dapat mengungkapkan alasan logis untuk jawaban akhir yang kurang tepat.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
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
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "Penarikan kesimpulan",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Saya mampu memberikan kesimpulan dengan tepat dari suatu permasalahan yang ada berdasarkan langkah yang telah ditempuh.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
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
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
          UrlYoutube: "",
          type: "soal"
        },
      ]
    },
    status: "materi"
  }
];