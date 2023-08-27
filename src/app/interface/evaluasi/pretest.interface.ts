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

export const soalPretest: DataMateri[] = [
  {
    // title: "Operator Logika, Relasional, dan Kesaman",
    materi:
    {
      titleModul: "Evaluasi Pre-test",
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
                Pilihlah jawaban yang tepat berdasarkan program di bawah ini : <br/>
                Jika angka yang dimasukkan adalah 5, output yang dihasilkan adalah...
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/1.png"
                  style="height: 70%; width: 70%;"
                />
              </div>            
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Angka 5 adalah bilangan positif.
                </span>
              </div>           
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Angka 5 adalah bilangan negatif.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Angka 5 adalah nol.
                </span>
              </div>           
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Tidak ada output yang dihasilkan.
                </span>
              </div>
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Error karena sintaks program salah
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
          judulMateri: "2",
          isiMateri: `
              Sebelum melangkah lebih jauh tentang materi struktur kontrol keputusan, sebaiknya kalian pahami terlebih dahulu operator yang sering di gunakan dalam kondisi struktur kontrol keputusan. Yaitu operator logika, relasional, kesamaan dan Operator Kondisional (Ternary). 
              `,
          Image: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Manakah dari pernyataan berikut yang benar tentang program di bawah?
                </span>
              </div>  
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/2.png"
                  style="height: 70%; width: 70%;"
                />
              </div>          
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Program tersebut hanya menangani bilangan positif.
                </span>
              </div>           
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Program tersebut hanya menangani bilangan negatif.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Program tersebut hanya menangani angka nol.
                </span>
              </div>           
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Program tersebut menangani bilangan positif, negatif, dan nol.
                </span>
              </div>
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Program tersebut tidak menangani angka nol.
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
          judulMateri: "3",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Di bawah ini merupakan kode Pascal untuk pengelompokan umur. Manakah pernyataan berikut yang benar mengenai program ini?
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/3.png"
                  style="height: 70%; width: 70%;"
                />
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Program ini akan memberikan output "Anda termasuk dalam kelompok Dewasa Muda." jika umur yang dimasukkan adalah 25.
                </span>
              </div>           
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Program ini hanya dapat mengelompokkan umur hingga 25 tahun.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Program ini tidak valid karena penggunaan kata kunci "end" yang tidak tepat.
                </span>
              </div>           
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Jika umur yang dimasukkan adalah -5, program akan memberikan output "Anda termasuk dalam kelompok Balita."
                </span>
              </div>
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Program ini hanya akan memberikan output "Anda termasuk dalam kelompok Dewasa."
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
          judulMateri: "4",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Dalam bahasa Pascal, apakah switch case dapat digunakan untuk memeriksa beberapa kondisi secara bersamaan?
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Ya, switch case dapat digunakan untuk memeriksa beberapa kondisi secara bersamaan.
                </span>
              </div>           
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Tidak, switch case hanya dapat digunakan untuk memeriksa satu kondisi tunggal.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Hanya jika menggunakan ekstensi pihak ketiga dalam bahasa Pascal.
                </span>
              </div>           
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Tergantung pada versi dari kompiler Pascal yang digunakan.
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
          judulMateri: "5",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Program di bawah ini adalah implementasi dari struktur percabangan if-else pada Pascal. Manakah di antara mereka yang tidak benar?
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
                  src="/media/pretest/4.png"
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
                  src="/media/pretest/5.png"
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
                  src="/media/pretest/6.png"
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
                  src="/media/pretest/7.png"
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
                  src="/media/pretest/8.png"
                  style="height: 70%; width: 70%;"
                />
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
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Dalam bahasa Pascal, manakah cara yang lebih efisien untuk menuliskan kondisi untuk dua pilihan yang saling eksklusif (misalnya, A atau B, tetapi tidak keduanya)?
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                if (x > 0) or (x < 10) then
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                if (x >= 0) and (x <= 10) then
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                if (x > 0) and (x < 10) then
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                if (x >= 0) or (x <= 10) then
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Tidak ada jawaban yang benar
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
          judulMateri: "7",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Budi diminta untuk membuat aplikasi menentukan huruf vokal (a, i, u, e, o). <br/>
                Berdasarkan ketentuan tersebut, dapat dimplementasikan ke dalam percabangan ...
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                While
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                If-Then-Else
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Switch Case 
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                If-Then
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                For
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
          judulMateri: "8",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan narasi berikut : <br/>
                “Pak Rahmat ingin membuat program penentuan remedial dengan ketentuan nilai dibawah KKM yaitu 78 dan pada layar dicetak "Remedial". Jika nilai lebih dari atau sama dengan78 maka tidak perlu remedial dan pada layar dicetak nilai yang diinputkan.”
                <br/>
                Berdasarkan narasi di atas, algoritma pseudocode percabangan If-Else yang tepat adalah...
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
                  src="/media/pretest/9.png"
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
                  src="/media/pretest/10.png"
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
                  src="/media/pretest/11.png"
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
                  src="/media/pretest/12.png"
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
                  src="/media/pretest/13.png"
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
        {
          judulMateri: "9",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan program berikut: <br/>
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/14.png"
                  style="height: 70%; width: 70%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                <br/> Berdasarkan algoritma di atas jika menerima masukan kata “biru”, output yang dihasilkan adalah…
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Berhenti
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Jalan
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Hati-Hati
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Lampu Bitu Jalan
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Status lampu tidak valid
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
          judulMateri: "10",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Rudi diminta untuk membuat program untuk menentukan apakah sebuah bilangan bulat merupakan bilangan positif, negatif, atau nol.
                <br/>
                Berdasarkan narasi di atas, percabangan If-Else dengan pascal yang tepat adalah…
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
                  src="/media/pretest/15.png"
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
                  src="/media/pretest/16.png"
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
                  src="/media/pretest/17.png"
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
                  src="/media/pretest/18.png"
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
                  src="/media/pretest/19.png"
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
          judulMateri: "11",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Menampilkan perhitungan empat persegi panjang, memilih menu, dan melakukan proses perhitungan, dapat diimplementasikan ke dalam percabangan…
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Percabangan If
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Percabangan Switch Case
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Percabangan Nested-If
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Percangan If-Else
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Percabangan satu kondisi
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
          judulMateri: "12",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan pseudocode berikut: <br/>
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/20.png"
                  style="height: 70%; width: 70%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                <br/>Berdasarkan algoritma di atasm jika diinputkan menu bernilai 3, maka output yang dihasilkan adalah…
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Pilihan tidak valid
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Menu bernilai 3
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Luas persegi panjang: 3
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Luas persegi: 3
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Tidak terjadi apa-apa
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
          judulMateri: "13",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan pseudocode berikut: <br/>
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/21.png"
                  style="height: 70%; width: 70%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                <br/>Jika diinputkan nilai a = 5, maka apakah output yang dihasilkan dari program tersebut…
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
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
                7
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
                -3
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
          judulMateri: "14",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan pseuducode berikut: <br/>
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/22.png"
                  style="height: 70%; width: 70%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                <br/>Apa output yang dihasilkan jika pililih menu 1 dan nilai = 75
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Selamat Anda lulus!
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Anda harus mengerjakan remedial.                
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Anda belum mengerjakan ujian.
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
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Program error
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
          judulMateri: "15",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan pseuducode berikut: <br/>
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/23.png"
                  style="height: 70%; width: 70%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                <br/>Dalam program di atas, jika input menu 2 dan jenis_tiket = Reguler, maka output harga dari program tersebut adalah…
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
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
                50000
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
                Tidak menghasilkan output
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Program error
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
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan flowchart berikut! <br/>
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/24.png"
                  style="height: 70%; width: 70%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                <br/>Jika input a = 25, maka apa output yang dihasilkan oleh program tersebut 
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                250
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                10
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
                100 
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                25
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
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan program berikut! <br/>
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/26.png"
                  style="height: 70%; width: 70%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                <br/>Dari kode program diatas, jika ingin  membeli roti coklat sebanyak 5 buah, maka output dari program tersebut adalah… 
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                30000
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
                45000
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                50000
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                55000
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
          judulMateri: "18",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan program berikut: <br/>
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/27.png"
                  style="height: 70%; width: 70%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                <br/>Dari program di atas, jika jumlahBeli = 3 maka output dari program tersebut adalah…
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Diskon: 70%
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Diskon: 20%
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Diskon: 10%
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Diskon: 15%
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Diskon: 25%
                </span>
              </div>        
            </div>
            `
          ],
          kunjawSoal: 2,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "19",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan program berikut! <br/>
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/28.png"
                  style="height: 70%; width: 70%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                <br/>Jika sebuah sekolah dengan jumlah siswa 55 orang akan berkemah dan akan menggunakan program di atas untuk menghitung berapa jumlah tenda yang dibutuhkan, maka output yang tepat dari program tersebut  adalah…
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                tenda : 5
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                tenda : 8
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Jumlah tenda yang dibutuhkan: 5
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Jumlah tenda yang dibutuhkan: 7
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
          kunjawSoal: 4,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "20",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan pseuducode berikut: <br/>
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/29.png"
                  style="height: 70%; width: 70%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                <br/>Apabila nilai variabel membeliProduk = 8, maka output yang dihasilkan adalah ...
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Tidak terjadi apa – ара
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Dicetak “Anda mendapatkan diskon”
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Dicetak "membeli Produk <10"
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Dicetak “WRITE “Anda mendapatkan diskon””
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Dicetak “membeliProduk =8”
                </span>
              </div>        
            </div>
            `
          ],
          kunjawSoal: 0,
          UrlYoutube: "",
          type: "soal"
        }
      ]
    },
    status: "materi"
  }
];