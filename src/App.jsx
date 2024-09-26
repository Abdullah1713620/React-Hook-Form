import { useForm } from "react-hook-form";

export default function AdmissionForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen">
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="p-10"
      >
        <h1 className="text-4xl font-bold text-center mb-6">Admission Form</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">Full Name</label>
            <input
              id="fullName"
              type="text"
              {...register("fullName", { required: "Full Name is required" })}
              className="w-full p-3 border border-gray-300 rounded-md mt-1 transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName.message}</span>}
          </div>

          <div>
            <label htmlFor="fatherName" className="block text-sm font-medium text-gray-600">Father Name</label>
            <input
              id="fatherName"
              type="text"
              {...register("fatherName", { required: "Father Name is required" })}
              className="w-full p-3 border border-gray-300 rounded-md mt-1 transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.fatherName && <span className="text-red-500 text-sm">{errors.fatherName.message}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              id="email"
              type="email"
              {...register("email", { 
                required: "Email is required", 
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Invalid email address"
                } 
              })}
              className="w-full p-3 border border-gray-300 rounded-md mt-1 transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">Phone Number</label>
            <input
              id="phoneNumber"
              type="tel"
              {...register("phoneNumber", { required: "Phone Number is required" })}
              className="w-full p-3 border border-gray-300 rounded-md mt-1 transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber.message}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label htmlFor="cnic" className="block text-sm font-medium text-gray-600">National ID (CNIC)</label>
            <input
              id="cnic"
              type="text"
              {...register("cnic", { required: "CNIC is required" })}
              className="w-full p-3 border border-gray-300 rounded-md mt-1 transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.cnic && <span className="text-red-500 text-sm">{errors.cnic.message}</span>}
          </div>

          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-600">Date of Birth</label>
            <input
              id="dob"
              type="date"
              {...register("dob", { required: "Date of Birth is required" })}
              className="w-full p-3 border border-gray-300 rounded-md mt-1 transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.dob && <span className="text-red-500 text-sm">{errors.dob.message}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-600">Gender</label>
            <select
              id="gender"
              {...register("gender", { required: "Gender is required" })}
              className="w-full p-3 border border-gray-300 rounded-md mt-1 transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.gender && <span className="text-red-500 text-sm">{errors.gender.message}</span>}
          </div>

          <div>
            <label htmlFor="laptop" className="block text-sm font-medium text-gray-600">Do you have a Laptop?</label>
            <select
              id="laptop"
              {...register("laptop", { required: "This field is required" })}
              className="w-full p-3 border border-gray-300 rounded-md mt-1 transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {errors.laptop && <span className="text-red-500 text-sm">{errors.laptop.message}</span>}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-600">Address</label>
          <input
            id="address"
            type="text"
            {...register("address", { required: "Address is required" })}
            className="w-full p-3 border border-gray-300 rounded-md mt-1 transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.address && <span className="text-red-500 text-sm">{errors.address.message}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="qualification" className="block text-sm font-medium text-gray-600">Last Qualification</label>
          <select
            id="qualification"
            {...register("qualification", { required: "Qualification is required" })}
            className="w-full p-3 border border-gray-300 rounded-md mt-1 transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select</option>
            <option value="Matric">Matric</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Bachelors">Bachelors</option>
            <option value="Masters">Masters</option>
          </select>
          {errors.qualification && <span className="text-red-500 text-sm">{errors.qualification.message}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="profileImage" className="block text-sm font-medium text-gray-600">Profile Image</label>
          <input
            id="profileImage"
            type="file"
            {...register("profileImage", { required: "Profile Image is required" })}
            className="w-full p-3 border border-gray-300 rounded-md mt-1 transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.profileImage && <span className="text-red-500 text-sm">{errors.profileImage.message}</span>}

          <ul className="text-sm mt-2 list-disc pl-5">
            <li>With white or blue background</li>
            <li>File type: jpg, jpeg, png</li>
            <li>Upload your recent passport size picture</li>
            <li>Your face should be clearly visible without any glasses</li>
          </ul>
        </div>

        <button 
          type="submit" 
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white w-full py-3 rounded-md mt-4 transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
