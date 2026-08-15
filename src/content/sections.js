/**
 * The manual's shelf order.
 *
 * A section exists here or it does not exist at all: `manifest.js` refuses to
 * place an article whose directory is not listed, which is what stops a stray
 * folder from appearing in the navigation unannounced.
 *
 * ORDER IS EDITORIAL, not alphabetical. It runs the way a new reader moves:
 * orient yourself, do the thing you came to do, then understand why it works
 * that way, then the module chapters in the order the domain itself connects
 * (assets → units → where they are → where they came from → what happens to
 * them), then administration, then the shelf of last resort.
 *
 * `Developer` is last and deliberately thin. This is a user manual; the API and
 * the schema are documented in `docs/` for the people who need them.
 *
 * Icons are `lucide-react` names, resolved in `Icon.jsx` — a string here rather
 * than a component keeps this file data, so it can be imported by tests and by
 * the search indexer without pulling React in.
 */
export const SECTIONS = [
  {
    id: 'getting-started',
    icon: 'Compass',
    title: { en: 'Getting Started', id: 'Memulai' },
    tagline: {
      en: 'Sign in, find your way around, and learn what you are allowed to do.',
      id: 'Masuk, kenali navigasinya, dan pahami apa yang boleh Anda lakukan.',
    },
  },
  {
    id: 'how-do-i',
    icon: 'ListChecks',
    title: { en: 'How Do I…?', id: 'Bagaimana Cara…?' },
    tagline: {
      en: 'Step-by-step instructions for the tasks people actually come here for.',
      id: 'Petunjuk langkah demi langkah untuk tugas yang paling sering dicari.',
    },
    featured: true,
  },
  {
    id: 'concepts',
    icon: 'Lightbulb',
    title: { en: 'Concepts', id: 'Konsep' },
    tagline: {
      en: 'What the words mean. Start with Asset versus Asset Unit.',
      id: 'Arti setiap istilah. Mulailah dari Aset versus Unit Aset.',
    },
  },
  {
    id: 'assets',
    icon: 'Package',
    title: { en: 'Assets', id: 'Aset' },
    tagline: {
      en: 'The master registry: registering, editing, classifying and searching assets.',
      id: 'Registri utama: mendaftarkan, mengubah, mengklasifikasi, dan mencari aset.',
    },
  },
  {
    id: 'asset-units',
    icon: 'Boxes',
    title: { en: 'Asset Units', id: 'Unit Aset' },
    tagline: {
      en: 'The individual physical items — condition, lifecycle state and history.',
      id: 'Barang fisik satuan — kondisi, status siklus hidup, dan riwayat.',
    },
  },
  {
    id: 'locations',
    icon: 'MapPin',
    title: { en: 'Locations', id: 'Lokasi' },
    tagline: {
      en: 'Sites, buildings, floors and rooms, and what is inside each of them.',
      id: 'Situs, gedung, lantai, dan ruangan, beserta isinya.',
    },
  },
  {
    id: 'floor-plans',
    icon: 'Map',
    title: { en: 'Floor Plans', id: 'Denah' },
    tagline: {
      en: 'Upload a plan, draw rooms onto it, and find a unit on the map.',
      id: 'Unggah denah, gambar ruangan di atasnya, dan temukan unit pada peta.',
    },
  },
  {
    id: 'procurement',
    icon: 'FileText',
    title: { en: 'Procurement', id: 'Pengadaan' },
    tagline: {
      en: 'Suppliers, contracts, line items, and registering what arrived.',
      id: 'Penyedia, kontrak, item kontrak, dan mendaftarkan barang yang datang.',
    },
  },
  {
    id: 'borrowing',
    icon: 'ArrowLeftRight',
    title: { en: 'Borrowing', id: 'Peminjaman' },
    tagline: {
      en: 'Lending units out, tracking what is overdue, and recording returns.',
      id: 'Meminjamkan unit, memantau keterlambatan, dan mencatat pengembalian.',
    },
  },
  {
    id: 'transactions',
    icon: 'Receipt',
    title: { en: 'Transactions', id: 'Transaksi' },
    tagline: {
      en: 'Permanent records of events affecting units.',
      id: 'Catatan permanen atas kejadian yang menyangkut unit.',
    },
  },
  {
    id: 'administration',
    icon: 'ShieldCheck',
    title: { en: 'Administration', id: 'Administrasi' },
    tagline: {
      en: 'Institutions, departments, users, roles, permissions and reference lists.',
      id: 'Instansi, bagian, pengguna, peran, izin, dan daftar referensi.',
    },
  },
  {
    id: 'reports',
    icon: 'ChartColumn',
    title: { en: 'Reports & Audit', id: 'Laporan & Audit' },
    tagline: {
      en: 'The eight reports, CSV export, and the read-only audit trail.',
      id: 'Delapan laporan, ekspor CSV, dan jejak audit yang hanya dapat dibaca.',
    },
  },
  {
    id: 'troubleshooting',
    icon: 'LifeBuoy',
    title: { en: 'Troubleshooting', id: 'Pemecahan Masalah' },
    tagline: {
      en: 'Why an action is unavailable, why a save was refused, and known limitations.',
      id: 'Mengapa aksi tidak tersedia, mengapa penyimpanan ditolak, dan batasan yang diketahui.',
    },
  },
  {
    id: 'reference',
    icon: 'BookMarked',
    title: { en: 'Reference', id: 'Referensi' },
    tagline: {
      en: 'Statuses, the permission list, the glossary and keyboard shortcuts.',
      id: 'Status, daftar izin, glosarium, dan pintasan papan ketik.',
    },
  },
  {
    id: 'developer',
    icon: 'Code',
    title: { en: 'Developer Reference', id: 'Referensi Pengembang' },
    tagline: {
      en: 'Secondary: where the API, schema and architecture documents live.',
      id: 'Sekunder: lokasi dokumen API, skema, dan arsitektur.',
    },
    secondary: true,
  },
];

export const SECTION_IDS = SECTIONS.map((section) => section.id);

export function findSection(id) {
  return SECTIONS.find((section) => section.id === id);
}
