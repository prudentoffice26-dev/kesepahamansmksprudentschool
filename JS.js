import React, { useState } from 'react';
import { 
  BookOpen, Users, Shirt, MessageSquare, Clock, ShieldAlert, 
  AlertTriangle, Award, UserCheck, CheckCircle2, FileText, Image as ImageIcon,
  Search, Calendar, CheckSquare
} from 'lucide-react';

export default function DokumenKesepahaman() {
  const [activeTab, setActiveTab] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 1, title: 'BAB I', subtitle: 'Ketentuan Umum', icon: BookOpen },
    { id: 2, title: 'BAB II', subtitle: 'Hak, Kewajiban & Komitmen', icon: Users },
    { id: 3, title: 'BAB III', subtitle: 'Penampilan & Identitas', icon: Shirt },
    { id: 4, title: 'BAB IV', subtitle: 'Sikap, Etika & Kedisiplinan', icon: MessageSquare },
    { id: 5, title: 'BAB V', subtitle: 'Kedisiplinan', icon: Clock },
    { id: 6, title: 'BAB VI', subtitle: 'Larangan', icon: ShieldAlert },
    { id: 7, title: 'BAB VII', subtitle: 'Pembinaan & Sanksi', icon: AlertTriangle },
    { id: 8, title: 'BAB VIII', subtitle: 'Penghargaan', icon: Award },
    { id: 9, title: 'BAB IX', subtitle: 'Peran Orang Tua/Wali', icon: UserCheck },
    { id: 10, title: 'BAB X', subtitle: 'Ketentuan Penutup', icon: CheckCircle2 },
    { id: 11, title: 'Lampiran', subtitle: 'Lampiran I - IV', icon: FileText },
    { id: 12, title: 'Pengesahan', subtitle: 'Lembar Pengesahan', icon: ImageIcon },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-12">
      {/* Header Web */}
      <header className="bg-teal-700 text-white shadow-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight">DOKUMEN KESEPAHAMAN</h1>
            <p className="text-teal-100 text-xs sm:text-sm font-medium">SMK PRUDENT SCHOOL TAHUN AJARAN 2026/2027</p>
          </div>
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Cari kata kunci dalam dokumen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-teal-800/60 text-white placeholder-teal-200 text-xs rounded-xl border border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
            <Search className="w-4 h-4 text-teal-200 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* Tab Navigation (12 Tabs) */}
        <div className="bg-teal-800 border-t border-teal-600 overflow-x-auto no-scrollbar">
          <div className="max-w-7xl mx-auto px-2 flex space-x-1 py-1.5 min-w-max">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-white text-teal-800 shadow-sm'
                      : 'text-teal-100 hover:bg-teal-700/60 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <div className="text-left">
                    <div>{tab.title}</div>
                    <div className="text-[10px] font-normal opacity-80">{tab.subtitle}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 mt-6 space-y-6">

        {/* TAB 1: BAB I - KETENTUAN UMUM */}
        {activeTab === 1 && (
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 1</span>
                <h2 className="text-lg font-bold text-slate-900">PENDAHULUAN</h2>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  Pendidikan tidak hanya bertujuan membekali Prudent dengan pengetahuan akademik, tetapi juga membentuk karakter, kedisiplinan, dan etos kerja yang profesional sebagai bekal menghadapi dunia kerja maupun dunia usaha di masa depan[cite: 13]. SMK Prudent School, sebagai lembaga pendidikan kejuruan yang mengusung visi “Mewujudkan kantor pembelajaran yang berdaya guna untuk menghasilkan lulusan yang berintegritas, mahir, mandiri, dan mampu berkompetisi” memandang penting adanya pembiasaan budaya kerja profesional sejak dini di lingkungan sekolah[cite: 13].
                </p>
                <p>
                  Sebagai wujud nyata dari komitmen tersebut, disusunlah Kesepahaman yang melibatkan tiga pihak utama, yaitu pihak sekolah, Prudent (Professional Student), dan orang tua/wali[cite: 13]. Kesepahaman ini merupakan landasan bersama dalam membangun kesadaran, tanggung jawab, dan kedisiplinan Prudent dalam berpakaian rapi, menggunakan atribut sekolah secara lengkap, serta berperilaku sopan dan bertanggung jawab, baik di lingkungan sekolah maupun di luar lingkungan sekolah[cite: 13].
                </p>
                <p>
                  Melalui Dokumen Kesepahaman ini, sekolah, Prudent, dan orang tua/wali berkomitmen untuk melaksanakan seluruh ketentuan yang telah disepakati serta menerima proses pembinaan dan konsekuensi sesuai ketentuan yang berlaku apabila terjadi pelanggaran[cite: 13].
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 2</span>
                <h2 className="text-lg font-bold text-slate-900">PENGERTIAN KESEPAHAMAN</h2>
              </div>
              <ul className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li>Kesepahaman adalah kesepakatan bersama antara SMK Prudent School, Prudent (Professional Student), dan orang tua/wali mengenai pelaksanaan budaya kerja profesional, tata tertib, serta pembinaan karakter Prudent[cite: 13].</li>
                <li>Kesepahaman disusun sebagai pedoman dalam menciptakan lingkungan belajar yang aman, tertib, disiplin, berkarakter, dan kondusif guna mendukung tercapainya tujuan pendidikan di SMK Prudent School[cite: 13].</li>
                <li>Kesepahaman dilaksanakan berdasarkan prinsip tanggung jawab, disiplin, integritas, saling menghormati, dan kerja sama antara sekolah, Prudent, dan orang tua/wali[cite: 13].</li>
                <li>Setiap pihak yang menandatangani Dokumen Kesepahaman berkewajiban mematuhi seluruh ketentuan yang tercantum di dalamnya serta bersedia menerima pembinaan dan sanksi sesuai dengan tingkat pelanggaran yang dilakukan[cite: 13].</li>
                <li>Komitmen Prudent (Professional Student) diwujudkan melalui perilaku berpakaian rapi, menggunakan atribut sekolah secara lengkap, bertutur kata santun, berperilaku sopan, disiplin, bertanggung jawab, menjaga nama baik sekolah, serta menerapkan budaya kerja profesional sebagai identitas SMK Prudent School[cite: 13].</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 3</span>
                <h2 className="text-lg font-bold text-slate-900">MAKSUD DAN TUJUAN</h2>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">(1) Maksud</h3>
                  <p>Dokumen Kesepahaman ini disusun sebagai pedoman bersama bagi SMK Prudent School, Prudent (Professional Student), dan orang tua/wali dalam membangun budaya kerja profesional, karakter, kedisiplinan, serta tanggung jawab Prudent selama mengikuti proses pendidikan di SMK Prudent School[cite: 13].</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">(2) Tujuan</h3>
                  <p className="mb-2">Dokumen Kesepahaman ini bertujuan untuk:</p>
                  <ul className="list-disc list-inside pl-2 space-y-1">
                    <li>membentuk Prudent yang berintegritas, disiplin, bertanggung jawab, dan berkarakter sesuai dengan nilai-nilai yang dikembangkan oleh SMK Prudent School[cite: 13];</li>
                    <li>membiasakan Prudent menerapkan budaya kerja profesional sebagai bekal memasuki dunia usaha, dunia industri, dan dunia kerja[cite: 13];</li>
                    <li>menciptakan lingkungan sekolah yang aman, tertib, bersih, nyaman, dan kondusif bagi seluruh warga sekolah[cite: 13];</li>
                    <li>menumbuhkan kesadaran Prudent untuk mematuhi tata tertib serta menjaga nama baik sekolah di dalam maupun di luar lingkungan sekolah[cite: 13];</li>
                    <li>memperkuat sinergi antara sekolah, Prudent, dan orang tua/wali dalam proses pembinaan karakter dan kedisiplinan[cite: 13];</li>
                    <li>mendukung terwujudnya visi SMK Prudent School, yaitu menghasilkan lulusan yang berintegritas, mahir, mandiri, dan mampu berkompetisi[cite: 13].</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 4</span>
                <h2 className="text-lg font-bold text-slate-900">RUANG LINGKUP</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700">Dokumen Kesepahaman ini mengatur ketentuan mengenai:</p>
              <ul className="list-disc list-inside pl-2 space-y-1 text-xs sm:text-sm text-slate-700">
                <li>penampilan dan identitas Prudent[cite: 13].</li>
                <li>penggunaan pakaian seragam, atribut sekolah, serta standar penampilan[cite: 13].</li>
                <li>etika bertutur kata dan tingkah laku[cite: 13].</li>
                <li>kedisiplinan kehadiran dan pelaksanaan ketentuan yang berlaku di SMK Prudent School[cite: 13].</li>
                <li>kebersihan diri, kelas, dan lingkungan sekolah[cite: 13].</li>
                <li>kedisiplinan dalam kegiatan pembelajaran, nonkurikuler, dan kegiatan sekolah lainnya[cite: 13].</li>
                <li>penggunaan transportasi yang aman dan tertib[cite: 13].</li>
                <li>mekanisme pembinaan, penanganan pelanggaran, dan pemberian sanksi[cite: 13].</li>
                <li>hak, kewajiban, serta komitmen sekolah, Prudent, dan orang tua/wali dalam mendukung pelaksanaan Dokumen Kesepahaman[cite: 13].</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 5</span>
                <h2 className="text-lg font-bold text-slate-900">PRINSIP PELAKSANAAN</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700">Pelaksanaan Dokumen Kesepahaman berpedoman pada prinsip-prinsip sebagai berikut:</p>
              <ul className="list-decimal list-inside pl-2 space-y-2 text-xs sm:text-sm text-slate-700">
                <li><strong className="text-slate-900">Integritas</strong>, yaitu menjunjung tinggi kejujuran, tanggung jawab, dan menjaga nama baik sekolah[cite: 13].</li>
                <li><strong className="text-slate-900">Disiplin</strong>, yaitu mematuhi seluruh ketentuan yang berlaku secara konsisten dan bertanggung jawab[cite: 13].</li>
                <li><strong className="text-slate-900">Profesional</strong>, yaitu membiasakan sikap, perilaku, penampilan, dan etos kerja yang sesuai dengan budaya dunia usaha, dunia industri, dan dunia kerja (DUDIKA)[cite: 13].</li>
                <li><strong className="text-slate-900">Edukatif</strong>, yaitu mengutamakan pembinaan dalam setiap proses penegakan disiplin guna membentuk karakter Prudent[cite: 13].</li>
                <li><strong className="text-slate-900">Kolaboratif</strong>, yaitu membangun kerja sama yang harmonis antara sekolah, Prudent, orang tua/wali, dan seluruh warga sekolah[cite: 13].</li>
                <li><strong className="text-slate-900">Objektif dan Berkeadilan</strong>, yaitu menerapkan ketentuan secara adil, konsisten, transparan, dan tanpa diskriminasi kepada seluruh Prudent[cite: 13].</li>
                <li><strong className="text-slate-900">Berkelanjutan</strong>, yaitu melaksanakan pembinaan dan evaluasi secara terus-menerus sebagai bagian dari proses pengembangan karakter Prudent[cite: 13].</li>
              </ul>
            </div>
          </div>
        )}

        {/* TAB 2: BAB II - HAK, KEWAJIBAN DAN KOMITMEN */}
        {activeTab === 2 && (
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 6</span>
                <h2 className="text-lg font-bold text-slate-900">HAK PRUDENT</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700">Setiap Prudent berhak:</p>
              <ul className="list-decimal list-inside pl-2 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>memperoleh layanan pendidikan yang aman, nyaman, tertib, dan kondusif[cite: 13].</li>
                <li>memperoleh pembinaan karakter, kedisiplinan, pengembangan kompetensi, serta pendampingan sesuai dengan visi dan misi SMK Prudent School[cite: 13].</li>
                <li>mendapatkan perlakuan yang adil tanpa membedakan suku, agama, ras, golongan, maupun latar belakang lainnya[cite: 13].</li>
                <li>menyampaikan pendapat, saran, atau klarifikasi kepada pihak sekolah dengan tetap menjunjung tinggi etika dan tata krama[cite: 13].</li>
                <li>memperoleh penghargaan atas prestasi, kedisiplinan, dan perilaku yang baik[cite: 13].</li>
                <li>memperoleh perlindungan dari segala bentuk perundungan (bullying), kekerasan, diskriminasi, dan perlakuan yang merendahkan martabat Prudent sesuai dengan ketentuan yang berlaku[cite: 13].</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 7</span>
                <h2 className="text-lg font-bold text-slate-900">KEWAJIBAN PRUDENT</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700">Setiap Prudent berkewajiban:</p>
              <ul className="list-decimal list-inside pl-2 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>mematuhi seluruh ketentuan dalam Dokumen Kesepahaman[cite: 13].</li>
                <li>menjaga nama baik SMK Prudent School di dalam maupun di luar lingkungan sekolah[cite: 13].</li>
                <li>menjaga dan memelihara seluruh fasilitas sekolah[cite: 13].</li>
                <li>mengikuti seluruh kegiatan pembelajaran, kegiatan sekolah, dan kegiatan nonkurikuler sesuai ketentuan[cite: 13].</li>
                <li>menjunjung tinggi budaya kerja profesional sebagai identitas Prudent (Professional Student)[cite: 13].</li>
                <li>menghormati guru, tenaga kependidikan, sesama Prudent, orang tua, dan masyarakat[cite: 13].</li>
                <li>menjaga keamanan, ketertiban, kebersihan, dan kenyamanan lingkungan sekolah[cite: 13].</li>
                <li>menggunakan fasilitas sekolah secara bertanggung jawab[cite: 13].</li>
                <li>menjaga kerahasiaan data, dokumen, dan informasi sekolah yang bersifat internal[cite: 13].</li>
                <li>menjaga etika dalam penggunaan media sosial dan teknologi informasi serta tidak menyebarluaskan informasi yang dapat merugikan nama baik sekolah maupun warga sekolah[cite: 13].</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 8</span>
                <h2 className="text-lg font-bold text-slate-900">HAK ORANG TUA</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700">Orang tua/wali berhak:</p>
              <ul className="list-decimal list-inside pl-2 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>memperoleh informasi mengenai perkembangan Prudent[cite: 13].</li>
                <li>memperoleh pemberitahuan apabila Prudent melakukan pelanggaran[cite: 13].</li>
                <li>menyampaikan masukan kepada sekolah[cite: 13].</li>
                <li>memperoleh penjelasan mengenai proses pembinaan Prudent[cite: 13].</li>
                <li>memperoleh akses informasi mengenai kegiatan sekolah yang berkaitan dengan perkembangan Prudent[cite: 13].</li>
                <li>memperoleh kesempatan untuk berkonsultasi dengan pihak sekolah mengenai perkembangan akademik, karakter, dan kedisiplinan Prudent[cite: 13].</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 9</span>
                <h2 className="text-lg font-bold text-slate-900">KEWAJIBAN ORANG TUA</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700">Orang tua/wali berkewajiban:</p>
              <ul className="list-decimal list-inside pl-2 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>mendukung pelaksanaan Dokumen Kesepahaman[cite: 13].</li>
                <li>menghadiri undangan sekolah[cite: 13].</li>
                <li>bekerja sama dengan sekolah dalam pembinaan karakter[cite: 13].</li>
                <li>memberikan teladan kepada Prudent[cite: 13].</li>
                <li>memastikan Prudent hadir tepat waktu dan mematuhi ketentuan sekolah[cite: 13].</li>
                <li>menjalin komunikasi yang baik dengan sekolah dalam mendukung perkembangan Prudent[cite: 13].</li>
                <li>memberikan informasi kepada sekolah apabila terdapat kondisi khusus yang memengaruhi perkembangan atau kehadiran Prudent[cite: 13].</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 10</span>
                <h2 className="text-lg font-bold text-slate-900">HAK SEKOLAH</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700">SMK Prudent School berhak:</p>
              <ul className="list-decimal list-inside pl-2 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>memberikan sanksi bagi Prudent atas pelanggaran Kesepahaman[cite: 13].</li>
                <li>melakukan evaluasi terhadap implementasi Kesepahaman bagi Prudent[cite: 13].</li>
                <li>menetapkan kebijakan pembinaan Prudent sesuai dengan ketentuan yang berlaku[cite: 13].</li>
                <li>melakukan koordinasi dengan orang tua/wali dan pihak terkait dalam rangka pembinaan Prudent[cite: 13].</li>
                <li>menetapkan langkah-langkah pembinaan lanjutan berdasarkan hasil evaluasi perilaku dan perkembangan Prudent[cite: 13].</li>
                <li>mendokumentasikan dan mengadministrasikan seluruh proses pembinaan, pelanggaran, serta tindak lanjut sebagai bagian dari administrasi kesiswaan[cite: 13].</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 11</span>
                <h2 className="text-lg font-bold text-slate-900">KEWAJIBAN SEKOLAH</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700">SMK Prudent School berkewajiban:</p>
              <ul className="list-decimal list-inside pl-2 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>memberikan pembinaan kepada Prudent secara edukatif, objektif dan adil[cite: 13].</li>
                <li>menjamin keamanan, keselamatan, dan perlindungan Prudent selama berada dalam lingkungan sekolah serta pada kegiatan yang diselenggarakan sekolah[cite: 13].</li>
                <li>melaksanakan pembinaan, pengawasan, monitoring, evaluasi, serta penegakan ketentuan dalam Dokumen Kesepahaman[cite: 13].</li>
                <li>memberikan penghargaan kepada Prudent yang menunjukkan prestasi, kedisiplinan, dan keteladanan[cite: 13].</li>
                <li>menyampaikan informasi kepada orang tua/wali mengenai perkembangan akademik, karakter, maupun kedisiplinan Prudent[cite: 13].</li>
                <li>menciptakan lingkungan belajar yang aman, nyaman dan mendukung pembentukan karakter Prudent[cite: 13].</li>
                <li>menyediakan sarana dan prasarana yang mendukung penyelenggaraan pembelajaran[cite: 13].</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 12</span>
                <h2 className="text-lg font-bold text-slate-900">KOMITMEN BERSAMA</h2>
              </div>
              <ol className="list-decimal list-inside pl-2 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li>Sekolah, Prudent, dan orang tua/wali berkomitmen untuk melaksanakan seluruh ketentuan dalam Dokumen Kesepahaman ini secara konsisten, bertanggung jawab, dan berkesinambungan[cite: 13].</li>
                <li>Pelaksanaan Dokumen Kesepahaman dilandasi oleh semangat kerja sama, saling menghormati, pembinaan karakter, serta budaya kerja profesional[cite: 13].</li>
                <li>Setiap pelanggaran terhadap ketentuan dalam Dokumen Kesepahaman akan ditindaklanjuti melalui mekanisme pembinaan sesuai dengan ketentuan yang berlaku[cite: 13].</li>
                <li>Seluruh pihak berkewajiban mendukung terciptanya lingkungan sekolah yang aman, tertib, disiplin, nyaman, dan kondusif[cite: 13].</li>
                <li>Komitmen bersama sebagaimana dimaksud pada ayat (1) sampai dengan ayat (4) menjadi dasar pelaksanaan seluruh ketentuan dalam Dokumen Kesepahaman ini[cite: 13].</li>
              </ol>
            </div>
          </div>
        )}

        {/* TAB 3: BAB III - PENAMPILAN DAN IDENTITAS PRUDENT */}
        {activeTab === 3 && (
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 13</span>
                <h2 className="text-lg font-bold text-slate-900">KETENTUAN BAJU SERAGAM</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700">Setiap Prudent (Professional Student) wajib mengenakan baju seragam sekolah sesuai ketentuan sebagai berikut:</p>
              <ol className="list-decimal list-inside pl-2 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>Menggunakan baju seragam sesuai ukuran, tidak ketat, tidak menggantung, dan tampak rapi[cite: 13].</li>
                <li>Menggunakan baju seragam berlengan panjang sesuai ketentuan sekolah[cite: 13].</li>
                <li>Mengenakan baju seragam dalam keadaan bersih, rapi, tidak robek, dan tidak terdapat coretan atau tulisan yang bukan merupakan identitas resmi sekolah[cite: 13].</li>
                <li>Menggunakan kaos dalam (singlet) atau kaos berwarna putih dengan model leher bulat (crew neck) atau berbentuk huruf V (V-neck)[cite: 13].</li>
                <li>Panjang lengan kaos dalam tidak melebihi panjang lengan baju seragam[cite: 13].</li>
                <li>Baju seragam wajib dimasukkan ke dalam celana atau rok sehingga ikat pinggang terlihat dengan rapi[cite: 13].</li>
                <li>Baju seragam tetap dimasukkan selama menggunakan atribut sekolah, kecuali pada saat menggunakan seragam olahraga atau berdasarkan ketentuan lain yang ditetapkan sekolah[cite: 13].</li>
                <li>Baju seragam wajib digunakan sesuai ketentuan sekolah dan tidak diperkenankan dimodifikasi dalam bentuk apa pun tanpa persetujuan sekolah[cite: 13].</li>
                <li>Pelanggaran terhadap ketentuan pada ayat (1) dikenakan pembinaan dan sanksi sesuai dengan ketentuan dalam BAB PEMBINAAN, PENGHARGAAN, DAN SANKSI[cite: 13].</li>
              </ol>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 14</span>
                <h2 className="text-lg font-bold text-slate-900">KETENTUAN PENGGUNAAN SERAGAM BERDASARKAN HARI</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700">Setiap Prudent wajib mengenakan seragam sesuai jadwal yang ditetapkan sekolah, yaitu:</p>
              <ol className="list-decimal list-inside pl-2 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>Senin: seragam putih-putih dengan atribut lengkap[cite: 13].</li>
                <li>Selasa dan Rabu: seragam putih abu-abu dengan atribut lengkap[cite: 13].</li>
                <li>Kamis: mengenakan blazer sesuai ketentuan sekolah, serta jilbab putih bagi Prudent muslimah[cite: 13].</li>
                <li>Jumat: seragam putih-hitam dengan atribut lengkap, serta jilbab hitam bagi Prudent muslimah[cite: 13].</li>
                <li>Pada mata pelajaran olahraga wajib menggunakan seragam olahraga sekolah[cite: 13].</li>
                <li>Pelanggaran terhadap ketentuan pada ayat (1) dikenakan pembinaan dan sanksi sesuai dengan ketentuan dalam BAB PEMBINAAN, PENGHARGAAN, DAN SANKSI[cite: 13].</li>
              </ol>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 15</span>
                <h2 className="text-lg font-bold text-slate-900">KETENTUAN CELANA/ROK</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700">Setiap Prudent wajib mengenakan celana atau rok sesuai ketentuan sebagai berikut:</p>
              <ol className="list-decimal list-inside pl-2 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>Prudent putra menggunakan celana panjang sesuai model yang ditetapkan sekolah dan dilarang menggunakan model baggy, cargo, pensil, atau model lain yang tidak sesuai[cite: 13].</li>
                <li>Celana wajib dilengkapi dengan ikat pinggang berwarna hitam[cite: 13].</li>
                <li>
                  Prudent putri menggunakan rok panjang sesuai ketentuan sekolah, yaitu:
                  <ul className="list-disc list-inside pl-6 mt-1 space-y-0.5">
                    <li>Rok warna putih dan abu-abu menggunakan model rempel[cite: 13].</li>
                    <li>Rok warna hitam menggunakan model huruf A[cite: 13].</li>
                  </ul>
                </li>
                <li>Celana atau rok harus bersih, rapi, tidak dimodifikasi, dan sesuai ukuran[cite: 13].</li>
                <li>Celana atau rok tidak diperkenankan dimodifikasi sehingga mengubah bentuk, ukuran, warna, maupun model yang telah ditetapkan sekolah[cite: 13].</li>
                <li>Celana atau rok wajib digunakan pada posisi yang sopan dan sesuai ukuran sehingga tidak menimbulkan kesan berpakaian tidak rapi[cite: 13].</li>
                <li>Pelanggaran terhadap ketentuan pada ayat (1) dikenakan pembinaan dan sanksi sesuai dengan ketentuan dalam BAB PEMBINAAN, PENGHARGAAN, DAN SANKSI[cite: 13].</li>
              </ol>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 16</span>
                <h2 className="text-lg font-bold text-slate-900">KETENTUAN RAMBUT</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700">Setiap Prudent wajib menjaga kerapian rambut dengan ketentuan sebagai berikut:</p>
              <ol className="list-decimal list-inside pl-2 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>Rambut dipotong dengan model yang wajar, sopan, dan mencerminkan budaya kerja profesional serta tidak diperkenankan menggunakan model mullet, mohawk, atau model ekstrem lainnya[cite: 13].</li>
                <li>Bagi Prudent laki-laki, model rambut harus rapi, bersih, panjang rambut harus berada di atas kerah baju, tidak menutupi telinga, dan bagian atas rambut memiliki panjang maksimal 4 (empat) sentimeter[cite: 13].</li>
                <li>Bagi Prudent perempuan yang mengenakan jilbab, jilbab harus dikenakan dengan rapi, menutup aurat, rambut tidak terlihat, serta menggunakan ciput yang disesuaikan dengan warna jilbab[cite: 13].</li>
                <li>Bagi Prudent perempuan yang tidak mengenakan jilbab wajib menggunakan hairnet sesuai ketentuan sekolah[cite: 13].</li>
                <li>Rambut tidak diperkenankan diwarnai, dicat, dikepang dengan model yang tidak sesuai budaya sekolah, maupun menggunakan model yang bertentangan dengan ketentuan sekolah[cite: 13].</li>
                <li>Pelanggaran terhadap ketentuan pada ayat (1) dikenakan pembinaan dan sanksi sesuai dengan ketentuan dalam BAB PEMBINAAN, PENGHARGAAN, DAN SANKSI[cite: 13].</li>
              </ol>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 17</span>
                <h2 className="text-lg font-bold text-slate-900">KETENTUAN KAOS KAKI DAN SEPATU</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700">Setiap Prudent wajib menggunakan sepatu dan kaos kaki sesuai ketentuan sebagai berikut:</p>
              <ol className="list-decimal list-inside pl-2 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>Menggunakan sepatu pantofel berwarna hitam selama kegiatan belajar mengajar, kecuali pada saat mata pelajaran olahraga yang menggunakan sepatu olahraga (sneakers)[cite: 13].</li>
                <li>Prudent putri menggunakan sepatu sesuai model yang telah ditetapkan oleh sekolah[cite: 13].</li>
                <li>Menggunakan kaos kaki dengan panjang minimal 7 (tujuh) sentimeter di atas mata kaki[cite: 13].</li>
                <li>Kaos kaki berwarna putih polos, dengan bagian telapak diperbolehkan berwarna hitam[cite: 13].</li>
                <li>Sepatu dan kaos kaki harus dalam keadaan bersih, rapi, dan layak digunakan[cite: 13].</li>
                <li>Sepatu wajib dalam kondisi bersih, tidak dimodifikasi, dan tidak menggunakan aksesoris yang bertentangan dengan ketentuan sekolah[cite: 13].</li>
                <li>Pelanggaran terhadap ketentuan pada ayat (1) dikenakan pembinaan dan sanksi sesuai dengan ketentuan dalam BAB PEMBINAAN, PENGHARGAAN, DAN SANKSI[cite: 13].</li>
              </ol>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 18</span>
                <h2 className="text-lg font-bold text-slate-900">KELENGKAPAN ATRIBUT</h2>
              </div>
              <ol className="list-decimal list-inside pl-2 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>
                  Setiap Prudent wajib menggunakan atribut sekolah secara lengkap, meliputi:
                  <ul className="list-disc list-inside pl-6 mt-1 space-y-0.5">
                    <li>Dasi[cite: 13].</li>
                    <li>Lambang Yayasan SMK Prudent School[cite: 13].</li>
                    <li>Identitas lokasi sekolah[cite: 13].</li>
                    <li>Name tag[cite: 13].</li>
                    <li>Topi sekolah pada saat upacara bendera dan kegiatan lain yang ditetapkan sekolah[cite: 13].</li>
                    <li>Atribut lain sesuai ketentuan sekolah[cite: 13].</li>
                  </ul>
                </li>
                <li>Atribut yang rusak atau hilang wajib segera diganti oleh Prudent[cite: 13].</li>
                <li>Pelanggaran terhadap ketentuan pada ayat (1) dikenakan pembinaan dan sanksi sesuai dengan BAB PEMBINAAN, PENGHARGAAN, DAN SANKSI[cite: 13].</li>
                <li>Prudent yang belum memenuhi ketentuan kelengkapan atribut atau penampilan dapat memperoleh dispensasi untuk melakukan perbaikan paling lambat sampai dengan pukul 08.00 WIB sesuai mekanisme yang ditetapkan sekolah[cite: 13].</li>
                <li>Dispensasi sebagaimana dimaksud pada ayat (4) tidak menghapus kewajiban Prudent untuk memenuhi ketentuan atribut secara lengkap[cite: 13].</li>
                <li>Prudent yang mengajukan atau meminta dispensasi setelah pukul 08.00 WIB dinyatakan melakukan pelanggaran dan dikenakan pembinaan serta konsekuensi edukatif sesuai dengan ketentuan yang berlaku[cite: 13].</li>
              </ol>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 19</span>
                <h2 className="text-lg font-bold text-slate-900">PENAMPILAN</h2>
              </div>
              <ol className="list-decimal list-inside pl-2 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>Setiap Prudent wajib menjaga penampilan yang rapi, bersih, sopan, dan profesional[cite: 13].</li>
                <li>Penggunaan parfum diperbolehkan sepanjang tidak berlebihan atau menimbulkan aroma yang menyengat[cite: 13].</li>
                <li>
                  Prudent tidak diperkenankan menggunakan riasan (make-up), kecuali:
                  <ul className="list-disc list-inside pl-6 mt-1 space-y-0.5">
                    <li>Menggunakan tabir surya (sunscreen) yang tidak mengandung efek tone-up atau matte[cite: 13].</li>
                    <li>Menggunakan lip balm tanpa warna[cite: 13].</li>
                  </ul>
                </li>
                <li>Penampilan Prudent harus mencerminkan budaya kerja profesional, sederhana, rapi, bersih, dan sesuai dengan ketentuan sekolah[cite: 13].</li>
                <li>Prudent dilarang menggunakan bedak, BB Cream, foundation, lip cream, lipstik berwarna, maupun kosmetik lain yang tidak sesuai dengan ketentuan sekolah[cite: 13].</li>
                <li>Prudent tidak diperkenankan menggunakan aksesori secara berlebihan yang tidak sesuai dengan ketentuan sekolah atau mengganggu kerapian dan penampilan profesional[cite: 13].</li>
                <li>Prudent tidak diperkenankan mengukir, mencukur, atau membentuk alis secara berlebihan yang mengubah bentuk alami alis dan tidak sesuai dengan ketentuan penampilan sekolah[cite: 13].</li>
                <li>Khusus Prudent laki-laki, tidak diperkenankan menggunakan kalung, gelang, cincin, anting maupun aksesori lain yang tidak sesuai dengan ketentuan sekolah[cite: 13].</li>
                <li>Aksesori yang diperbolehkan bagi Prudent perempuan harus digunakan secara sederhana, tidak berlebihan, tidak mengganggu kegiatan pembelajaran, dan tetap mencerminkan penampilan yang sopan dan profesional. Gelang atau cincin berbahan emas diperbolehkan paling banyak 1 (satu) buah, tetapi penggunaannya tidak dianjurkan selama kegiatan sekolah dan tetap dapat dibatasi sesuai kebijakan sekolah[cite: 13].</li>
                <li>Pelanggaran terhadap ketentuan pada ayat (1), (2), (3), (4), (5), (6), (7), (8) dan (9) dikenakan pembinaan dan sanksi sesuai dengan BAB PEMBINAAN, PENGHARGAAN, DAN SANKSI[cite: 13].</li>
              </ol>
            </div>
          </div>
        )}

        {/* TAB 4: BAB IV - SIKAP, ETIKA DAN KEDISIPLINAN PRUDENT */}
        {activeTab === 4 && (
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 20</span>
                <h2 className="text-lg font-bold text-slate-900">KETENTUAN BERTUTUR KATA</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700">Setiap Prudent (Professional Student) wajib menjaga etika dalam berkomunikasi dengan ketentuan sebagai berikut:</p>
              <ol className="list-decimal list-inside pl-2 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>Berkomunikasi dengan sopan, santun, dan menghormati sesama Prudent, guru, tenaga kependidikan, tamu sekolah, serta masyarakat[cite: 13].</li>
                <li>Membiasakan bersikap ramah, murah senyum, rendah hati, dan tidak bersikap arogan[cite: 13].</li>
                <li>Membudayakan salam, sapa, dan salam hormat kepada warga sekolah maupun tamu yang berada di lingkungan SMK Prudent School[cite: 13].</li>
                <li>Dilarang menggunakan kata-kata kasar, menghina, melakukan perundungan (bullying), ujaran kebencian, maupun tindakan yang mengandung unsur SARA (Suku, Agama, Ras, dan Antargolongan)[cite: 13].</li>
                <li>Pada saat melaksanakan pembelajaran berbasis Office, setiap Prudent wajib menggunakan sapaan profesional "Bapak" atau "Ibu" kepada sesama Prudent sesuai budaya kerja yang diterapkan sekolah[cite: 13].</li>
                <li>Menggunakan bahasa yang santun baik secara lisan maupun melalui media digital, termasuk media sosial dan aplikasi komunikasi[cite: 13].</li>
                <li>Menghindari penyebaran informasi yang tidak benar (hoaks), fitnah, maupun ujaran provokatif baik secara langsung maupun melalui media digital[cite: 13].</li>
                <li>Pelanggaran terhadap ketentuan pada ayat (1) dikenakan pembinaan dan sanksi sesuai dengan BAB PEMBINAAN, PENGHARGAAN, DAN SANKSI[cite: 13].</li>
              </ol>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 21</span>
                <h2 className="text-lg font-bold text-slate-900">KETENTUAN SIKAP DAN TINGKAH LAKU</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700">Setiap Prudent wajib menunjukkan sikap dan perilaku yang mencerminkan karakter SMK Prudent School dengan ketentuan sebagai berikut:</p>
              <ol className="list-decimal list-inside pl-2 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>Berakhlakul karimah dan menjunjung tinggi nilai moral serta etika[cite: 13].</li>
                <li>Bersikap ramah, saling menghormati, dan saling membantu dalam kebaikan[cite: 13].</li>
                <li>Menerapkan pola hidup sederhana, bertanggung jawab, dan menggunakan telepon genggam hanya untuk kepentingan pembelajaran sesuai izin guru[cite: 13].</li>
                <li>Tidak menggunakan perhiasan atau aksesori secara berlebihan yang tidak berkaitan dengan kegiatan pembelajaran[cite: 13].</li>
                <li>Menjauhi segala bentuk perbuatan yang bertentangan dengan ajaran agama, hukum yang berlaku, maupun tata tertib sekolah[cite: 13].</li>
                <li>Dilarang merokok, mengonsumsi minuman keras, narkotika, maupun zat adiktif lainnya[cite: 13].</li>
                <li>Dilarang melakukan pertengkaran dan/atau perkelahian dalam bentuk apa pun di lingkungan sekolah maupun pada kegiatan yang diselenggarakan sekolah[cite: 13].</li>
                <li>Dilarang terlibat, mengajak, memprovokasi, memfasilitasi, maupun berpartisipasi dalam tindakan tawuran/perkelahian, baik di lingkungan sekolah, di luar lingkungan sekolah, maupun pada kegiatan yang diselenggarakan sekolah[cite: 13].</li>
                <li>Menjaga nama baik sekolah dengan berperilaku layaknya insan profesional sesuai budaya kerja Prudent[cite: 13].</li>
                <li>Menjaga dan memelihara seluruh fasilitas sekolah serta dilarang melakukan vandalisme[cite: 13].</li>
                <li>Dilarang melakukan kekerasan, intimidasi, provokasi, pelecehan, maupun tindakan lain yang mengancam keselamatan warga sekolah[cite: 13].</li>
                <li>Dilarang mengambil atau menggunakan barang milik orang lain tanpa izin pemiliknya[cite: 13].</li>
                <li>Prudent wajib menjaga pergaulan yang sesuai dengan norma agama, kesusilaan, dan tata tertib sekolah, serta menghindari perilaku yang mengganggu proses pendidikan[cite: 13].</li>
                <li>Menghormati perbedaan agama, suku, budaya, bahasa, dan latar belakang setiap warga sekolah[cite: 13].</li>
                <li>Menjaga etika penggunaan media sosial serta tidak menyebarluaskan informasi yang dapat merugikan nama baik sekolah maupun warga sekolah[cite: 13].</li>
                <li>Prudent dilarang berkumpul atau berada di luar lingkungan sekolah tanpa tujuan yang jelas, terutama di tempat-tempat yang berpotensi menimbulkan pelanggaran disiplin, mengganggu ketertiban umum, atau mencemarkan nama baik sekolah[cite: 13].</li>
                <li>Dilarang melakukan pelecehan seksual, baik secara fisik, verbal, nonverbal, maupun melalui media elektronik atau media sosial terhadap warga sekolah maupun pihak lain[cite: 13].</li>
                <li>Prudent dilarang menjalin hubungan khusus dengan lawan jenis yang diwujudkan dalam perilaku berpacaran atau bentuk hubungan lain yang tidak sesuai dengan norma agama, kesusilaan, serta nilai-nilai yang berlaku di sekolah[cite: 13].</li>
                <li>Pelanggaran terhadap ketentuan pada ayat (1) dikenakan pembinaan dan sanksi sesuai dengan BAB PEMBINAAN, PENGHARGAAN, DAN SANKSI[cite: 13].</li>
              </ol>
            </div>
          </div>
        )}

        {/* TAB 5: BAB V - KESEPAHAMAN KEDISIPLINAN */}
        {activeTab === 5 && (
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 22</span>
                <h2 className="text-lg font-bold text-slate-900">DISIPLIN KEHADIRAN</h2>
              </div>
              <ol className="list-decimal list-inside pl-2 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li>Setiap Prudent wajib hadir tepat waktu sesuai jadwal yang ditetapkan sekolah[cite: 13].</li>
                <li>Jam masuk sekolah ditetapkan pukul 07.00 WIB, dengan toleransi keterlambatan sampai dengan pukul 07.05 WIB[cite: 13].</li>
                <li>Prudent yang hadir setelah pukul 07.05 WIB dinyatakan terlambat dan wajib melapor kepada Guru Piket untuk mendapatkan pembinaan dan/atau konsekuensi edukatif sesuai ketentuan yang berlaku[cite: 13].</li>
                <li>Setiap keterlambatan Prudent wajib dicatat sebagai bagian dari catatan kedisiplinan dan diinput ke dalam Prunus DigiApps[cite: 13].</li>
                <li>Prudent yang tercatat terlambat sebanyak 3 (tiga) kali wajib membuat Surat Pernyataan Komitmen Kedisiplinan yang ditandatangani oleh Prudent, orang tua/wali, mentor dan kesiswaan sebagai bentuk komitmen untuk memperbaiki kedisiplinan kehadiran[cite: 13].</li>
                <li>Prudent yang tercatat terlambat sebanyak 4 (empat) kali akan mendapatkan panggilan orang tua/wali untuk dilakukan klarifikasi dan pembinaan bersama antara sekolah, Prudent, dan orang tua/wali[cite: 13].</li>
                <li>Setelah tiba di sekolah, seluruh Prudent wajib mengikuti kegiatan pagi yang dilaksanakan dengan berkumpul di lapangan sesuai arahan sekolah[cite: 13].</li>
                <li>
                  Kegiatan pagi sebagaimana dimaksud pada ayat (7) meliputi:
                  <ul className="list-disc list-inside pl-6 mt-1 space-y-0.5">
                    <li>berkumpul dan mengikuti pengarahan kegiatan pagi[cite: 13]</li>
                    <li>menyanyikan lagu Indonesia Raya[cite: 13]</li>
                    <li>mengikuti pembiasaan keagamaan sesuai agama dan kepercayaan masing-masing[cite: 13]</li>
                    <li>mengikuti kegiatan pembiasaan harian yang telah ditetapkan sekolah[cite: 13].</li>
                  </ul>
                </li>
                <li>Pembiasaan keagamaan pada hari Senin sampai dengan Jumat dilaksanakan dalam bentuk solawatan bagi Prudent beragama Islam, sedangkan Prudent yang beragama non muslim membaca doa sesuai agama dan kepercayaannya[cite: 13].</li>
                <li>
                  <span className="font-semibold text-slate-900">Kegiatan pembiasaan sekolah dilaksanakan dengan ketentuan sebagai berikut:</span>
                  <div className="mt-2 overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-teal-700 text-white font-bold">
                          <th className="p-2.5 border-b border-teal-800">HARI</th>
                          <th className="p-2.5 border-b border-teal-800">KEGIATAN</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="bg-white"><td className="p-2.5 font-bold">Senin pekan ke-1</td><td className="p-2.5">Upacara Bemdera[cite: 13]</td></tr>
                        <tr className="bg-slate-50"><td className="p-2.5 font-bold">Senin pekan ke-2</td><td className="p-2.5">Pengajian (bagi Prudent beragama Islam) dan Kerohanian bagi Prudent non muslim[cite: 13]</td></tr>
                        <tr className="bg-white"><td className="p-2.5 font-bold">Senin pekan ke-3</td><td className="p-2.5">Pentas Seni (Pensi)[cite: 13]</td></tr>
                        <tr className="bg-slate-50"><td className="p-2.5 font-bold">Senin pekan ke-4</td><td className="p-2.5">Penyuluhan[cite: 13]</td></tr>
                        <tr className="bg-white"><td className="p-2.5 font-bold">Selasa</td><td className="p-2.5">Literasi[cite: 13]</td></tr>
                        <tr className="bg-slate-50"><td className="p-2.5 font-bold">Rabu</td><td className="p-2.5">English Day[cite: 13]</td></tr>
                        <tr className="bg-white"><td className="p-2.5 font-bold">Kamis</td><td className="p-2.5">Numerasi[cite: 13]</td></tr>
                        <tr className="bg-slate-50"><td className="p-2.5 font-bold">Jumat</td><td className="p-2.5">pembacaan Asmaul Husna serta kegiatan keagamaan sesuai agama dan kepercayaan masing-masing[cite: 13].</td></tr>
                      </tbody>
                    </table>
                  </div>
                </li>
                <li>Prudent wajib mengikuti seluruh kegiatan pagi dan pembiasaan sekolah dengan tertib, disiplin, dan bertanggung jawab[cite: 13].</li>
                <li>Prudent wajib mengikuti kegiatan keagamaan, pembiasaan, dan kegiatan sekolah yang telah dijadwalkan[cite: 13].</li>
                <li>Prudent tidak diperkenankan meninggalkan lingkungan sekolah selama jam pembelajaran maupun kegiatan sekolah tanpa izin dari pihak yang berwenang[cite: 13].</li>
                <li>Ketidakhadiran karena sakit, izin, atau keperluan lain wajib disampaikan melalui Prunus DigiApps sesuai prosedur perizinan yang ditetapkan sekolah[cite: 13].</li>
                <li>
                  Setiap pengajuan ketidakhadiran wajib disertai dokumen pendukung sebagai berikut:
                  <ul className="list-disc list-inside pl-6 mt-1 space-y-0.5">
                    <li>ketidakhadiran karena izin wajib melampirkan surat izin yang ditandatangani oleh orang tua/wali[cite: 13].</li>
                    <li>ketidakhadiran karena sakit wajib melampirkan surat keterangan dokter atau bukti pemeriksaan kesehatan yang sah[cite: 13].</li>
                    <li>ketidakhadiran karena keperluan lain wajib disertai keterangan dan/atau bukti yang dapat dipertanggungjawabkan sesuai ketentuan sekolah[cite: 13].</li>
                  </ul>
                </li>
                <li>Ketidakhadiran tanpa keterangan atau tanpa perizinan yang sah dicatat sebagai alpa dan menjadi bagian dari catatan kedisiplinan Prudent[cite: 13].</li>
                <li>Prudent yang tercatat alpa sebanyak 3 (tiga) kali akan mendapatkan panggilan orang tua/wali untuk dilakukan klarifikasi dan pembinaan[cite: 13].</li>
                <li>Pelanggaran terhadap ketentuan pada ayat (1) sampai dengan ayat (14) dikenakan pembinaan dan/atau sanksi sesuai dengan ketentuan BAB PEMBINAAN, PENGHARGAAN, DAN SANKSI[cite: 13].</li>
              </ol>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 23</span>
                <h2 className="text-lg font-bold text-slate-900">DISIPLIN KEBERSIHAN</h2>
              </div>
              <ol className="list-decimal list-inside pl-2 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>Setiap Prudent wajib menjaga kebersihan diri dan lingkungan sekolah[cite: 13].</li>
                <li>
                  Setiap Prudent wajib:
                  <ul className="list-disc list-inside pl-6 mt-1 space-y-0.5">
                    <li>Membuang sampah pada tempatnya sesuai jenis sampah[cite: 13].</li>
                    <li>Melaksanakan piket kelas sesuai jadwal[cite: 13].</li>
                    <li>Menjaga kebersihan ruang kelas, halaman, toilet, dan fasilitas sekolah[cite: 13].</li>
                    <li>Mengingatkan sesama Prudent untuk menjaga kebersihan lingkungan[cite: 13].</li>
                    <li>Menggunakan fasilitas kebersihan sesuai peruntukannya[cite: 13].</li>
                  </ul>
                </li>
                <li>Pelanggaran terhadap ketentuan pada ayat (1), (2) dikenakan pembinaan dan sanksi sesuai dengan BAB PEMBINAAN, PENGHARGAAN, DAN SANKSI[cite: 13].</li>
              </ol>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 24</span>
                <h2 className="text-lg font-bold text-slate-900">DISIPLIN NONKURIKULER</h2>
              </div>
              <ol className="list-decimal list-inside pl-2 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>Setiap Prudent wajib mengikuti sekurang-kurangnya satu kegiatan nonkurikuler yang diselenggarakan sekolah[cite: 13].</li>
                <li>Prudent dapat mengikuti paling banyak tiga kegiatan nonkurikuler sesuai minat dan bakat[cite: 13].</li>
                <li>Prudent wajib mengikuti kegiatan secara aktif, tertib, dan bertanggung jawab[cite: 13].</li>
                <li>Prudent wajib menjaga nama baik sekolah selama mengikuti kegiatan nonkurikuler di dalam maupun di luar sekolah[cite: 13].</li>
                <li>Prudent wajib mematuhi tata tertib kegiatan nonkurikuler serta arahan pembina kegiatan[cite: 13].</li>
                <li>Pelanggaran terhadap ketentuan pada ayat (1), (2), (3), (4), (5) dikenakan pembinaan dan sanksi sesuai dengan BAB PEMBINAAN, PENGHARGAAN, DAN SANKSI[cite: 13].</li>
              </ol>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 25</span>
                <h2 className="text-lg font-bold text-slate-900">DISIPLIN TRANSPORTASI</h2>
              </div>
              <ol className="list-decimal list-inside pl-2 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>Prudent yang belum memiliki Surat Izin Mengemudi (SIM) wajib menggunakan transportasi umum atau diantar oleh orang tua/wali[cite: 13].</li>
                <li>Prudent wajib mematuhi tata tertib lalu lintas selama perjalanan menuju dan dari sekolah[cite: 13].</li>
                <li>
                  Prudent yang membawa kendaraan bermotor ke sekolah wajib:
                  <ul className="list-disc list-inside pl-6 mt-1 space-y-0.5">
                    <li>Memiliki SIM sesuai ketentuan peraturan perundang-undangan[cite: 13].</li>
                    <li>Membawa dokumen kendaraan yang sah[cite: 13].</li>
                    <li>Menggunakan helm berstandar SNI[cite: 13].</li>
                    <li>Menggunakan jaket saat berkendara[cite: 13].</li>
                    <li>Menggunakan kendaraan dalam kondisi standar dan tidak menggunakan knalpot yang menimbulkan kebisingan[cite: 13].</li>
                    <li>Memarkir kendaraan pada tempat yang telah ditentukan oleh sekolah[cite: 13].</li>
                  </ul>
                </li>
                <li>Pelanggaran terhadap ketentuan pada ayat (1), (2), (3) dikenakan pembinaan dan sanksi sesuai dengan BAB PEMBINAAN, PENGHARGAAN, DAN SANKSI[cite: 13].</li>
              </ol>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 26</span>
                <h2 className="text-lg font-bold text-slate-900">DISIPLIN DALAM PEMBELAJARAN</h2>
              </div>
              <ol className="list-decimal list-inside pl-2 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>
                  Prudent wajib:
                  <ul className="list-disc list-inside pl-6 mt-1 space-y-0.5">
                    <li>Mengikuti pembelajaran sampai selesai[cite: 13].</li>
                    <li>Membawa perlengkapan belajar[cite: 13].</li>
                    <li>Menjaga ketertiban kelas[cite: 13].</li>
                    <li>Mengumpulkan tugas tepat waktu[cite: 13].</li>
                    <li>Mengikuti asesmen secara jujur[cite: 13].</li>
                    <li>Tidak mengganggu proses pembelajaran[cite: 13].</li>
                    <li>Menggunakan perangkat pembelajaran sesuai arahan guru[cite: 13].</li>
                    <li>Menjaga kejujuran akademik serta tidak melakukan plagiarisme maupun kecurangan dalam bentuk apa pun[cite: 13].</li>
                    <li>Menjaga ketenangan kelas dan menghormati proses belajar mengajar[cite: 13].</li>
                  </ul>
                </li>
                <li>Pelanggaran terhadap ketentuan pada ayat (1) dikenakan pembinaan dan sanksi sesuai dengan BAB PEMBINAAN, PENGHARGAAN, DAN SANKSI[cite: 13].</li>
              </ol>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 27</span>
                <h2 className="text-lg font-bold text-slate-900">DISIPLIN PENGGUNAAN SARANA DAN TEKNOLOGI SEKOLAH</h2>
              </div>
              <ol className="list-decimal list-inside pl-2 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>Setiap Prudent wajib menggunakan sarana, prasarana, jaringan internet, perangkat teknologi informasi, dan fasilitas sekolah secara bertanggung jawab[cite: 13].</li>
                <li>
                  Prudent wajib:
                  <ul className="list-disc list-inside pl-6 mt-1 space-y-0.5">
                    <li>Menggunakan telepon genggam hanya untuk kepentingan pembelajaran atas izin guru[cite: 13].</li>
                    <li>Menjaga dan menggunakan fasilitas sekolah dengan baik[cite: 13].</li>
                    <li>Tidak mengakses situs, aplikasi, maupun konten yang bertentangan dengan norma agama, kesusilaan, hukum, maupun tata tertib sekolah[cite: 13].</li>
                    <li>Tidak merekam, memotret, maupun menyebarluaskan foto, video, atau dokumen sekolah tanpa izin pihak yang berwenang[cite: 13].</li>
                    <li>Menjaga keamanan akun dan data pribadi serta tidak menyalahgunakan media digital[cite: 13].</li>
                    <li>Tidak menggunakan perangkat teknologi sekolah untuk kepentingan pribadi yang bertentangan dengan kegiatan pembelajaran[cite: 13].</li>
                  </ul>
                </li>
                <li>Pelanggaran terhadap ketentuan pada ayat (1) dan ayat (2) dikenakan pembinaan dan sanksi sesuai dengan BAB PEMBINAAN, PENGHARGAAN, DAN SANKSI[cite: 13].</li>
              </ol>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 28</span>
                <h2 className="text-lg font-bold text-slate-900">KEPATUHAN TERHADAP PEMBINAAN</h2>
              </div>
              <ol className="list-decimal list-inside pl-2 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>Setiap Prudent wajib mengikuti seluruh proses pembinaan yang diberikan oleh sekolah[cite: 13].</li>
                <li>Setiap Prudent wajib menunjukkan sikap kooperatif selama proses pembinaan berlangsung[cite: 13].</li>
                <li>Orang tua/wali wajib mendukung proses pembinaan apabila diperlukan[cite: 13].</li>
                <li>Prudent yang menolak mengikuti proses pembinaan dianggap melakukan pelanggaran terhadap Dokumen Kesepahaman[cite: 13].</li>
                <li>Pelanggaran terhadap ketentuan ini dikenakan pembinaan dan sanksi sesuai BAB PEMBINAAN, PENGHARGAAN, DAN SANKSI[cite: 13].</li>
              </ol>
            </div>
          </div>
        )}

        {/* TAB 6: BAB VI - LARANGAN */}
        {activeTab === 6 && (
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 29</span>
                <h2 className="text-lg font-bold text-slate-900">LARANGAN BAGI PRUDENT</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-semibold">Setiap Prudent dilarang:</p>
              <ul className="list-decimal list-inside pl-2 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li>Merokok, menggunakan rokok elektrik (vape), atau produk sejenis[cite: 13].</li>
                <li>Mengonsumsi, membawa, atau mengedarkan minuman keras, narkotika, psikotropika, dan zat adiktif lainnya[cite: 13].</li>
                <li>Membawa senjata tajam, petasan, atau benda lain yang dapat membahayakan keselamatan[cite: 13].</li>
                <li>Melakukan perundungan (bullying), kekerasan, intimidasi, pelecehan, provokasi, maupun tindakan yang mengganggu keamanan dan ketertiban sekolah[cite: 13].</li>
                <li>Melakukan pencurian, pemerasan, perjudian, atau tindakan lain yang melanggar hukum[cite: 13].</li>
                <li>Merusak fasilitas sekolah maupun barang milik orang lain[cite: 13].</li>
                <li>Membolos, keluar lingkungan sekolah tanpa izin, atau memalsukan surat maupun tanda tangan[cite: 13].</li>
                <li>Menggunakan telepon genggam atau perangkat elektronik untuk hal-hal yang tidak berkaitan dengan pembelajaran tanpa izin guru[cite: 13].</li>
                <li>Mengunggah, menyebarluaskan, atau membuat konten di media sosial yang dapat merugikan nama baik sekolah maupun warga sekolah[cite: 13].</li>
                <li>Melakukan tindakan lain yang bertentangan dengan norma agama, hukum, kesusilaan, dan tata tertib sekolah[cite: 13].</li>
                <li>Membawa, menyimpan, atau menyebarluaskan materi yang bertentangan dengan norma agama, kesusilaan, dan peraturan perundang-undangan[cite: 13].</li>
                <li>Menggunakan identitas sekolah untuk kepentingan pribadi tanpa izin pihak sekolah[cite: 13].</li>
                <li>Memalsukan data akademik, administrasi, maupun dokumen sekolah[cite: 13].</li>
              </ul>
            </div>
          </div>
        )}

        {/* TAB 7: BAB VII - PEMBINAAN DAN SANKSI */}
        {activeTab === 7 && (
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 30</span>
                <h2 className="text-lg font-bold text-slate-900">PEMBINAAN</h2>
              </div>
              <ol className="list-decimal list-inside pl-2 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li>Pembinaan diberikan kepada Prudent yang melakukan pelanggaran sebagai upaya pendidikan dan perbaikan perilaku[cite: 13].</li>
                <li>
                  Bentuk pembinaan dapat berupa:
                  <ul className="list-disc list-inside pl-6 mt-1 space-y-0.5">
                    <li>Teguran lisan[cite: 13].</li>
                    <li>Teguran tertulis[cite: 13].</li>
                    <li>Pembinaan oleh Mentor[cite: 13].</li>
                    <li>Pembinaan oleh Guru Bimbingan dan Konseling[cite: 13].</li>
                    <li>Pembinaan oleh Kesiswaan[cite: 13].</li>
                    <li>Pemanggilan orang tua/wali[cite: 13].</li>
                    <li>Penugasan edukatif atau pelayanan sosial di lingkungan sekolah[cite: 13].</li>
                  </ul>
                </li>
                <li>Pembinaan dilaksanakan secara bertahap dengan mengedepankan pendekatan edukatif, persuasif, dan pembentukan karakter[cite: 13].</li>
              </ol>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 31</span>
                <h2 className="text-lg font-bold text-slate-900">KLASIFIKASI PELANGGARAN</h2>
              </div>
              <ol className="list-decimal list-inside pl-2 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li>
                  Pelanggaran diklasifikasikan menjadi:
                  <ul className="list-disc list-inside pl-6 mt-1 space-y-0.5">
                    <li>Pelanggaran ringan[cite: 13].</li>
                    <li>Pelanggaran sedang[cite: 13].</li>
                    <li>Pelanggaran berat[cite: 13].</li>
                    <li>Pelanggaran sangat berat[cite: 13].</li>
                  </ul>
                </li>
                <li>Jenis pelanggaran pada setiap klasifikasi sebagaimana dimaksud pada ayat (1) diatur lebih lanjut dalam Lampiran Dokumen Kesepahaman[cite: 13].</li>
                <li>Ketentuan mengenai bentuk pelanggaran, bobot pelanggaran, dan mekanisme penanganannya tercantum dalam Lampiran Dokumen Kesepahaman yang merupakan bagian tidak terpisahkan dari dokumen ini[cite: 13].</li>
              </ol>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 32</span>
                <h2 className="text-lg font-bold text-slate-900">SANKSI</h2>
              </div>
              <ol className="list-decimal list-inside pl-2 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li>Sanksi diberikan secara bertahap sesuai dengan tingkat pelanggaran yang dilakukan[cite: 13].</li>
                <li>
                  Bentuk sanksi dapat berupa:
                  <ul className="list-disc list-inside pl-6 mt-1 space-y-0.5">
                    <li>Teguran lisan[cite: 13].</li>
                    <li>Teguran tertulis[cite: 13].</li>
                    <li>Surat Peringatan (SP) I[cite: 13].</li>
                    <li>Surat Peringatan (SP) II[cite: 13].</li>
                    <li>Surat Peringatan (SP) III[cite: 13].</li>
                    <li>Pemanggilan orang tua/wali[cite: 13].</li>
                    <li>Penugasan edukatif[cite: 13].</li>
                    <li>Penggantian atau perbaikan fasilitas yang dirusak[cite: 13].</li>
                    <li>Tindakan pembinaan atau sanksi edukatif lainnya sesuai dengan kebijakan Kesiswaan dan Principal SMK Prudent School[cite: 13].</li>
                  </ul>
                </li>
                <li>Pemberian sanksi dilakukan secara objektif, proporsional, edukatif, dan mempertimbangkan tingkat pelanggaran serta rekam jejak Prudent[cite: 13].</li>
              </ol>
            </div>
          </div>
        )}

        {/* TAB 8: BAB VIII - PENGHARGAAN */}
        {activeTab === 8 && (
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 33</span>
                <h2 className="text-lg font-bold text-slate-900">PENGHARGAAN</h2>
              </div>
              <ol className="list-decimal list-inside pl-2 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li>Sekolah memberikan penghargaan kepada Prudent yang menunjukkan sikap disiplin, berprestasi, dan menjadi teladan[cite: 13].</li>
                <li>
                  Bentuk penghargaan dapat berupa:
                  <ul className="list-disc list-inside pl-6 mt-1 space-y-0.5">
                    <li>Piagam penghargaan[cite: 13].</li>
                    <li>Sertifikat[cite: 13].</li>
                    <li>Penghargaan sebagai Prudent Teladan[cite: 13].</li>
                    <li>Bentuk penghargaan lain sesuai kebijakan sekolah[cite: 13].</li>
                    <li>Rekomendasi mengikuti lomba[cite: 13].</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        )}

        {/* TAB 9: BAB IX - PERAN ORANG TUA/WALI DALAM PEMBINAAN */}
        {activeTab === 9 && (
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 34</span>
                <h2 className="text-lg font-bold text-slate-900">PERAN ORANG TUA/WALI DALAM PEMBINAAN</h2>
              </div>
              <ol className="list-decimal list-inside pl-2 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li>Orang tua/wali berperan sebagai mitra sekolah dalam mendukung pembinaan karakter, kedisiplinan, dan budaya kerja profesional Prudent[cite: 13].</li>
                <li>
                  Dalam melaksanakan peran sebagaimana dimaksud pada ayat (1), orang tua/wali berkewajiban:
                  <ul className="list-disc list-inside pl-6 mt-1 space-y-0.5">
                    <li>Mendukung pelaksanaan Dokumen Kesepahaman yang berlaku di SMK Prudent School[cite: 13].</li>
                    <li>Memberikan teladan sikap, perilaku, dan kedisiplinan kepada Prudent di lingkungan keluarga[cite: 13].</li>
                    <li>Melakukan pengawasan terhadap perilaku, pergaulan, serta penggunaan media digital Prudent di luar lingkungan sekolah[cite: 13].</li>
                    <li>Menjalin komunikasi yang aktif, terbuka, dan berkesinambungan dengan pihak sekolah mengenai perkembangan Prudent[cite: 13].</li>
                    <li>Menghadiri undangan atau panggilan sekolah dalam rangka pembinaan Prudent[cite: 13].</li>
                    <li>Bekerja sama dengan sekolah dalam melaksanakan tindak lanjut pembinaan terhadap Prudent yang melakukan pelanggaran[cite: 13].</li>
                    <li>Memberikan dukungan moral dan motivasi kepada Prudent agar memperbaiki perilaku, meningkatkan kedisiplinan, dan mengembangkan karakter yang baik[cite: 13].</li>
                    <li>Memastikan Prudent mematuhi ketentuan dalam Dokumen Kesepahaman baik di lingkungan sekolah maupun di luar lingkungan sekolah[cite: 13].</li>
                  </ul>
                </li>
                <li>Dalam hal Prudent melakukan pelanggaran yang memerlukan pembinaan lebih lanjut, orang tua/wali wajib bekerja sama dengan sekolah untuk melaksanakan program pembinaan sesuai dengan rekomendasi sekolah[cite: 13].</li>
                <li>Sekolah dan orang tua/wali membangun kemitraan yang saling menghormati, terbuka, dan bertanggung jawab dalam mendukung keberhasilan pendidikan serta pembentukan karakter Prudent[cite: 13].</li>
              </ol>
            </div>
          </div>
        )}

        {/* TAB 10: BAB X - KETENTUAN PENUTUP */}
        {activeTab === 10 && (
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PASAL 35</span>
                <h2 className="text-lg font-bold text-slate-900">KETENTUAN PENUTUP</h2>
              </div>
              <ol className="list-decimal list-inside pl-2 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li>Dokumen Kesepahaman ini mulai berlaku pada tanggal ditetapkan dan ditandatangani oleh Principal SMK Prudent School, Kesiswaan, Prudent, dan orang tua/wali[cite: 13].</li>
                <li>Hal-hal yang belum diatur dalam Dokumen Kesepahaman ini akan ditetapkan kemudian melalui keputusan Principal SMK Prudent School sepanjang tidak bertentangan dengan ketentuan yang berlaku[cite: 13].</li>
                <li>Seluruh pihak berkewajiban melaksanakan isi Dokumen Kesepahaman ini dengan penuh tanggung jawab demi terciptanya budaya kerja profesional di lingkungan SMK Prudent School[cite: 13].</li>
                <li>Dokumen Kesepahaman ini dibuat dengan itikad baik untuk dipatuhi oleh seluruh pihak sebagai bentuk komitmen bersama dalam mewujudkan budaya kerja profesional di SMK Prudent School[cite: 13].</li>
              </ol>
            </div>
          </div>
        )}

        {/* TAB 11: LAMPIRAN (LAMPIRAN I - IV) */}
        {activeTab === 11 && (
          <div className="space-y-6">
            {/* LAMPIRAN I */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">LAMPIRAN I</span>
                <h2 className="text-lg font-bold text-slate-900">JENIS PELANGGARAN, KLASIFIKASI, DAN PEMBINAAN/SANKSI</h2>
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li>Pembinaan dan sanksi diberikan secara bertahap, objektif, proporsional, edukatif, berkeadilan, serta mempertimbangkan tingkat pelanggaran, dan rekam jejak Prudent[cite: 13].</li>
                <li>Prudent yang mengulangi pelanggaran dapat dikenakan peningkatan kategori pembinaan dan sanksi[cite: 13].</li>
                <li>Apabila dalam satu peristiwa Prudent melakukan lebih dari satu jenis pelanggaran, pembinaan dan sanksi diberikan berdasarkan pelanggaran dengan kategori tertinggi tanpa mengesampingkan pembinaan terhadap pelanggaran lainnya[cite: 13].</li>
                <li>Untuk pelanggaran yang mengakibatkan kerugian terhadap sekolah atau pihak lain, Prudent wajib melakukan penggantian, perbaikan, atau bentuk tanggung jawab lain sesuai ketentuan sekolah[cite: 13].</li>
                <li>Untuk pelanggaran yang diduga merupakan tindak pidana, sekolah dapat berkoordinasi dengan orang tua/wali serta instansi yang berwenang sesuai ketentuan peraturan perundang-undangan[cite: 13].</li>
                <li>Penetapan bentuk pembinaan dan sanksi dilakukan oleh sekolah berdasarkan hasil klarifikasi, pemeriksaan, dan pertimbangan Kesiswaan, Koordinator BK serta persetujuan Principal SMK Prudent School[cite: 13].</li>
                <li>Untuk pelanggaran kategori ringan yang dikenai teguran lisan, pembinaan diberikan paling banyak 3 (tiga) kali. Apabila Prudent tetap mengulangi pelanggaran yang sama setelah menerima 3 (tiga) kali teguran lisan, maka penanganan ditingkatkan ke tahap pembinaan berikutnya berupa teguran tertulis dan/atau pembinaan oleh Mentor, atau pihak Kesiswaan sesuai tingkat pelanggaran[cite: 13].</li>
              </ul>

              {/* Tabel Pelanggaran 1-58 */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 mt-4">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-teal-700 text-white font-bold">
                      <th className="p-2.5 border-b border-teal-800 w-12 text-center">NO.</th>
                      <th className="p-2.5 border-b border-teal-800">JENIS PELANGGARAN</th>
                      <th className="p-2.5 border-b border-teal-800 w-28">KATEGORI</th>
                      <th className="p-2.5 border-b border-teal-800">BENTUK PEMBINAAN/SANKSI</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr><td className="p-2 text-center font-bold">1</td><td className="p-2">Tidak memakai name tag[cite: 13]</td><td className="p-2 font-semibold text-emerald-600">Ringan[cite: 13]</td><td className="p-2">Teguran lisan[cite: 13]</td></tr>
                    <tr className="bg-slate-50"><td className="p-2 text-center font-bold">2</td><td className="p-2">Tidak memakai dasi[cite: 13]</td><td className="p-2 font-semibold text-emerald-600">Ringan[cite: 13]</td><td className="p-2">Teguran lisan[cite: 13]</td></tr>
                    <tr><td className="p-2 text-center font-bold">3</td><td className="p-2">Tidak memakai ikat pinggang[cite: 13]</td><td className="p-2 font-semibold text-emerald-600">Ringan[cite: 13]</td><td className="p-2">Teguran lisan[cite: 13]</td></tr>
                    <tr className="bg-slate-50"><td className="p-2 text-center font-bold">4</td><td className="p-2">Tidak memakai atribut sekolah secara lengkap[cite: 13]</td><td className="p-2 font-semibold text-emerald-600">Ringan[cite: 13]</td><td className="p-2">Teguran lisan[cite: 13]</td></tr>
                    <tr><td className="p-2 text-center font-bold">5</td><td className="p-2">Tidak memakai topi pada upacara atau kegiatan yang diwajibkan[cite: 13]</td><td className="p-2 font-semibold text-emerald-600">Ringan[cite: 13]</td><td className="p-2">Teguran lisan[cite: 13]</td></tr>
                    <tr className="bg-slate-50"><td className="p-2 text-center font-bold">6</td><td className="p-2">Menggunakan seragam tidak sesuai jadwal yang ditentukan[cite: 13]</td><td className="p-2 font-semibold text-emerald-600">Ringan[cite: 13]</td><td className="p-2">Teguran lisan[cite: 13]</td></tr>
                    <tr><td className="p-2 text-center font-bold">7</td><td className="p-2">Kaos kaki tidak sesuai ketentuan[cite: 13]</td><td className="p-2 font-semibold text-emerald-600">Ringan[cite: 13]</td><td className="p-2">Teguran lisan[cite: 13]</td></tr>
                    <tr className="bg-slate-50"><td className="p-2 text-center font-bold">8</td><td className="p-2">Sepatu tidak sesuai ketentuan[cite: 13]</td><td className="p-2 font-semibold text-emerald-600">Ringan[cite: 13]</td><td className="p-2">Teguran lisan[cite: 13]</td></tr>
                    <tr><td className="p-2 text-center font-bold">9</td><td className="p-2">Rambut tidak sesuai ketentuan[cite: 13]</td><td className="p-2 font-semibold text-emerald-600">Ringan[cite: 13]</td><td className="p-2">Pembinaan dan batas waktu perbaikan[cite: 13]</td></tr>
                    <tr className="bg-slate-50"><td className="p-2 text-center font-bold">10</td><td className="p-2">Mewarnai rambut atau menggunakan model rambut yang dilarang[cite: 13]</td><td className="p-2 font-semibold text-emerald-600">Ringan[cite: 13]</td><td className="p-2">Pembinaan dan batas waktu perbaikan[cite: 13]</td></tr>
                    <tr><td className="p-2 text-center font-bold">11</td><td className="p-2">Tidak menggunakan hairnet/ciput sesuai ketentuan[cite: 13]</td><td className="p-2 font-semibold text-emerald-600">Ringan[cite: 13]</td><td className="p-2">Teguran lisan[cite: 13]</td></tr>
                    <tr className="bg-slate-50"><td className="p-2 text-center font-bold">12</td><td className="p-2">Seragam dimodifikasi atau tidak sesuai ukuran[cite: 13]</td><td className="p-2 font-semibold text-emerald-600">Ringan[cite: 13]</td><td className="p-2">Pembinaan dan perbaikan saat itu juga[cite: 13]</td></tr>
                    <tr><td className="p-2 text-center font-bold">13</td><td className="p-2">Celana atau rok dimodifikasi atau tidak sesuai ketentuan[cite: 13]</td><td className="p-2 font-semibold text-emerald-600">Ringan[cite: 13]</td><td className="p-2">Pembinaan dan batas waktu perbaikan[cite: 13]</td></tr>
                    <tr className="bg-slate-50"><td className="p-2 text-center font-bold">14</td><td className="p-2">Menggunakan make-up yang tidak sesuai ketentuan[cite: 13]</td><td className="p-2 font-semibold text-emerald-600">Ringan[cite: 13]</td><td className="p-2">Teguran dan membersihkan riasan[cite: 13]</td></tr>
                    <tr><td className="p-2 text-center font-bold">15</td><td className="p-2">Menggunakan parfum secara berlebihan[cite: 13]</td><td className="p-2 font-semibold text-emerald-600">Ringan[cite: 13]</td><td className="p-2">Teguran lisan[cite: 13]</td></tr>
                    <tr className="bg-slate-50"><td className="p-2 text-center font-bold">16</td><td className="p-2">Menggunakan aksesori/perhiasan yang tidak sesuai ketentuan[cite: 13]</td><td className="p-2 font-semibold text-emerald-600">Ringan[cite: 13]</td><td className="p-2">Teguran lisan[cite: 13]</td></tr>
                    <tr><td className="p-2 text-center font-bold">17</td><td className="p-2">Terlambat hadir ke sekolah[cite: 13]</td><td className="p-2 font-semibold text-amber-600">Sedang[cite: 13]</td><td className="p-2">Pembinaan Guru Piket/Mentor[cite: 13]</td></tr>
                    <tr className="bg-slate-50"><td className="p-2 text-center font-bold">18</td><td className="p-2">Tidak melapor kepada guru piket setelah terlambat[cite: 13]</td><td className="p-2 font-semibold text-amber-600">Sedang[cite: 13]</td><td className="p-2">Pembinaan Guru Piket[cite: 13]</td></tr>
                    <tr><td className="p-2 text-center font-bold">19</td><td className="p-2">Tidak mengikuti pembelajaran tanpa izin[cite: 13]</td><td className="p-2 font-semibold text-amber-600">Sedang[cite: 13]</td><td className="p-2">Pembinaan Mentor[cite: 13]</td></tr>
                    <tr className="bg-slate-50"><td className="p-2 text-center font-bold">20</td><td className="p-2">Tidak mengikuti kegiatan keagamaan atau kegiatan sekolah tanpa alasan yang sah[cite: 13]</td><td className="p-2 font-semibold text-amber-600">Sedang[cite: 13]</td><td className="p-2">Pembinaan Mentor[cite: 13]</td></tr>
                    <tr><td className="p-2 text-center font-bold">21</td><td className="p-2">Tidak mengikuti kegiatan nonkurikuler tanpa alasan[cite: 13]</td><td className="p-2 font-semibold text-amber-600">Sedang[cite: 13]</td><td className="p-2">Pembinaan Mentor/Mentor[cite: 13]</td></tr>
                    <tr className="bg-slate-50"><td className="p-2 text-center font-bold">22</td><td className="p-2">Tidak mengikuti piket kelas[cite: 13]</td><td className="p-2 font-semibold text-amber-600">Sedang[cite: 13]</td><td className="p-2">Penugasan kebersihan[cite: 13]</td></tr>
                    <tr><td className="p-2 text-center font-bold">23</td><td className="p-2">Tidak menjaga kebersihan lingkungan sekolah[cite: 13]</td><td className="p-2 font-semibold text-amber-600">Sedang[cite: 13]</td><td className="p-2">Penugasan kebersihan[cite: 13]</td></tr>
                    <tr className="bg-slate-50"><td className="p-2 text-center font-bold">24</td><td className="p-2">Tidak membawa perlengkapan belajar[cite: 13]</td><td className="p-2 font-semibold text-amber-600">Sedang[cite: 13]</td><td className="p-2">Pembinaan Guru Mata Pelajaran[cite: 13]</td></tr>
                    <tr><td className="p-2 text-center font-bold">25</td><td className="p-2">Tidak mengumpulkan tugas secara berulang[cite: 13]</td><td className="p-2 font-semibold text-amber-600">Sedang[cite: 13]</td><td className="p-2">Pembinaan Guru Mata Pelajaran[cite: 13]</td></tr>
                    <tr className="bg-slate-50"><td className="p-2 text-center font-bold">26</td><td className="p-2">Mengganggu proses pembelajaran[cite: 13]</td><td className="p-2 font-semibold text-amber-600">Sedang[cite: 13]</td><td className="p-2">Pembinaan Guru Mata Pelajaran[cite: 13]</td></tr>
                    <tr><td className="p-2 text-center font-bold">27</td><td className="p-2">Menggunakan telepon genggam tanpa izin guru[cite: 13]</td><td className="p-2 font-semibold text-amber-600">Sedang[cite: 13]</td><td className="p-2">Penyitaan sementara dan pembinaan[cite: 13]</td></tr>
                    <tr className="bg-slate-50"><td className="p-2 text-center font-bold">28</td><td className="p-2">Menggunakan perangkat teknologi sekolah tidak sesuai ketentuan[cite: 13]</td><td className="p-2 font-semibold text-amber-600">Sedang[cite: 13]</td><td className="p-2">Pembinaan Guru/Mentor[cite: 13]</td></tr>
                    <tr><td className="p-2 text-center font-bold">29</td><td className="p-2">Membolos[cite: 13]</td><td className="p-2 font-semibold text-orange-600">Berat[cite: 13]</td><td className="p-2">SP I dan Pemanggilan Orang Tua[cite: 13]</td></tr>
                    <tr className="bg-slate-50"><td className="p-2 text-center font-bold">30</td><td className="p-2">Keluar lingkungan sekolah tanpa izin[cite: 13]</td><td className="p-2 font-semibold text-orange-600">Berat[cite: 13]</td><td className="p-2">SP I dan Pembinaan Kesiswaan[cite: 13]</td></tr>
                    <tr><td className="p-2 text-center font-bold">31</td><td className="p-2">Menggunakan kendaraan yang tidak sesuai standar sekolah (misalnya knalpot bising/brong)[cite: 13]</td><td className="p-2 font-semibold text-amber-600">Sedang[cite: 13]</td><td className="p-2">Pembinaan dan larangan membawa kendaraan sementara[cite: 13]</td></tr>
                    <tr className="bg-slate-50"><td className="p-2 text-center font-bold">32</td><td className="p-2">Tidak menyampaikan pemberitahuan ketidakhadiran sesuai prosedur sekolah[cite: 13]</td><td className="p-2 font-semibold text-amber-600">Sedang[cite: 13]</td><td className="p-2">Pembinaan Mentor[cite: 13]</td></tr>
                    <tr><td className="p-2 text-center font-bold">33</td><td className="p-2">menjalin hubungan khusus dengan lawan jenis/ berpacaran[cite: 13]</td><td className="p-2 font-semibold text-orange-600">Berat[cite: 13]</td><td className="p-2">SP I dan Pembinaan Mentor, BK, Kesiswaan[cite: 13]</td></tr>
                    <tr className="bg-slate-50"><td className="p-2 text-center font-bold">34</td><td className="p-2">Menyalahgunakan jaringan internet, akun, atau fasilitas teknologi sekolah[cite: 13]</td><td className="p-2 font-semibold text-orange-600">Berat[cite: 13]</td><td className="p-2">SP II dan Pembinaan Kesiswaan[cite: 13]</td></tr>
                    <tr><td className="p-2 text-center font-bold">35</td><td className="p-2">Berkumpul atau berada di luar lingkungan sekolah tanpa tujuan yang jelas sehingga berpotensi menimbulkan pelanggaran disiplin, mengganggu ketertiban umum, atau mencemarkan nama baik sekolah[cite: 13].</td><td className="p-2 font-semibold text-orange-600">Berat[cite: 13]</td><td className="p-2">SP II dan Pembinaan Kesiswaan[cite: 13]</td></tr>
                    <tr className="bg-slate-50"><td className="p-2 text-center font-bold">36</td><td className="p-2">Memalsukan surat izin atau tanda tangan[cite: 13]</td><td className="p-2 font-semibold text-orange-600">Berat[cite: 13]</td><td className="p-2">SP II dan Pemanggilan Orang Tua[cite: 13]</td></tr>
                    <tr><td className="p-2 text-center font-bold">37</td><td className="p-2">Melakukan vandalisme atau merusak fasilitas sekolah[cite: 13]</td><td className="p-2 font-semibold text-orange-600">Berat[cite: 13]</td><td className="p-2">SP II dan mengganti kerugian[cite: 13]</td></tr>
                    <tr className="bg-slate-50"><td className="p-2 text-center font-bold">38</td><td className="p-2">Melakukan bullying[cite: 13]</td><td className="p-2 font-semibold text-orange-600">Berat[cite: 13]</td><td className="p-2">SP II dan Pembinaan BK[cite: 13]</td></tr>
                    <tr><td className="p-2 text-center font-bold">39</td><td className="p-2">Melakukan pertengkaran tanpa tindakan fisik[cite: 13]</td><td className="p-2 font-semibold text-orange-600">Berat[cite: 13]</td><td className="p-2">SP II dan Pembinaan BK[cite: 13]</td></tr>
                    <tr className="bg-slate-50"><td className="p-2 text-center font-bold">40</td><td className="p-2">Menggunakan kata-kata kasar, menghina, ujaran kebencian, atau SARA[cite: 13]</td><td className="p-2 font-semibold text-orange-600">Berat[cite: 13]</td><td className="p-2">SP II dan Pembinaan BK[cite: 13]</td></tr>
                    <tr><td className="p-2 text-center font-bold">41</td><td className="p-2">Menyebarkan hoaks, fitnah, atau informasi provokatif[cite: 13]</td><td className="p-2 font-semibold text-orange-600">Berat[cite: 13]</td><td className="p-2">SP II dan Pembinaan Kesiswaan[cite: 13]</td></tr>
                    <tr className="bg-slate-50"><td className="p-2 text-center font-bold">42</td><td className="p-2">Mengunggah atau menyebarluaskan konten yang mencemarkan nama baik sekolah[cite: 13]</td><td className="p-2 font-semibold text-orange-600">Berat[cite: 13]</td><td className="p-2">SP II dan Pembinaan Kesiswaan[cite: 13]</td></tr>
                    <tr><td className="p-2 text-center font-bold">43</td><td className="p-2">Merekam, memotret, atau menyebarluaskan dokumentasi sekolah tanpa izin[cite: 13]</td><td className="p-2 font-semibold text-orange-600">Berat[cite: 13]</td><td className="p-2">SP II dan Pembinaan Kesiswaan[cite: 13]</td></tr>
                    <tr className="bg-slate-50"><td className="p-2 text-center font-bold">44</td><td className="p-2">Mengambil atau menggunakan barang milik orang lain tanpa izin[cite: 13]</td><td className="p-2 font-semibold text-orange-600">Berat[cite: 13]</td><td className="p-2">SP II dan Pemanggilan Orang Tua[cite: 13]</td></tr>
                    <tr><td className="p-2 text-center font-bold">45</td><td className="p-2">Menolak mengikuti proses pembinaan yang ditetapkan sekolah[cite: 13]</td><td className="p-2 font-semibold text-orange-600">Berat[cite: 13]</td><td className="p-2">SP II dan Pemanggilan Orang Tua[cite: 13]</td></tr>
                    <tr className="bg-slate-50"><td className="p-2 text-center font-bold">46</td><td className="p-2">Menggunakan identitas, logo, atau nama sekolah tanpa izin[cite: 13]</td><td className="p-2 font-semibold text-orange-600">Berat[cite: 13]</td><td className="p-2">SP II dan Pembinaan Kesiswaan[cite: 13]</td></tr>
                    <tr><td className="p-2 text-center font-bold">47</td><td className="p-2">Melakukan plagiarisme atau kecurangan akademik[cite: 13]</td><td className="p-2 font-semibold text-orange-600">Berat[cite: 13]</td><td className="p-2">SP II dan Pembinaan Mentor/BK[cite: 13]</td></tr>
                    <tr className="bg-slate-50"><td className="p-2 text-center font-bold">48</td><td className="p-2">Membawa senjata tajam tanpa izin[cite: 13]</td><td className="p-2 font-semibold text-rose-600">Sangat Berat[cite: 13]</td><td className="p-2">SP III, Pemanggilan Orang Tua, dan Sidang Kedisiplinan[cite: 13]</td></tr>
                    <tr><td className="p-2 text-center font-bold">49</td><td className="p-2">Merokok atau menggunakan vape[cite: 13]</td><td className="p-2 font-semibold text-rose-600">Sangat Berat[cite: 13]</td><td className="p-2">SP III dan Sidang Kedisiplinan[cite: 13]</td></tr>
                    <tr className="bg-slate-50"><td className="p-2 text-center font-bold">50</td><td className="p-2">Mengonsumsi atau membawa minuman keras[cite: 13]</td><td className="p-2 font-semibold text-rose-600">Sangat Berat[cite: 13]</td><td className="p-2">SP III dan Sidang Kedisiplinan[cite: 13]</td></tr>
                    <tr><td className="p-2 text-center font-bold">51</td><td className="p-2">Membawa, menggunakan, atau mengedarkan narkotika, psikotropika, dan zat adiktif lainnya[cite: 13]</td><td className="p-2 font-semibold text-rose-600">Sangat Berat[cite: 13]</td><td className="p-2">Dikembalikan kepada Orang Tua dan diproses sesuai ketentuan yang berlaku[cite: 13]</td></tr>
                    <tr className="bg-slate-50"><td className="p-2 text-center font-bold">52</td><td className="p-2">Perkelahian atau tawuran[cite: 13]</td><td className="p-2 font-semibold text-rose-600">Sangat Berat[cite: 13]</td><td className="p-2">SP III dan Sidang Kedisiplinan[cite: 13]</td></tr>
                    <tr><td className="p-2 text-center font-bold">53</td><td className="p-2">Terlibat, mengajak, memprovokasi, memfasilitasi, atau berpartisipasi dalam tindakan pertengkaran/perkelahian/tawuran[cite: 13]</td><td className="p-2 font-semibold text-rose-600">Sangat Berat[cite: 13]</td><td className="p-2">SP III dan Sidang Kedisiplinan[cite: 13]</td></tr>
                    <tr className="bg-slate-50"><td className="p-2 text-center font-bold">54
