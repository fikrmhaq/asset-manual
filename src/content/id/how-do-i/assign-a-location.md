---
title: Bagaimana cara menetapkan lokasi?
description: Mencatat tempat sebuah unit fisik berada, dan mengoperasikannya.
order: 30
task: true
permissions:
  - asset-unit:record-history
keywords: [lokasi, pindah, ruangan, tempat, di mana, relokasi, tetapkan]
related:
  - concepts/asset-vs-asset-unit
  - troubleshooting/why-cant-i-save-this-form
---

## Untuk apa ini

Lokasi, kondisi, dan status siklus hidup sebuah unit dicatat bersama, sebagai
satu entri pada lini masa riwayatnya. Memindahkan unit dan menilai ulang
kondisinya adalah tindakan yang sama, karena keduanya fakta yang sama pada saat
yang sama.

Ini juga cara unit yang baru dibuat mulai dioperasikan.

## Sebelum memulai

- Lokasinya harus sudah ada. Jika belum, buat dahulu melalui **Lokasi**.
- Untuk unit yang belum pernah memiliki catatan apa pun, Anda memerlukan
  **kondisi sekaligus lokasi**.
- Siapkan kalimat singkat yang menjelaskan alasan perpindahan. Kolom ini wajib —
  lihat peringatan di bawah.

## Langkah-langkah

1. Buka **Aset**, pilih asetnya, lalu buka tab **Unit**.
2. Pilih unitnya.
3. Buka tab **Riwayat**.
4. Pilih **Catat perubahan**.
5. Pilih **Lokasi**. Cari berdasarkan nama, atau buka sebuah lokasi untuk melihat
   isinya.
6. Pilih **Kondisi** bila berubah.
7. Pilih **Status siklus hidup** bila berubah — untuk unit yang pertama kali
   dioperasikan, setel ke *Digunakan*.
8. Tulis **Deskripsi** perubahannya.
9. Pilih **Catat**.

![Dialog Catat perubahan keadaan](/screenshots/asset-units/record-a-change.gif)

## Rujukan kolom

| Kolom | Wajib | Keterangan |
|---|---|---|
| Kondisi | Pada entri pertama | Selain itu diteruskan tanpa perubahan |
| Lokasi | Pada entri pertama | Selain itu diteruskan tanpa perubahan |
| Status siklus hidup | Tidak | Hanya perpindahan yang diizinkan aplikasi yang diterima |
| Deskripsi | **Ya** | Lihat peringatan di bawah |

> [!WARNING]
> **Deskripsi wajib diisi**, meskipun formulir tidak menandainya demikian dan
> petunjuknya menyebut bahwa kolom kosong akan diteruskan. Hal itu berlaku untuk
> ketiga kolom lain, bukan untuk kolom ini — penyimpanan ditolak tanpa deskripsi.
> Tulislah kalimat yang sebenarnya: itulah yang ditampilkan lini masa setelahnya.

## Apa yang terjadi setelahnya

- **Lokasi terkini** dan **kondisi terkini** unit langsung diperbarui.
- Entri baru muncul di bagian atas tab Riwayat, dan entri sebelumnya ditutup
  dengan tanggal akhir, sehingga lini masa menyatakan di mana unit berada dan
  berapa lama.
- Jika lokasi tersebut atau lokasi mana pun di atasnya memiliki denah, tab
  Ikhtisar unit kini menawarkan jejak tautan denah yang menuntun ke dalam.

## Tugas terkait

- [Bagaimana cara menambahkan unit aset?](/how-do-i/add-an-asset-unit)
- [Mengapa saya tidak bisa menyimpan formulir ini?](/troubleshooting/why-cant-i-save-this-form)
