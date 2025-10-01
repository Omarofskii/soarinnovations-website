import { useState } from "react";

function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    await fetch(
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLScf9F9exnIWYY-FQsHJd3oB148F2oXo67QLSi8nPYTCXsh3Qg/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }
    );

    form.reset();
    setSubmitted(true);

    // auto-hide after 4s
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto mt-8"
      >
        <input
          type="email"
          name="entry.257086240"
          placeholder="Enter your email"
          required
          className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 
                     text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 
                     hover:from-gray-600 hover:to-gray-500 text-white font-semibold transition duration-300"
        >
          Subscribe
        </button>
      </form>

      {submitted && (
        <p className="text-green-400 text-center mt-4 animate-fadeIn">
          ✅ Thanks for subscribing!
        </p>
      )}
    </div>
  );
}

export default NewsletterForm;
