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
  
  export const penilaianMedia: DataMateri[] = [
    {
      // title: "Operator Logika, Relasional, dan Kesaman",
      materi:
      {
        titleModul: "Penilaian Terhadap Media Pembelajaran",
        isiMateri: [
          {
            judulMateri: "Persepsi Pengguna terhadap Kemanfaatan (Perceived Usefulness)",
            isiMateri: `
                  Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                  Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                  `,
            Image: "",
            soal: `
                <div style="font-family: Arial, sans-serif;">
                  <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                    <span style="font-size: 20px; text-align: justify;">
                    Media pembelajaran ini dapat meningkatkan produktivitas saya dalam Belajar
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
            judulMateri: "Persepsi Pengguna terhadap Kemanfaatan (Perceived Usefulness)",
            isiMateri: `
                  Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                  Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                  `,
            Image: "",
            soal: `
                <div style="font-family: Arial, sans-serif;">
                  <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                    <span style="font-size: 20px; text-align: justify;">
                    Media pembelajaran ini membuat saya lebih efektif Dalam
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
            judulMateri: "Persepsi Pengguna terhadap Kemanfaatan (Perceived Usefulness)",
            isiMateri: `
                  Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                  Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                  `,
            Image: "",
            soal: `
                <div style="font-family: Arial, sans-serif;">
                  <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                    <span style="font-size: 20px; text-align: justify;">
                    Media pembelajaran dapat meningkatkan hasil belajar dan berpikir kreatif Saya
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
            judulMateri: "Persepsi Pengguna terhadap Kemudahan Penggunaan (Perceived Ease of Use)",
            isiMateri: `
                  Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                  Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                  `,
            Image: "",
            soal: `
                <div style="font-family: Arial, sans-serif;">
                  <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                    <span style="font-size: 20px; text-align: justify;">
                    Media pembelajaran memiliki prosedur yang jelas dan mudah Dipahami
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
            judulMateri: "Persepsi Pengguna terhadap Kemudahan Penggunaan (Perceived Ease of Use)",
            isiMateri: `
                  Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                  Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                  `,
            Image: "",
            soal: `
                <div style="font-family: Arial, sans-serif;">
                  <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                    <span style="font-size: 20px; text-align: justify;">
                    Media pembelajaran dapat menunjang tercapainya tujuan pembelajaran Saya
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
            judulMateri: "Persepsi Pengguna terhadap Kemudahan Penggunaan (Perceived Ease of Use)",
            isiMateri: `
                  Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                  Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                  `,
            Image: "",
            soal: `
                <div style="font-family: Arial, sans-serif;">
                  <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                    <span style="font-size: 20px; text-align: justify;">
                    Media pembelajaran mudah digunakan
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
            judulMateri: "Sikap dalam menggunakan (Attitude)",
            isiMateri: `
                  Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                  Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                  `,
            Image: "",
            soal: `
                <div style="font-family: Arial, sans-serif;">
                  <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                    <span style="font-size: 20px; text-align: justify;">
                    Media pembelajaran membuat pembelajaran menjadi lebih Menarik
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
            judulMateri: "Sikap dalam menggunakan (Attitude)",
            isiMateri: `
                  Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                  Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                  `,
            Image: "",
            soal: `
                <div style="font-family: Arial, sans-serif;">
                  <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                    <span style="font-size: 20px; text-align: justify;">
                    Media pembelajaran membuat pembelajaran menjadi lebih menyenangkan
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
            judulMateri: "Sikap dalam menggunakan (Attitude)",
            isiMateri: `
                  Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                  Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                  `,
            Image: "",
            soal: `
                <div style="font-family: Arial, sans-serif;">
                  <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                    <span style="font-size: 20px; text-align: justify;">
                    Media pembelajaran cocok digunakan sebagai alat Pembelajaran
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
            judulMateri: "Perhatian untuk menggunakan (Intention to Use)",
            isiMateri: `
                  Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                  Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                  `,
            Image: "",
            soal: `
                <div style="font-family: Arial, sans-serif;">
                  <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                    <span style="font-size: 20px; text-align: justify;">
                    Saya akan menggunakan media pembelajaran untuk belajar
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
            judulMateri: "Perhatian untuk menggunakan (Intention to Use)",
            isiMateri: `
                  Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                  Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                  `,
            Image: "",
            soal: `
                <div style="font-family: Arial, sans-serif;">
                  <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                    <span style="font-size: 20px; text-align: justify;">
                    Saya akan sering menggunakan media pembelajaran ini untuk belajar secara rutin
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
            judulMateri: "Perhatian untuk menggunakan (Intention to Use)",
            isiMateri: `
                  Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                  Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                  `,
            Image: "",
            soal: `
                <div style="font-family: Arial, sans-serif;">
                  <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                    <span style="font-size: 20px; text-align: justify;">
                    Saya akan merekomendasi kan media pembelajaran ini kepada teman Saya
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