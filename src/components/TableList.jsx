import { useState, useEffect } from "react";
//import axios from "axios";

const TableComponent = () => {
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [availableDoctors, setAvailableDoctors] = useState([]);


  useEffect(() => {
    fetchDepartments();
  }, []);

  useEffect(() => {
    if (selectedDepartment) {
      fetchDoctors(selectedDepartment);
    }
  }, [selectedDepartment]);

  const fetchDepartments = async () => {
    try {
      const response = await fetch("http://localhost:5000/departments");
      const data = await response.json();
      setDepartments(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  //(`/api/doctors?department=${department}`)
  //        setDoctors(response.data);

  const fetchDoctors = async (department) => {
    try {
      setSelectedDoctor(null);
      const response = await fetch(
        `http://localhost:5000/doctors/${department}`
      );
      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchAvailableDoctors = async () => {
      try {
        setAvailableDoctors([]); // Reset previous data
        const response = await fetch(`http://localhost:5000/availability/${selectedDoctor.Doc_id}`);
        const data = await response.json();
        setAvailableDoctors(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (selectedDoctor) {
      fetchAvailableDoctors();
    }
  }, [selectedDoctor]);

  const handleDepartmentClick = (departmentName) => {
    console.log("selected department", departmentName);
    setSelectedDepartment(departmentName);
  };

  const handleDoctorClick = (doctor) => {
    console.log("selected doctor", doctor);
    setSelectedDoctor(doctor);
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Department Name
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {departments.map((department) => (
                    <tr
                      key={department.Dept_id}
                      className={`${
                        selectedDepartment === department.Dept_name
                          ? "bg-gradient-to-r from-lime-200"
                          : ""
                      } cursor-pointer hover:bg-gray-100`}
                      onClick={() =>
                        handleDepartmentClick(department.Dept_name)
                      }
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {department.Dept_name}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {selectedDepartment && (
        <div className="flex flex-col mt-4">
          <h2 className="text-lg font-medium mb-2">
            {selectedDepartment} Doctors
          </h2>
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Doctor Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Doctor ID
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {doctors.map((doctor) => (
                      <tr
                        key={doctor._id}
                        className={`${
                          selectedDoctor === doctor
                            ? "bg-gradient-to-r from-lime-200"
                            : ""
                        } cursor-pointer hover:bg-gray-100`}
                        onClick={() => handleDoctorClick(doctor)}
                        
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {doctor.Doc_name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {doctor.Doc_id}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedDoctor && (
        <div className="flex flex-col mt-4">
          <h2 className="text-lg font-medium mb-2">
            {selectedDoctor.Doc_name} Availability
          </h2>
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Doc ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Doc Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Time
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {availableDoctors.map((doctor) => (
                      <tr key={doctor.Doc_id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {doctor.Doc_id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {doctor.Doc_name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {doctor.Date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {doctor.Time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableComponent;
