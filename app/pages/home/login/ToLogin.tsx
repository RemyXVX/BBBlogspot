import { useState } from "react";

const ToLogin = () => {
  const [isUsingEmail, setIsUsingEmail] = useState(true);
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameOrEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameOrEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsUsingEmail(!isUsingEmail);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handle login logic here
  };

  return (
    <div className="w-64 mx-auto mt-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          Use {isUsingEmail ? "username" : "email"} instead
          <input
            type="checkbox"
            checked={isUsingEmail}
            onChange={handleCheckboxChange}
            className="ml-2"
          />
        </label>
        <label className="block">
          {isUsingEmail ? "Email" : "Username"}
          <input
            type={isUsingEmail ? "email" : "text"}
            value={usernameOrEmail}
            onChange={handleUsernameOrEmailChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </label>
        <label className="block">
          Password
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default ToLogin;