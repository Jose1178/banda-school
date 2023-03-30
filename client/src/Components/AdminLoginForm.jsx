import { useState } from 'react';
import { Link } from 'react-router-dom';

function AdminLoginForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle login form submission
  };

  return (
    <section className="bg-gray-100 h-screen flex items-center adminlogin">
      <div className="container mx-auto max-w-md">
        <h2 className="text-2xl font-bold mb-8 text-center">Admin Login</h2>
        <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Login
          </button>
          <div className="mt-4 text-center">
            Don't have an account? <Link className="text-blue-500 hover:text-blue-700" to="/adminsignup">Sign up</Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AdminLoginForm;

