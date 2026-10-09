const DATA = [
  // ----------------- TAB: PENAMPILAN (BAB III) -----------------
  {
    id: "pasal-13",
    pasal: "Pasal 13",
    modul: "Penampilan",
    judul: "Ketentuan Baju Seragam",
    ringkasan: "Menggunakan baju seragam rapi, tidak ketat, lengan panjang, kaos dalam putih, dan wajib dimasukkan ke dalam celana/rok.",
    poin: [
      "Menggunakan baju seragam sesuai ukuran, tidak ketat, tidak menggantung, dan tampak rapi.",
      "Menggunakan baju seragam berlengan panjang sesuai ketentuan sekolah.",
      "Mengenakan baju seragam dalam keadaan bersih, rapi, tidak robek, dan tidak terdapat coretan/tulisan.",
      "Wajib menggunakan kaos dalam (singlet) atau kaos berwarna putih leher bulat (crew neck) atau V-neck.",
      "Panjang lengan kaos dalam tidak melebihi panjang lengan baju seragam.",
      "Baju seragam wajib dimasukkan ke dalam celana atau rok sehingga ikat pinggang terlihat dengan rapi.",
      "Baju seragam tetap dimasukkan selama menggunakan atribut, kecuali seragam olahraga."
    ]
  },
  {
    id: "pasal-14",
    pasal: "Pasal 14",
    modul: "Penampilan",
    judul: "Jadwal Seragam Harian",
    ringkasan: "Aturan penggunaan pakaian seragam sekolah dari hari Senin sampai Jumat serta jam pelajaran olahraga.",
    isTable: true,
    tableHeaders: ["Hari", "Ketentuan Pakaian Seragam"],
    tableData: [
      { col1: "Senin", col2: "Seragam putih-putih dengan atribut lengkap" },
      { col1: "Selasa & Rabu", col2: "Seragam putih abu-abu dengan atribut lengkap" },
      { col1: "Kamis", col2: "Blazer sekolah (jilbab putih untuk Prudent muslimah)" },
      { col1: "Jumat", col2: "Seragam putih-hitam (jilbab hitam untuk Prudent muslimah)" },
      { col1: "Olahraga", col2: "Wajib menggunakan seragam olahraga resmi sekolah" }
    ],
    poin: []
  },
  {
    id: "pasal-15",
    pasal: "Pasal 15",
    modul: "Penampilan",
    judul: "Ketentuan Celana & Rok",
    ringkasan: "Celana panjang model standar dilengkapi ikat pinggang hitam untuk putra, serta rok rempel/huruf A untuk putri.",
    poin: [
      "Prudent Laki-laki: Celana panjang model standar sekolah (dilarang model baggy, cargo, pensil).",
      "Celana wajib dilengkapi dengan ikat pinggang berwarna hitam.",
      "Prudent Perempuan Rok Putih & Abu-abu: Menggunakan model rempel.",
      "Prudent Perempuan Rok Hitam: Menggunakan model huruf A.",
      "Celana atau rok harus bersih, rapi, tidak dimodifikasi, dan sesuai ukuran."
    ]
  },
  {
    id: "pasal-16",
    pasal: "Pasal 16",
    modul: "Penampilan",
    judul: "Ketentuan Rambut & Hijab",
    ringkasan: "Rambut putra maksimal 4 cm dan rapi (dilarang mohawk/mullet). Putri wajib menggunakan ciput jilbab / hairnet.",
    poin: [
      "Rambut dipotong dengan model wajar, sopan, dan dilarang menggunakan model mullet, mohawk, atau ekstrem.",
      "Prudent Laki-laki: Rambut rapi, di atas kerah baju, tidak menutupi telinga, bagian atas maksimal 4 cm.",
      "Prudent Perempuan Berjilbab: Jilbab rapi menutup aurat, rambut tidak terlihat, wajib memakai ciput senada.",
      "Prudent Perempuan Tidak Berjilbab: Wajib menggunakan hairnet sesuai ketentuan sekolah.",
      "Rambut tidak diperkenankan diwarnai, dicat, atau dikepang melanggar aturan."
    ]
  },
  {
    id: "pasal-17",
    pasal: "Pasal 17",
    modul: "Penampilan",
    judul: "Ketentuan Kaos Kaki & Sepatu",
    ringkasan: "Wajib menggunakan sepatu pantofel hitam selama KBM dan kaos kaki putih polos minimal 7 cm di atas mata kaki.",
    poin: [
      "Wajib menggunakan sepatu pantofel berwarna hitam selama KBM (kecuali mata pelajaran olahraga menggunakan sneakers).",
      "Prudent putri menggunakan sepatu sesuai model yang telah ditetapkan oleh sekolah.",
      "Menggunakan kaos kaki dengan panjang minimal 7 cm di atas mata kaki.",
      "Kaos kaki berwarna putih polos (bagian telapak diperbolehkan berwarna hitam).",
      "Sepatu dan kaos kaki harus dalam keadaan bersih, rapi, dan tidak dimodifikasi."
    ]
  },
  {
    id: "pasal-18",
    pasal: "Pasal 18",
    modul: "Penampilan",
    judul: "Kelengkapan Atribut & Dispensasi",
    ringkasan: "Atribut wajib (dasi, name tag, lambang, topi) dan ketentuan permohonan dispensasi maksimal pukul 08.00 WIB.",
    poin: [
      "Atribut Wajib: Dasi, Lambang Yayasan SMK Prudent School, Identitas Lokasi, Name Tag, dan Topi Sekolah saat upacara.",
      "Atribut yang rusak atau hilang wajib segera diganti.",
      "Dispensasi ketidaklengkapan atribut dapat diberikan paling lambat sampai pukul 08.00 WIB.",
      "Mengajukan dispensasi setelah pukul 08.00 WIB dinyatakan sebagai pelanggaran kedisiplinan."
    ]
  },
  {
    id: "pasal-19",
    pasal: "Pasal 19",
    modul: "Penampilan",
    judul: "Standar Riasan (Make-Up) & Aksesori",
    ringkasan: "Dilarang menggunakan make-up berwarna. Hanya diperbolehkan sunscreen tanpa tone-up dan lip balm polos.",
    poin: [
      "Penampilan wajib rapi, bersih, sederhana, sopan, dan mencerminkan budaya kerja profesional.",
      "Dilarang menggunakan make-up (bedak, BB cream, foundation, lip cream, lipstik berwarna).",
      "Diperbolehkan hanya: Sunscreen tanpa efek tone-up/matte, dan Lip Balm tanpa warna.",
      "Prudent Laki-laki dilarang memakai kalung, gelang, cincin, atau anting.",
      "Prudent Perempuan diperbolehkan memakai gelang/cincin emas paling banyak 1 buah."
    ]
  },

  // ----------------- TAB: KEHADIRAN (BAB V) -----------------
  {
    id: "pasal-22",
    pasal: "Pasal 22",
    modul: "Kehadiran",
    judul: "Disiplin Kehadiran & Pembiasaan Pagi",
    ringkasan: "Jam masuk 07.00 WIB (toleransi 07.05 WIB), aturan keterlambatan, perizinan via Prunus DigiApps, dan Jadwal Pembiasaan.",
    isTable: true,
    tableHeaders: ["Hari / Jadwal", "Agenda Pembiasaan Pagi (07.00 WIB)"],
    tableData: [
      { col1: "Senin Pekan ke-1", col2: "Upacara Bendera" },
      { col1: "Senin Pekan ke-2", col2: "Pengajian (Muslim) & Kerohanian (Non-muslim)" },
      { col1: "Senin Pekan ke-3", col2: "Pentas Seni (PENSI)" },
      { col1: "Senin Pekan ke-4", col2: "Penyuluhan" },
      { col1: "Selasa", col2: "Kegiatan Literasi" },
      { col1: "Rabu", col2: "English Day" },
      { col1: "Kamis", col2: "Kegiatan Numerasi" },
      { col1: "Jumat", col2: "Pembacaan Asmaul Husna & Kegiatan Kerohanian" }
    ],
    poin: [
      "Jam masuk sekolah pukul 07.00 WIB, dengan batas toleransi keterlambatan pukul 07.05 WIB.",
      "Hadir setelah pukul 07.05 WIB wajib melapor ke Guru Piket dan dicatat di Prunus DigiApps.",
      "Terlambat 3 kali: Wajib membuat Surat Pernyataan Komitmen Kedisiplinan.",
      "Terlambat 4 kali: Pemanggilan orang tua/wali untuk pembinaan bersama.",
      "Ketidakhadiran sakit/izin wajib diajukan via Prunus DigiApps melampirkan surat bukti yang sah.",
      "Alpa 3 kali ditindaklanjuti dengan pemanggilan orang tua/wali."
    ]
  },
  {
    id: "pasal-23-28",
    pasal: "Pasal 23 - 28",
    modul: "Kehadiran",
    judul: "Kebersihan, Transportasi & Pembelajaran",
    ringkasan: "Aturan piket kelas, ekskul nonkurikuler, larangan knalpot brong, serta penggunaan HP khusus KBM.",
    poin: [
      "Kebersihan: Wajib membuang sampah sesuai jenisnya dan melaksanakan piket kelas.",
      "Nonkurikuler: Wajib mengikuti sekurang-kurangnya 1 dan maksimal 3 kegiatan ekstrakurikuler.",
      "Transportasi: Wajib memiliki SIM, STNK, helm SNI, dan DILARANG keras menggunakan knalpot bising/brong.",
      "Pembelajaran: Menjaga kejujuran akademik, tidak plagiarisme, dan mengumpulkan tugas tepat waktu.",
      "HP/Teknologi: Penggunaan HP wajib atas izin guru untuk pembelajaran dan dikumpulkan sesuai SOP."
    ]
  },

  // ----------------- TAB: KETENTUAN UMUM (BAB I, IV, X) -----------------
  {
    id: "pasal-1-5",
    pasal: "Pasal 1 - 5",
    modul: "Ketentuan Umum",
    judul: "Ketentuan Umum & Visi Sekolah",
    ringkasan: "Landasan kesepahaman 3 pihak (Sekolah, Prudent, Orang Tua), visi SMK Prudent School, dan 7 prinsip pelaksanaan.",
    poin: [
      "Visi Sekolah: Mewujudkan kantor pembelajaran yang berdaya guna untuk menghasilkan lulusan yang berintegritas, mahir, mandiri, dan mampu berkompetisi.",
      "Melibatkan 3 pihak utama: Pihak Sekolah, Prudent (Professional Student), dan Orang Tua/Wali.",
      "7 Prinsip Pelaksanaan: Integritas, Disiplin, Profesional, Edukatif, Kolaboratif, Objektif & Berkeadilan, serta Berkelanjutan."
    ]
  },
  {
    id: "pasal-20-21",
    pasal: "Pasal 20 - 21",
    modul: "Ketentuan Umum",
    judul: "Etika Tutur Kata, Sikap & Larangan Pacaran",
    ringkasan: "Wajib sapaan profesional 'Bapak/Ibu' saat Office, larangan berpacaran, bullying, merokok, dan miras.",
    poin: [
      "Sapaan Profesional: Wajib memanggil 'Bapak' atau 'Ibu' kepada sesama Prudent saat pembelajaran berbasis Office.",
      "Etika Bahasa: Dilarang menggunakan kata kasar, menghina, perundungan (bullying), ujaran kebencian, dan SARA.",
      "Larangan Hubungan: Dilarang keras berpacaran atau menjalin hubungan khusus di lingkungan sekolah.",
      "Larangan Berat: Dilarang merokok, vape, miras, narkoba, tawuran, pencurian, dan vandalisme."
    ]
  },

  // ----------------- TAB: HAK & PERAN (BAB II, VII, VIII, IX) -----------------
  {
    id: "pasal-6-12",
    pasal: "Pasal 6 - 12",
    modul: "Hak & Peran",
    judul: "Hak & Kewajiban Tiga Pihak",
    ringkasan: "Hak dan kewajiban Prudent, Orang Tua/Wali, dan Sekolah serta komitmen bersama membangun budaya kerja DUDIKA.",
    poin: [
      "Hak Prudent: Memperoleh layanan pendidikan aman, nyaman, dan perlindungan dari kekerasan/perundungan.",
      "Kewajiban Prudent: Mematuhi kesepahaman, merawat fasilitas, dan menjaga etika media sosial.",
      "Kewajiban Orang Tua: Menghadiri panggilan sekolah, mendukung pembinaan, dan mengawasi media digital anak.",
      "Hak & Kewajiban Sekolah: Berhak memberikan sanksi/pembinaan dan berkewajiban menjamin keselamatan siswa."
    ]
  },
  {
    id: "pasal-30-34",
    pasal: "Pasal 30 - 34",
    modul: "Hak & Peran",
    judul: "Sanksi, Penghargaan & Peran Orang Tua",
    ringkasan: "Tahapan sanksi bertahap (SP I - SP III), kriteria Prudent Teladan, dan kemitraan aktif Orang Tua.",
    poin: [
      "Tahapan Sanksi: Teguran Lisan (Max 3x) -> Teguran Tertulis -> Pembinaan Mentor/BK -> Kesiswaan -> SP I, SP II, SP III -> Sidang Kedisiplinan.",
      "Penghargaan: Piagam, Sertifikat, dan Gelar 'Prudent Teladan' bagi siswa yang disiplin dan berprestasi.",
      "Peran Orang Tua: Bermitra dengan sekolah dalam mengawasi pergaulan dan mendukung program pembinaan edukatif."
    ]
  },

  // ----------------- TAB: PENGESAHAN -----------------
  {
    id: "lembar-pengesahan",
    pasal: "Pengesahan",
    modul: "Pengesahan",
    judul: "Lembar Pengesahan Dokumen Kesepahaman 2026/2027",
    ringkasan: "Bukti pengesahan resmi yang ditandatangani oleh Principal, Kesiswaan, Perwakilan Prudent, dan Orang Tua/Wali.",
    isImage: true,
    imageUrl: "pengesahan.png",
    poin: []
  }
];

