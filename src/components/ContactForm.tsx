import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Alert, AlertDescription } from "./ui/alert";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className = "" }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setFormStatus("idle");

    try {
      // Simulate form submission with a delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In a real application, you would send the form data to your backend here
      console.log("Form submitted:", data);

      setFormStatus("success");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`w-full max-w-md mx-auto bg-gray-900 rounded-xl p-6 shadow-lg ${className}`}
    >
      <h2 className="text-2xl font-bold mb-6 text-white">Get In Touch</h2>

      {formStatus === "success" && (
        <Alert className="mb-6 bg-green-900/20 border-green-500 text-green-300">
          <CheckCircle className="h-4 w-4 mr-2" />
          <AlertDescription>
            Message sent successfully! I'll get back to you soon.
          </AlertDescription>
        </Alert>
      )}

      {formStatus === "error" && (
        <Alert className="mb-6 bg-red-900/20 border-red-500 text-red-300">
          <AlertCircle className="h-4 w-4 mr-2" />
          <AlertDescription>
            Something went wrong. Please try again later.
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-gray-300">
            Name
          </Label>
          <Input
            id="name"
            {...register("name")}
            className="bg-gray-800 border-gray-700 text-white focus:border-blue-500"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-300">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            className="bg-gray-800 border-gray-700 text-white focus:border-blue-500"
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-gray-300">
            Subject
          </Label>
          <Input
            id="subject"
            {...register("subject")}
            className="bg-gray-800 border-gray-700 text-white focus:border-blue-500"
            placeholder="What is this regarding?"
          />
          {errors.subject && (
            <p className="text-sm text-red-400">{errors.subject.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-gray-300">
            Message
          </Label>
          <Textarea
            id="message"
            {...register("message")}
            className="bg-gray-800 border-gray-700 text-white focus:border-blue-500 min-h-[120px]"
            placeholder="Your message here..."
          />
          {errors.message && (
            <p className="text-sm text-red-400">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </span>
          )}
        </Button>
      </form>

      <div className="mt-8 space-y-2 text-gray-300">
        <p className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          akshan518@gmail.com
        </p>
        <p className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          +91-8639264973
        </p>
        <p className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          <a
            href="https://linkedin.com/in/akshan-jalagam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            linkedin.com/in/akshan-jalagam
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
