import { useEffect, useState } from "react";

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [course, setCourse] = useState("html"); // Default to "html"

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:5000/users");
    const data = await response.json();
    setUsers(data);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    });
    fetchUsers();
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setName(user.name);
    setEmail(user.email);
    setPassword(user.password);
    setCourse(user.course);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5000/users/${editUser.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, course }), // Include course in the update
    });
    setEditUser(null);
    fetchUsers();
  };

  return (
    <div className="container mx-auto p-4 pt-20">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      {editUser && (
        <form onSubmit={handleUpdate} className="mb-4">
          <h2 className="text-xl mb-2">Edit User</h2>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Select Course
            </label>
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            >
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="javascript">JavaScript</option>
              <option value="react">React</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Update
          </button>
        </form>
      )}
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200">Name</th>
            <th className="py-2 px-4 bg-gray-200">Email</th>
            <th className="py-2 px-4 bg-gray-200">Course</th>
            <th className="py-2 px-4 bg-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.course}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleEdit(user)}
                  className="bg-pink-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
