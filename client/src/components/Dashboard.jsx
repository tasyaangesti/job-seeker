import CardJob from "./section/CardJob";
import Category from "./section/Category";
import Search from "./section/Search";

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