let currentTab = "Penampilan";
let searchQuery = "";

document.addEventListener("DOMContentLoaded", () => renderCards());

function switchTab(tabName) {
  currentTab = tabName;
  const titleEl = document.getElementById("tabTitle");
  if (titleEl) titleEl.innerText = tabName;
  
  // Reset Navigasi Mobile
  document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.classList.remove("text-brand-600", "dark:text-brand-400");
    tab.classList.add("text-slate-400", "dark:text-slate-500");
  });

  // Reset Navigasi Sidebar Desktop
  document.querySelectorAll(".sidebar-tab").forEach(tab => {
    tab.classList.remove("text-brand-600", "dark:text-brand-400", "bg-brand-50", "dark:bg-brand-950/70", "border-teal-200/60", "dark:border-teal-500/30");
    tab.classList.add("text-slate-500", "dark:text-slate-400", "border-transparent");
  });

  let tabSuffix = tabName.replace(/\s+/g, '-').replace('&', '');
  if (tabName === "Hak & Peran") tabSuffix = "Hak-Peran";
  if (tabName === "Ketentuan Umum") tabSuffix = "Ketentuan-Umum";

  // Aktifkan Navigasi Mobile
  const activeMobileTab = document.getElementById(`tab-${tabSuffix}`);
  if (activeMobileTab) {
    activeMobileTab.classList.remove("text-slate-400", "dark:text-slate-500");
    activeMobileTab.classList.add("text-brand-600", "dark:text-brand-400");
  }

  // Aktifkan Navigasi Desktop
  const activeSidebarTab = document.getElementById(`sidebar-tab-${tabSuffix}`);
  if (activeSidebarTab) {
    activeSidebarTab.classList.remove("text-slate-500", "dark:text-slate-400", "border-transparent");
    activeSidebarTab.classList.add("text-brand-600", "dark:text-brand-400", "bg-brand-50", "dark:bg-brand-950/70", "border-teal-200/60", "dark:border-teal-500/30");
  }

  renderCards();
}

