import Container from "../components/Container";

export default function Custum404() {
  return (
    <Container className="flex min-h-[calc(100vh-100px)] items-center justify-center flex-col max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-extrabold mt-4 text-gray-500 sm:text-4xl">
        404
      </h1>
      <p className="mt-4 text-lg text-gray-500">
        {"The page you are looking for doesn't exist."}
      </p>
    </Container>
  );
}
