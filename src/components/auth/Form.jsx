import Button from "../Button";
import Input from "../Input";

const Form = ({
  label,
  handleClick,
  email,
  setEmail,
  password,
  setPassword,
  name,
  setName,
  buttonLabel,
}) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">{label}</h2>
      <form className="flex flex-col gap-4" data-bitwarden-watching="1">
        {(label === "Register" || label === "My Profile") && (
          <Input
            label="Name"
            type="text"
            name="name"
            autocomplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <Input
          label="Email"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autocomplete="email"
          required
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autocomplete="current-password"
          required
        />

        <Button
          type="submit"
          label={buttonLabel}
          onClick={(e) => handleClick(e)}
        />
      </form>
    </>
  );
};

export default Form;