import React, { useState } from 'react';
import { 
  BookOpen, Users, Shirt, MessageSquare, Clock, AlertTriangle, 
  ShieldAlert, Award, FileText, CheckCircle2, FileCheck, Search, 
  ZoomIn, ChevronRight, X, ArrowLeft, Layers
} from 'lucide-react';

// =========================================================================
// DATA MASTER 11 BAB & MODUL
// =========================================================================

const SCHEDULE_DATA = [
  { day: "Senin Pekan ke-1", activity: "Upacara Bendera" },
  { day: "Senin Pekan ke-2", activity: "Pengajian (Muslim) / Kerohanian (Non-Muslim)" },
  { day: "Senin Pekan ke-3", activity: "Pentas Seni (PENSI)" },
  { day: "Senin Pekan ke-4", activity: "Penyuluhan" },
  { day: "Selasa", activity: "Kegiatan Literasi" },
  { day: "Rabu", activity: "English Day" },
  { day: "Kamis", activity: "Kegiatan Numerasi" },
  { day: "Jumat", activity: "Pembacaan Asmaul Husna & Kegiatan Kerohanian" }
];

const VIOLATIONS_DATA = [
  { no: 1, violation: "Tidak memakai name tag", category: "Ringan", sanction: "Teguran lisan" },
  { no: 2, violation: "Tidak memakai dasi", category: "Ringan", sanction: "Teguran lisan" },
  { no: 3, violation: "Tidak memakai ikat pinggang", category: "Ringan", sanction: "Teguran lisan" },
  { no: 4, violation: "Tidak memakai atribut sekolah secara lengkap", category: "Ringan", sanction: "Teguran lisan" },
  { no: 5, violation: "Tidak memakai topi pada upacara/kegiatan diwajibkan", category: "Ringan", sanction: "Teguran lisan" },
  { no: 6, violation: "Menggunakan seragam tidak sesuai jadwal", category: "Ringan", sanction: "Teguran lisan" },
  { no: 7, violation: "Kaos kaki tidak sesuai ketentuan", category: "Ringan", sanction: "Teguran lisan" },
  { no: 8, violation: "Sepatu tidak sesuai ketentuan", category: "Ringan", sanction: "Teguran lisan" },
  { no: 9, violation: "Rambut tidak sesuai ketentuan", category: "Ringan", sanction: "Pembinaan & batas waktu perbaikan" },
  { no: 10, violation: "Mewarnai/model rambut dilarang (mullet, mohawk, dll)", category: "Ringan", sanction: "Pembinaan & batas waktu perbaikan" },
  { no: 11, violation: "Tidak menggunakan hairnet/ciput sesuai ketentuan", category: "Ringan", sanction: "Teguran lisan" },
  { no: 12, violation: "Seragam dimodifikasi / tidak sesuai ukuran", category: "Ringan", sanction: "Pembinaan & perbaikan saat itu juga" },
  { no: 13, violation: "Celana atau rok dimodifikasi", category: "Ringan", sanction: "Pembinaan & batas waktu perbaikan" },
  { no: 14, violation: "Menggunakan make-up tidak sesuai ketentuan", category: "Ringan", sanction: "Teguran & membersihkan riasan" },
  { no: 15, violation: "Menggunakan parfum secara berlebihan", category: "Ringan", sanction: "Teguran lisan" },
  { no: 16, violation: "Menggunakan aksesori/perhiasan berlebihan", category: "Ringan", sanction: "Teguran lisan" },
  { no: 17, violation: "Terlambat hadir ke sekolah (> 07.05 WIB)", category: "Sedang", sanction: "Pembinaan Guru Piket / Mentor" },
  { no: 18, violation: "Tidak melapor kepada guru piket setelah terlambat", category: "Sedang", sanction: "Pembinaan Guru Piket" },
  { no: 19, violation: "Tidak mengikuti pembelajaran tanpa izin", category: "Sedang", sanction: "Pembinaan Mentor" },
  { no: 20, violation: "Tidak mengikuti kegiatan keagamaan / sekolah tanpa alasan", category: "Sedang", sanction: "Pembinaan Mentor" },
  { no: 21, violation: "Tidak mengikuti kegiatan nonkurikuler tanpa alasan", category: "Sedang", sanction: "Pembinaan Mentor" },
  { no: 22, violation: "Tidak mengikuti piket kelas", category: "Sedang", sanction: "Penugasan kebersihan" },
  { no: 23, violation: "Tidak menjaga kebersihan lingkungan sekolah", category: "Sedang", sanction: "Penugasan kebersihan" },
  { no: 24, violation: "Tidak membawa perlengkapan belajar", category: "Sedang", sanction: "Pembinaan Guru Mata Pelajaran" },
  { no: 25, violation: "Tidak mengumpulkan tugas secara berulang", category: "Sedang", sanction: "Pembinaan Guru Mata Pelajaran" },
  { no: 26, violation: "Mengganggu proses pembelajaran", category: "Sedang", sanction: "Pembinaan Guru Mata Pelajaran" },
  { no: 27, violation: "Menggunakan HP tanpa izin guru", category: "Sedang", sanction: "Penyitaan sementara & pembinaan" },
  { no: 28, violation: "Menggunakan perangkat teknologi tidak sesuai ketentuan", category: "Sedang", sanction: "Pembinaan Guru / Mentor" },
  { no: 29, violation: "Membolos", category: "Berat", sanction: "SP I & Pemanggilan Orang Tua" },
  { no: 30, violation: "Keluar lingkungan sekolah tanpa izin", category: "Berat", sanction: "SP I & Pembinaan Kesiswaan" },
  { no: 31, violation: "Kendaraan tidak standar / knalpot brong", category: "Sedang", sanction: "Pembinaan & larangan membawa kendaraan" },
  { no: 32, violation: "Tidak menyampaikan perizinan via Prunus DigiApps", category: "Sedang", sanction: "Pembinaan Mentor" },
  { no: 33, violation: "Menjalin hubungan khusus / berpacaran", category: "Berat", sanction: "SP I & Pembinaan Mentor, BK, Kesiswaan" },
  { no: 34, violation: "Menyalahgunakan jaringan internet / akun sekolah", category: "Berat", sanction: "SP II & Pembinaan Kesiswaan" },
  { no: 35, violation: "Berkumpul di luar sekolah tanpa tujuan jelas", category: "Berat", sanction: "SP II & Pembinaan Kesiswaan" },
  { no: 36, violation: "Memalsukan surat izin atau tanda tangan", category: "Berat", sanction: "SP II & Pemanggilan Orang Tua" },
  { no: 37, violation: "Vandalisme / merusak fasilitas sekolah", category: "Berat", sanction: "SP II & mengganti kerugian" },
  { no: 38, violation: "Melakukan bullying / perundungan", category: "Berat", sanction: "SP II & Pembinaan BK" },
  { no: 39, violation: "Melakukan pertengkaran tanpa fisik", category: "Berat", sanction: "SP II & Pembinaan BK" },
  { no: 40, violation: "Kata kasar, menghina, ujaran kebencian, SARA", category: "Berat", sanction: "SP II & Pembinaan BK" },
  { no: 41, violation: "Menyebarkan hoaks, fitnah, atau informasi provokatif", category: "Berat", sanction: "SP II & Pembinaan Kesiswaan" },
  { no: 42, violation: "Mengunggah konten yang mencemarkan nama baik sekolah", category: "Berat", sanction: "SP II & Pembinaan Kesiswaan" },
  { no: 43, violation: "Merekam / menyebarkan dokumentasi sekolah tanpa izin", category: "Berat", sanction: "SP II & Pembinaan Kesiswaan" },
  { no: 44, violation: "Mengambil / menggunakan barang milik orang lain tanpa izin", category: "Berat", sanction: "SP II & Pemanggilan Orang Tua" },
  { no: 45, violation: "Menolak mengikuti proses pembinaan", category: "Berat", sanction: "SP II & Pemanggilan Orang Tua" },
  { no: 46, violation: "Menggunakan identitas / logo sekolah tanpa izin", category: "Berat", sanction: "SP II & Pembinaan Kesiswaan" },
  { no: 47, violation: "Plagiarisme / kecurangan akademik", category: "Berat", sanction: "SP II & Pembinaan Mentor/BK" },
  { no: 48, violation: "Membawa senjata tajam tanpa izin", category: "Sangat Berat", sanction: "SP III, Pemanggilan Ortuta & Sidang Kedisiplinan" },
  { no: 49, violation: "Merokok atau menggunakan vape", category: "Sangat Berat", sanction: "SP III & Sidang Kedisiplinan" },
  { no: 50, violation: "Mengonsumsi / membawa minuman keras", category: "Sangat Berat", sanction: "SP III & Sidang Kedisiplinan" },
  { no: 51, violation: "Narkotika, psikotropika, dan zat adiktif", category: "Sangat Berat", sanction: "Dikembalikan ke Orang Tua / Proses Hukum" },
  { no: 52, violation: "Perkelahian fisik atau tawuran", category: "Sangat Berat", sanction: "SP III & Sidang Kedisiplinan" },
  { no: 53, violation: "Terlibat, mengajak, atau memprovokasi tawuran", category: "Sangat Berat", sanction: "SP III & Sidang Kedisiplinan" },
  { no: 54, violation: "Pencurian", category: "Sangat Berat", sanction: "SP III & penggantian kerugian" },
  { no: 55, violation: "Pemerasan atau perjudian", category: "Sangat Berat", sanction: "SP III & Sidang Kedisiplinan" },
  { no: 56, violation: "Pelecehan, kekerasan, atau intimidasi", category: "Sangat Berat", sanction: "SP III & Sidang Kedisiplinan" },
  { no: 57, violation: "Membawa / menyebarkan konten melanggar kesusilaan", category: "Sangat Berat", sanction: "SP III & Sidang Kedisiplinan" },
  { no: 58, violation: "Memalsukan data akademik / dokumen sekolah", category: "Sangat Berat", sanction: "SP III & Sidang Kedisiplinan" }
];

