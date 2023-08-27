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

export const materiOperator: DataMateri[] = [
  {
    // title: "Operator Logika, Relasional, dan Kesaman",
    materi:
    {
      titleModul: "Operator Logika, Relasional, dan Kesaman",
      isiMateri: [
        {
          judulMateri: "Pendahuluan Struktur Kontrol Keputusan",
          isiMateri: `

            Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
            Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
            
            `,
          htmlMateri: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi1/people_think.jpg"
                style="height: 80%; width: 80%; margin-bottom: 20px;"
              />
              <span style="font-size: 20px; text-align: justify;">
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.
              </span>
            </div>
            <div style="display: flex; flex-direction: column; justify-content: center;align-items: center">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi1/computer.jpg"
                style="height: 80%; width: 80%; margin-bottom: 20px;"
              />
              <span style="font-size: 20px; text-align: justify;">
                Komputer merupakan alat yang membantu banyak aktivitas manusia. Pada dasarnya, komputer menjalankan perintah dari manusia. Perintah-perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu. Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.
              </span>
            </div>
          </div>
            `,
          Image: "",
          UrlYoutube: "",
          type: "materi"
        },
        {
          judulMateri: "Operator Struktur Kontrol Keputusan",
          isiMateri: `
            Sebelum melangkah lebih jauh tentang materi struktur kontrol keputusan, sebaiknya kalian pahami terlebih dahulu operator yang sering di gunakan dalam kondisi struktur kontrol keputusan. Yaitu operator logika, relasional, dan kesamaan. 
            `,
          htmlMateri: `
            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
              <span style="font-size: 20px; text-align: justify; margin-bottom: 5px;">
                Sebelum melangkah lebih jauh tentang materi struktur kontrol keputusan, sebaiknya kalian pahami terlebih dahulu operator yang sering di gunakan dalam kondisi struktur kontrol keputusan. Yaitu operator logika, relasional, dan kesamaan.
                <br />
                Cus langsung cek di halaman selanjutnya ~
              </span>
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi1/let_me_see.jpg"
                style="height: 100%; width: 100%;"
              />
            </div>
            `,
          Image: "",
          UrlYoutube: "",
          type: "materi"
        },
        {
          judulMateri: "Operator Logika, Relasional, dan Kesaman",
          isiMateri: `
            Operator Logika, Relasional, dan Kesaman yaitu, Sebuah ekspresi yang menggunakan operator ini akan memiliki nilai benar (true atau dalam bahasa Pascal bernilai tidak sama dengan 0) atau salah (false atau bernilai 0). Operator pada kategori ini memiliki peran yang sama dengan operator logika, relasional, dan kesamaan pada mata pelajaran Matematika. Operator tersebut pada bahasa Pascal dapat dilihat pada Tabel berikut : 
            `,
          htmlMateri: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center;  align-items: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                  Operator Logika, Relasional, dan Kesaman yaitu, Sebuah ekspresi yang menggunakan operator ini akan memiliki nilai benar (true atau dalam bahasa Pascal bernilai tidak sama dengan 0) atau salah (false atau bernilai 0). Operator pada kategori ini memiliki peran yang sama dengan operator logika, relasional, dan kesamaan pada mata pelajaran Matematika. Operator tersebut pada bahasa Pascal dapat dilihat pada Tabel berikut :
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi1/table_operator.png"
                  style="height: 100%; width: 100%;"
                />
              </div>
              <h1 style="margin-bottom: 15px; font-size: 30px;">Operator Logika</h1>
              <div style="display: flex; flex-direction: column; justify-content: center;  align-items: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                  Operator Logika digunakan untuk mengkombinasikan ekspresi-ekspresi perbandingan atau kebenaran dalam bentuk boolean (true atau false).
                  <br />
                  Operator Logika yang umum digunakan adalah "and", "or", dan "not".
                  <br />
                  Contoh penggunaan:
                  <br />
                  <ul>
                    <li>and (dan): true and false akan menghasilkan false, sedangkan true and true akan menghasilkan true.</li>
                    <li>or (atau): false or true akan menghasilkan true, sedangkan false or false akan menghasilkan false.</li>
                    <li> not (bukan): not true akan menghasilkan false, dan not false akan menghasilkan true.</li>
                  </ul>
                </span>
              </div>
              <h1 style="margin-bottom: 15px; font-size: 30px;">Operator Relasional</h1>
              <div style="display: flex; flex-direction: column; justify-content: center;  align-items: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                  Operator Relasional digunakan untuk membandingkan nilai antara dua ekspresi dan menghasilkan nilai boolean (true atau false) berdasarkan hubungan relasional yang dibentuk.
                  <br />
                  Operator Relasional yang umum digunakan adalah "=", "<>", "<", "<=", ">", ">=".
                  <br />
                  Contoh penggunaan:
                  <br />
                  <ul>
                    <li>5 = 5 akan menghasilkan true (karena 5 sama dengan 5).</li>
                    <li>10 <> 5 akan menghasilkan true (karena 10 tidak sama dengan 5).</li>
                    <li>8 < 10 akan menghasilkan true (karena 8 lebih kecil dari 10).</li>
                  </ul>
                </span>
              </div>
              <h1 style="margin-bottom: 15px; font-size: 30px;">Operator Kesamaan</h1>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <span style="font-size: 20px; text-align: justify;">
                  Operator Kesamaan digunakan untuk memeriksa kesamaan nilai antara dua ekspresi dan menghasilkan nilai boolean (true atau false) berdasarkan hasil perbandingan tersebut.
                  <br />
                  Operator Kesamaan yang umum digunakan adalah ":=" (assignment) dan "=="/"=" (equality).
                  <br />
                  Contoh penggunaan:
                  <br />
                  <ul>
                    <li>x := 10 akan memberikan nilai 10 ke variabel x.</li>
                    <li>if x = 10 then ... akan menjalankan kode dalam blok if jika nilai variabel x adalah 10.</li>
                  </ul>
                </span>
              </div>
            </div>
            `,
          Image: "",
          UrlYoutube: "",
          type: "materi"
        },
        {
          judulMateri: "Codelab dengan Pascal",
          isiMateri: `
            Sebelum melangkah lebih jauh tentang materi struktur kontrol keputusan, sebaiknya kalian pahami terlebih dahulu operator yang sering di gunakan dalam kondisi struktur kontrol keputusan. Yaitu operator logika, relasional, kesamaan dan Operator Kondisional (Ternary). 
            `,
          htmlMateri: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                  Sampai di sini, kamu udah cukup paham kan tentang Operator Logika, Relasional, dan Kesaman?
                  <br />
                  Biar lebih paham, mari kita perdalam melalui implementasi langsung penggunaan Operator Logika, Relasional, dan Kesaman dalam bahasa Pascal!
                </span>
              </div>
              
              <h1 style="margin-bottom: 20px; font-size: 30px;">Operator Logika</h1>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi1/logika.png"
                  style="height: 100%; width: 100%;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
                <ul>
                  <li>Bagian ini dimulai dengan mendefinisikan dua variabel boolean <strong>'x'</strong> dan <strong>'y'</strong>.</li>
                  <li>Kita menggunakan operator logika <strong>'and'</strong>, <strong>'or'</strong>, dan <strong>'not'</strong> untuk mengkombinasikan nilai dari variabel <strong>'x'</strong> dan <strong>'y'</strong>.</li>
                  <li>Setelah operasi logika dilakukan, hasilnya dicetak menggunakan perintah <strong>'writeln'</strong>.</li>
                </ul>
              </span>

              <h1 style="margin-bottom: 20px; font-size: 30px;">Operator Relasional</h1>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi1/relasional.png"
                  style="height: 100%; width: 100%;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
                <ul>
                  <li>Pada bagian ini, kita mendefinisikan dua variabel <strong>'a'</strong> dan <strong>'b'</strong> bertipe data Integer</li>
                  <li>Kemudian, kita menggunakan operator relasional untuk membandingkan nilai variabel <strong>'a'</strong> dan <strong>'b'</strong> dengan menggunakan operator <strong>'='</strong>, <strong>'<>'</strong>, <strong>'<'</strong>, dan <strong>'>='</strong>.</li>
                  <li>Hasil perbandingan akan menghasilkan nilai boolean (true atau false) yang dicetak menggunakan perintah <strong>'writeln'</strong>.</li>
                </ul>
              </span>

              <h1 style="margin-bottom: 20px; font-size: 30px;">Operator Kesamaan</h1>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi1/kesamaan.png"
                  style="height: 100%; width: 100%;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
                <ul>
                  <li>Pada bagian ini, kita mendefinisikan variabel <strong>'c'</strong> bertipe data Integer</li>
                  <li>Kemudian, kita menggunakan operator kesamaan <strong>'(=)'</strong> untuk memeriksa apakah nilai dari <strong>'c'</strong> sama dengan 10.</li>
                  <li>Setelah perbandingan selesai, hasilnya dicetak menggunakan perintah <strong>'writeln'</strong>.</li>
                </ul>
              </span>

              <h1 style="margin-bottom: 20px; font-size: 30px;">Penggunaan Operator Logika dan Relasional dalam blok if</h1>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi1/blok_if.png"
                  style="height: 100%; width: 100%;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify;">
                <ul>
                  <li>Bagian ini menunjukkan penggunaan operator logika dan relasional dalam blok <strong>'if'</strong></li>
                  <li>Kita menggunakan operator relasional <strong>('>', '<>')</strong> untuk membandingkan nilai variabel <strong>'a'</strong>, <strong>'b'</strong>, dan <strong>'c'</strong>.</li>
                  <li>Kemudian, kita menggunakan operator logika <strong>'and'</strong>untuk menggabungkan dua kondisi tersebut dalam blok <strong>'if'</strong>.</li>
                  <li>Jika kondisi pada blok <strong>'if'</strong>terpenuhi, maka pesan "Ini akan dicetak jika a lebih besar dari b dan c tidak sama dengan 5." akan dicetak. Jika tidak, pesan "Ini akan dicetak jika kondisi di atas tidak terpenuhi." akan dicetak.</li>
                </ul>
              </span>

              <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
                Klik <a href="https://onlinegdb.com/wK_3Hq2WB" target="_blank">disini</a> untuk mencobanya!
              </span>
            </div>
            `,
          Image: "",
          UrlYoutube: "",
          type: "materi"
        },
        {
          judulMateri: "Diskusi Kelompok",
          isiMateri: `
            Sebelum melangkah lebih jauh tentang materi struktur kontrol keputusan, sebaiknya kalian pahami terlebih dahulu operator yang sering di gunakan dalam kondisi struktur kontrol keputusan. Yaitu operator logika, relasional, kesamaan dan Operator Kondisional (Ternary). 
            `,
          Image: "",
          UrlYoutube: "",
          type: "rangkuman"
        },
        {
          judulMateri: "Latihan 1",
          isiMateri: `
            Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
            Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
            `,
          Image: "",
          soal: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
                Manakah operator perbandingan berikut yang digunakan untuk memeriksa apakah dua nilai sama?
              </span>
            </div>            
          </div>
          `,
          pilihanSoal: [
            ">",
            "<",
            ">=",
            "="
          ],
          kunjawSoal: 3,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "Latihan 2",
          isiMateri: `
            Sebelum melangkah lebih jauh tentang materi struktur kontrol keputusan, sebaiknya kalian pahami terlebih dahulu operator yang sering di gunakan dalam kondisi struktur kontrol keputusan. Yaitu operator logika, relasional, kesamaan dan Operator Kondisional (Ternary). 
            `,
          Image: "",
          soal: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
                Manakah operator logika berikut yang menghasilkan nilai true hanya jika kedua kondisi yang dibandingkan bernilai true?
              </span>
            </div>            
          </div>
          `,
          pilihanSoal: [
            "and",
            "or",
            "not",
            "xor"
          ],
          kunjawSoal: 0,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "Latihan 3",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
                Perhatikan kode berikut!
                <br />
                Output dari program di bawah adalah?
              </span>
            </div>
            <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi1/image_soal_1.png"
                style="height: 100%; width: 100%;"
              />
            </div>
          </div>
          `,
          pilihanSoal: [
            "Nilai maksimum: 10",
            "Nilai maksimum: 20",
            "Nilai maksimum: 30",
            "Terjadi error karena kesalahan penulisan operator kondisional"
          ],
          kunjawSoal: 3,
          UrlYoutube: "",
          type: "soal"
        }
      ]
    },
    status: "materi"
  }
];

