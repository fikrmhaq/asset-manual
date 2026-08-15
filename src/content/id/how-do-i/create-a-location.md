---
title: Bagaimana cara membuat lokasi?
description: Menambahkan situs, gedung, lantai, ruangan, atau tempat lain di mana barang dapat berada.
order: 150
task: true
permissions:
  - location:create
keywords: [buat lokasi, lokasi baru, tambah ruangan, gedung, situs, lantai]
related:
  - concepts/location
  - how-do-i/create-nested-locations
  - how-do-i/move-an-asset-unit
---

## Untuk apa ini

Menambahkan tempat di mana [unit aset](/concepts/asset-unit) dapat dicatat
keberadaannya.

## Sebelum memulai

- Tentukan apakah tempat ini berada **di dalam** lokasi lain. Gedung berada di
  dalam situs; situs tidak berada di dalam apa pun.
- Ketahui **klasifikasinya**. Lokasi diklasifikasikan dari hierarki referensi
  yang sama dengan aset, dan hanya tingkat paling rinci yang dapat dipilih.
- Buat induk sebelum turunannya. Anda tidak dapat menempatkan ruangan di dalam
  gedung yang belum ada.

## Langkah-langkah

1. Buka **Lokasi** di bilah sisi.
2. Pilih **Lokasi baru**.
3. Masukkan **Nama**.
4. Pilih **Klasifikasi**.
5. Untuk **Di dalam lokasi lain**, pilih induknya — atau biarkan kosong untuk
   lokasi tingkat atas seperti situs atau kampus.
6. Biarkan **Instansi** pada *Gunakan instansi saya*, atau pilih yang lain.
7. Pilih **Buat lokasi**.

![Formulir Lokasi baru](/screenshots/locations/create-location.gif)

## Rujukan kolom

| Kolom | Wajib | Keterangan |
|---|---|---|
| Nama | Ya | Maksimal 255 karakter |
| Klasifikasi | Ya | Hanya tingkat paling rinci |
| Di dalam lokasi lain | Tidak | Kosong berarti lokasi tingkat atas |
| Instansi | Tidak | Bawaannya instansi Anda |

## Apa yang terjadi setelahnya

Lokasi dibuat dan langsung dapat:

- dipilih ketika [memindahkan unit](/how-do-i/move-an-asset-unit)
- diberi lokasi turunan sendiri
- diberi [denah](/how-do-i/upload-a-floor-plan)
- digambarkan sebagai area pada denah lokasi di atasnya

## Menamai lokasi dengan baik

Nama itulah yang dicari orang. Dua kebiasaan yang membantu:

- **Buat cukup unik untuk dibedakan.** Tiga ruangan bernama "Gudang" tidak dapat
  dibedakan pada hasil pencarian. "Gudang — Bengkel" dapat.
- **Jangan mengulang hierarki di dalam nama.** Aplikasi sudah menampilkan jejak
  lengkapnya, sehingga "Kampus Utama / Gedung Admin / Ruang 204" sebagai *nama*
  akan terbaca sebagai "Kampus Utama / Gedung Admin / Kampus Utama – Gedung Admin
  – Ruang 204".

## Tugas terkait

- [Lokasi](/concepts/location)
- [Bagaimana cara membuat lokasi bersarang?](/how-do-i/create-nested-locations)
