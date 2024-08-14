import { useState } from "react";

export default function App() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    gender: '',
    subject: '',
    resume: null,  // Set to `null` for file input
    url: '',
    about: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const handleReset = () => {
    setValues({
      firstName: '',
      lastName: '',
      email: '',
      contact: '',
      gender: '',
      subject: '',
      resume: null,
      url: '',
      about: '',
    });
    // For file input reset, you need to manually reset the input value
    document.querySelector('input[name="resume"]').value = '';
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="container bg-white p-8 rounded shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4 text-center">React Forms</h1>

          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              className="w-full p-2 border rounded mb-4"
              value={values.firstName}
              onChange={handleChange}
            />

            <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              className="w-full p-2 border rounded mb-4"
              value={values.lastName}
              onChange={handleChange}
            />

            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full p-2 border rounded mb-4"
              value={values.email}
              onChange={handleChange}
            />

            <label htmlFor="contact" className="block text-sm font-medium">Contact</label>
            <input
              type="text"
              placeholder="Contact"
              name="contact"
              className="w-full p-2 border rounded mb-4"
              value={values.contact}
              onChange={handleChange}
            />

            <label htmlFor="gender" className="block text-sm font-medium">Gender</label>
            <div className="flex items-center space-x-4 mb-4">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="mr-1"
                  checked={values.gender === 'male'}
                  onChange={handleChange}
                /> Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="mr-1"
                  checked={values.gender === 'female'}
                  onChange={handleChange}
                /> Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  className="mr-1"
                  checked={values.gender === 'other'}
                  onChange={handleChange}
                /> Other
              </label>
            </div>

            <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
            <select
              name="subject"
              id="subject"
              className="w-full p-2 border rounded mb-4"
              value={values.subject}
              onChange={handleChange}
            >
              <option value="">Select a subject</option>
              <option value="physics">Physics</option>
              <option value="english">English</option>
              <option value="maths">Maths</option>
            </select>

            <label htmlFor="resume" className="block text-sm font-medium">Resume</label>
            <input
              type="file"
              name="resume"
              className="w-full p-2 border rounded mb-4"
              onChange={handleChange}
            />

            <label htmlFor="url" className="block text-sm font-medium">URL</label>
            <input
              type="text"
              placeholder="Paste URL"
              name="url"
              className="w-full p-2 border rounded mb-4"
              value={values.url}
              onChange={handleChange}
            />

            <label htmlFor="about" className="block text-sm font-medium">About</label>
            <textarea
              name="about"
              id="about"
              cols={30}
              rows={4}
              placeholder="About here"
              className="w-full p-2 border rounded mb-4"
              value={values.about}
              onChange={handleChange}
            ></textarea>

            <div className="flex space-x-4">
              <button
                type="button"
                className="bg-gray-300 text-gray-800 p-2 rounded"
                onClick={handleReset}
              >
                Reset
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