export const materiIfThen: DataMateri[] = [
  {
    // title: "Operator Logika, Relasional, dan Kesaman",
    materi:
    {
      titleModul: "Struktur Percabangan If",
      isiMateri: [
        {
          judulMateri: "Pendahuluan Struktur Percabangan If",
          isiMateri: `

            Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
            Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
            
            `,
          htmlMateri: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi2/think.jpg"
                style="height: 40%; width: 40%; margin-bottom: 20px;"
              />
              <span style="font-size: 20px; text-align: justify;">
                Dalam kegiatan sehari- hari, kita selalu melakukan <strong> tindakan yang berbeda</strong>, tergantung <strong>kondisinya</strong>.
                <br/>
                Misalnya, pas kita mau pergi keluar rumah dengan kendaraan. Kita akan perhitungkan ramalan cuaca untuk menentukan kendaraan apa yang paling nyaman kita pakai berdasarkan kondisi cuaca.
                <br/>
                <br/>
                Karena itulah kita butuh <strong>alur pengambilan keputusan</strong>. Dengan skema tersebut, kita bisa ngambil langkah tepat sesuai dengan kondisi.
                <br/>
                Alur pengambilan keputusan ini bisa menggunakan beberapa cara, yaitu:
                <ul>
                  <li>Alur pengambilan keputusan dengan <strong>If</strong></li>
                  <li>Alur pengambilan keputusan dengan <strong>If - Else</strong></li>
                  <li>Alur pengambilan keputusan dengan <strong>Depend On (Case)</strong></li>
                  <li>Alur pengambilan keputusan dengan <strong>If bersarang (Nested If)</strong></li>
                </ul>
                Yang akan kita bahas pada modul ini yaitu tentang alur pengambilan keputusan dengan <strong>If</strong> cekidott ~
              </span>
            </div>
            <h1 style="margin-bottom: 8px; font-size: 30px;margin-top: 60px;">Struktur Percabangan If</h1>
            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
              <span style="font-size: 20px; text-align: justify;">
              Pernyataan <strong>'if'</strong> adalah pernyataan yang digunakan dalam pemrograman untuk melakukan kondisi atau percabangan. Pernyataan ini memeriksa kebenaran suatu kondisi dan menjalankan blok kode tertentu jika kondisi tersebut benar. Jika kondisi tidak terpenuhi, maka blok kode tersebut dilewati dan program melanjutkan ke pernyataan berikutnya.
              <br/>
              </span>
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi2/pintu.jpg"
                style="height: 100%; width: 100%; margin-bottom: 20px; margin-top: 20px;"
              />
              <span style="font-size: 20px; text-align: justify;">
              Dalam logika manusia sebuah percabangan/pemilihan <strong>'if'</strong> dapat dianalogikan sebagai sebuah rumah yang memiliki pintu dimana hanya kondisi-kondisi tertentu yang mengizinkan kotak berisi sesuatu masuk melalui pintu itu, jika kondisi tidak dipenuhi maka kotak tidak dapat masuk melalui pintu itu.
              <br/>
              <br/>
              Agar lebih jelas cus langsung cek di halaman selanjutnya untuk contoh kasusnya ~
              </span>
          </div>
            `,
          Image: "",
          UrlYoutube: "",
          type: "materi"
        },
        {
          judulMateri: "Contoh kasus Percabangan If",
          isiMateri: `
            Sebelum melangkah lebih jauh tentang materi struktur kontrol keputusan, sebaiknya kalian pahami terlebih dahulu operator yang sering di gunakan dalam kondisi struktur kontrol keputusan. Yaitu operator logika, relasional, dan kesamaan. 
            `,
          htmlMateri: `
            <div style="font-family: Arial, sans-serif;">
              <h1 style="margin-bottom: 8px; font-size: 30px;margin-top: 60px;">Logika Pemikiran Manusia</h1>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <span style="font-size: 20px; text-align: justify;">
                Misal ada sebuah rumah yang hanya mau menerima kotak yang berisi nilai A, B, dan C untuk menyimpulkan bahwa nilai itu merupakan nilai lulus, maka kita dapat menganalogikan seperti gambar berikut:
                </span>
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi2/img_contoh1.jpg"
                  style="height: 30%; width: 30%; margin-bottom: 20px; margin-top: 20px;"
                />
                <span style="font-size: 20px; text-align: justify;">
                maka jika isi dari kotak nilai tidak memenuhi syarat maka kotak nilai tidak akan diizinkan masuk dan tidak dinyatakan lulus, atau kita juga dapat menggunakan analogi lain dengan membuat denah sebagai berikut:
                <br/>
                <br/>
                Jika memenuhi syarat blok if maka proses akan melalui jalur berikut:
                </span>
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi2/img_contoh2.jpg"
                  style="height: 30%; width: 30%; margin-bottom: 20px; margin-top: 20px;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify;">
                Jika tidak memenuhi syarat blok if maka proses yang akan terjadi akan melalui jalur berikut:
              </span>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi2/img_contoh3.jpg"
                  style="height: 30%; width: 30%; margin-bottom: 20px; margin-top: 20px;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify;">
                Tanpa melakukan proses apa pun.
              </span>

              <h1 style="margin-bottom: 8px; font-size: 30px;margin-top: 60px;">Bahasa Pseudocode</h1>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi2/img_contoh4.png"
                  style="height: 100%; width: 100%; margin-bottom: 20px;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify;">
              Penjelasannya sebagai berikut:
                <ul>
                  <li>Deklarasi variabel <strong>nilai</strong> sebagai tipe data <strong>char</strong>, variabel ini akan digunakan untuk menyimpan input nilai yang dimasukkan oleh pengguna.</li>
                  <li>Bagian <strong>INPUT nilai</strong> mengambil input dari pengguna dan menyimpannya dalam variabel <strong>nilai</strong>.</li>
                  <li>Pernyataan <strong>IF nilai = 'A' OR nilai = 'B' OR nilai = 'C' THEN</strong> melakukan pengecekan apakah nilai yang dimasukkan pengguna adalah 'A', 'B', atau 'C'. Jika benar (nilai tersebut termasuk 'A', 'B', atau 'C'), maka blok kode di bawahnya akan dijalankan.</li>
                  <li>Jika kondisi tersebut benar (nilai adalah 'A', 'B', atau 'C'), maka pernyataan di bawahnya, yaitu <strong>OUTPUT "lulus"</strong>, akan menampilkan pesan "lulus".</li>
                  <li><strong>END IF</strong> menandakan akhir dari blok <strong>IF</strong>.</li>
                </ul>
              </span>

              <h1 style="margin-bottom: 8px; font-size: 30px;margin-top: 60px;">Bahasa Pascal</h1>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi2/img_contoh5.png"
                  style="height: 100%; width: 100%; margin-bottom: 20px;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify;">
              Penjelasannya sebagai berikut:
                <ul>
                  <li>Mendeklarasikan awal dari program dan memberikan nama program sebagai "<strong>CekKelulusan;</strong>".</li>
                  <li>Mendeklarasikan variabel <strong>nilai</strong> sebagai tipe data <strong>char</strong>.</li>
                  <li>Menandakan awal dari program utama (<strong>begin</strong>).</li>
                  <li>Menampilkan pesan "<strong>Masukkan karakter: </strong>" di layar.</li>
                  <li>Mengambil input dari pengguna dan menyimpannya dalam variabel <strong>nilai</strong>.</li>
                  <li>Melakukan pengecekan apakah nilai yang dimasukkan pengguna adalah 'A', 'B', atau 'C'. Jika benar, maka blok kode di bawahnya akan dijalankan.</li>
                  <li>Menandakan awal dari blok kode yang akan dijalankan jika kondisi di atas terpenuhi (<strong>begin</strong>).</li>
                  <li>Menampilkan pesan "<strong>Lulus</strong>" di layar jika nilai adalah 'A', 'B', atau 'C'.</li>
                  <li>Menandakan akhir dari blok <strong>begin</strong> (<strong>end;</strong>).</li>
                  <li>Menandakan akhir dari program utama (<strong>end;</strong>).</li>
                  <li>Menunggu pengguna menekan tombol Enter sebelum program berakhir (<strong>readln;</strong>).</li>
                </ul>
              </span>

              <h1 style="margin-bottom: 8px; font-size: 30px;margin-top: 60px;">Contoh Kasus Kedua</h1>
              <span style="font-size: 20px; text-align: justify;">
              Percabangan merupakan salah satu inti dari analisis kasus pada pembuatan algoritma, sebuah kasus harus dipikirkan penyelesaiannya dengan pemikiran ada sebuah syarat dan proses tau aksi yang harus dikerjakan jika syarat tidak terpenuhi dan jika syarat terpenuhi, misalkan membuat sebuah penyelesaian kasus menyatakan apakah sebuah bilangan ganjil atau genap, maka dapat dibuat sebuah penyelesaian sebagai berikut:
              </span>
              
              <h1 style="margin-bottom: 8px; font-size: 30px;margin-top: 60px;">Logika Pemikiran Manusia</h1>
              <span style="font-size: 20px; text-align: justify;">
              Jika sebuah bilangan dibagi dengan 2 (dua) masih sisa 1 (satu) (tidak habis dibagi 2) maka merupakan bilangan ganjil (bilangan merupakan sebuah variabel/kotak)
              </span>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi2/img_contoh6.jpg"
                style="height: 30%; width: 30%; margin-bottom: 20px; margin-top: 20px;"
              />
              </div>
              
              <span style="font-size: 20px; text-align: justify;">
              Atau analogi yang lain adalah dengan denah sebagai berikut:
              </span>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi2/img_contoh7.jpg"
                style="height: 30%; width: 30%; margin-bottom: 20px; margin-top: 20px;"
              />
              </div>

              <h1 style="margin-bottom: 8px; font-size: 30px;margin-top: 60px;">Bahasa Pseudocode</h1>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi2/img_contoh8.png"
                  style="height: 100%; width: 100%; margin-bottom: 20px;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify;">
              Penjelasannya sebagai berikut:
                <ul>
                  <li><strong>'DEKLARASI bilangan SEBAGAI INTEGER'</strong>: Mendeklarasikan variabel bilangan dengan tipe data <strong>integer</strong>.</li>
                  <li><strong>'INPUT bilangan'</strong>: Mengambil input dari pengguna dan menyimpannya dalam variabel bilangan.</li>
                  <li><strong>'IF (bilangan MOD 2) = 1 THEN'</strong>: Melakukan pengecekan apakah sisa pembagian <strong>bilangan</strong> dengan 2 adalah 1. Jika benar (berarti bilangan tersebut ganjil), maka blok kode di bawahnya akan dijalankan.</li>
                  <li><strong>'OUTPUT "bilangan ganjil"'</strong>: Jika bilangan ganjil, akan menampilkan pesan "bilangan ganjil".</li>
                  <li><strong>'END IF'</strong>: Menandakan akhir dari <strong>blok IF</strong>.</li>
                </ul>
              </span>


              <h1 style="margin-bottom: 8px; font-size: 30px;margin-top: 60px;">Bahasa Pascal</h1>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi2/img_contoh9.png"
                  style="height: 100%; width: 100%; margin-bottom: 20px;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify;">
              Penjelasannya sebagai berikut:
              <ul>
                  <li>Deklarasi variabel <strong>bilangan</strong> sebagai tipe data <strong>integer</strong>, variabel ini akan digunakan untuk menyimpan nilai bilangan yang dimasukkan oleh pengguna.</li>
                  <li>Bagian <strong>begin</strong> menandakan awal dari program utama.</li>
                  <li>Pada baris pertama, <strong>write('bilangan: ');</strong> menampilkan pesan "bilangan: " tanpa baris baru (newline).</li>
                  <li>Baris berikutnya, <strong>readln(bilangan);</strong>: digunakan untuk mengambil input dari pengguna dan menyimpannya ke dalam variabel <strong>bilangan</strong>.</li>
                  <li>Pernyataan <strong>if (bilangan mod 2) = 1 then</strong> memeriksa apakah nilai <strong>bilangan</strong> memiliki sisa pembagian 1 (artinya bilangan ganjil).</li>
                  <li>Jika kondisi tersebut benar (nilai <strong>bilangan</strong> adalah bilangan ganjil), maka pernyataan di bawahnya, yaitu writeln('bilangan ganjil');, akan dijalankan.</li>
                  <li><strong>writeln('bilangan ganjil');</strong> menampilkan pesan "bilangan ganjil" ke layar.</li>
                </ul>
              </span>

              <span style="font-size: 20px; text-align: justify; margin-top: 20px;">
              Nah, sebenarnya pernyataan <strong>If</strong> akan ngevaluasi ekspresi di dalam tanda kurung <strong>(...)</strong>, lalu akan ngubah hasilnya jadi tipe data <strong>boolean</strong> yaitu benar <strong>(true)</strong> atau salah <strong>(false)</strong>.
              <br/>
              <br/>
              Ada pepatah mengatakan <strong>"tak kenal maka tak sayang"</strong> dan <strong>"tak mencoba maka tak bisa"</strong> cus next ke halaman selanjutnya untuk mencoba pernyataan <strong>If</strong> menggunakan bahasa pascal
              </span>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi2/next_page.jpg"
                  style="height: 100%; width: 100%; margin-bottom: 20px;"
                />
              </div>
            </div>
              `,
          Image: "",
          UrlYoutube: "",
          type: "materi"
        },
        {
          judulMateri: "Codelab dengan Pascal",
          isiMateri: `
            Sebelum melangkah lebih jauh tentang materi struktur kontrol keputusan, sebaiknya kalian pahami terlebih dahulu operator yang sering di gunakan dalam kondisi struktur kontrol keputusan. Yaitu operator logika, relasional, kesamaan dan Operator Kondisional (Ternary). 
            `,
          htmlMateri: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Untuk mencobanya silahkan klik <a href="https://onlinegdb.com/aHKP8iuKK" target="_blank">disini</a> ya
                <br/>
                Berikut adalah langkah-langkah pengerjaan codelab dengan Pascal tentang percabangan <strong>If</strong>
                </span>
              </div>
              
              <h1 style="margin-bottom: 10px; margin-top: 60px; font-size: 30px;">Langkah 1: Mendeklarasikan variabel 'nilai' sebagai integer.</h1>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi2/img_codelab1.png"
                  style="height: 100%; width: 100%;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
              Penjelasan: 
              <br/>
              Kita mendeklarasikan variabel nilai yang akan digunakan untuk menyimpan <strong>'nilai'</strong> input dari pengguna. Variabel ini memiliki tipe data <strong>'integer'</strong>, yang berarti hanya dapat menyimpan nilai bilangan bulat.
              </span>

              <h1 style="margin-bottom: 10px; margin-top: 60px; font-size: 30px;">Langkah 2: Menampilkan pesan untuk meminta pengguna memasukkan nilai.</h1>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi2/img_codelab2.png"
                  style="height: 100%; width: 100%;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
              Penjelasan: 
              <br/>
              Pesan yang ditampilkan pada <strong>writeln</strong> memberi tahu pengguna bahwa mereka harus memasukkan <strong>nilai</strong>. Nilai yang dimasukkan oleh pengguna akan disimpan dalam variabel <strong>nilai</strong> menggunakan <strong>readln</strong>.
              </span>

              <h1 style="margin-bottom: 10px; margin-top: 60px; font-size: 30px;">Langkah 3: Menerapkan percabangan if untuk menentukan kelulusan berdasarkan nilai yang dimasukkan.</h1>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi2/img_codelab3.png"
                  style="height: 100%; width: 100%;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
              Penjelasan: 
              <br/>
              Setiap pernyataan <strong>if</strong> akan mengevaluasi kondisi yang diberikan. Jika kondisi tersebut benar (nilai memenuhi kondisi), maka pesan akan ditampilkan.
              </span>
            </div>
            `,
          Image: "",
          UrlYoutube: "",
          type: "materi"
        },
        {
          judulMateri: "Diskusi Kelompok",
          isiMateri: `
            Sebelum melangkah lebih jauh tentang materi struktur kontrol keputusan, sebaiknya kalian pahami terlebih dahulu operator yang sering di gunakan dalam kondisi struktur kontrol keputusan. Yaitu operator logika, relasional, kesamaan dan Operator Kondisional (Ternary). 
            `,
          Image: "",
          UrlYoutube: "",
          type: "rangkuman"
        },
        {
          judulMateri: "Latihan 1",
          isiMateri: `
            Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
            Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
            `,
          Image: "",
          soal: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              Dalam bahasa Pascal, pernyataan ‘if’ digunakan untuk apa?
              </span>
            </div>            
          </div>
          `,
          pilihanSoal: [
            "Menampilkan pesan di layar",
            "Melakukan perulangan",
            "Mengambil input dari pengguna",
            "Melakukan pengujian kondisi"
          ],
          kunjawSoal: 3,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "Latihan 2",
          isiMateri: `
            Sebelum melangkah lebih jauh tentang materi struktur kontrol keputusan, sebaiknya kalian pahami terlebih dahulu operator yang sering di gunakan dalam kondisi struktur kontrol keputusan. Yaitu operator logika, relasional, kesamaan dan Operator Kondisional (Ternary). 
            `,
          Image: "",
          soal: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              Dalam bahasa Pascal, bagaimana cara menuliskan pernyataan if dengan satu kondisi?
              </span>
            </div>            
          </div>
          `,
          pilihanSoal: [
            "if (kondisi) {pernyataan}",
            "if [kondisi] (pernyataan)",
            "if kondisi {pernyataan}",
            "if kondisi then {pernyataan}"
          ],
          kunjawSoal: 3,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "Latihan 3",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              Apa output dari program berikut?
              </span>
            </div>
            <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi2/img_soal.png"
                style="height: 100%; width: 100%;"
              />
            </div>
          </div>
          `,
          pilihanSoal: [
            "x lebih besar dari y",
            "Tidak ada output yang ditampilkan",
            "Error karena sintaks",
            "y lebih besar dari x"
          ],
          kunjawSoal: 1,
          UrlYoutube: "",
          type: "soal"
        }
      ]
    },
    status: "materi"
  }
];

export const materiIfElse: DataMateri[] = [
  {
    // title: "Operator Logika, Relasional, dan Kesaman",
    materi:
    {
      titleModul: "Struktur Percabangan If - Else dan If - Else If",
      isiMateri: [
        {
          judulMateri: "Pendahuluan If - Else dan If - Else If",
          isiMateri: `

            Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
            Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
            
            `,
          htmlMateri: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi3/img1.jpg"
                style="height: 50%; width: 50%; margin-bottom: 20px;"
              />
              <span style="font-size: 20px; text-align: justify;">
              Setelah kita memahami konsep percabangan <strong>'if'</strong>, sekarang mari kita lanjutkan ke percabangan <strong>'if - else dan else if'</strong>. Pertama yang kita akan membahas yaitu tentang Percabangan <strong>'if else'</strong>,
              <br/>
              <br/>
              <h1 style="margin-bottom: 8px; font-size: 30px;margin-top: 60px;">Percabangan <strong>'If - Else'</strong></h1>
              Dalam materi sebelumnya, kita telah mempelajari percabangan <strong>'if'</strong> untuk mengambil keputusan berdasarkan suatu kondisi. Sekarang, mari kita lanjutkan dengan percabangan <strong>'if else'</strong>. Percabangan <strong>'if else'</strong> memungkinkan kita untuk membuat keputusan berbeda ketika kondisi yang diberikan tidak terpenuhi. Dengan demikian, kita dapat mengeksplorasi berbagai kemungkinan dalam program kita. Mari kita lihat contoh penggunaan percabangan <strong>'if else'</strong> untuk lebih memahami konsep ini."
              </span>
            </div>
            <div style="display: flex; flex-direction: column; justify-content: center;align-items: center">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi3/img_contoh1.png"
                style="height: 100%; width: 100%; margin-bottom: 20px;margin-top: 20px;"
              />
            </div>
          <span style="font-size: 20px; text-align: justify;">
          Berikut adalah penjelasan singkat:
          <ul>
            <li><strong>if kondisi</strong>: Bagian ini memeriksa apakah kondisi yang diberikan benar atau salah. Jika kondisi benar, maka blok kode di bawah <strong>if</strong> akan dieksekusi. Jika kondisi salah, maka blok kode di bawah <strong>else</strong> akan dieksekusi.</li>
            <li><strong>else</strong>: Bagian ini adalah blok kode yang akan dieksekusi jika kondisi dalam pernyataan <strong>if</strong> adalah salah. Bagian <strong>else</strong> adalah opsional dan dapat dihilangkan jika tidak diperlukan.</li>
          </ul>
          <br/>
          Jadi Percabangan <strong>'if else'</strong> ini memungkinkan pengontrolan alur program sesuai dengan kondisi yang diberikan, sehingga memungkinkan untuk menangani berbagai kemungkinan dengan cara yang tepat.
            Pembahasan Selanjutnya yaitu tentang percabangan <strong>'If - Else If'</strong>
          </span>

          <h1 style="margin-bottom: 8px; font-size: 30px;margin-top: 60px;">Percabangan <strong>'If - Else If'</strong></h1>
          <span style="font-size: 20px; text-align: justify;">
          Percabangan <strong>'if - else if'</strong> (juga dikenal sebagai <strong>'if - else if - else'</strong>) dalam bahasa pemrograman Pascal digunakan untuk mengevaluasi beberapa kondisi secara berurutan dan mengambil tindakan berdasarkan kondisi yang pertama kali terpenuhi. Konstruksi percabangan ini memungkinkan program untuk melakukan pengecekan beruntun pada beberapa kondisi dan melakukan tindakan atau eksekusi kode yang sesuai dengan kondisi yang tepat.
          <br/>
          Mari kita lihat contoh penggunaan percabangan <strong>'if - else if'</strong> untuk lebih memahami konsep ini."
          </span>
          <div style="display: flex; flex-direction: column; justify-content: center;align-items: center">
            <img
              alt="Logo"
              src="/media/assetIsiMater/materi3/img_contoh2.png"
              style="height: 100%; width: 100%; margin-bottom: 20px;margin-top: 20px;"
            />
          </div>
          <span style="font-size: 20px; text-align: justify;">
          Berikut adalah penjelasan singkat:
          <ul>
            <li>Program pertama kali akan mengevaluasi <strong>kondisi1</strong>. Jika <strong>kondisi1</strong> bernilai benar (true), maka blok kode yang berada di dalamnya (yang diawali dengan <strong>begin</strong> dan diakhiri dengan <strong>end</strong>) akan dieksekusi.</li>
            <li>Jika <strong>kondisi1</strong> bernilai salah (false), maka program akan melanjutkan ke bagian <strong>else if kondisi2</strong>. Program akan mengevaluasi <strong>kondisi2</strong>. Jika <strong>kondisi2</strong> bernilai benar (true), maka blok kode yang berada di dalamnya akan dieksekusi.</li>
            <li>Jika <strong>kondisi2</strong> juga bernilai salah (false), program akan melanjutkan ke bagian <strong>else if kondisi3</strong>. Program akan mengevaluasi <strong>kondisi3</strong>. Jika <strong>kondisi3</strong> bernilai benar (true), maka blok kode yang berada di dalamnya akan dieksekusi.</li>
            <li>Jika tidak ada kondisi sebelumnya yang terpenuhi (yaitu <strong>kondisi1</strong>, <strong>kondisi2</strong>, dan <strong>kondisi3</strong> semuanya bernilai salah), program akan menjalankan blok kode dalam bagian <strong>else</strong>.</li>
          </ul>
          <br/>
          Penting untuk diingat bahwa dalam percabangan <strong>'if - else if'</strong>, hanya satu blok kode yang akan dieksekusi berdasarkan kondisi yang pertama kali terpenuhi. Setelah suatu kondisi terpenuhi dan blok kode dieksekusi, program akan keluar dari seluruh struktur <strong>'if - else if'</strong> dan melanjutkan eksekusi kode di bawahnya.
          <br/>
          <br/>
          Percabangan <strong>'if - else if'</strong> sangat berguna ketika kita perlu mengevaluasi beberapa kondisi dan hanya menjalankan satu tindakan berdasarkan kondisi yang sesuai. Dengan struktur kontrol ini, kita dapat mengatur alur program dengan lebih terstruktur dan mudah dipahami.
          <br/>
          <br/>
          Agar lebih jelas cus langsung cek di halaman selanjutnya untuk contoh kasusnya ~
          </span>
          <div style="display: flex; flex-direction: column; justify-content: center;align-items: center">
            <img
              alt="Logo"
              src="/media/assetIsiMater/materi3/img2.jpg"
              style="height: 60%; width: 60%; margin-bottom: 20px;margin-top: 20px;"
            />
          </div>
          </div>
            `,
          Image: "",
          UrlYoutube: "",
          type: "materi"
        },

        {
          judulMateri: "Contoh kasus Percabangan If - Else",
          isiMateri: `
            Sebelum melangkah lebih jauh tentang materi struktur kontrol keputusan, sebaiknya kalian pahami terlebih dahulu operator yang sering di gunakan dalam kondisi struktur kontrol keputusan. Yaitu operator logika, relasional, dan kesamaan. 
            `,
          htmlMateri: `
            <div style="font-family: Arial, sans-serif;">
              <h1 style="margin-bottom: 8px; font-size: 30px;margin-top: 60px;">Logika Pemikiran Manusia</h1>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <span style="font-size: 20px; text-align: justify;">
                Sebuah nilai variabel ketemu yang awalnya memiliki nilai false namun ketika melakukan pengujian, kita ingin melakukan pengujian kondisi pada variabel ketemu. Jika nilai variabel ketemu adalah true, maka program akan menampilkan pesan "(if) nilai variabel ketemu : true". Jika nilai variabel ketemu adalah false, maka program akan menampilkan pesan "(else) nilai variabel ketemu : false"
                </span>
              </div>

              <h1 style="margin-bottom: 8px; font-size: 30px;margin-top: 60px;">Bahasa Pseudocode</h1>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi3/img_contoh3.png"
                  style="height: 100%; width: 100%; margin-bottom: 20px;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify;">
              Penjelasannya sebagai berikut:
              <ul>
                <li>Mendeklarasikan variabel <strong>ketemu</strong> dengan tipe data <strong>boolean</strong>.</li>
                <li>Menginisialisasi variabel <strong>ketemu</strong> dengan nilai <strong>false</strong>.</li>
                <li>Melakukan pengecekan apakah nilai dari variabel <strong>ketemu</strong> adalah <strong>true</strong>. Jika kondisi ini terpenuhi, maka blok kode di dalam <strong>IF</strong> akan dijalankan.</li>
                <li>Bagian ini merupakan kode proses yang akan dijalankan jika kondisi di atas terpenuhi, yang diwakili oleh komentar "<strong>{proses}</strong>".</li>
                <li>Menampilkan pesan "<strong>(if) nilai variabel ketemu : </strong>" diikuti oleh nilai dari variabel <strong>ketemu</strong>.</li>
                <li>Jika kondisi di atas tidak terpenuhi, maka akan menjalankan blok kode yang ada di dalam <strong>ELSE</strong>.</li>
                <li>Bagian ini merupakan kode proses yang akan dijalankan jika kondisi di atas tidak terpenuhi, yang diwakili oleh komentar "<strong>{proses}</strong>".</li>
                <li>Menampilkan pesan "<strong>(else) nilai ketemu : </strong>" diikuti oleh nilai dari variabel <strong>ketemu</strong>.</li>
                <li>Menandakan akhir dari blok <strong>IF</strong>.</li>
              </ul>
            
              </span>

              <h1 style="margin-bottom: 8px; font-size: 30px;margin-top: 60px;">Bahasa Pascal</h1>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi3/img_contoh4.png"
                  style="height: 100%; width: 100%; margin-bottom: 20px;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify;">
              Penjelasannya sebagai berikut:
              <ul>
                <li>Mendeklarasikan variabel <strong>ketemu</strong> sebagai tipe data <strong>boolean</strong>.</li>
                <li>(<strong>begin</strong>): Menandakan awal dari program utama.</li>
                <li>Menginisialisasi variabel <strong>ketemu</strong> dengan nilai <strong>false</strong>.</li>
                <li>Melakukan pengecekan apakah nilai dari variabel <strong>ketemu</strong> adalah <strong>true</strong>. Jika kondisi ini terpenuhi, maka blok kode di bawahnya akan dijalankan.</li>
                <li>(<strong>begin</strong>): Menandakan awal dari blok kode if yang akan dijalankan jika kondisi di atas terpenuhi.</li>
                <li>Menampilkan pesan "<strong>(if) nilai variabel ketemu : true</strong>" di layar jika nilai <strong>ketemu</strong> adalah <strong>true</strong>.</li>
                <li>(<strong>end;</strong>): Menandakan akhir dari blok <strong>begin if</strong>.</li>
                <li>Jika kondisi di atas tidak terpenuhi, maka akan menjalankan blok kode yang ada di dalam <strong>else</strong>.</li>
                <li>(<strong>begin</strong>): Menandakan awal dari blok kode yang akan dijalankan jika kondisi di atas tidak terpenuhi.</li>
                <li>Menampilkan pesan "<strong>(else) nilai variabel ketemu : false</strong>" di layar jika nilai <strong>ketemu</strong> adalah <strong>false</strong>.</li>
                <li>(<strong>end;</strong>): Menandakan akhir dari blok <strong>begin else</strong>.</li>
                <li>(<strong>end.</strong>): Menandakan akhir dari program utama.</li>
                <li>(<strong>readln;</strong>): Menunggu pengguna menekan tombol Enter sebelum program berakhir.</li>
              </ul>
              </span>

              <span style="font-size: 20px; text-align: justify;">
              <br/>
              Nah itu dia contoh kasus tentang Percabangan If - Else, dihalaman selanjutnya kita akan membahas tentang contoh kasus Percabangan If - Else If.
              <br/>
              lets go guys ~
              </span>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi3/img3.jpg"
                  style="height: 100%; width: 100%; margin-bottom: 20px;"
                />
              </div>
            </div>
              `,
          Image: "",
          UrlYoutube: "",
          type: "materi"
        },

        {
          judulMateri: "Contoh kasus Percabangan If - Else If",
          isiMateri: `
            Operator Logika, Relasional, dan Kesaman yaitu, Sebuah ekspresi yang menggunakan operator ini akan memiliki nilai benar (true atau dalam bahasa Pascal bernilai tidak sama dengan 0) atau salah (false atau bernilai 0). Operator pada kategori ini memiliki peran yang sama dengan operator logika, relasional, dan kesamaan pada mata pelajaran Matematika. Operator tersebut pada bahasa Pascal dapat dilihat pada Tabel berikut : 
            `,
          htmlMateri: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center;  align-items: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                  Setelah tadi kita mempelajari tentang contoh kasus percabangan If - Else, selanjutnya kita akan mempelajari contoh kasus dari percabangan If - Else If
                </span>
              </div>

              <h1 style="margin-bottom: 8px; font-size: 30px;margin-top: 60px;">Logika Pemikiran Manusia</h1>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <span style="font-size: 20px; text-align: justify;">
                Jika sebuah nilai variabel "umur" lebih besar atau sama dengan 18, maka orang tersebut dianggap dewasa. Jika "umur" lebih besar atau sama dengan 13 dan kurang dari 18, maka orang tersebut dianggap remaja. Jika "umur" kurang dari 13, maka orang tersebut dianggap anak-anak.
                </span>
              </div>

              <h1 style="margin-bottom: 8px; font-size: 30px;margin-top: 60px;">Bahasa Pseudocode</h1>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi3/img_contoh5.png"
                  style="height: 100%; width: 100%; margin-bottom: 20px;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify;">
              Penjelasannya sebagai berikut:
              <ul>
                <li>Mendeklarasikan variabel <strong>umur</strong> sebagai tipe data <strong>integer</strong>.</li>
                <li>Menampilkan pesan "<strong>Masukkan umur: </strong>".</li>
                <li>Mengambil input dari pengguna dan menyimpannya dalam variabel <strong>umur</strong>.</li>
                <li>(<strong>IF umur >= 18 THEN</strong>): Melakukan pengecekan apakah <strong>umur</strong> lebih besar atau sama dengan 18. Jika kondisi ini terpenuhi, maka blok kode di bawahnya akan dijalankan yaitu menampilkan pesan "<strong>Orang ini dewasa.</strong>"</li>
                <li>(<strong>ELSE IF umur >= 13 THEN</strong>): Jika kondisi pada <strong>IF</strong> tidak terpenuhi, maka melakukan pengecekan apakah <strong>umur</strong> lebih besar atau sama dengan 13 tetapi tidak mencapai 18. Jika kondisi ini terpenuhi, maka blok kode di bawahnya akan dijalankan yaitu menampilkan pesan "Orang ini remaja."</li>
                <li>(<strong>ELSE</strong>): Jika kedua kondisi di atas tidak terpenuhi, maka blok kode di bawahnya akan dijalankan yaitu menampilkan pesan "<strong>Orang ini anak-anak.</strong>".</li>
                <li>Menandakan akhir dari blok <strong>IF</strong> (<strong>END IF</strong>).</li>
              </ul>
              </span>

              <h1 style="margin-bottom: 8px; font-size: 30px;margin-top: 60px;">Bahasa Pascal</h1>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi3/img_contoh6.png"
                  style="height: 100%; width: 100%; margin-bottom: 20px;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify;">
              Penjelasannya sebagai berikut:
              <ul>
                <li>Mendeklarasikan variabel <strong>umur</strong> sebagai tipe data <strong>integer</strong>.</li>
                <li>Menampilkan pesan "<strong>Masukkan umur: </strong>" di layar.</li>
                <li>Mengambil input dari pengguna dan menyimpannya dalam variabel <strong>umur</strong>.</li>
                <li>(<strong>if umur >= 18 then</strong>): Melakukan pengecekan apakah nilai <strong>umur</strong> lebih besar atau sama dengan 18. Jika kondisi ini terpenuhi, maka blok kode di bawahnya akan dijalankan. Yaitu menampilkan pesan "<strong>Orang ini dewasa.</strong>" di layar jika <strong>umur</strong> lebih besar atau sama dengan 18.</li>
                <li>(<strong>else if umur >= 13 then</strong>): Jika kondisi pada <strong>if</strong> tidak terpenuhi, maka melakukan pengecekan apakah <strong>umur</strong> lebih besar atau sama dengan 13. Jika kondisi ini terpenuhi, maka blok kode di bawahnya akan dijalankan. Yaitu menampilkan pesan "<strong>Orang ini remaja.</strong>" jika <strong>umur</strong> lebih besar atau sama dengan 13, namun tidak mencapai 18.</li>
                <li>(<strong>else</strong>): Jika kedua kondisi di atas tidak terpenuhi, maka blok kode di bawahnya akan dijalankan.Yaitu menampilkan pesan "<strong>Orang ini anak-anak.</strong>" jika <strong>umur</strong> kurang dari 13.</li>
              </ul>
              <br/>
              Dalam contoh kasus di atas, kita menggunakan percabangan if - else if untuk menentukan kategori berdasarkan umur seseorang. Program akan memilih satu kategori yang sesuai dengan umur yang diinputkan, yaitu "dewasa", "remaja", atau "anak-anak".
              <br/>
              <br/>
              Kedua jenis percabangan (if - else dan if - else if) memungkinkan program untuk memilih jalur eksekusi yang berbeda berdasarkan nilai dari ekspresi kondisi yang diuji. Percabangan if - else dapat digunakan jika hanya ada dua pilihan (true atau false), sedangkan percabangan if - else if digunakan ketika ada beberapa pilihan atau kondisi yang harus diuji secara berurutan.

              <br/>
              <br/>
              Perhatikan Obrolan Guru dan Murid di bawah ini :
              <br/>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi3/img5.jpg"
                  style="height: 100%; width: 100%; margin-bottom: 10px; margin-top: 10px;"
                />
              </div>
              Guru: "Bagaimana cara menangani pelajaran yang sulit?"
              <br/>
              Murid: "Jangan menangani, bu! Tinggalkan saja di dalam otak."
              <br/>
              <br/>
              Oke, karena kalian sudah menyimpan di otak kalian tentang struktur percabangan If - Else dan If - Else If kurang rasanya jika belum mencobanya langsung, cus kita ke codelab di halaman selanjutnya 😂
              </span>
            </div>
            `,
          Image: "",
          UrlYoutube: "",
          type: "materi"
        },
        {
          judulMateri: "Codelab dengan Pascal",
          isiMateri: `
            Sebelum melangkah lebih jauh tentang materi struktur kontrol keputusan, sebaiknya kalian pahami terlebih dahulu operator yang sering di gunakan dalam kondisi struktur kontrol keputusan. Yaitu operator logika, relasional, kesamaan dan Operator Kondisional (Ternary). 
            `,
          htmlMateri: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              Untuk mencobanya silahkan klik <a href="https://onlinegdb.com/PQbuLopTc" target="_blank">disini</a> ya
              <br/>
              Pada Codelab kali ini kita akan menggunakan percabangan if - else if untuk memeriksa nilai yang dimasukkan oleh pengguna dan menampilkan pesan berdasarkan rentang nilai tertentu.
              </span>
            </div>
            
            <h1 style="margin-bottom: 10px; margin-top: 60px; font-size: 30px;">Langkah 1: Mendeklarasikan variabel nilai sebagai integer.</h1>
            <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi3/img_codelab1.png"
                style="height: 100%; width: 100%;"
              />
            </div>
            <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
            Penjelasan: 
            <br/>
            Kita mendeklarasikan variabel nilai yang akan digunakan untuk menyimpan <strong>'nilai'</strong> input dari pengguna. Variabel ini memiliki tipe data <strong>'integer'</strong>, yang berarti hanya dapat menyimpan nilai bilangan bulat.
            </span>

            <h1 style="margin-bottom: 10px; margin-top: 60px; font-size: 30px;">Langkah 2: Menampilkan pesan untuk meminta pengguna memasukkan nilai.</h1>
            <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi3/img_codelab2.png"
                style="height: 100%; width: 100%;"
              />
            </div>
            <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
            Penjelasan: 
            <br/>
            Pesan yang ditampilkan pada <strong>writeln</strong> memberi tahu pengguna bahwa mereka harus memasukkan <strong>nilai</strong>. Nilai yang dimasukkan oleh pengguna akan disimpan dalam variabel <strong>nilai</strong> menggunakan <strong>readln</strong>.
            </span>

            <h1 style="margin-bottom: 10px; margin-top: 60px; font-size: 30px;">Langkah 3: Menerapkan percabangan if - else if untuk menentukan grade berdasarkan nilai yang dimasukkan.</h1>
            <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi3/img_codelab3.png"
                style="height: 100%; width: 100%;"
              />
            </div>
            <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
            Penjelasan: 
            <br/>
            Di sini, kita menggunakan beberapa pernyataan <strong>if dan else if</strong> untuk mengevaluasi <strong>nilai</strong> yang dimasukkan oleh pengguna. Setiap pernyataan <strong>if atau else if</strong> akan mengecek nilai nilai berdasarkan kondisi yang ditentukan. Jika kondisi tersebut terpenuhi, maka pesan akan ditampilkan sesuai dengan kategori nilai yang sesuai.
            <br/>
            <br/>
            Penting untuk diperhatikan bahwa pada percabangan if - else if, hanya satu blok kode yang akan dijalankan berdasarkan kondisi pertama yang terpenuhi. Artinya, jika nilai adalah 80, maka program akan menampilkan pesan "Nilai Anda B" dan tidak akan mengevaluasi kondisi-kondisi berikutnya, seperti "Nilai Anda C" atau "Nilai Anda D".
            </span>
          </div>
            `,
          Image: "",
          UrlYoutube: "",
          type: "materi"
        },
        {
          judulMateri: "Diskusi Kelompok",
          isiMateri: `
            Sebelum melangkah lebih jauh tentang materi struktur kontrol keputusan, sebaiknya kalian pahami terlebih dahulu operator yang sering di gunakan dalam kondisi struktur kontrol keputusan. Yaitu operator logika, relasional, kesamaan dan Operator Kondisional (Ternary). 
            `,
          Image: "",
          UrlYoutube: "",
          type: "rangkuman"
        },
        {
          judulMateri: "Latihan 1",
          isiMateri: `
            Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
            Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
            `,
          Image: "",
          soal: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
                Bagaimana sintaks penulisan struktur kontrol if-else dalam bahasa Pascal?
              </span>
            </div>            
          </div>
          `,
          pilihanSoal: [
            "if {kondisi} {pernyataan}",
            "if (kondisi) [pernyataan] else [pernyataan]",
            "if [kondisi] {pernyataan} else {pernyataan}",
            "if (kondisi) then {pernyataan} else {pernyataan}"
          ],
          kunjawSoal: 3,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "Latihan 2",
          isiMateri: `
            Sebelum melangkah lebih jauh tentang materi struktur kontrol keputusan, sebaiknya kalian pahami terlebih dahulu operator yang sering di gunakan dalam kondisi struktur kontrol keputusan. Yaitu operator logika, relasional, kesamaan dan Operator Kondisional (Ternary). 
            `,
          Image: "",
          soal: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
                Perhatikan kode berikut untuk menjawab soal no 2 dan 3!
              </span>
            </div>  
            <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi3/img_soal.png"
                style="height: 100%; width: 100%;"
              />
            </div>  
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
                Dalam program di atas, apa yang dilakukan oleh pernyataan "if angka mod 2 = 0"?
              </span>
            </div>
          </div>
          `,
          pilihanSoal: [
            "Memeriksa apakah angka bisa dibagi dua.",
            "Memeriksa apakah angka adalah bilangan genap.",
            "Memeriksa apakah angka adalah bilangan ganjil.",
            "Memeriksa apakah angka lebih dari nol."
          ],
          kunjawSoal: 1,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "Latihan 3",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi3/img_soal.png"
                style="height: 100%; width: 100%;"
              />
            </div>
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
                Jika pengguna memasukkan angka 0 dalam program di atas, apa output yang akan ditampilkan?
              </span>
            </div>
            
          </div>
          `,
          pilihanSoal: [
            "Angka yang dimasukkan adalah angka genap.",
            "Angka yang dimasukkan adalah angka ganjil.",
            "Tidak ada output yang ditampilkan.",
            "Error karena pengguna memasukkan angka bukan integer."
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

export const materiCase: DataMateri[] = [
  {
    // title: "Operator Logika, Relasional, dan Kesaman",
    materi:
    {
      titleModul: "Struktur Percabangan Depend On (Case)",
      isiMateri: [
        {
          judulMateri: "Pendahuluan Percabangan Depend On (Case)",
          isiMateri: `

            Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
            Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
            
            `,
          htmlMateri: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi4/img1.jpg"
                style="height: 60%; width: 60%; margin-bottom: 20px;"
              />
              <span style="font-size: 20px; text-align: justify;">
                Hallo guys selamat datang di modul Percabangan Depend On (Case), Setelah mempelajari percabangan if, if-else, dan if-else if, selanjutnya kalian dapat memperluas pemahaman mengenai percabangan dengan menggunakan struktur kontrol switch case pada bahasa Pascal. Struktur switch case memungkinkan kalian untuk mengevaluasi ekspresi atau nilai tunggal dan mengeksekusi kode berdasarkan nilai tersebut.
                <br/>
                <br/>
                Percabangan <strong>'depend on / switch – case'</strong> biasa digunakan untuk dua kondisi atau lebih bergantung pada nilai sebuah variabel, syarat kondisi pada percabangan <strong>'depend on / switch – case'</strong> biasanya hanya sebuah nilai. Jika nilai yang diperiksa memenuhi syarat dari nilai yang didefinisikan maka akan dikerjakan prosesnya. Pernyataan ini memungkinkan kita untuk membandingkan nilai ekspresi dengan beberapa nilai yang mungkin dan menjalankan blok kode yang sesuai dengan nilai yang cocok.
              </span>
            </div>

            <h1 style="margin-bottom: 8px; font-size: 30px;margin-top: 60px;">Contoh pernyataan <strong>depend on / switch – case</strong></h1>
            <span style="font-size: 20px; text-align: justify;">
              Berikut ini contoh pernyataan <strong>depend on / switch – case</strong> dalam pemrograman bahasa pascal
            </span>
            <div style="display: flex; flex-direction: column; justify-content: center;align-items: center">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi4/img_contoh1.png"
                style="height: 100%; width: 100%; margin-bottom: 20px;margin-top: 20px;"
              />            
            </div>
            <span style="font-size: 20px; text-align: justify;">
              Berikut adalah penjelasan singkat :
              <ul>
                <li><strong>'case nama_variabel':</strong> Ini adalah bagian utama dari pernyataan 'depend on / switch – case' di mana ekspresi akan dievaluasi. Setiap nilai variabel yang mungkin diberikan didefinisikan sebagai 'nilai_variabel_1', 'nilai_variabel_2', dan seterusnya hingga 'nilai_variabel_n'.</li>
                <li><strong>'nilai_variabel_1 sampai nilai_variabel_n':</strong> Ini adalah label kasus dalam pernyataan 'depend on / switch – case'. Jika ekspresi sama dengan 'nilai_variabel_1', maka blok kode yang berada di bawahnya akan dieksekusi. Jika tidak, program akan melanjutkan ke kasus berikutnya.</li>
                <li><strong>'// blok kode yang dijalankan jika ekspresi sama dengan nilai_variabel_1':</strong> Ini adalah bagian kode yang akan dieksekusi jika ekspresi sama dengan nilai_variabel_1. Blok kode ini dapat berisi satu atau beberapa pernyataan yang akan dijalankan.</li>
                <li><strong>'else':</strong> Ini adalah bagian opsional dalam pernyataan 'depend on / switch – case'. Jika ekspresi tidak sama dengan nilai manapun dalam pernyataan 'case' sebelumnya, maka blok kode dalam pernyataan 'else' akan dieksekusi. Ini adalah cara untuk menangani kondisi default atau fallback jika tidak ada kasus yang cocok.</li>
              </ul>
            </span>
          </div>
            `,
          Image: "",
          UrlYoutube: "",
          type: "materi"
        },
        {
          judulMateri: "Contoh kasus Depend On / Case",
          isiMateri: `
            Sebelum melangkah lebih jauh tentang materi struktur kontrol keputusan, sebaiknya kalian pahami terlebih dahulu operator yang sering di gunakan dalam kondisi struktur kontrol keputusan. Yaitu operator logika, relasional, dan kesamaan. 
            `,
          htmlMateri: `
            <div style="font-family: Arial, sans-serif;">
              <h1 style="margin-bottom: 8px; font-size: 30px;margin-top: 60px;">Logika Pemikiran Manusia</h1>
              <span style="font-size: 20px; text-align: justify;">
                Sebuah program yang menampilkan hari sesuai dengan angka yang dimasukkan. Jika angka tersebut cocok dengan nilai 1 sampai 7, maka program akan menampilkan hari  (Senin sampai Minggu). Jika angka yang dimasukkan tidak cocok dengan nilai apapun dari 1 samapi 7, maka program akan menampilkan “tidak ada hari ke-(angka yang dimasukkan)”.
              </span>

              <h1 style="margin-bottom: 8px; font-size: 30px;margin-top: 60px;">Bahasa Pseudocode</h1>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi4/img_contoh2.png"
                  style="height: 50%; width: 50%; margin-bottom: 20px;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify;">
                Penjelasannya sebagai berikut:
                <ul>
                  <li>Mendeklarasikan variabel <strong>hari</strong> sebagai tipe data <strong>integer</strong>.</li>
                  <li>Mengambil input dari pengguna dan menyimpannya dalam variabel <strong>hari</strong>.</li>
                  <li>Menyimpan nilai <strong>hari</strong> untuk dijadikan acuan pada struktur <strong>TERGANTUNG PADA</strong>.</li>
                  <li><strong>TERGANTUNG PADA (hari)</strong>: Struktur <strong>TERGANTUNG PADA</strong> digunakan untuk melakukan percabangan berdasarkan nilai dari variabel <strong>hari</strong>.</li>
                  <li><strong>KASUS 1:</strong> Jika nilai <strong>hari</strong> adalah 1, maka blok kode di bawahnya akan dijalankan.</li>
                  <li>Menampilkan pesan "<strong>hari senin</strong>" jika nilai <strong>hari</strong> adalah 1.</li>
                  <li><strong>ISTIRAHAT</strong>: Menandakan akhir dari setiap kasus, sehingga program akan melanjutkan ke bagian setelah blok <strong>TERGANTUNG PADA</strong>.</li>
                  <li><strong>KASUS 2:</strong> Jika nilai <strong>hari</strong> adalah 2, maka blok kode di bawahnya akan dijalankan.</li>
                  <li>Begitu seterusnya hingga mencapai <strong>KASUS 7</strong>, dan blok kode di bawahnya akan dijalankan jika nilai <strong>hari</strong> adalah 7.</li>
                  <li><strong>LAIN:</strong> Jika nilai <strong>hari</strong> tidak sama dengan 1 hingga 7, maka blok kode di bawahnya akan dijalankan.</li>
                  <li>Menampilkan pesan "<strong>tidak ada hari ke : </strong>" diikuti dengan nilai <strong>hari</strong>.</li>
                </ul>
              </span>


              <h1 style="margin-bottom: 8px; font-size: 30px;margin-top: 60px;">Bahasa Pascal</h1>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi4/img_contoh3.png"
                  style="height: 50%; width: 50%; margin-bottom: 20px;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify;">
                Penjelasannya sebagai berikut:
                <ul>
                  <li>Mendeklarasikan awal dari program dan memberikan nama program sebagai "<strong>CekHari;</strong>".</li>
                  <li>Mendeklarasikan variabel <strong>hari</strong> sebagai tipe data <strong>integer</strong>.</li>
                  <li>Menandakan awal dari program utama (<strong>begin</strong>).</li>
                  <li>Menampilkan pesan "<strong>Silahkan masukkan hari ke : </strong>" di layar.</li>
                  <li>Mengambil input dari pengguna dan menyimpannya dalam variabel <strong>hari</strong>.</li>
                  <li>Mulai struktur <strong>case</strong> yang akan mengevaluasi nilai dari variabel <strong>hari</strong>.</li>
                  <li>Jika nilai <strong>hari</strong> adalah 1, maka program akan menampilkan pesan "Hari Senin".</li>
                  <li>Jika nilai <strong>hari</strong> adalah 2, maka program akan menampilkan pesan "Hari Selasa".</li>
                  <li>Begitu seterusnya hingga mencapai nilai 7, dan program akan menampilkan pesan yang sesuai dengan kategori hari.</li>
                  <li>Jika nilai <strong>hari</strong> tidak sama dengan 1 hingga 7, maka program akan menampilkan pesan "Tidak ada hari ke-" diikuti dengan nilai <strong>hari</strong>.</li>
                  <li>Menunggu pengguna menekan tombol Enter sebelum program berakhir (<strong>readln;</strong>).</li>
                </ul>

                <br/>
                <br/>
                Jadi contoh kasus diatas akan meminta pengguna memasukkan nomor hari (dalam bentuk angka 1 hingga 7) dan menampilkan pesan yang sesuai dengan nama hari berdasarkan nomor yang dimasukkan. Jika nomor hari tidak valid (di luar rentang 1 hingga 7), maka program akan memberikan pesan "Tidak ada hari ke-" diikuti dengan nilai yang dimasukkan oleh pengguna.
              </span>
            </div>
            `,
          Image: "",
          UrlYoutube: "",
          type: "materi"
        },
        {
          judulMateri: "Codelab dengan Pascal",
          isiMateri: `
            Sebelum melangkah lebih jauh tentang materi struktur kontrol keputusan, sebaiknya kalian pahami terlebih dahulu operator yang sering di gunakan dalam kondisi struktur kontrol keputusan. Yaitu operator logika, relasional, kesamaan dan Operator Kondisional (Ternary). 
            `,
          htmlMateri: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              Untuk mencobanya silahkan klik <a href="https://onlinegdb.com/vXAwsyC48" target="_blank">disini</a> ya
              <br/>
              Pada Codelab kali ini menggambarkan bagaimana cara menggunakan case dalam Pascal untuk melakukan percabangan dan memberikan respon berbeda berdasarkan nilai yang dimasukkan.
              </span>
            </div>
            
            <h1 style="margin-bottom: 10px; margin-top: 60px; font-size: 30px;">Langkah 1: Mendeklarasikan variabel pilihan sebagai integer.</h1>
            <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi4/img_codelab1.png"
                style="height: 100%; width: 100%;"
              />
            </div>
            <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
            Penjelasan: 
            <br/>
            Kita mendeklarasikan variabel <strong>pilihan</strong> yang akan digunakan untuk menyimpan pilihan input dari pengguna. Variabel ini memiliki tipe data integer, yang berarti hanya dapat menyimpan nilai bilangan bulat.
            </span>

            <h1 style="margin-bottom: 10px; margin-top: 60px; font-size: 30px;">Langkah 2: Menampilkan pilihan-pilihan yang tersedia kepada pengguna.</h1>
            <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi4/img_codelab2.png"
                style="height: 100%; width: 100%;"
              />
            </div>
            <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
            Penjelasan: 
            <br/>
            Kita menampilkan beberapa pilihan yang tersedia kepada pengguna dengan menggunakan <strong>writeln</strong>. Pengguna dapat memilih pilihan 1 hingga 5 untuk memilih salah satu opsi yang ditampilkan.
            </span>

            <h1 style="margin-bottom: 10px; margin-top: 60px; font-size: 30px;">Langkah 3: Meminta pengguna untuk memasukkan pilihan dan menyimpannya dalam variabel pilihan.</h1>
            <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi4/img_codelab3.png"
                style="height: 100%; width: 100%;"
              />
            </div>
            <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
              Penjelasan: 
              <br/>
              Program akan menampilkan pesan "Masukkan pilihan (1-5): " dan menggunakan <strong>readln</strong> untuk mengambil input dari pengguna dan menyimpannya dalam variabel <strong>pilihan</strong>.
            </span>

            <h1 style="margin-bottom: 10px; margin-top: 60px; font-size: 30px;">Langkah 4: Menerapkan struktur case untuk mengevaluasi nilai pilihan dan memberikan respon sesuai dengan nilai yang dimasukkan pengguna.</h1>
            <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi4/img_codelab4.png"
                style="height: 100%; width: 100%;"
              />
            </div>
            <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
              Penjelasan: 
              <br/>
              Di sini, kita menggunakan struktur <strong>case</strong> untuk mengevaluasi nilai dari variabel <strong>pilihan</strong>. Program akan menjalankan blok kode di bawahnya sesuai dengan nilai <strong>pilihan</strong> yang dimasukkan oleh pengguna.
            </span>
          </div>
            `,
          Image: "",
          UrlYoutube: "",
          type: "materi"
        },
        {
          judulMateri: "Diskusi Kelompok",
          isiMateri: `
            Sebelum melangkah lebih jauh tentang materi struktur kontrol keputusan, sebaiknya kalian pahami terlebih dahulu operator yang sering di gunakan dalam kondisi struktur kontrol keputusan. Yaitu operator logika, relasional, kesamaan dan Operator Kondisional (Ternary). 
            `,
          Image: "",
          UrlYoutube: "",
          type: "rangkuman"
        },
        {
          judulMateri: "Latihan 1",
          isiMateri: `
            Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
            Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
            `,
          Image: "",
          soal: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
                Manakah pernyataan berikut yang benar tentang switch case?
              </span>
            </div>            
          </div>
          `,
          pilihanSoal: [
            "Setiap case dalam switch case harus diakhiri dengan tanda titik koma (;)",
            "Pernyataan break tidak diperlukan di setiap case",
            "Ekspresi dalam switch case tidak bisa berupa variabel",
            "Pernyataan switch case dapat digunakan untuk menggantikan percabangan if-else"
          ],
          kunjawSoal: 3,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "Latihan 2",
          isiMateri: `
            `,
          Image: "",
          soal: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
                Ketika menggunakan switch case, ekspresi yang dievaluasi harus memiliki nilai berapa saja?
              </span>
            </div>            
          </div>
          `,
          pilihanSoal: [
            "Hanya nilai yang terbatas dan sudah diketahui sebelumnya",
            "Nilai apa saja, tidak terbatas",
            "Nilai yang hanya bisa berupa angka",
            "Nilai yang hanya bisa berupa karakter"
          ],
          kunjawSoal: 0,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "Latihan 3",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
                Perhatikan kode Pascal berikut!
              </span>
            </div>
            <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi4/img_soal.png"
                style="height: 100%; width: 100%;"
              />
            </div>
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
                Pada kode di atas, mengapa program tidak dapat dikompilasi dengan benar?
              </span>
            </div>
          </div>
          `,
          pilihanSoal: [
            "Terdapat kesalahan dalam penulisan variabel pilihan.",
            "Tidak ada tanda “;” di begin",
            "Tidak ada pernyataan case untuk nilai 3.",
            "Tidak ada kesalahan, program dapat dikompilasi dengan benar."
          ],
          kunjawSoal: 3,
          UrlYoutube: "",
          type: "soal"
        }
      ]
    },
    status: "materi"
  }
];

