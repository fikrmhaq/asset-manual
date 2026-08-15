/**
 * Interface copy for the manual's own chrome — not the manual's content.
 *
 * Articles are translated by writing a second Markdown file. What lives here is
 * only what surrounds them: the search box, the sidebar heading, the previous /
 * next controls, the theme menu.
 *
 * TERMINOLOGY IS BORROWED, NOT INVENTED. Every domain word below is the one the
 * application itself renders, taken from `apps/web/src/i18n/{en,id}.js` — so a
 * reader who saw "Bagian" on screen finds "Bagian" here, not a synonym a
 * translator preferred. Copied deliberately rather than imported: the manual
 * must not depend on `apps/web` to build.
 *
 * IDENTIFIERS ARE NEVER TRANSLATED. Permission codes (`asset:create`), stored
 * enum values (`UNDER_MAINTENANCE`) and route paths are the same in both
 * languages, because they are the same in the product and in its documentation.
 * Only their human-readable labels change.
 */
export const STRINGS = {
  en: {
    appName: 'Asset Management',
    manual: 'User Manual',
    tagline: 'The official help center for the Asset Management System.',

    skipToContent: 'Skip to content',
    mainNavigation: 'Manual sections',
    onThisPage: 'On this page',
    breadcrumb: 'Breadcrumb',
    home: 'Home',
    openMenu: 'Open the navigation menu',
    closeMenu: 'Close the navigation menu',

    search: {
      label: 'Search the manual',
      placeholder: 'Search the manual…',
      short: 'Search',
      hint: 'Search for a task, a screen or a term',
      shortcut: 'Ctrl K',
      shortcutMac: '⌘ K',
      results: '{{count}} results',
      oneResult: '1 result',
      noResults: 'Nothing matches “{{query}}”',
      noResultsHint: 'Try fewer words, or a term the application itself uses — “unit”, “borrowing”, “floor plan”.',
      empty: 'Start typing to search every article.',
      inSection: 'in {{section}}',
      close: 'Close search',
      viewAll: 'See all results',
      indexing: 'Preparing search…',
      keys: { navigate: 'to navigate', select: 'to open', close: 'to close' },
    },

    theme: {
      label: 'Theme',
      light: 'Light',
      dark: 'Dark',
      system: 'System',
      change: 'Change the theme',
    },

    language: {
      label: 'Language',
      change: 'Change language',
      en: 'English',
      id: 'Bahasa Indonesia',
      fallbackTitle: 'Not translated yet',
      fallbackBody:
        'This article has not been translated into Bahasa Indonesia yet, so the English version is shown. Everything it describes applies to both languages of the application.',
    },

    article: {
      previous: 'Previous',
      next: 'Next',
      related: 'Related articles',
      permissions: 'Requires permission',
      permissionsHint:
        'You will not see the button described here unless one of your roles grants this.',
      updated: 'In this article',
      backToSection: 'Back to {{section}}',
    },

    landing: {
      heading: 'How can we help?',
      subheading:
        'Find the task you want to do, or learn how the Asset Management System is put together.',
      browse: 'Browse the manual',
      popularTasks: 'Common tasks',
      allTasks: 'See every task',
      startHere: 'New here? Start with these',
      articles: '{{count}} articles',
      oneArticle: '1 article',
    },

    section: {
      articles: 'Articles in this section',
      tasks: 'Tasks',
      empty: 'No articles have been published in this section yet.',
    },

    /* Accessible names for content the Markdown renderer produces. Visible to
       assistive technology only, and translated for the same reason the visible
       copy is. */
    content: {
      table: 'Table',
      diagram: 'Diagram',
      anchor: 'Link to this section',
    },

    screenshot: {
      pending: 'Screenshot not available yet',
      pendingHint:
        'The written steps above are complete on their own. An image of this screen will be added here.',
    },

    notFound: {
      title: 'Page not found',
      body: 'That address does not match any article in this manual.',
      action: 'Go to the manual home page',
    },

    callout: {
      note: 'Note',
      tip: 'Tip',
      important: 'Important',
      warning: 'Warning',
      caution: 'Caution',
      limitation: 'Known limitation',
    },
  },

  id: {
    appName: 'Manajemen Aset',
    manual: 'Panduan Pengguna',
    tagline: 'Pusat bantuan resmi untuk Sistem Manajemen Aset.',

    skipToContent: 'Lompat ke konten',
    mainNavigation: 'Bagian panduan',
    onThisPage: 'Di halaman ini',
    breadcrumb: 'Remah roti',
    home: 'Beranda',
    openMenu: 'Buka menu navigasi',
    closeMenu: 'Tutup menu navigasi',

    search: {
      label: 'Cari di panduan',
      placeholder: 'Cari di panduan…',
      short: 'Cari',
      hint: 'Cari tugas, layar, atau istilah',
      shortcut: 'Ctrl K',
      shortcutMac: '⌘ K',
      results: '{{count}} hasil',
      oneResult: '1 hasil',
      noResults: 'Tidak ada yang cocok dengan “{{query}}”',
      noResultsHint:
        'Coba kata yang lebih sedikit, atau istilah yang dipakai aplikasi — “unit”, “peminjaman”, “denah”.',
      empty: 'Mulai mengetik untuk mencari di seluruh artikel.',
      inSection: 'di {{section}}',
      close: 'Tutup pencarian',
      viewAll: 'Lihat semua hasil',
      indexing: 'Menyiapkan pencarian…',
      keys: { navigate: 'untuk menelusuri', select: 'untuk membuka', close: 'untuk menutup' },
    },

    theme: {
      label: 'Tema',
      light: 'Terang',
      dark: 'Gelap',
      system: 'Sistem',
      change: 'Ubah tema',
    },

    language: {
      label: 'Bahasa',
      change: 'Ubah bahasa',
      en: 'English',
      id: 'Bahasa Indonesia',
      fallbackTitle: 'Belum diterjemahkan',
      fallbackBody:
        'Artikel ini belum diterjemahkan ke Bahasa Indonesia, sehingga versi bahasa Inggris yang ditampilkan. Isinya tetap berlaku untuk kedua bahasa aplikasi.',
    },

    article: {
      previous: 'Sebelumnya',
      next: 'Berikutnya',
      related: 'Artikel terkait',
      permissions: 'Membutuhkan izin',
      permissionsHint:
        'Tombol yang dijelaskan di sini tidak akan terlihat kecuali salah satu peran Anda memberikan izin ini.',
      updated: 'Dalam artikel ini',
      backToSection: 'Kembali ke {{section}}',
    },

    landing: {
      heading: 'Apa yang bisa kami bantu?',
      subheading:
        'Temukan tugas yang ingin Anda lakukan, atau pelajari cara kerja Sistem Manajemen Aset.',
      browse: 'Jelajahi panduan',
      popularTasks: 'Tugas yang sering dicari',
      allTasks: 'Lihat semua tugas',
      startHere: 'Baru di sini? Mulai dari sini',
      articles: '{{count}} artikel',
      oneArticle: '1 artikel',
    },

    section: {
      articles: 'Artikel di bagian ini',
      tasks: 'Tugas',
      empty: 'Belum ada artikel yang diterbitkan di bagian ini.',
    },

    content: {
      table: 'Tabel',
      diagram: 'Diagram',
      anchor: 'Tautan ke bagian ini',
    },

    screenshot: {
      pending: 'Tangkapan layar belum tersedia',
      pendingHint:
        'Langkah tertulis di atas sudah lengkap tanpa gambar. Tangkapan layar akan ditambahkan di sini.',
    },

    notFound: {
      title: 'Halaman tidak ditemukan',
      body: 'Alamat tersebut tidak cocok dengan artikel mana pun di panduan ini.',
      action: 'Ke halaman utama panduan',
    },

    callout: {
      note: 'Catatan',
      tip: 'Tips',
      important: 'Penting',
      warning: 'Peringatan',
      caution: 'Hati-hati',
      limitation: 'Batasan yang diketahui',
    },
  },
};

