import { AiOutlineUser } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { PiMoneyWavyLight } from "react-icons/pi";

const jobs = [
  {
    position: "Full Stack Developer",
    company: "PT Xsis Mitra Utama",
    typeOfWork: "Penuh Waktu",
    location: "Jakarta",
    experienceOfWork: "Fresh Graduate",
    salary: "RP5.500.000",
  },
  {
    position: "Sales Executive",
    company: "Global Trade Co.",
    typeOfWork: "Penuh Waktu",
    location: "Jakarta",
    experienceOfWork: "2-3 Tahun Pengalaman",
    salary: "RP6.000.000",
  },
  {
    position: "Digital Marketing Specialist",
    company: "Creative Ads",
    typeOfWork: "Paruh Waktu",
    location: "Bandung",
    experienceOfWork: "1-2 Tahun Pengalaman",
    salary: "RP5.500.000",
  },
  {
    position: "Frontend Developer",
    company: "Tech Solutions",
    typeOfWork: "Paruh Waktu",
    location: "Bandung",
    experienceOfWork: "2-3 Tahun Pengalaman",
    salary: "RP7.000.000",
  },
  {
    position: "Business Development Manager",
    company: "Tech Ventures",
    typeOfWork: "Penuh Waktu",
    location: "Jakarta",
    experienceOfWork: "4-5 Tahun Pengalaman",
    salary: "RP10.000.000",
  },
  {
    position: "Backend Developer",
    company: "Digital Innovators",
    typeOfWork: "Kontrak",
    location: "Surabaya",
    experienceOfWork: "4-5 Tahun Pengalaman",
    salary: "RP10.000.000",
  },
  {
    position: "Administrative Assistant",
    company: "Office Solutions",
    typeOfWork: "Penuh Waktu",
    location: "Surabaya",
    experienceOfWork: "Fresh Graduate",
    salary: "RP4.500.000",
  },
  {
    position: "UI/UX Designer",
    company: "Creative Labs",
    typeOfWork: "Kontrak",
    location: "Yogyakarta",
    experienceOfWork: "1-2 Tahun Pengalaman",
    salary: "RP6.500.000",
  },
  {
    position: "Marketing Coordinator",
    company: "Brand Builders",
    typeOfWork: "Kontrak",
    location: "Yogyakarta",
    experienceOfWork: "3-4 Tahun Pengalaman",
    salary: "RP7.000.000",
  },
  {
    position: "Mobile App Developer",
    company: "SmartTech",
    typeOfWork: "Penuh Waktu",
    location: "Jakarta",
    experienceOfWork: "2-3 Tahun Pengalaman",
    salary: "RP8.000.000",
  },
  {
    position: "Sales Manager",
    company: "Retail Experts",
    typeOfWork: "Penuh Waktu",
    location: "Semarang",
    experienceOfWork: "5+ Tahun Pengalaman",
    salary: "RP12.000.000",
  },
  {
    position: "Data Analyst",
    company: "Data Insights",
    typeOfWork: "Penuh Waktu",
    location: "Semarang",
    experienceOfWork: "Fresh Graduate",
    salary: "RP6.000.000",
  },
];

export default function CardJob() {
  return (
    <div className="py-">
      <h1 className="text-lg font-semibold my-[20px]"> Eksplor Job</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* job card */}
          {jobs.map((item, idx) => (
            <div className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden transition-shadow duration-300 hover:border-[#FF9100] py-3">
              {/* position - company */}
              <div className="px-6" key={idx}>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.position}
                </h3>
                <p className="text-gray-600 mb-1"> {item.company}</p>
              </div>
              {/* detail */}
              <div className="mx-6 mt-4">
                <div className="my-1 flex flex-row">
                  <AiOutlineUser />
                  <p className="ml-2 -mt-1"> {item.typeOfWork}</p>
                </div>
                <div className="my-1 flex flex-row">
                  <IoLocationOutline />
                  <p className="ml-2 -mt-1"> {item.location}</p>
                </div>
                <div className="my-1 flex flex-row">
                  <MdWorkOutline />
                  <p className="ml-2 -mt-1"> {item.experienceOfWork}</p>
                </div>
                <div className="my-1 flex flex-row">
                  <PiMoneyWavyLight />
                  <p className="ml-2 -mt-1"> {item.salary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
