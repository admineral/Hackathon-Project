// components/layout/footer.tsx
export default function Footer() {
  return (
    <div className="w-full py-5 text-center">
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
        {", "}
        <a
          className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
          href="https://www.linkedin.com/in/nikoll-gjokaj-929249240/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nikoll Gjokaj
        </a>
        {", "}
        <a
          className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
          href="https://www.linkedin.com/in/maximilian-berens-3601252a5"
          target="_blank"
          rel="noopener noreferrer"
        >
          Maximilian Berens
        </a>
        {" and "}
        <a
          className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
          href="https://www.linkedin.com/in/grigorii-konstantinov-3726a425a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Grigorii Konstantinov
        </a>
      </p>
    </div>
  );
}