/**
 * Stored enum values, rendered for people — the same labels the application
 * shows (`apps/web/src/i18n/*.js` → `enums.*`). The manual must not invent a
 * second vocabulary for a state the reader already saw on a badge.
 *
 * The KEY is the stored value and never changes; only the label does.
 */
export const ENUM_LABELS = {
  lifecycle: {
    REGISTERED: { en: 'Registered', id: 'Terdaftar' },
    ACTIVE: { en: 'In use', id: 'Digunakan' },
    IN_STORAGE: { en: 'In storage', id: 'Di gudang' },
    BORROWED: { en: 'On loan', id: 'Dipinjam' },
    UNDER_MAINTENANCE: { en: 'Under maintenance', id: 'Dalam perbaikan' },
    DISPOSED: { en: 'Disposed', id: 'Dihapuskan' },
    DEACTIVATED: { en: 'Deactivated', id: 'Dinonaktifkan' },
  },
  condition: {
    GOOD: { en: 'Good', id: 'Baik' },
    FAIR: { en: 'Fair', id: 'Cukup' },
    POOR: { en: 'Poor', id: 'Kurang baik' },
    DAMAGED: { en: 'Damaged', id: 'Rusak' },
    UNSERVICEABLE: { en: 'Unserviceable', id: 'Rusak berat' },
  },
  borrowing: {
    DRAFT: { en: 'Draft', id: 'Draf' },
    ACTIVE: { en: 'Active', id: 'Berjalan' },
    RETURNED: { en: 'Returned', id: 'Dikembalikan' },
    OVERDUE: { en: 'Overdue', id: 'Terlambat' },
    CANCELLED: { en: 'Cancelled', id: 'Dibatalkan' },
  },
  status: {
    ACTIVE_RECORD: { en: 'Active', id: 'Aktif' },
    INACTIVE_RECORD: { en: 'Inactive', id: 'Nonaktif' },
  },
};

/**
 * Which family a badge value belongs to, and therefore how it is coloured.
 *
 * `ACTIVE` is deliberately ambiguous in the product — a unit that is in use and
 * a borrowing that is running both store it — so content disambiguates with an
 * explicit family (`state:borrowing/ACTIVE`) where it matters.
 */
export const ENUM_FAMILIES = ['lifecycle', 'condition', 'borrowing', 'status'];
