"use client";

import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import Loading from "../../../components/Loading";

const demoProject = () => {
  const [demoProjectData, setDemoProjectData] = useState([]);
  const [showModal, setShowModal] = useState(false); // Modal state
  const [isUpdating, setIsUpdating] = useState(false); // Update mode flag
  const [loading, setLoading] = useState(true);
  const [demoProjectId, setCurrentDemoProjectId] = useState(null); // ID for update

  const [formData, setFormData] = useState({
    imgUrl: "",
    projectUrl: "",
    desc: "",
  });

  //  Get Demo Project data
  useEffect(() => {
    const fetchDemoData = async () => {
      try {
        const response = await fetch("/api/demoProjects");
        const data = await response.json();
        setDemoProjectData(data.result);
        setLoading(false);
        console.log(data.result);
      } catch (error) {
        console.error("Error fetching Demo data :", error);
      }
    };

    fetchDemoData();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Open the modal for update
  const handleUpdate = (demoData) => {
    setFormData({
      imgUrl: demoData.imgUrl,
      projectUrl: demoData.projectUrl,
      desc: demoData.desc,
    });
    setCurrentDemoProjectId(demoData._id);
    setIsUpdating(true);
    setShowModal(true);
  };

  // Open the modal for create
  const handleCreate = () => {
    setFormData({ imgUrl: "", projectUrl: "", desc: "" });
    setIsUpdating(false);
    setShowModal(true);
  };

  // Handle form submission for create or update
  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isUpdating
      ? `/api/demoProjects/${demoProjectId}`
      : "/api/demoProjects";
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
            ? "Failed to update the Demo Project Data"
            : "Failed to create the Demo Project Data"
        );
      }

      const result = await response.json();

      if (isUpdating) {
        setDemoProjectData((prevDemoData) =>
          prevDemoData.map((demoData) =>
            demoData._id === currentServiceId ? result.result : demoData
          )
        );
        Swal.fire(
          "Updated!",
          "Demo Project Data updated successfully.",
          "success"
        );
      } else {
        setDemoProjectData((prevDemoData) => [...prevDemoData, result.result]);
        Swal.fire(
          "Created!",
          "Demo Project Data created successfully.",
          "success"
        );
      }

      setShowModal(false); // Close the modal
    } catch (error) {
      console.error(error.message);
      Swal.fire(
        "Error!",
        "An error occurred while saving the Demo Project Data.",
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
          const response = await fetch(`/api/demoProjects/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ _id: id }),
          });

          if (!response.ok) {
            throw new Error("Failed to delete the Demo Project");
          }

          setDemoProjectData((preDemoProject) =>
            preDemoProject.filter((demoProject) => demoProject._id !== id)
          );

          Swal.fire("Deleted!", "Demo Project has been deleted.", "success");
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
        <h1 className="text-3xl font-bold text-teal-700 mb-6">Demo Project</h1>
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-teal-600">
              All Demo Project
            </h2>
            <button
              onClick={handleCreate}
              className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700"
            >
              Add New Demo Project
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-teal-50 border-b">
                <tr>
                  <th className="text-left p-4 text-sm font-medium text-teal-800">
                    Image
                  </th>
                  {/* <th className="text-left p-4 text-sm font-medium text-teal-800">
                    Project Url
                  </th> */}
                  <th className="text-left p-4 text-sm font-medium text-teal-800">
                    Description
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-teal-800">
                    Create Date{" "}
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-teal-800">
                    Update Date
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-teal-800">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Loading spaineer  */}
                {loading ? (
                  <tr>
                    <td colSpan="6" className="p-4 text-center">
                      <Loading />
                    </td>
                  </tr>
                ) : demoProjectData?.length > 0 ? (
                  demoProjectData.map((data) => (
                    <tr
                      key={data._id}
                      className="border-b items-center hover:bg-gray-50"
                    >
                      <td className="p-4">
                        <img
                          src={data.imgUrl}
                          alt="img url"
                          className="h-12 w-12 object-cover rounded-md"
                        />
                      </td>

                      {/* <td className="p-4 text-gray-800">{data.projectUrl}</td> */}
                      <td className="p-4 text-gray-800">{data.desc}</td>

                      <td className="p-4 text-gray-800">
                        {new Date(data.createdAt).toLocaleString()}
                      </td>
                      <td className="p-4 text-gray-800">
                        {new Date(data.updatedAt).toLocaleString()}
                      </td>
                      <td className="p-4 flex space-x-2">
                        <button
                          onClick={() => handleUpdate(data)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => handleDelete(data._id)}
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
                      No data found.
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
              {isUpdating ? "Update Demo Project" : "Create Demo Project"}

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
                  htmlFor="projectUrl"
                  className="block text-sm font-medium text-teal-800"
                >
                  Project Url
                </label>
                <input
                  type="text"
                  id="projectUrl"
                  name="projectUrl"
                  value={formData.projectUrl}
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
                  Project Description
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

export default demoProject;
