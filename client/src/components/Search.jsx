export default function Search() {
  return (
    <div className="flex">
      <div className="w-full">
        <div className="relative flex">
          <input
            type="text"
            className="w-screen px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#FF9100] sm:text-lg"
            placeholder="Search by job title & company"
          />
          <button
            className="px-6 py-2 bg-[#FF9100] text-white font-semibold rounded-r-lg hover:bg-[#f9a352] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9100] sm:text-lg"
            type="button"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
