import { useState, useEffect } from 'react';
import Header from "./components/Header";
import FormTambah from "./components/FormTambah";
import DaftarBuku from "./components/DaftarBuku";
import Ringkasan from "./components/Ringkasan";
import RekomendasiBuku from "./components/RekomendasiBuku";

export default function App() {
  // State utama untuk menyimpan array daftar buku
  const [listBuku, setListBuku] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/buku')
      .then(res => res.json())
      .then(data => setListBuku(data))
      .catch(err => console.error("Gagal narik data:", err));
  }, []);

  // Fungsi untuk nambah buku baru ke dalam state
  const handleAddBuku = async (bukuBaru) => {
    try {
      const response = await fetch('http://localhost:3000/buku', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          judul: bukuBaru.judul,
          penulis: bukuBaru.penulis,
          tahunRilis: Number(bukuBaru.tahunRilis) || 2024 // Sesuaikan kalau di form ada tahun rilis
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        setListBuku([...listBuku, data]); // Tambahin buku dari database ke state
      } else {
        alert("Gagal nambahin buku, mungkin judulnya udah ada!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleToggleStatus = async (id, currentStatus) => {
    try {
      const response = await fetch(`http://localhost:3000/buku/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sudahDibaca: !currentStatus })
      });

      if (response.ok) {
        // Kalau server sukses update, baru kita ubah tampilan di layar (state)
        const updatedList = listBuku.map((buku) =>
          buku.id === id ? { ...buku, sudahDibaca: !currentStatus } : buku
        );
        setListBuku(updatedList);
      } else {
        alert("Gagal ngubah status buku di server!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-light min-vh-100 pb-5">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <FormTambah onAddBuku={handleAddBuku} />
            <Ringkasan totalBuku={listBuku.length}/>
            <RekomendasiBuku/>
          </div>
          <div className="col-md-8">
            <DaftarBuku listBuku={listBuku} onToggleStatus={handleToggleStatus} />
          </div>
        </div>
      </div>
    </div>
  );
}