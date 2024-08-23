import Category from "./section/Category";
import Search from "./section/Search";

export default function Dashboard() {
  return (
    <div className="relative max-w-7xl mx-auto bg-white mt-5 p-4">
      <h1 className="text-xl font-semibold mb-[10px]"> Cari Lowongan Kerja</h1>
      <Search />
      <Category />
    </div>
  );
}
