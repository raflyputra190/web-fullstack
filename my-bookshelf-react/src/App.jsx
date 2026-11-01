import { useState } from "react";
import Header from "./components/Header";
import FormTambah from "./components/FormTambah";
import DaftarBuku from "./components/DaftarBuku";
import Ringkasan from "./components/Ringkasan";

export default function App() {
  // State utama untuk menyimpan array daftar buku
  const [listBuku, setListBuku] = useState([]);

  // Fungsi untuk nambah buku baru ke dalam state
  const handleAddBuku = (bukuBaru) => {
    setListBuku([...listBuku, bukuBaru]);
  };

  return (
    <div className="bg-light min-vh-100 pb-5">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <FormTambah onAddBuku={handleAddBuku} />
            <Ringkasan totalBuku={listBuku.length} />
          </div>
          <div className="col-md-8">
            <DaftarBuku listBuku={listBuku} />
          </div>
        </div>
      </div>
    </div>
  );
}