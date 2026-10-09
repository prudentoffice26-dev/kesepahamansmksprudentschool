function switchTab(tabName) {
  currentTab = tabName;
  document.getElementById("tabTitle").innerText = tabName;
  
  // Reset Bottom Nav HP (Warna Abu-abu)
  document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.classList.remove("text-brand-600");
    tab.classList.add("text-slate-400");
  });

  // Reset Sidebar Desktop (Warna Abu-abu & Hapus Background Teal)
  document.querySelectorAll(".sidebar-tab").forEach(tab => {
    tab.classList.remove("text-brand-600", "bg-brand-50");
    tab.classList.add("text-slate-400");
  });

  // Format ID Tab
  let tabSuffix = tabName.replace(/\s+/g, '-').replace('&', '');
  if (tabName === "Hak & Peran") tabSuffix = "Hak-Peran";
  if (tabName === "Ketentuan Umum") tabSuffix = "Ketentuan-Umum";

  // Aktifkan State di Mobile Bottom Nav
  const activeMobileTab = document.getElementById(`tab-${tabSuffix}`);
  if (activeMobileTab) {
    activeMobileTab.classList.remove("text-slate-400");
    activeMobileTab.classList.add("text-brand-600");
  }

  // Aktifkan State di Desktop Sidebar
  const activeSidebarTab = document.getElementById(`sidebar-tab-${tabSuffix}`);
  if (activeSidebarTab) {
    activeSidebarTab.classList.remove("text-slate-400");
    activeSidebarTab.classList.add("text-brand-600", "bg-brand-50");
  }

  renderCards();
}
