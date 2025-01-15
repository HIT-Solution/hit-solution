"use client";

import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Services = () => {
  const [services, setServices] = useState([]);
  const [showModal, setShowModal] = useState(false); // Modal state
  const [formData, setFormData] = useState({
    imgUrl: "",
    title: "",
    desc: "",
  }); // Form state for create/update

  const [isUpdating, setIsUpdating] = useState(false); // Update mode flag

  const [currentServiceId, setCurrentServiceId] = useState(null); // ID for update

  // Fetch services data
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/api/services"); // Example API endpoint
        const data = await response.json();
        setServices(data.result);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Open the modal for create
  const handleCreate = () => {
    setFormData({ imgUrl: "", title: "", desc: "" });
    setIsUpdating(false);
    setShowModal(true);
  };

  // Open the modal for update
  const handleUpdate = (service) => {
    setFormData({
      imgUrl: service.imgUrl,
      title: service.title,
      desc: service.desc,
    });
    setCurrentServiceId(service._id);
    setIsUpdating(true);
    setShowModal(true);
  };

  // Handle form submission for create or update
  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isUpdating
      ? `/api/services/${currentServiceId}`
      : "/api/services";
    const method = isUpdating ? "PUT" : "POST";

    try {
      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(
          isUpdating
            ? "Failed to update the service"
            : "Failed to create the service"
        );
      }

      const result = await response.json();

      if (isUpdating) {
        setServices((prevServices) =>
          prevServices.map((service) =>
            service._id === currentServiceId ? result.result : service
          )
        );
        Swal.fire("Updated!", "Service updated successfully.", "success");
      } else {
        setServices((prevServices) => [...prevServices, result.result]);
        Swal.fire("Created!", "Service created successfully.", "success");
      }

      setShowModal(false); // Close the modal
    } catch (error) {
      console.error(error.message);
      Swal.fire(
        "Error!",
        "An error occurred while saving the service.",
        "error"
      );
    }
  };

  // Handle delete functionality
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`/api/services`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ _id: id }),
          });

          if (!response.ok) {
            throw new Error("Failed to delete the service");
          }

          setServices((prevServices) =>
            prevServices.filter((service) => service._id !== id)
          );

          Swal.fire("Deleted!", "Service has been deleted.", "success");
        } catch (error) {
          console.error("Error deleting the service:", error);
          Swal.fire("Error!", "Failed to delete the service.", "error");
        }
      }
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-teal-700 mb-6">Services</h1>
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-teal-600">
              All Services
            </h2>
            <button
              onClick={handleCreate}
              className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700"
            >
              Add New Service
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-teal-50 border-b">
                <tr>
                  <th className="text-left p-4 text-sm font-medium text-teal-800">
                    Image
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-teal-800">
                    Title
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-teal-800">
                    Description
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-teal-800">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {services.length > 0 ? (
                  services.map((service) => (
                    <tr key={service._id} className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        <img
                          src={service.imgUrl}
                          alt={service.title}
                          className="h-12 w-12 object-cover rounded-md"
                        />
                      </td>
                      <td className="p-4 text-gray-800">{service.title}</td>
                      <td className="p-4 text-gray-800">{service.desc}</td>
                      <td className="p-4 flex space-x-2">
                        <button
                          onClick={() => handleUpdate(service)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => handleDelete(service._id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="p-4 text-center text-gray-500 italic"
                    >
                      No services found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal for Create/Update */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-[700px] p-6">
            <h2 className="text-xl font-bold flex justify-between mb-4">
              {isUpdating ? "Update Service" : "Create Service"}

              <button onClick={() => setShowModal(false)}>X</button>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="imgUrl"
                  className="block text-sm font-medium text-teal-800"
                >
                  Image URL
                </label>
                <input
                  type="text"
                  id="imgUrl"
                  name="imgUrl"
                  value={formData.imgUrl}
                  onChange={handleChange}
                  className="mt-1 w-full border border-teal-300 rounded-md p-2 focus:ring-teal-500 focus:border-teal-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-teal-800"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="mt-1 w-full border border-teal-300 rounded-md p-2 focus:ring-teal-500 focus:border-teal-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="desc"
                  className="block text-sm font-medium text-teal-800"
                >
                  Description
                </label>
                <textarea
                  id="desc"
                  name="desc"
                  value={formData.desc}
                  onChange={handleChange}
                  className="mt-1 w-full border border-teal-300 rounded-md p-2 focus:ring-teal-500 focus:border-teal-500"
                  rows="4"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700"
                >
                  {isUpdating ? "Update Service" : "Create Service"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Services;
