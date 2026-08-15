---
title: Bagaimana cara mencatat perubahan pada unit aset?
description: Satu formulir yang mencatat kondisi, lokasi, dan status siklus hidup sebuah unit sekaligus.
order: 100
task: true
permissions:
  - asset-unit:record-history
keywords:
  - catat perubahan
  - perbarui unit
  - perubahan keadaan
  - kondisi
  - lokasi
  - siklus hidup
  - entri riwayat
related:
  - concepts/history
  - how-do-i/move-an-asset-unit
  - how-do-i/view-unit-history
---

## Untuk apa ini

Mencatat apa yang kini berlaku bagi satu barang fisik: di mana letaknya,
bagaimana kondisinya, dan status siklus hidup apa yang dipegangnya. Ketiganya
dicatat **bersama**, sebagai satu entri pada [riwayat](/concepts/history) unit.

Tidak ada tindakan "pindahkan" tersendiri dan tidak ada tindakan "ubah kondisi"
tersendiri. Formulir tunggal inilah semuanya, dan itu sesuai dengan kenyataan —
sebuah unit dibawa ke bengkel, maka kini ia berada di bengkel, dalam perbaikan,
dan rusak. Satu kejadian, satu entri.

Ini juga cara unit yang baru dibuat mulai dioperasikan.

## Sebelum memulai

- Ketahui unit mana. Unit dijangkau melalui asetnya.
- Jika Anda mencatat perpindahan, [lokasinya](/concepts/location) harus sudah
  ada.
- **Siapkan kalimat untuk deskripsi.** Kolom ini wajib — lihat peringatan di
  bawah.

Untuk unit yang belum pernah memiliki catatan apa pun, Anda memerlukan kondisi
**sekaligus** lokasi. Setelah itu keduanya boleh dibiarkan.

## Langkah-langkah

1. Buka **Aset** lalu pilih asetnya.
2. Buka tab **Unit** lalu pilih unitnya.
3. Buka tab **Riwayat**.
4. Pilih **Catat perubahan**.
5. Isi hanya yang berubah:
   - **Kondisi** — biarkan pada *Tidak berubah* untuk mempertahankan yang
     sekarang.
   - **Lokasi** — cari berdasarkan nama, atau buka sebuah lokasi untuk melihat
     isinya. Biarkan kosong untuk mempertahankan posisi unit.
   - **Status siklus hidup** — biarkan pada *Tidak berubah* kecuali status
     pemakaian unit memang berubah.
6. Tulis **Deskripsi** perubahannya.
7. Pilih **Catat**.

![Dialog Catat perubahan keadaan](/screenshots/asset-units/record-a-change.png)

## Rujukan kolom

| Kolom | Wajib | Keterangan |
|---|---|---|
| Kondisi | Hanya pada entri pertama | Keadaan fisik barangnya. Diteruskan bila dibiarkan tidak berubah |
| Lokasi | Hanya pada entri pertama | Tempat barangnya sekarang. Diteruskan bila dibiarkan kosong |
| Status siklus hidup | Tidak | Hanya perpindahan yang diizinkan aplikasi yang diterima |
| Deskripsi | **Ya** | Apa yang berubah dan mengapa. Maksimal 5.000 karakter |

> [!WARNING]
> **Deskripsi wajib diisi.** Formulir tidak menandainya sebagai wajib, dan
> petunjuknya — "Apa pun yang dibiarkan kosong akan diteruskan dari keadaan saat
> ini" — berlaku untuk ketiga kolom lain, bukan untuk kolom ini. Jika dibiarkan
> kosong, penyimpanan ditolak.
>
> Sebaiknya diisi dengan sungguh-sungguh, bukan disiasati: deskripsi inilah yang
> ditampilkan lini masa setelahnya. "Dipindahkan ke Ruang 204 setelah renovasi"
> memberi tahu rekan kerja enam bulan lagi, sedangkan "diperbarui" tidak.

## Apa yang terjadi setelahnya

- Lokasi, kondisi, dan status siklus hidup **terkini** unit langsung diperbarui,
  dan tampil pada tab Ikhtisarnya.
- Entri baru muncul di bagian atas tab Riwayat. Entri sebelumnya ditutup dengan
  tanggal akhir, sehingga lini masa mencatat bukan hanya di mana unit berada
  tetapi juga berapa lama ia berada di tempat lain.
- Jika lokasi baru, atau lokasi mana pun di atasnya, memiliki
  [denah](/concepts/floor-plan), tab Ikhtisar kini menawarkan jejak tautan denah
  yang menuntun ke dalam.

## Jika penyimpanan ditolak

| Pesan | Artinya |
|---|---|
| Deskripsi wajib diisi | Isilah **Deskripsi** |
| Kondisi wajib untuk entri riwayat pertama | Unit ini belum memilikinya — tetapkan |
| Lokasi wajib untuk entri riwayat pertama | Unit ini belum memilikinya — tetapkan |
| Unit aset tidak dapat berpindah dari X ke Y | Perubahan siklus hidup tidak diizinkan. Pesannya menyebutkan yang diizinkan. Lihat [Status siklus hidup](/concepts/lifecycle-state) |

## Tugas terkait

- [Riwayat](/concepts/history)
- [Bagaimana cara memindahkan unit aset?](/how-do-i/move-an-asset-unit)
- [Bagaimana cara melihat riwayat unit?](/how-do-i/view-unit-history)
