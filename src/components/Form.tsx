import { useState } from "react";
import Button from "./Button";

interface FormData {
  name: string;
  surname: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  surname?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    surname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Optionally, clear error message upon input
    setFormErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  function validate(): boolean {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.surname.trim()) newErrors.surname = "Surname is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (validate()) {
      // Proceed with form submission (e.g., API call)
      console.log("Form submitted successfully", formData);
      setFormData({
        name: "",
        surname: "",
        email: "",
        subject: "",
        message: "",
      });
      setFormErrors({});
    }
  }

  return (
    <div className="flex flex-col text-center gap-4 bg-primaryLight border border-accent p-4 rounded-xl shadow-md">
      <h2>Say Hello</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col relative">
            <input
              type="text"
              id="name"
              name="name"
              placeholder=" "
              value={formData.name}
              onChange={handleChange}
              className={`peer w-full py-3 px-1 outline-none bg-transparent placeholder-transparent border-b ${
                formErrors.name ? "border-red-500" : "border-accent"
              }`}
            />
            <label
              htmlFor="name"
              className="absolute top-0 left-0 py-3 transition-all transform origin-left duration-300 peer-placeholder-shown:top-0 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-valid:-top-6 peer-valid:text-sm pointer-events-none"
            >
              Name
            </label>
            {formErrors.name && (
              <span className="absolute left-0 -bottom-5 text-red-500 text-sm mt-1">
                {formErrors.name}
              </span>
            )}
          </div>
          <div className="flex flex-col relative">
            <input
              type="text"
              id="surname"
              name="surname"
              required
              placeholder=" "
              className="peer w-full py-3 px-1 outline-none bg-transparent placeholder-transparent border-b border-accent"
            />
            <label
              htmlFor="surname"
              className="absolute top-0 left-0 py-3 transition-all transform origin-left duration-300 peer-placeholder-shown:top-0 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-valid:-top-6 peer-valid:text-sm pointer-events-none"
            >
              Surname
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col relative">
            <input
              type="text"
              id="email"
              name="email"
              required
              placeholder=" "
              className="peer w-full py-3 px-1 outline-none bg-transparent placeholder-transparent border-b border-accent"
            />
            <label
              htmlFor="email"
              className="absolute top-0 left-0 py-3 transition-all transform origin-left duration-300 peer-placeholder-shown:top-0 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-valid:-top-6 peer-valid:text-sm pointer-events-none"
            >
              Email
            </label>
          </div>
          <div className="flex flex-col relative">
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder=" "
              className="peer w-full py-3 px-1 outline-none bg-transparent placeholder-transparent border-b border-accent"
            />
            <label
              htmlFor="subject"
              className="absolute top-0 left-0 py-3 transition-all transform origin-left duration-300 peer-placeholder-shown:top-0 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-valid:-top-6 peer-valid:text-sm pointer-events-none"
            >
              Subject
            </label>
          </div>
        </div>

        <div className="flex flex-col relative">
          <textarea
            id="message"
            name="message"
            required
            placeholder=" "
            rows={1}
            className="peer w-full py-3 px-1 outline-none bg-transparent placeholder-transparent border-b border-accent resize-none"
          ></textarea>
          <label
            htmlFor="message"
            className="absolute top-0 left-0 py-3 transition-all transform origin-left duration-300 peer-placeholder-shown:top-0 peer-placeholder-shown:text-base peer-focus:-top-8 peer-focus:text-sm peer-valid:-top-6 peer-valid:text-sm pointer-events-none"
          >
            Message
          </label>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
