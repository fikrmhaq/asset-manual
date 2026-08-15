---
title: Batasan yang diketahui
description: Hal-hal yang belum dapat dilakukan aplikasi, dan cara menyiasati masing-masing.
order: 40
keywords: [batasan, tidak bisa, fitur tidak ada, solusi, tidak didukung, kendala]
related:
  - troubleshooting/why-is-this-action-unavailable
  - troubleshooting/why-cant-i-save-this-form
---

Hal-hal yang belum dapat dilakukan aplikasi. Masing-masing disertai akibat
praktisnya dan cara orang menyiasatinya — tidak satu pun menghalangi Anda
menjalankan sistem, tetapi mengetahuinya menghemat setengah hari mencari fitur
yang memang tidak ada.

## Kata sandi ditetapkan administrator

Tidak ada fitur ubah kata sandi maupun atur ulang kata sandi. Pengguna tidak
dapat mengubah kata sandinya sendiri, dan layar masuk tidak memiliki tautan "lupa
kata sandi".

**Yang dilakukan:** ketika seseorang lupa, administrator menetapkan kata sandi
baru pada catatan penggunanya lalu menyampaikannya secara aman. Pilih kata sandi
awal yang baik, karena akan dipakai lama.

## Unit satuan ditemukan melalui asetnya

Tidak ada layar yang menampilkan seluruh unit aset, dan tidak ada cara mencari
unit secara langsung melalui nomor seri atau nomor inventaris. Setiap tempat yang
meminta Anda memilih unit — peminjaman, transaksi — dimulai dari asetnya.

**Yang dilakukan:** beri setiap unit **deskripsi** pembeda saat membuatnya.
Kolom itulah yang membuat saudara-saudaranya dapat dibedakan pada setiap pemilih.

## Atribut pilihan menerima apa saja

Atribut berjenis **Pilihan** tidak memiliki tempat penyimpanan untuk daftar
pilihannya, sehingga berperilaku seperti teks bebas.

**Yang dilakukan:** cantumkan nilai yang diizinkan pada **Deskripsi** atribut
agar pengisinya dapat melihatnya, dan periksa konsistensinya secara manual.
Formulir definisi maupun formulir nilai memperingatkan hal ini.

## Area denah digambar ulang, bukan disesuaikan

Bentuk sebuah area tidak dapat disunting sudut demi sudut. Mengubah bentuk
berarti menghapus areanya lalu menggambarnya lagi.

**Yang dilakukan:** siapkan waktu untuk menggambar ulang. Dalam praktiknya jarang
menjadi masalah — ruangan jarang berubah bentuk — tetapi perhatikan bahwa
**mengganti gambar denah akan menghapus setiap area di atasnya**, sehingga foto
baru lantai yang sama berarti menggambar ulang semuanya.

## Bagian sebuah unit tidak dapat ditetapkan dari layar unit

Bagian penanggung jawab ditampilkan pada tab Ikhtisar sebuah unit, tetapi dialog
penyuntingan di sana hanya menawarkan **Deskripsi**.

**Yang dilakukan:** jika tanggung jawab per bagian penting bagi catatan Anda,
sampaikan kepada pengelola instalasi Anda.

## Perpanjangan tidak tertaut ke peminjaman sebelumnya

[Memperpanjang peminjaman](/how-do-i/extend-a-borrowing) menutup catatan yang
berjalan dan membuka draf baru. Kedua catatan benar, tetapi tidak ada yang
menghubungkan keduanya dan tidak ada keterangan bahwa salah satunya bagian dari
rangkaian.

**Yang dilakukan:** tuliskan kaitannya pada **Deskripsi** catatan baru —
"Perpanjangan peminjaman kepada J. Santoso yang semula jatuh tempo 10 Maret."

## Daftar peminjaman tidak memiliki penyaring tanggal

Daftar menyaring menurut status, instansi, dan keterlambatan, tetapi tidak
menurut tanggal.

**Yang dilakukan:** gunakan **laporan Peminjaman**, yang memiliki rentang
tanggal. Lihat [Delapan laporan](/reports/the-eight-reports).

## Ekspor hanya memuat baris yang tampil

**Ekspor CSV** menulis persis apa yang ditampilkan. Untuk laporan berhalaman,
artinya halaman yang sedang tampil — bukan seluruh hasilnya.

**Yang dilakukan:** gunakan laporan berkelompok, yang ekspornya lengkap karena
tidak berhalaman, atau persempit penyaring menjadi beberapa potongan lalu ekspor
masing-masing. Lihat
[Bagaimana cara mengekspor data?](/how-do-i/export-data).

## Daftar pilihan memuat paling banyak 100 entri

Daftar pilihan untuk penyedia, kontrak, instansi, vendor, atau entri referensi
memuat hingga 100 baris.

**Yang dilakukan:** jumlah itu jauh lebih banyak daripada yang seharusnya
dimiliki daftar-daftar tersebut, sehingga dalam praktiknya hanya terasa bila
sebuah daftar tumbuh sangat besar. Menjaga daftar referensi tetap ringkas memang
sepatutnya dilakukan. Menyunting catatan yang nilainya berada di luar seratus
yang termuat tetap membuat nilai itu dapat dipilih, jadi tidak ada yang
diam-diam hilang.

## Deskripsi wajib padahal formulir tidak menyatakannya

Pada **Catat perubahan** sebuah unit, deskripsi wajib diisi meskipun tidak
ditandai dan petunjuknya menyiratkan kolom kosong akan diteruskan.

**Yang dilakukan:** selalu tuliskan. Deskripsi itulah yang ditampilkan lini masa
riwayat setelahnya, jadi layak ditulis dengan baik alih-alih disiasati. Lihat
[Mengapa saya tidak bisa menyimpan formulir ini?](/troubleshooting/why-cant-i-save-this-form).

## Log audit tidak terbatas pada instansi Anda

Segala hal lain menghormati lingkup organisasi. Log audit mencakup setiap
instansi, dan layarnya menyatakan hal itu.

**Yang dilakukan:** berikan `perm:audit-log:read` secara terbatas, karena izin
itu memperlihatkan perubahan pada catatan yang selain itu tidak dapat dilihat
pemegangnya.

## Artikel terkait

- [Mengapa aksi ini tidak tersedia?](/troubleshooting/why-is-this-action-unavailable)
- [Mengapa saya tidak bisa menyimpan formulir ini?](/troubleshooting/why-cant-i-save-this-form)
