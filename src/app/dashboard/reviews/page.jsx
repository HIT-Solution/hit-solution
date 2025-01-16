"use client";

import Layout from "@/components/Layout";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    country: "",
    imgUrl: "",
    rating: 5,
    comments: "",
  });

  const [isUpdating, setIsUpdating] = useState(false);
  const [currentReviewId, setCurrentReviewId] = useState(null);

  // Fetch reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/reviews");
        const data = await response.json();
        setReviews(data.result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Open modal for creating a review
  const handleCreate = () => {
    setFormData({
      username: "",
      country: "",
      imgUrl: "",
      rating: 5,
      comments: "",
    });
    setIsUpdating(false);
    setShowModal(true);
  };

  // Open modal for updating a review
  const handleUpdate = (review) => {
    setFormData({
      username: review.username,
      country: review.country,
      imgUrl: review.imgUrl,
      rating: review.rating,
      comments: review.comments,
    });
    setCurrentReviewId(review._id);
    setIsUpdating(true);
    setShowModal(true);
  };

  // Handle form submission (Create or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isUpdating
      ? `/api/reviews/${currentReviewId}`
      : "/api/reviews";
    const method = isUpdating ? "PUT" : "POST";

    try {
      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(
          isUpdating
            ? "Failed to update the review"
            : "Failed to create the review"
        );
      }

      const result = await response.json();

      if (isUpdating) {
        setReviews((prevReviews) =>
          prevReviews.map((review) =>
            review._id === currentReviewId ? result.result : review
          )
        );
        Swal.fire("Updated!", "Review updated successfully.", "success");
      } else {
        setReviews((prevReviews) => [...prevReviews, result.result]);
        Swal.fire("Created!", "Review created successfully.", "success");
      }

      setShowModal(false);
    } catch (error) {
      console.error(error.message);
      Swal.fire(
        "Error!",
        "An error occurred while saving the review.",
        "error"
      );
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You can't undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`/api/reviews/${id}`, {
            method: "DELETE",
          });

          if (!response.ok) {
            throw new Error("Failed to delete the review");
          }

          setReviews((prevReviews) =>
            prevReviews.filter((review) => review._id !== id)
          );
          Swal.fire("Deleted!", "Review deleted successfully.", "success");
        } catch (error) {
          console.error("Error deleting review:", error);
          Swal.fire("Error!", "Failed to delete the review.", "error");
        }
      }
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-teal-700 mb-6">Reviews</h1>
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-teal-600">All Reviews</h2>
            <button
              onClick={handleCreate}
              className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700"
            >
              Add New Review
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-teal-50 border-b">
                <tr>
                  <th className="text-left p-4 text-sm font-medium text-teal-800">
                    Username
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-teal-800">
                    Country
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-teal-800">
                    Rating
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-teal-800">
                    Comments
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
                {loading ? (
                  <tr>
                    <td colSpan="5" className="p-4 text-center">
                      <Loading />
                    </td>
                  </tr>
                ) : reviews.length > 0 ? (
                  reviews.map((review) => (
                    <tr key={review._id} className="border-b hover:bg-gray-50">
                      <td className="p-4 text-gray-800">{review.username}</td>
                      <td className="p-4 text-gray-800">{review.country}</td>
                      <td className="p-4 text-gray-800">
                        ⭐ {review.rating}/5
                      </td>
                      <td className="p-4 text-gray-800">{review.comments}</td>

                      <td className="p-4 text-gray-800">
                        {new Date(review.createdAt).toLocaleString()}
                      </td>
                      <td className="p-4 text-gray-800">
                        {new Date(review.updatedAt).toLocaleString()}
                      </td>

                      <td className="p-4 flex space-x-2">
                        <button
                          onClick={() => handleUpdate(review)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => handleDelete(review._id)}
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
                      colSpan="5"
                      className="p-4 text-center text-gray-500 italic"
                    >
                      No reviews found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal for Create/Update */}
      {/* Modal for Create/Update */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-[700px] p-6">
            <h2 className="text-xl font-bold flex justify-between mb-4">
              {isUpdating ? "Update Review" : "Create Review"}
              <button
                onClick={() => setShowModal(false)}
                className="text-red-600 text-lg"
              >
                ✖
              </button>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-teal-800"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Enter username"
                />
              </div>

              {/* Country */}
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-teal-800"
                >
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="" disabled>
                    Select a country
                  </option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Brunei">Brunei</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Chad">Chad</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">Congo</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Eswatini">Eswatini</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Greece">Greece</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="India">India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran">Iran</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Laos">Laos</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Malta">Malta</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="North Korea">North Korea</option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palestine">Palestine</option>
                  <option value="Panama">Panama</option>
                  <option value="Peru">Peru</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Romania">Romania</option>
                  <option value="Russia">Russia</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Singapore">Singapore</option>
                  <option value="South Africa">South Africa</option>
                  <option value="South Korea">South Korea</option>
                  <option value="Spain">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syria">Syria</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">
                    United Arab Emirates
                  </option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
              </div>

              {/* Profile Image URL */}
              <div>
                <label
                  htmlFor="imgUrl"
                  className="block text-sm font-medium text-teal-800"
                >
                  Profile Image URL
                </label>
                <input
                  type="text"
                  id="imgUrl"
                  name="imgUrl"
                  value={formData.imgUrl}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Enter image URL (optional)"
                />
              </div>

              {/* Rating */}
              <div>
                <label
                  htmlFor="rating"
                  className="block text-sm font-medium text-teal-800"
                >
                  Rating (1 to 5)
                </label>
                <select
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="1">⭐ 1 - Poor</option>
                  <option value="2">⭐⭐ 2 - Fair</option>
                  <option value="3">⭐⭐⭐ 3 - Good</option>
                  <option value="4">⭐⭐⭐⭐ 4 - Very Good</option>
                  <option value="5">⭐⭐⭐⭐⭐ 5 - Excellent</option>
                </select>
              </div>

              {/* Comments */}
              <div>
                <label
                  htmlFor="comments"
                  className="block text-sm font-medium text-teal-800"
                >
                  Comments
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Write your review..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700"
                >
                  {isUpdating ? "Update Review" : "Create Review"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Reviews;