function handleSearch(query) {
  searchQuery = query.toLowerCase().trim();
  renderCards();
}

function renderCards() {
  const container = document.getElementById("cardsContainer");
  if (!container) return;
  container.innerHTML = "";

  const filtered = DATA.filter(item => {
    const matchTab = (item.modul === currentTab);
    const matchSearch = searchQuery === "" || 
                        item.judul.toLowerCase().includes(searchQuery) || 
                        item.ringkasan.toLowerCase().includes(searchQuery) ||
                        (item.poin && item.poin.some(p => p.toLowerCase().includes(searchQuery))) ||
                        (item.tableData && item.tableData.some(t => t.col1.toLowerCase().includes(searchQuery) || t.col2.toLowerCase().includes(searchQuery)));
    return (searchQuery !== "") ? matchSearch : (matchTab && matchSearch);
  });

  const cardCountEl = document.getElementById("cardCount");
  if (cardCountEl) cardCountEl.innerText = `${filtered.length} Aturan`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 px-4 animate-card">
        <p class="text-slate-400 dark:text-slate-500 text-xs font-medium">Tidak ada aturan yang cocok dengan pencarian.</p>
      </div>
    `;
    return;
  }

  filtered.forEach((item, index) => {
    const animationDelay = (index * 0.03).toFixed(2);
    
    const cardHtml = `
      <div 
        onclick="openDetail('${item.id}')" 
        style="animation-delay: ${animationDelay}s"
        class="animate-card p-4 bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl shadow-sm active:scale-[0.98] active:bg-slate-50 dark:active:bg-slate-700/60 transition-all duration-150 cursor-pointer flex flex-col justify-between"
      >
        <div>
          <div class="flex justify-between items-center mb-1.5">
            <h3 class="font-bold text-sm text-slate-900 dark:text-slate-100">${item.judul}</h3>
            <svg class="w-4 h-4 text-slate-300 dark:text-slate-600 shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">${item.ringkasan}</p>
        </div>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", cardHtml);
  });
}

