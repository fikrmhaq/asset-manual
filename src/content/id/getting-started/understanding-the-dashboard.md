---
title: Memahami Beranda
description: Kartu-kartu di layar utama, siapa melihat yang mana, dan ke mana tiap angka menuju.
order: 40
keywords: [beranda, dasbor, ringkasan, ikhtisar, statistik, jumlah, penilaian, cakupan]
related:
  - getting-started/finding-your-way-around
  - concepts/monthly-assessment
  - reports/the-reports
---

Beranda adalah layar pertama setelah Anda masuk. Ia berupa ringkasan, bukan ruang
kerja — tidak ada yang diubah di sini, dan setiap angka merupakan tautan menuju
laporan yang menghasilkannya.

Semua yang ditampilkan terbatas pada apa yang boleh Anda lihat. Jika peran Anda
terbatas pada satu institusi, inilah angka institusi Anda. Jika Anda **penanggung
jawab jurusan**, inilah angka jurusan Anda — bukan angka institusi.

## Beranda adalah kumpulan kartu, bukan satu halaman

Setiap kartu memerlukan izinnya sendiri, dan Anda hanya melihat kartu yang dapat
Anda buka. Kartu yang tidak dapat Anda buka **tidak ditampilkan**, bukan
diredupkan — aplikasi tidak menampilkan panel yang tidak dapat diisinya.

| Kartu | Siapa yang melihatnya |
|---|---|
| **Cakupan penilaian bulanan** | Siapa pun dengan `perm:asset-unit:read` |
| **Aktivitas penilaian** | Siapa pun dengan `perm:asset-unit:read` |
| **Unit menurut lokasi dan kondisi** | Siapa pun dengan `perm:asset-unit:read` |
| **Unit tanpa jurusan** | Hanya peran tingkat institusi |
| **Aset, unit, peminjaman, dan diagram** | Siapa pun dengan `perm:report:read` |

> [!NOTE]
> **Penanggung jawab jurusan** memegang `perm:asset-unit:read` tetapi bukan
> `perm:report:read`, sehingga mereka memperoleh tiga kartu pertama dan bukan
> total institusi. Sebelum fitur penilaian ada, seluruh Beranda membutuhkan
> `perm:report:read`, yang berarti penanggung jawab jurusan sama sekali tidak
> memiliki layar utama. Kini tidak lagi demikian.

## Cakupan penilaian bulanan

Satu baris per jurusan, untuk bulan yang Anda pilih.

| Kolom | Artinya |
|---|---|
| **Cakupan** | Berapa unit jurusan yang telah dinilai bulan ini, dalam bentuk batang, jumlah, dan persentase |
| **Belum dinilai** | Unit yang masih tertunggak — klik angkanya untuk menampilkannya |
| **Aktivitas terakhir** | Kapan jurusan terakhir mencatat sesuatu |

Cakupan menghitung **unit aset yang berbeda**, bukan entri. Menilai unit yang
sama tiga kali berarti satu unit tercakup, bukan tiga. Lihat
[Penilaian bulanan](/concepts/monthly-assessment).

Dua keadaan sengaja tidak menampilkan persentase:

- **Tanpa penanggung jawab** — jurusan belum memiliki siapa pun, sehingga tidak
  ada yang seharusnya mengerjakannya. Jumlahnya tetap ditampilkan, tetapi yang
  perlu dibereskan adalah kekosongan itu, bukan cakupannya.
- **Tidak ada unit** — tidak ada yang perlu dinilai. Ini terbaca *Tidak ada unit*,
  bukan 0%, karena 0% akan menggambarkan masalah yang tidak ada.

Bila sebagian unit dinilai oleh orang di luar jurusan, ada keterangan di bawahnya.
Penilaian tersebut tidak dihitung sebagai cakupan, dan keterangan itu ada agar
kekurangan dapat dijelaskan, bukan tampak membingungkan.

## Aktivitas penilaian

Siapa yang mencatat penilaian, dan sebanyak apa.

**Entri** dan **Unit** sengaja menjadi kolom terpisah. Orang yang mencatat unit
yang sama tiga kali memiliki tiga entri dan satu unit — dan hanya angka kedua yang
berkaitan dengan cakupan. Kontributor yang bukan penanggung jawab jurusan diberi
tanda.

## Unit menurut lokasi dan kondisi

Di mana unit berada, disilangkan dengan keadaannya — pertanyaan yang sebenarnya
Anda ajukan sebelum agenda perbaikan: *ruang mana yang menyimpan barang rusak?*

Sakelar **Tampilkan** beralih antara menghitung unit tepat di setiap lokasi, dan
menyertakan seluruh isinya. Saat digulung, sebuah unit di dalam ruangan juga
dihitung pada gedungnya, sehingga barisnya memang bertumpang tindih; total di
bawahnya tetap menghitung tiap unit satu kali.

Setiap angka pada tabel adalah tautan menuju unit di baliknya.

## Unit tanpa jurusan

Unit yang tidak menjadi tanggung jawab siapa pun. Penilaian tidak dapat
diharapkan atasnya, karena tidak ada jurusan yang mengharapkannya — sehingga
penyelesaiannya adalah menetapkan jurusan, bukan menilainya. Penanggung jawab
jurusan tidak melihat kartu ini, karena mereka tidak dapat membuka satu pun unit
di dalamnya.

## Angka institusi

Di bawah kartu penilaian, bila Anda memegang `perm:report:read`:

| Angka | Yang dihitung |
|---|---|
| **Aset** | Seluruh catatan aset, dengan jumlah yang masih aktif di bawahnya |
| **Unit aset** | Seluruh barang fisik satuan dari semua aset tersebut |
| **Sedang dipinjam** | Peminjaman yang sedang memegang unit |
| **Terlambat** | Peminjaman yang masih memegang unit melewati tanggal kembali yang diharapkan |

Selisih antara **Aset** dan **Unit aset** adalah hal yang wajar. Satu catatan aset
dapat mewakili seratus barang fisik.

> [!TIP]
> **Terlambat** adalah satu-satunya angka yang layak diperiksa setiap hari. Hanya
> angka inilah yang mewakili sesuatu yang membutuhkan tindakan, bukan sesuatu yang
> sudah tercatat.

Dua diagram menyusul: **Unit menurut status siklus hidup** dan **Unit menurut
kondisi**. Unit tanpa kondisi tercatat dihitung sebagai *Belum dicatat* —
biasanya unit yang sudah didaftarkan tetapi belum pernah dioperasikan. Setiap
diagram menautkan ke laporan lengkapnya.

## Jika Beranda tampak kosong

- **Registri memang belum berisi apa pun.** Mulailah dari
  [Bagaimana cara membuat aset?](/how-do-i/create-an-asset).
- **Jurusan Anda belum memiliki unit.** Setiap jurusan menampilkan *Tidak ada
  unit*. Mintalah administrator institusi menetapkan unit ke jurusan Anda.
- **Anda tidak memegang satu pun izin tersebut.** Beranda tidak muncul di
  navigasi Anda sama sekali.

## Artikel terkait

- [Penilaian bulanan](/concepts/monthly-assessment)
- [Bagaimana cara memeriksa progres penilaian?](/how-do-i/check-assessment-progress)
- [Mengenali navigasi](/getting-started/finding-your-way-around)
- [Memahami izin](/getting-started/understanding-permissions)
