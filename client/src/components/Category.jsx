import axios from "axios";
import { useEffect, useState } from "react";

export default function Category() {
  const [category, setCategory] = useState([]);

  const fetchCategory = async (category) => {
    try {
      const response = await axios.get("http://localhost:3000/getAllCategory");
      const data = response.data;
      // console.log(data, "fetch category");

      setCategory(data);
    } catch (error) {
      console.log(error, "error fetch category");
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="py-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2">
          {/* category card */}
          {category.map((item, idx) => (
            <div
              className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden transition-shadow duration-300 hover:shadow-xl"
              key={idx}
            >
              <img
                src={item.imgUrl}
                alt={item.name}
                className="w-full h-[110px] object-cover"
              />
              <div className="p-[10px]">
                <p className="text-base font-medium text-gray-800 text-center">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