function openDetail(id) {
  const item = DATA.find(d => d.id === id);
  if (!item) return;

  document.getElementById("detailPasal").innerText = item.pasal || "PASAL";
  document.getElementById("detailTitle").innerText = item.judul;
  document.getElementById("detailSummary").innerText = item.ringkasan;

  const pointsContainer = document.getElementById("detailPoints");
  pointsContainer.innerHTML = "";

  if (item.isImage) {
    pointsContainer.innerHTML = `
      <div class="overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-sm animate-card bg-slate-50 dark:bg-slate-800 p-2 text-center">
        <img 
          src="${item.imageUrl}" 
          alt="${item.judul}" 
          class="w-full h-auto rounded-xl object-contain mx-auto"
          onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'py-10 px-4 text-center\'><p class=\'text-xs text-slate-400 dark:text-slate-500 font-bold\'>[ Gambar Lembar Pengesahan ]</p><p class=\'text-[10px] text-slate-400 mt-1\'>Pastikan file pengesahan.png sudah ditaruh di folder yang sama dengan index.html</p></div>';"
        />
      </div>
    `;
  } else if (item.isTable && item.tableData) {
    const headers = item.tableHeaders || ["Ketentuan", "Keterangan"];
    let tableRowsHtml = item.tableData.map((row, idx) => `
      <tr class="${idx % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50/80 dark:bg-slate-800/40'}">
        <td class="py-2.5 px-3.5 font-bold text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-slate-700/80 text-xs align-top w-2/5">${row.col1}</td>
        <td class="py-2.5 px-3.5 text-slate-600 dark:text-slate-300 border-b border-slate-100 dark:border-slate-700/80 text-xs align-top font-medium">${row.col2}</td>
      </tr>
    `).join("");

    let pointsHeaderHtml = "";
    if (item.poin && item.poin.length > 0) {
      const pointsList = item.poin.map((p, idx) => `
        <div class="flex items-start space-x-3 p-3 bg-slate-50/80 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/60">
          <div class="w-5 h-5 bg-brand-600 dark:bg-brand-500 text-white rounded-md flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">${idx + 1}</div>
          <p class="text-xs text-slate-700 dark:text-slate-300 font-medium">${p}</p>
        </div>
      `).join("");
      pointsHeaderHtml = `<div class="space-y-2 mb-4">${pointsList}</div>`;
    }

    const tableHtml = `
      ${pointsHeaderHtml}
      <div class="overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-sm animate-card">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-brand-600 dark:bg-brand-700 text-white text-[11px] uppercase tracking-wider font-extrabold">
              <th class="py-2.5 px-3.5">${headers[0]}</th>
              <th class="py-2.5 px-3.5">${headers[1]}</th>
            </tr>
          </thead>
          <tbody>
            ${tableRowsHtml}
          </tbody>
        </table>
      </div>
    `;
    pointsContainer.innerHTML = tableHtml;

  } else if (item.poin) {
    item.poin.forEach((pointText, index) => {
      const animationDelay = (index * 0.03).toFixed(2);
      const pointHtml = `
        <div 
          style="animation-delay: ${animationDelay}s" 
          class="animate-card flex items-start space-x-3 p-3.5 bg-slate-50/80 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/60 active:bg-slate-100 dark:active:bg-slate-800 transition-colors"
        >
          <div class="w-6 h-6 bg-brand-600 dark:bg-brand-500 text-white rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-sm shadow-brand-500/30">
            ${index + 1}
          </div>
          <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium pt-0.5">${pointText}</p>
        </div>
      `;
      pointsContainer.insertAdjacentHTML("beforeend", pointHtml);
    });
  }

  const backdrop = document.getElementById("detailBackdrop");
  if (backdrop) backdrop.classList.remove("hidden");

  const detailModal = document.getElementById("detailView");
  detailModal.classList.remove("modal-closed");
  detailModal.classList.add("modal-open");
}

function closeDetail() {
  const backdrop = document.getElementById("detailBackdrop");
  if (backdrop) backdrop.classList.add("hidden");

  const detailModal = document.getElementById("detailView");
  detailModal.classList.remove("modal-open");
  detailModal.classList.add("modal-closed");
}