export default function App() {
  const [activeTab, setActiveTab] = useState(null); // null = Tampilan Menu Cards Utama
  const [searchGlobal, setSearchGlobal] = useState('');
  const [tableFilter, setTableFilter] = useState('');
  const [tableCategory, setTableCategory] = useState('Semua');
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const modules = [
    { id: 1, name: "BAB I - Ketentuan Umum", desc: "Visi sekolah, pengertian kesepahaman, maksud, tujuan, & 7 prinsip pelaksanaan.", icon: BookOpen, tag: "Pasal 1 - 5" },
    { id: 2, name: "BAB II - Hak & Peran", desc: "Hak, kewajiban, & komitmen bersama Prudent, Orang Tua/Wali, serta Sekolah.", icon: Users, tag: "Pasal 6 - 12" },
    { id: 3, name: "BAB III - Penampilan & Identitas", desc: "Jadwal seragam harian, batas rambut, sepatu pantofel, atribut, & riasan.", icon: Shirt, tag: "Pasal 13 - 19" },
    { id: 4, name: "BAB IV - Sikap & Etika", desc: "Etika tutur kata profesional (Bapak/Ibu), larangan pacaran, & norma kesusilaan.", icon: MessageSquare, tag: "Pasal 20 - 21" },
    { id: 5, name: "BAB V - Kedisiplinan & Pembiasaan", desc: "Jam masuk (07.00 WIB), jadwal pembiasaan pagi, kebersihan, & transportasi.", icon: Clock, tag: "Pasal 22 - 28" },
    { id: 6, name: "BAB VI - Larangan Utama", desc: "13 daftar larangan krusial seperti merokok, vape, miras, bullying, & sajam.", icon: ShieldAlert, tag: "Pasal 29", danger: true },
    { id: 7, name: "BAB VII - Pembinaan & Sanksi", desc: "Tahapan pembinaan bertahap, sanksi SP I - SP III, & klasifikasi pelanggaran.", icon: AlertTriangle, tag: "Pasal 30 - 32" },
    { id: 8, name: "BAB VIII & IX - Penghargaan & Ortua", desc: "Apresiasi Prudent Teladan & 8 poin peran aktif kemitraan orang tua/wali.", icon: Award, tag: "Pasal 33 - 34" },
    { id: 9, name: "Lampiran - Pelanggaran & SOP", desc: "Tabel interaktif 58 jenis pelanggaran, SOP Guru Piket, & aturan HP.", icon: FileText, tag: "Lampiran I - IV" },
    { id: 10, name: "BAB X - Ketentuan Penutup", desc: "Aturan keberlakuan resmi dokumen kesepahaman tahun ajaran 2026/2027.", icon: CheckCircle2, tag: "Pasal 35" },
    { id: 11, name: "Lembar Pengesahan", desc: "Dokumen bukti tanda tangan resmi Kepala Sekolah, Kesiswaan, & Perwakilan.", icon: FileCheck, tag: "Pengesahan" },
  ];

  const getBadgeStyle = (category) => {
    switch (category) {
      case 'Ringan': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Sedang': return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Berat': return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'Sangat Berat': return 'bg-rose-50 text-rose-700 border-rose-200';
      default: return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const filteredViolations = VIOLATIONS_DATA.filter(item => {
    const matchText = item.violation.toLowerCase().includes(tableFilter.toLowerCase()) ||
                      item.sanction.toLowerCase().includes(tableFilter.toLowerCase());
    const matchCat = tableCategory === 'Semua' || item.category === tableCategory;
    return matchText && matchCat;
  });

  const filteredModules = modules.filter(m => 
    m.name.toLowerCase().includes(searchGlobal.toLowerCase()) ||
    m.desc.toLowerCase().includes(searchGlobal.toLowerCase()) ||
    m.tag.toLowerCase().includes(searchGlobal.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      {/* HEADER BAR */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab(null)}>
            <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-md shadow-teal-600/20">
              P
            </div>
            <div>
              <h1 className="font-extrabold text-sm md:text-base text-slate-900 tracking-tight">DOKUMEN KESEPAHAMAN DIGITAL</h1>
              <p className="text-xs text-teal-700 font-semibold">SMK PRUDENT SCHOOL • TA 2026/2027</p>
            </div>
          </div>

          <div className="relative w-full md:w-80">
            <input 
              type="text"
              placeholder="Cari modul / bab kesepahaman..."
              value={searchGlobal}
              onChange={(e) => setSearchGlobal(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-100 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 space-y-6">

        {/* ----------------------------------------------------------------- */}
        {/* TAMPILAN MENU CARD UTAMA (Nggak pake navbar) */}
        {/* ----------------------------------------------------------------- */}
        {activeTab === null && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-teal-700 to-teal-900 rounded-3xl p-6 md:p-8 text-white shadow-xl shadow-teal-900/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="space-y-2 max-w-2xl">
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase">
                  Pusat Informasi Aturan & Budaya Kerja
                </span>
                <h2 className="text-xl md:text-2xl font-black leading-tight">
                  Dokumen Kesepahaman Resmi SMK Prudent School
                </h2>
                <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
                  Pilih salah satu modul di bawah ini buat mempelajari ketentuan tata tertib, budaya kerja profesional, serta kedisiplinan sekolah.
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-md text-center shrink-0">
                <Layers className="w-8 h-8 text-teal-300 mx-auto mb-1" />
                <span className="block text-xs font-bold">11 Modul Utama</span>
              </div>
            </div>

            {/* GRID 11 CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredModules.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`bg-white rounded-2xl p-5 border transition-all duration-200 cursor-pointer hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between group ${
                      item.danger ? 'border-rose-200 hover:border-rose-400' : 'border-slate-200 hover:border-teal-500'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          item.danger ? 'bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white' : 'bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-md border ${
                          item.danger ? 'bg-rose-50 text-rose-700 border-rose-200' : 'bg-slate-50 text-slate-600 border-slate-200'
                        }`}>
                          {item.tag}
                        </span>
                      </div>

                      <div>
                        <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-teal-700 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-700">
                      <span>Buka Ketentuan</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* DETAIL VIEW BILA SALAH SATU CARD DIKLIK */}
        {/* ----------------------------------------------------------------- */}
        {activeTab !== null && (
          <div className="space-y-6">
            {/* Tombol Kembali ke Menu Cards Utama */}
            <button
              onClick={() => setActiveTab(null)}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Menu Utama</span>
            </button>

            {/* MODUL 1: BAB I - KETENTUAN UMUM */}
            {activeTab === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-[10px] font-extrabold uppercase bg-teal-50 text-teal-700 px-2.5 py-1 rounded-md border border-teal-200">Pasal 1</span>
                    <h3 className="font-bold text-base text-slate-900">Pendahuluan</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Pendidikan di SMK Prudent School membekali Prudent dengan pengetahuan akademik, karakter, kedisiplinan, dan etos kerja profesional[cite: 12]. Melibatkan 3 pihak utama: Sekolah, Prudent (Professional Student), dan Orang Tua/Wali[cite: 12].
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-[10px] font-extrabold uppercase bg-teal-50 text-teal-700 px-2.5 py-1 rounded-md border border-teal-200">Pasal 2</span>
                    <h3 className="font-bold text-base text-slate-900">Pengertian Kesepahaman</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Kesepakatan bersama mengenai pelaksanaan budaya kerja profesional, tata tertib, dan pembinaan karakter guna menciptakan lingkungan belajar yang aman, tertib, dan kondusif[cite: 12].
                    </p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                  <span className="text-[10px] font-extrabold uppercase bg-teal-50 text-teal-700 px-2.5 py-1 rounded-md border border-teal-200">Pasal 3 & 4</span>
                  <h3 className="font-bold text-base text-slate-900">Maksud, Tujuan & Ruang Lingkup</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    <li className="flex items-start space-x-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <ChevronRight className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>Membentuk Prudent berintegritas dan berkarakter[cite: 12].</span>
                    </li>
                    <li className="flex items-start space-x-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <ChevronRight className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>Membiasakan budaya kerja DUDIKA sejak dini[cite: 12].</span>
                    </li>
                    <li className="flex items-start space-x-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <ChevronRight className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>Mengatur penampilan, etika, kehadiran, & kebersihan[cite: 12].</span>
                    </li>
                    <li className="flex items-start space-x-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <ChevronRight className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>Mekanisme pembinaan, penanganan pelanggaran, & sanksi[cite: 12].</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                  <span className="text-[10px] font-extrabold uppercase bg-teal-50 text-teal-700 px-2.5 py-1 rounded-md border border-teal-200">Pasal 5</span>
                  <h3 className="font-bold text-base text-slate-900">7 Prinsip Pelaksanaan</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['Integritas', 'Disiplin', 'Profesional', 'Edukatif', 'Kolaboratif', 'Objektif & Berkeadilan', 'Berkelanjutan'].map((prinsip, i) => (
                      <div key={i} className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-center">
                        <span className="text-xs font-bold text-teal-700">{prinsip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* MODUL 2: BAB II - HAK, KEWAJIBAN & KOMITMEN */}
            {activeTab === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                  <span className="text-[10px] font-extrabold uppercase bg-teal-50 text-teal-700 px-2.5 py-1 rounded-md border border-teal-200">Pasal 6 & 7</span>
                  <h3 className="font-bold text-base text-slate-900">Hak & Kewajiban Prudent (Siswa)</h3>
                  <div className="space-y-2 text-xs text-slate-600">
                    <p className="font-bold text-slate-800">Hak Prudent:</p>
                    <p className="bg-slate-50 p-2 rounded-lg">• Layanan pendidikan aman, nyaman, dan perlindungan dari perundungan (bullying)[cite: 12].</p>
                    <p className="font-bold text-slate-800 mt-2">Kewajiban Utama:</p>
                    <p className="bg-slate-50 p-2 rounded-lg">• Mematuhi kesepahaman, menjaga nama baik sekolah, merawat fasilitas, & menjaga etika digital/medsos[cite: 12].</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                  <span className="text-[10px] font-extrabold uppercase bg-teal-50 text-teal-700 px-2.5 py-1 rounded-md border border-teal-200">Pasal 8 & 9</span>
                  <h3 className="font-bold text-base text-slate-900">Hak & Kewajiban Orang Tua/Wali</h3>
                  <div className="space-y-2 text-xs text-slate-600">
                    <p className="font-bold text-slate-800">Hak Orang Tua:</p>
                    <p className="bg-slate-50 p-2 rounded-lg">• Memperoleh informasi perkembangan akademik, karakter, & pemberitahuan pelanggaran[cite: 12].</p>
                    <p className="font-bold text-slate-800 mt-2">Kewajiban Orang Tua:</p>
                    <p className="bg-slate-50 p-2 rounded-lg">• Menghadiri undangan sekolah, mendukung pembinaan karakter, & memastikan ketepatan waktu[cite: 12].</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                  <span className="text-[10px] font-extrabold uppercase bg-teal-50 text-teal-700 px-2.5 py-1 rounded-md border border-teal-200">Pasal 10 & 11</span>
                  <h3 className="font-bold text-base text-slate-900">Hak & Kewajiban Sekolah</h3>
                  <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                    Sekolah berhak menetapkan kebijakan pembinaan & memberikan sanksi[cite: 12]. Sekolah berkewajiban memberikan pembinaan edukatif, adil, menjamin keamanan, serta memberikan penghargaan[cite: 12].
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                  <span className="text-[10px] font-extrabold uppercase bg-teal-50 text-teal-700 px-2.5 py-1 rounded-md border border-teal-200">Pasal 12</span>
                  <h3 className="font-bold text-base text-slate-900">Komitmen Bersama</h3>
                  <p className="text-xs text-slate-600 leading-relaxed bg-teal-50/50 p-3 rounded-xl border border-teal-100">
                    Sinergi konsisten antara Sekolah, Prudent, dan Orang Tua/Wali dalam merawat budaya kerja profesional dan kedisiplinan berkesinambungan[cite: 12].
                  </p>
                </div>
              </div>
            )}

            {/* MODUL 3: BAB III - PENAMPILAN & IDENTITAS */}
            {activeTab === 3 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-[10px] font-extrabold uppercase bg-teal-50 text-teal-700 px-2.5 py-1 rounded-md border border-teal-200">Pasal 13 & 14</span>
                    <h3 className="font-bold text-sm text-slate-900">Seragam & Jadwal</h3>
                    <p className="text-xs text-slate-600">• Senin: Putih-Putih + Atribut Lengkap[cite: 12]</p>
                    <p className="text-xs text-slate-600">• Selasa & Rabu: Putih-Abu-Abu[cite: 12]</p>
                    <p className="text-xs text-slate-600">• Kamis: Blazer (Jilbab Putih)[cite: 12]</p>
                    <p className="text-xs text-slate-600">• Jumat: Putih-Hitam (Jilbab Hitam)[cite: 12]</p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-[10px] font-extrabold uppercase bg-teal-50 text-teal-700 px-2.5 py-1 rounded-md border border-teal-200">Pasal 15 & 16</span>
                    <h3 className="font-bold text-sm text-slate-900">Celana, Rok, Rambut</h3>
                    <p className="text-xs text-slate-600">• Putra: Celana standar + sabuk hitam. Rambut max 4 cm, di atas kerah[cite: 12].</p>
                    <p className="text-xs text-slate-600">• Putri: Rok rempel (Putih/Abu) & Huruf A (Hitam). Wajib ciput/hairnet[cite: 12].</p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-[10px] font-extrabold uppercase bg-teal-50 text-teal-700 px-2.5 py-1 rounded-md border border-teal-200">Pasal 17, 18, 19</span>
                    <h3 className="font-bold text-sm text-slate-900">Sepatu, Atribut, Riasan</h3>
                    <p className="text-xs text-slate-600">• Sepatu pantofel hitam + kaos kaki putih minimal 7 cm di atas mata kaki[cite: 12].</p>
                    <p className="text-xs text-slate-600">• Dispensasi atribut max jam 08.00 WIB[cite: 12].</p>
                    <p className="text-xs text-slate-600">• Dilarang make-up berwarna (Hanya Sunscreen no tone-up & Lipbalm polos)[cite: 12].</p>
                  </div>
                </div>
              </div>
            )}

            {/* MODUL 4: BAB IV - SIKAP & ETIKA */}
            {activeTab === 4 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                  <span className="text-[10px] font-extrabold uppercase bg-teal-50 text-teal-700 px-2.5 py-1 rounded-md border border-teal-200">Pasal 20</span>
                  <h3 className="font-bold text-base text-slate-900">Etika Bertutur Kata</h3>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      • Wajib menggunakan sapaan profesional <strong>"Bapak"</strong> atau <strong>"Ibu"</strong> kepada sesama Prudent saat pembelajaran berbasis Office[cite: 12].
                    </li>
                    <li className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      • Membudayakan salam, sapa, dan ramah lingkungan[cite: 12].
                    </li>
                    <li className="bg-rose-50 text-rose-800 p-2.5 rounded-xl border border-rose-100">
                      • Dilarang kata kasar, perundungan, SARA, dan penyebaran hoaks[cite: 12].
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                  <span className="text-[10px] font-extrabold uppercase bg-teal-50 text-teal-700 px-2.5 py-1 rounded-md border border-teal-200">Pasal 21</span>
                  <h3 className="font-bold text-base text-slate-900">Sikap & Tingkah Laku</h3>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="bg-rose-50 text-rose-800 p-2.5 rounded-xl border border-rose-100">
                      • <strong>Dilarang keras berpacaran</strong> / menjalin hubungan khusus di lingkungan sekolah[cite: 12].
                    </li>
                    <li className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      • Dilarang merokok, vape, miras, narkoba, perkelahian, & vandalisme[cite: 12].
                    </li>
                    <li className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      • Penggunaan HP hanya untuk pembelajaran atas izin guru[cite: 12].
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* MODUL 5: BAB V - KEDISIPLINAN */}
            {activeTab === 5 && (
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-100 pb-3">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase bg-teal-50 text-teal-700 px-2.5 py-1 rounded-md border border-teal-200">Pasal 22</span>
                      <h3 className="font-bold text-base text-slate-900 mt-1">Disiplin Kehadiran & Pembiasaan Pagi</h3>
                    </div>
                    <div className="bg-amber-50 text-amber-800 px-3 py-1.5 rounded-xl text-xs font-bold border border-amber-200">
                      Jam Masuk: 07.00 WIB (Toleransi 07.05 WIB)[cite: 12]
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <p className="font-bold text-slate-800">Sanksi Akumulasi Keterlambatan:</p>
                      <p className="text-slate-600 mt-1">• Terlambat 3x: Surat Pernyataan Komitmen Kedisiplinan[cite: 12].</p>
                      <p className="text-slate-600">• Terlambat 4x: Pemanggilan Orang Tua/Wali[cite: 12].</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <p className="font-bold text-slate-800">Perizinan via Prunus DigiApps:</p>
                      <p className="text-slate-600 mt-1">• Sakit: Surat Keterangan Dokter[cite: 12].</p>
                      <p className="text-slate-600">• Alpa 3x: Pemanggilan Orang Tua/Wali[cite: 12].</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-xs text-slate-800 mb-2">Jadwal Agenda Pembiasaan Pagi (07.00 WIB):</h4>
                    <div className="overflow-x-auto rounded-xl border border-slate-200">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-teal-600 text-white font-bold">
                          <tr>
                            <th className="p-2.5">Hari / Jadwal</th>
                            <th className="p-2.5">Agenda Kegiatan</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {SCHEDULE_DATA.map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                              <td className="p-2.5 font-bold text-slate-800">{row.day}</td>
                              <td className="p-2.5 text-slate-600">{row.activity}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 text-xs space-y-1">
                    <span className="font-bold text-teal-700">Pasal 23 & 24</span>
                    <p className="font-bold text-slate-800">Kebersihan & Nonkurikuler</p>
                    <p className="text-slate-600">Wajib piket kelas & mengikuti 1-3 ekskul[cite: 12].</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 text-xs space-y-1">
                    <span className="font-bold text-teal-700">Pasal 25</span>
                    <p className="font-bold text-slate-800">Disiplin Transportasi</p>
                    <p className="text-slate-600">Wajib SIM, Helm SNI, & dilarang knalpot brong[cite: 12].</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 text-xs space-y-1">
                    <span className="font-bold text-teal-700">Pasal 26, 27, 28</span>
                    <p className="font-bold text-slate-800">Pembelajaran & HP</p>
                    <p className="text-slate-600">Dilarang plagiarisme, HP disimpan di Office[cite: 12].</p>
                  </div>
                </div>
              </div>
            )}

            {/* MODUL 6: BAB VI - LARANGAN UTAMA */}
            {activeTab === 6 && (
              <div className="bg-rose-50 border border-rose-200 p-6 rounded-2xl space-y-4">
                <div className="flex items-center space-x-3 text-rose-800">
                  <ShieldAlert className="w-6 h-6 shrink-0" />
                  <div>
                    <span className="text-[10px] font-extrabold uppercase bg-rose-200 text-rose-900 px-2 py-0.5 rounded">Pasal 29</span>
                    <h3 className="font-extrabold text-base">13 Poin Larangan Utama Bagi Prudent</h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-rose-900">
                  {[
                    "1. Merokok, vape, atau produk sejenis[cite: 12].",
                    "2. Membawa/mengonsumsi miras, narkoba, & zat adiktif[cite: 12].",
                    "3. Membawa senjata tajam & bahan berbahaya[cite: 12].",
                    "4. Bullying, kekerasan, intimidasi, & provokasi[cite: 12].",
                    "5. Pencurian, pemerasan, & perjudian[cite: 12].",
                    "6. Vandalisme / merusak fasilitas sekolah[cite: 12].",
                    "7. Membolos atau keluar sekolah tanpa izin[cite: 12].",
                    "8. Menggunakan HP tanpa izin saat KBM[cite: 12].",
                    "9. Pencemaran nama baik sekolah di medsos[cite: 12].",
                    "10. Tindakan bertentangan norma agama/hukum[cite: 12].",
                    "11. Menyebarkan konten melanggar kesusilaan[cite: 12].",
                    "12. Menyalahgunakan identitas & logo sekolah[cite: 12].",
                    "13. Memalsukan data akademik & dokumen[cite: 12]."
                  ].map((item, index) => (
                    <div key={index} className="bg-white/80 p-2.5 rounded-xl border border-rose-100 font-medium">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* MODUL 7: BAB VII - PEMBINAAN & SANKSI */}
            {activeTab === 7 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-[10px] font-extrabold uppercase bg-teal-50 text-teal-700 px-2.5 py-1 rounded-md border border-teal-200">Pasal 30 & 32</span>
                    <h3 className="font-bold text-base text-slate-900">Tahapan Pembinaan & Sanksi</h3>
                    <p className="text-xs text-slate-600">Teguran Lisan (Max 3x) ➔ Teguran Tertulis ➔ Pembinaan Mentor/BK ➔ Kesiswaan ➔ Pemanggilan Ortua ➔ SP I, SP II, SP III ➔ Sidang Kedisiplinan[cite: 12].</p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-[10px] font-extrabold uppercase bg-teal-50 text-teal-700 px-2.5 py-1 rounded-md border border-teal-200">Pasal 31</span>
                    <h3 className="font-bold text-base text-slate-900">Matriks Klasifikasi Pelanggaran</h3>
                    <div className="grid grid-cols-2 gap-2 text-xs font-bold pt-1">
                      <span className="bg-emerald-50 text-emerald-700 p-2 rounded-lg border border-emerald-200 text-center">Pelanggaran Ringan</span>
                      <span className="bg-amber-50 text-amber-700 p-2 rounded-lg border border-amber-200 text-center">Pelanggaran Sedang</span>
                      <span className="bg-orange-50 text-orange-700 p-2 rounded-lg border border-orange-200 text-center">Pelanggaran Berat</span>
                      <span className="bg-rose-50 text-rose-700 p-2 rounded-lg border border-rose-200 text-center">Sangat Berat</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* MODUL 8: BAB VIII & IX - PENGHARGAAN & ORANG TUA */}
            {activeTab === 8 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                  <span className="text-[10px] font-extrabold uppercase bg-teal-50 text-teal-700 px-2.5 py-1 rounded-md border border-teal-200">Pasal 33</span>
                  <h3 className="font-bold text-base text-slate-900">Bentuk Penghargaan Prudent</h3>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    <li className="bg-slate-50 p-2 rounded-lg">• Piagam Penghargaan & Sertifikat[cite: 12]</li>
                    <li className="bg-slate-50 p-2 rounded-lg">• Gelar "Prudent Teladan"[cite: 12]</li>
                    <li className="bg-slate-50 p-2 rounded-lg">• Rekomendasi Mengikuti Lomba[cite: 12]</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                  <span className="text-[10px] font-extrabold uppercase bg-teal-50 text-teal-700 px-2.5 py-1 rounded-md border border-teal-200">Pasal 34</span>
                  <h3 className="font-bold text-base text-slate-900">Peran Kemitraan Orang Tua/Wali</h3>
                  <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                    Orang tua berkewajiban memberikan teladan, mengawasi pergaulan & media digital di luar sekolah, serta bekerja sama saat panggilan pembinaan[cite: 12].
                  </p>
                </div>
              </div>
            )}

            {/* MODUL 9: LAMPIRAN I & II - TABEL PELANGGARAN & SOP */}
            {activeTab === 9 && (
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                      <h3 className="font-bold text-base text-slate-900">Tabel Interactive 58 Jenis Pelanggaran</h3>
                      <p className="text-xs text-slate-500">Lampiran I Dokumen Kesepahaman SMK Prudent School[cite: 12]</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                      <input
                        type="text"
                        placeholder="Filter jenis pelanggaran..."
                        value={tableFilter}
                        onChange={(e) => setTableFilter(e.target.value)}
                        className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-xl text-xs w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                      <select
                        value={tableCategory}
                        onChange={(e) => setTableCategory(e.target.value)}
                        className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold focus:outline-none"
                      >
                        <option value="Semua">Semua Kategori</option>
                        <option value="Ringan">Ringan</option>
                        <option value="Sedang">Sedang</option>
                        <option value="Berat">Berat</option>
                        <option value="Sangat Berat">Sangat Berat</option>
                      </select>
                    </div>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-slate-200 max-h-96 overflow-y-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-100 text-slate-700 font-bold sticky top-0 z-10 border-b border-slate-200">
                        <tr>
                          <th className="p-3 w-12 text-center">No</th>
                          <th className="p-3">Jenis Pelanggaran</th>
                          <th className="p-3 w-32">Kategori</th>
                          <th className="p-3">Bentuk Pembinaan / Sanksi</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {filteredViolations.map((row) => (
                          <tr key={row.no} className="hover:bg-slate-50 transition-colors">
                            <td className="p-3 text-center font-bold text-slate-400">{row.no}</td>
                            <td className="p-3 font-semibold text-slate-800">{row.violation}</td>
                            <td className="p-3">
                              <span className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold border ${getBadgeStyle(row.category)}`}>
                                {row.category}
                              </span>
                            </td>
                            <td className="p-3 text-slate-600 font-medium">{row.sanction}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* MODUL 10: BAB X - KETENTUAN PENUTUP */}
            {activeTab === 10 && (
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <span className="text-[10px] font-extrabold uppercase bg-teal-50 text-teal-700 px-2.5 py-1 rounded-md border border-teal-200">Pasal 35</span>
                <h3 className="font-bold text-base text-slate-900">Ketentuan Penutup</h3>
                <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                  Dokumen Kesepahaman ini berlaku sejak tanggal ditetapkan dan ditandatangani oleh Principal SMK Prudent School, Kesiswaan, Prudent, dan Orang Tua/Wali[cite: 12]. Dibuat dengan itikad baik untuk dipatuhi bersama[cite: 12].
                </p>
              </div>
            )}

            {/* MODUL 11: LEMBAR PENGESAHAN */}
            {activeTab === 11 && (
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-center">
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <div className="text-left">
                    <h3 className="font-bold text-base text-slate-900">Lembar Pengesahan Resmi</h3>
                    <p className="text-xs text-slate-500">Tahun Ajaran 2026/2027[cite: 12]</p>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() => setIsImageModalOpen(true)}
                      className="flex items-center space-x-1 px-3 py-1.5 bg-teal-600 text-white rounded-xl text-xs font-bold hover:bg-teal-700 transition-colors"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Zoom / Full Image</span>
                    </button>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4 flex justify-center">
                  <img
                    src="pengesahan.png"
                    alt="Lembar Pengesahan SMK Prudent School"
                    className="max-h-96 object-contain rounded-lg shadow-sm"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.parentElement.innerHTML = `
                        <div class="py-12 text-center text-xs text-slate-400">
                          <p class="font-bold text-slate-600">[ Gambar Lembar Pengesahan ]</p>
                          <p class="mt-1">Pastikan file <b>pengesahan.png</b> diunggah di folder aplikasi</p>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        )}

      </main>

      {/* MODAL ZOOM LEMBAR PENGESAHAN */}
      {isImageModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden p-4 space-y-3">
            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <h4 className="font-bold text-sm text-slate-900">Lembar Pengesahan - Display Full</h4>
              <button onClick={() => setIsImageModalOpen(false)} className="p-1 rounded-lg bg-slate-100 text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="max-h-[80vh] overflow-y-auto flex justify-center">
              <img src="pengesahan.png" alt="Pengesahan Full" className="w-full object-contain" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
