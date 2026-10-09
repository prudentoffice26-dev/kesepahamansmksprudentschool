// Render Gambar Lembar Pengesahan (Statis tanpa tombol upload user)
function renderPengesahanSlot() {
  detailPasalContainer.innerHTML = `
    <div class="bg-white p-4 rounded-2xl border border-slate-200 text-center space-y-3">
      <h4 class="font-bold text-slate-800 text-sm">Berkas Fisik Lembar Pengesahan</h4>
      <p class="text-xs text-slate-500">Dokumen Kesepahaman TA 2026/2027 SMK Prudent School</p>
      
      <!-- Container Display Gambar Pengesahan -->
      <div class="w-full rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50 p-2">
        <!-- Gantilah 'lembar-pengesahan.jpg' dengan nama/path file gambar kamu -->
        <img 
          src="lembar-pengesahan.jpg" 
          alt="Lembar Pengesahan SMK Prudent School" 
          class="w-full h-auto rounded-lg object-contain"
          onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'p-8 text-xs text-slate-400 font-medium\'>Gambar lembar pengesahan (lembar-pengesahan.jpg) belum ditempatkan di folder web.</div>';"
        />
      </div>
    </div>
  `;
}