export const materiNestedIf: DataMateri[] = [
  {
    // title: "Operator Logika, Relasional, dan Kesaman",
    materi:
    {
      titleModul: "Struktur Percabangan If bersarang (Nested If)",
      isiMateri: [
        {
          judulMateri: "Pendahuluan Percabangan If bersarang",
          isiMateri: `

            Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
            Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
            
            `,
          htmlMateri: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi5/img1.jpg"
                style="height: 60%; width: 60%;"
              />
              <span style="font-size: 20px; text-align: justify;">
                Selamat guys! kalian telah sampai di modul trakhir tetang materi percabangan. Selanjutnya, kalian akan memperluas pemahaman tentang percabangan dengan nested if dalam bahasa Pascal. Nested if memungkinkan kalian untuk menggabungkan berbagai kondisi dan pengambilan keputusan dalam struktur percabangan yang lebih kompleks. Dengan nested if, kalian dapat menyelesaikan skenario yang memerlukan evaluasi lebih mendalam dan memberikan fleksibilitas yang lebih tinggi dalam alur eksekusi program.
                <br/>
                <br/>
                Pernyataan <strong>'nested if'</strong> adalah penggunaan struktur if di dalam blok if lainnya. Dalam nested if, blok if dijalankan hanya jika kondisi di dalamnya terpenuhi. Dalam nested if, kita dapat menambahkan lebih banyak blok if di dalam blok if lainnya sesuai kebutuhan, dan tidak membatasi jenis percabangan apa yang boleh berada di dalam percabangan lainnya.
              </span>
            </div>

            <h1 style="margin-bottom: 8px; font-size: 30px;margin-top: 60px;">Contoh pernyataan <strong>'nested if'</strong></h1>
            <span style="font-size: 20px; text-align: justify;">
              Berikut ini contoh pernyataan <strong>'nested if'</strong> dalam pemrograman
            </span>
            <div style="display: flex; flex-direction: column; justify-content: center;align-items: center">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi5/img_contoh1.png"
                style="height: 100%; width: 100%; margin-bottom: 20px;margin-top: 20px;"
              />            
            </div>
            <span style="font-size: 20px; text-align: justify;">
              Pernyataan di atas adalah contoh penggunaan nested if dalam pemrograman. 
              <ul>
                <li>Jika '<strong>kondisi1</strong>' terpenuhi, maka blok kode di dalamnya akan dievaluasi.</li>
                <li>Jika '<strong>kondisi2</strong>' juga terpenuhi, maka blok kode di dalam <strong>if</strong> kedua akan dieksekusi.</li>
                <li>Jika '<strong>kondisi2</strong>' tidak terpenuhi, maka blok kode di dalam <strong>else</strong> akan dijalankan.</li>
                <li>Jika '<strong>kondisi1</strong>' tidak terpenuhi, maka blok kode di dalam <strong>else</strong> luar akan dieksekusi.</li>
              </ul>
              <br/>
              Dengan menggunakan <strong>nested if</strong>, kita dapat mengevaluasi lebih dari satu kondisi dan menjalankan blok kode yang sesuai berdasarkan kondisi yang terpenuhi.
            </span>
          </div>
            `,
          Image: "",
          UrlYoutube: "",
          type: "materi"
        },
        {
          judulMateri: "Contoh kasus Percabangan If bersarang",
          isiMateri: `
            Sebelum melangkah lebih jauh tentang materi struktur kontrol keputusan, sebaiknya kalian pahami terlebih dahulu operator yang sering di gunakan dalam kondisi struktur kontrol keputusan. Yaitu operator logika, relasional, dan kesamaan. 
            `,
          htmlMateri: `
            <div style="font-family: Arial, sans-serif;">
              <h1 style="margin-bottom: 8px; font-size: 30px;margin-top: 60px;">Logika Pemikiran Manusia</h1>
              <span style="font-size: 20px; text-align: justify;">
                Buat kotak untuk memasukkan tiga buah masukan dan sebuah kotak untuk menyimpan penanda.
                <br/>
                Meminta masukkan pengguna (user) dan menginisialisasi penanda sebagai  false.
                <br/>
                Memeriksa satu per satu angka masukan, apakah angka masukan termasuk angka ribuan
                <br/>
                Memeriksa tanda, jika tanda berisi true  maka semua masukan memang berisi angka ribuan.              
              </span>

              <h1 style="margin-bottom: 8px; font-size: 30px;margin-top: 60px;">Bahasa Pseudocode</h1>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi5/img_contoh2.png"
                  style="height: 70%; width: 70%; margin-bottom: 20px;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify;">
                Penjelasannya sebagai berikut:
                <ul>
                  <li>Mendeklarasikan variabel <strong>a</strong>, <strong>b</strong>, <strong>c</strong>, dan <strong>tanda</strong> sebagai tipe data <strong>integer</strong> dan <strong>boolean</strong>.</li>
                  <li>Mengambil input dari pengguna dan menyimpannya dalam variabel <strong>a</strong>, <strong>b</strong>, dan <strong>c</strong>.</li>
                  <li>Menginisialisasi variabel <strong>tanda</strong> dengan nilai <strong>false</strong>.</li>
                  <li>Selanjutnya, program akan mengevaluasi nilai dari <strong>a</strong>, <strong>b</strong>, dan <strong>c</strong> untuk memastikan bahwa semuanya adalah angka ribuan (antara 1000 hingga 9999) menggunakan beberapa pernyataan <strong>IF</strong>.</li>
                  <li>Jika semua nilai <strong>a</strong>, <strong>b</strong>, dan <strong>c</strong> adalah angka ribuan, maka variabel <strong>tanda</strong> akan diubah menjadi <strong>true</strong>.</li>
                  <li>Setelah itu, program akan menampilkan pesan sesuai dengan nilai dari variabel <strong>tanda</strong>. Jika <strong>tanda</strong> adalah <strong>true</strong>, maka program akan menampilkan pesan "semua angka masukan adalah ribuan". Jika <strong>tanda</strong> adalah <strong>false</strong>, maka program akan menampilkan pesan "tidak semua angka masukan adalah ribuan".</li>
                </ul>   
              </span>


              <h1 style="margin-bottom: 8px; font-size: 30px;margin-top: 60px;">Bahasa Pascal</h1>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi5/img_contoh3.png"
                  style="height: 70%; width: 70%; margin-bottom: 20px;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify;">
                Penjelasannya sebagai berikut:
                <ul>
                  <li>Mendeklarasikan variabel <strong>a</strong>, <strong>b</strong>, <strong>c</strong> sebagai tipe data <strong>integer</strong> dan <strong>tanda</strong> sebagai tipe data <strong>boolean</strong>.</li>
                  <li>Menampilkan pesan "<strong>Masukkan 3 angka dan tekan enter setelah memasukkan tiap angka:</strong>" di layar.</li>
                  <li>Mengambil input dari pengguna dan menyimpannya dalam variabel <strong>a</strong>, <strong>b</strong>, dan <strong>c</strong>.</li>
                  <li>Menginisialisasi variabel <strong>tanda</strong> dengan nilai <strong>false</strong>.</li>
                  <li>Selanjutnya, program akan mengevaluasi nilai dari <strong>a</strong>, <strong>b</strong>, dan <strong>c</strong> untuk memastikan bahwa semuanya adalah angka ribuan (antara 1000 hingga 9999) menggunakan beberapa pernyataan <strong>if</strong>.</li>
                  <li>Jika semua nilai <strong>a</strong>, <strong>b</strong>, dan <strong>c</strong> adalah angka ribuan, maka variabel <strong>tanda</strong> akan diubah menjadi <strong>true</strong>.</li>
                  <li>Setelah itu, program akan menampilkan pesan sesuai dengan nilai dari variabel <strong>tanda</strong>. Jika <strong>tanda</strong> adalah <strong>true</strong>, maka program akan menampilkan pesan "Semua angka masukan adalah ribuan.". Jika <strong>tanda</strong> adalah <strong>false</strong>, maka program akan menampilkan pesan "Tidak semua angka masukan adalah ribuan."</li>
                </ul>
                <br/>
                Jadi contoh kasus diatas akan meminta pengguna memasukkan 3 angka dan menampilkan pesan berdasarkan apakah semua angka yang dimasukkan adalah angka ribuan atau tidak. Jika semua angka masukan adalah angka ribuan, maka program akan memberikan pesan "Semua angka masukan adalah ribuan.". Jika tidak semua angka masukan adalah angka ribuan, maka program akan memberikan pesan "Tidak semua angka masukan adalah ribuan.".
              </span>
            </div>
            `,
          Image: "",
          UrlYoutube: "",
          type: "materi"
        },
        {
          judulMateri: "Codelab dengan Pascal",
          isiMateri: `
            Sebelum melangkah lebih jauh tentang materi struktur kontrol keputusan, sebaiknya kalian pahami terlebih dahulu operator yang sering di gunakan dalam kondisi struktur kontrol keputusan. Yaitu operator logika, relasional, kesamaan dan Operator Kondisional (Ternary). 
            `,
          htmlMateri: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Untuk mencobanya silahkan klik <a href="https://onlinegdb.com/mizwK_XhL" target="_blank">disini</a> ya
                <br/>
                Program ini akan meminta pengguna memasukkan nilai dan memberikan respons berbeda berdasarkan rentang nilai yang dimasukkan. Respons ini ditentukan oleh nested if yang mengevaluasi nilai nilai dan memberikan pesan yang sesuai berdasarkan kondisi tersebut. Codelab ini menggambarkan bagaimana cara menggunakan nested if dalam Pascal untuk melakukan percabangan dan memberikan respons berbeda berdasarkan nilai yang dimasukkan.
                </span>
              </div>
              
              <h1 style="margin-bottom: 10px; margin-top: 60px; font-size: 30px;">Langkah 1: Mendeklarasikan variabel nilai sebagai integer.</h1>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi5/img_codelab1.png"
                  style="height: 100%; width: 100%;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
              Penjelasan: 
              <br/>
              Kita mendeklarasikan variabel <strong>nilai</strong> yang akan digunakan untuk menyimpan nilai input dari pengguna. Variabel ini memiliki tipe data <strong>integer</strong>, yang berarti hanya dapat menyimpan nilai bilangan bulat.
              </span>
  
              <h1 style="margin-bottom: 10px; margin-top: 60px; font-size: 30px;">Langkah 2: Menampilkan pesan untuk meminta pengguna memasukkan nilai.</h1>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi5/img_codelab2.png"
                  style="height: 100%; width: 100%;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
              Penjelasan: 
              <br/>
              Pesan yang ditampilkan pada <strong>writeln</strong> memberi tahu pengguna bahwa mereka harus memasukkan nilai. Nilai yang dimasukkan oleh pengguna akan disimpan dalam variabel <strong>nilai</strong> menggunakan <strong>readln</strong>.
              </span>
  
              <h1 style="margin-bottom: 10px; margin-top: 60px; font-size: 30px;">Langkah 3: Evaluasi apakah nilai lebih besar atau sama dengan 0.</h1>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi5/img_codelab3.png"
                  style="height: 100%; width: 100%;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
                Penjelasan: 
                <br/>
                Pada langkah ini, program akan mengevaluasi apakah nilai yang dimasukkan oleh pengguna lebih besar atau sama dengan 0.
              </span>
  
              <h1 style="margin-bottom: 10px; margin-top: 60px; font-size: 30px;">Langkah 4: Evaluasi apakah nilai lebih besar atau sama dengan 50.</h1>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi5/img_codelab4.png"
                  style="height: 100%; width: 100%;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
                Penjelasan: 
                <br/>
                Pada langkah ini, program akan mengevaluasi apakah nilai yang dimasukkan oleh pengguna lebih besar atau sama dengan 50.
              </span>

              <h1 style="margin-bottom: 10px; margin-top: 60px; font-size: 30px;">Langkah 5: Evaluasi apakah nilai lebih besar atau sama dengan 75.</h1>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi5/img_codelab5.png"
                  style="height: 100%; width: 100%;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
                Penjelasan: 
                <br/>
                Pada langkah ini, program akan mengevaluasi apakah nilai yang dimasukkan oleh pengguna lebih besar atau sama dengan 75.
                <br/>
                Jika kondisi pada langkah 5 terpenuhi (nilai lebih besar atau sama dengan 75), maka program akan menampilkan pesan "Nilai Anda A" karena nilai tersebut memenuhi kondisi tertinggi pada nested if.
              </span>

              <h1 style="margin-bottom: 10px; margin-top: 60px; font-size: 30px;">Langkah 6: Jika nilai kurang dari 75, program akan menampilkan pesan "Nilai Anda B".</h1>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi5/img_codelab6.png"
                  style="height: 100%; width: 100%;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
                Penjelasan: 
                <br/>
                Jika kondisi pada langkah 5 tidak terpenuhi (nilai kurang dari 75), maka program akan menampilkan pesan "Nilai Anda B" karena nilai tersebut memenuhi kondisi pada nested if ini.
              </span>

              <h1 style="margin-bottom: 10px; margin-top: 60px; font-size: 30px;">Langkah 7: Jika nilai kurang dari 50, program akan menampilkan pesan "Nilai Anda C".</h1>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi5/img_codelab7.png"
                  style="height: 100%; width: 100%;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
                Penjelasan: 
                <br/>
                Jika kondisi pada langkah 3 tidak terpenuhi (nilai kurang dari 50), maka program akan menampilkan pesan "Nilai Anda C" karena nilai tersebut memenuhi kondisi pada nested if ini.
              </span>

              <h1 style="margin-bottom: 10px; margin-top: 60px; font-size: 30px;">Langkah 8: Jika nilai kurang dari 0, program akan menampilkan pesan "Nilai Anda Tidak Valid".</h1>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi5/img_codelab8.png"
                  style="height: 100%; width: 100%;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
                Penjelasan: 
                <br/>
                Jika kondisi pada langkah 1 tidak terpenuhi (nilai kurang dari 0), maka program akan menampilkan pesan "Nilai Anda Tidak Valid" karena nilai tersebut tidak memenuhi kondisi pada if utama.
              </span>
            </div>
              `,
          Image: "",
          UrlYoutube: "",
          type: "materi"
        },
        {
          judulMateri: "Diskusi Kelompok",
          isiMateri: `
            Sebelum melangkah lebih jauh tentang materi struktur kontrol keputusan, sebaiknya kalian pahami terlebih dahulu operator yang sering di gunakan dalam kondisi struktur kontrol keputusan. Yaitu operator logika, relasional, kesamaan dan Operator Kondisional (Ternary). 
            `,
          Image: "",
          UrlYoutube: "",
          type: "rangkuman"
        },
        {
          judulMateri: "Latihan 1",
          isiMateri: `
            Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
            Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
            `,
          Image: "",
          soal: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
                Kapan ‘nested if’ digunakan dalam sebuah program?
              </span>
            </div>            
          </div>
          `,
          pilihanSoal: [
            "Nested if digunakan ketika kita ingin mengulang beberapa pernyataan dengan kondisi tertentu.",
            "Nested if digunakan ketika kita ingin membandingkan dua variabel dalam satu kondisi.",
            "Nested if digunakan ketika kita ingin melakukan beberapa percabangan berlapis berdasarkan kondisi yang kompleks.",
            "Nested if digunakan ketika kita ingin membuat perulangan dalam program."
          ],
          kunjawSoal: 2,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "Latihan 2",
          isiMateri: `
            Sebelum melangkah lebih jauh tentang materi struktur kontrol keputusan, sebaiknya kalian pahami terlebih dahulu operator yang sering di gunakan dalam kondisi struktur kontrol keputusan. Yaitu operator logika, relasional, kesamaan dan Operator Kondisional (Ternary). 
            `,
          Image: "",
          soal: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
                Perhatikan kode Pascal berikut!
              </span>
            </div>
            <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi5/img_soal1.png"
                style="height: 70%; width: 70%;"
              />
            </div>
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
                Apa output yang akan ditampilkan setelah menjalankan program di atas?
              </span>
            </div>
          </div>
          `,
          pilihanSoal: [
            "Hasil: A",
            "Hasil: B",
            "Hasil: C",
            "Hasil: D"
          ],
          kunjawSoal: 0,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "Latihan 3",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
                Berikut adalah soal mengenai kode nested if yang salah dalam bahasa Pascal:
              </span>
            </div>
            <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi5/img_soal2.png"
                style="height: 100%; width: 100%;"
              />
            </div>
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
                Apa kesalahan dalam kode di atas dan bagaimana cara memperbaikinya?
              </span>
            </div>
          </div>
          `,
          pilihanSoal: [
            "Tidak ada kesalahan dalam kode ini.",
            "Kesalahan terjadi karena kurangnya blok begin dan end untuk setiap pernyataan if.",
            "Kesalahan terjadi karena tipe data variabel 'nilaiA' dan 'nilaiB' harus dideklarasikan dengan var di depannya.",
            "Kesalahan terjadi karena pernyataan if dan else tidak saling berhubungan secara terstruktur."
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

export type ArrayCreateMateri = CreateMateriType[]

export interface CreateMateriType {
  fullname: string
}

export interface DetailMateriTypeResponse {
  name: string
  status: string
  fullname: string
  tanggalMulai: string
  step: number
  pertanyaan: PertanyaanType[]
  latihan: HasilSoalType[]
  rangkuman: string
}

export interface UpdateSteptypeResponse {
  step: number
}

export interface DetailMateriState {
  idMateri: string
  name: string
  status: string
  fullname: string
  step: number
  latihan: Latihan[]
  rangkuman: string
}

export interface Latihan {
  jawaban: number
  hasil: boolean
}

export interface CreateMateriTypeResponse {
  name: string
}

export interface UpdateRangkumanTypeResponse {
  rangkuman: string
}

export interface HasilSoalType {
  name: string,
  jawaban: number,
  hasil: boolean,
  textJawaban: string
}

export interface BodySendEvaluasi {
  hasilSoal: HasilSoalType[]
  poin: number
}

export interface HasilEvaluasiType {
  name: string,
  jawaban: number,
  hasil: boolean,
}

export interface PertanyaanType {
  fullname: string,
  pertanyaan: string
}

export interface PertanyaanResponse {
  id: string,
  pertanyaan: PertanyaanType
}

export interface PertanyaanTypeResponse {
  pertanyaan: PertanyaanType
}

export interface IsEvaluasiTypeResponse {
  isEvaluasi: boolean
}