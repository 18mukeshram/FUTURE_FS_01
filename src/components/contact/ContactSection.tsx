import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("loading");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        formRef.current?.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-semibold mb-6">Let’s work together</h2>

      <p className="text-neutral-400 mb-8">
        Have a project or opportunity in mind? Feel free to reach out.
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input
          type="email"
          name="reply_to"
          placeholder="you@example.com"
          className="bg-neutral-900 p-3 rounded outline-none focus:ring-2 focus:ring-neutral-700"
          required
        />

        <textarea
          name="message"
          placeholder="Your message"
          rows={4}
          className="bg-neutral-900 p-3 rounded outline-none focus:ring-2 focus:ring-neutral-700"
          required
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-white text-black px-6 py-3 rounded w-fit disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-sm text-green-500">Message sent successfully!</p>
        )}

        {status === "error" && (
          <p className="text-sm text-red-500">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </section>
  );
}
