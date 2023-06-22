import { useState } from "react";
import { userInfo } from "./recoil-store/Store";
import { useRecoilState } from "recoil";

interface FormData {
  firstName: string;
  lastName: string;
}

const ComponentTwo: React.FC = () => {
  const [userData, setUserData] = useRecoilState(userInfo);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
  });

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUserData({
      ...userData,
      firstName: formData.firstName,
      lastName: formData.lastName
    })
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData: FormData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Firstname"
          name="firstName"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Lastname"
          name="lastName"
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ComponentTwo;
