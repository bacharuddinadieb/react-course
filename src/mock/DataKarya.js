/* eslint-disable max-len */
import JuraganKost from '../assets/img/03-Home v3.png';
import JuraganKost1 from '../assets/img/juragan-kost-1.png';
import JuraganKost2 from '../assets/img/juragan-kost-2.png';
import JuraganKost3 from '../assets/img/juragan-kost-3.png';
import JSCO from '../assets/img/1-Home.png';
import JSCO1 from '../assets/img/jsco-1.png';
import JSCO2 from '../assets/img/jsco-2.png';
import JSCO3 from '../assets/img/jsco-3.png';
import JSCO4 from '../assets/img/jsco-4.png';
import Clear from '../assets/img/Screenshot 2020-10-10 143907.png';
import Chevalier from '../assets/img/screencapture-file-home-matohdev-Documents-Code-Soal-Cheva-client-index-html-2020-06-10-12_07_28 1.png';
import Chevalier1 from '../assets/img/tes-daring-cheva-1.png';
import Chevalier2 from '../assets/img/tes-daring-cheva-2.png';
import Chevalier3 from '../assets/img/tes-daring-cheva-3.png';

const dataKarya = [
  {
    id: 'clear-website',
    nama: 'Clear',
    tag: ['Website Design'],
    header_image: Clear,
    detail_karya: [],
  },
  {
    id: 'chevalier-recruitment-test-website',
    nama: 'Chevalier Recruitment Test',
    tag: ['Website Design'],
    header_image: Chevalier,
    detail_karya: [
      { tipe: 'gambar', gambar: Chevalier1 },
      {
        tipe: 'teks',
        teks:
          'Pada project ini saya berperan sebagai designer serta developper dari website tes daring Lab Chevalier. Website ini menggunakan framework Semantic.ui untuk bagian front-end dan Node.js untuk back-end, Website ini ditujukan untuk mempermudah tata kelola seleksi calon anggota lab baru angkatan 2019. Pada halaman awal terdapat tampilan log-in untuk memvalidasi pengguna. ',
      },
      { tipe: 'gambar', gambar: Chevalier2 },
      {
        tipe: 'teks',
        teks:
          'Selanjutnya ketika pengguna berhasil masuk akan terdapat tampilan detail informasi dari pengguna seperti nama dan NIM serta informasi soal yang akan diikuti oleh peserta ujian daring tersebut.',
      },
      { tipe: 'gambar', gambar: Chevalier3 },
      {
        tipe: 'teks',
        teks:
          'Lalu pengguna dapat mengikuti ujian secara daring, terdapat timer waktu dan juga tombol selesai yang berguna untuk mengakhiri test, selain itu terdapat juga navigation bar disamping yang berguna untuk menavigasi soal - soal yang akan dikerjakan, disamping kanan nomer soal terdapat indikator apakah soal tersebut sudah diisi atau belum. Ketika waktu timer habis maka soal akan secara otomatis direkam di server dan pengguna dapat mengakhiri test tersebut.',
      },
    ],
  },
  {
    id: 'juragan-kost-website',
    nama: 'Juragan Kost',
    tag: ['Website Design'],
    header_image: JuraganKost,
    detail_karya: [
      { tipe: 'gambar', gambar: JuraganKost1 },
      {
        tipe: 'teks',
        teks:
          'Pada project ini saya berperan sebagai designer dan juga developper front end pada sistem website JuraganKost.id, website ini dikembangkan menggunakan framework Semantic.ui untuk tampilan websitenya. Halaman awal pada website JuraganKost.id terdiri atas NavBar yang berguna untuk navigasi antar halaman, Heropage section yang berisi tittle dan juga gambar ilustrasi, dan card yang berguna untuk memilih atau mencari layanan yang disediakan oleh JuraganKost.id',
      },
      { tipe: 'gambar', gambar: JuraganKost2 },
      {
        tipe: 'teks',
        teks:
          'Halaman kedua merupakan halaman hasil pencarian dari kost-kostan yang diinginkan oleh pengguna, hasil pencarian berupa card yang berisi informasi gambar dari kost, nama kost-kostan, badge fasilitas dari kost, informasi tambahan, dan juga harga dari kost tersebut.',
      },
      { tipe: 'gambar', gambar: JuraganKost3 },
      {
        tipe: 'teks',
        teks:
          'Halaman ketiga merupakan halaman detail dari kost-kostan yang ingin dilihat oleh pengguna, halaman ini berisi gallery foto dari kost-kostan tersebut, detail dari kost-kostan, saran kost-kostan yang serupa, dan footer dari halaman website.',
      },
    ],
  },
  {
    id: 'jsco-website',
    nama: 'JSCO',
    tag: ['Website Design'],
    header_image: JSCO,
    detail_karya: [
      { tipe: 'gambar', gambar: JSCO1 },
      {
        tipe: 'teks',
        teks:
          'Pada project ini saya berperan sebagai lead designer dan juga lead developper front end pada sistem website Joyo Santoso Catering Online (JSCO), website ini dikembangkan menggunakan framework Materialize untuk tampilan websitenya. Halaman awal pada website Joyo Santoso Catering Online (JSCO) terdiri atas NavBar yang berguna untuk navigasi antar halaman, Heropage section yang berisi tittle dan juga potongan gamabr menu katering, dan card step yang berguna untuk menunjukkan langkah - langkah dalam penggunaan website.',
      },
      { tipe: 'gambar', gambar: JSCO2 },
      {
        tipe: 'teks',
        teks:
          'Halaman kedua merupakan halaman daftar menu dan paket yang disediakan oleh katering. terdapat card yang dapat dipilih (seperti yang terlihat pada gambar nomer 1) dan ketika pengguna telah memilih dapat diteruskan dengan checkout (seperti yang terlihat pada gambar 2).',
      },
      { tipe: 'gambar', gambar: JSCO3 },
      {
        tipe: 'teks',
        teks:
          'Langkah selanjutnya pengguna akan diarahkan ke halaman pengisian informasi detail dari pengguna, seperti nama pemesan, idLine, nomer yang bisa dihubungi, dan alamat dari pengguna.',
      },
      { tipe: 'gambar', gambar: JSCO4 },
      {
        tipe: 'teks',
        teks:
          'Langkah terakhir pengguna memvalidasi pesanan dan mengisikan informasi tambahan mengenai katering yang dipilih. Selain itu pengguna juga memilih metode pembayaran serta memvalidasi juga harga paket yang dibeli sesuai atau tidak.',
      },
    ],
  },
];

export default dataKarya;
