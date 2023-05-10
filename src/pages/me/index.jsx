import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Container from "../../components/Container";
import Form from "../../components/auth/Form";
import Loading from "../Loading";
import Loader from "../../components/Loader";
import { useRouter } from "next/router";

export default function Me() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/auth/me", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setName(data.user.name);
        setEmail(data.user.email);
        setPassword(data.user.password);
      });
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.put(
        "/api/auth/me",
        {
          name,
          email,
          password,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.status === 200) {
        toast.success("Login successful");
      }
      router.push("/");
    } catch (err) {
      setError(err.response.data.error);
      console.log(error);
      toast.error("Something went wrong!");
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Container className="flex min-h-[calc(100vh-100px)] flex-col max-w-7xl mx-auto px-4">
      <div className="flex-1 flex-grow">
        <Form
          label="My Profile"
          handleClick={(e) => handleSubmit(e)}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          buttonLabel="Update"
        />
      </div>
    </Container>
  );
}
