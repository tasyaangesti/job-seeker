import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineUser } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { PiMoneyWavyLight } from "react-icons/pi";

export default function CardJob() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async (jobs) => {
    try {
      const response = await axios.get("http://localhost:3000/getAllJobs");
      const data = response.data;
      // console.log(data, ">> fetch job");

      setJobs(data);
    } catch (error) {
      console.log(error, ">> error fetch job");
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

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
