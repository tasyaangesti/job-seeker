import CardJob from "../components/CardJob";
import Category from "../components/Category";
import Search from "../components/Search";

export default function Dashboard() {
  return (
    <div className="relative max-w-7xl mx-auto bg-white mt-5 p-4">
      <h1 className="text-xl font-semibold mb-[10px]">
        {" "}
        Cari <span className="text-[#FF9100]">Lowongan Kerja</span>{" "}
      </h1>
      <Search />
      <Category />
      <CardJob />
    </div>
  );
}
