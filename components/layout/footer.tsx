export default function Footer() {
  return (
    <div className="fixed bottom-0 w-full py-5 text-center">
      <p className="text-gray-500">
        A project by{" "}
        <a
          className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
          href="https://github.com/admineral"
          target="_blank"
          rel="noopener noreferrer"
        >
          Elias Zobler
        </a>
        {" "}and{" "}
        <a
          className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
          href="https://github.com/nixknameee"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nikoll Gjokaj
        </a>
      </p>
    </div>
  );
}