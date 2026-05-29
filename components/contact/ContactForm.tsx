"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FormData = { fullName: string; email: string; phone: string; subject: string; message: string };

const SUBJECTS = ["General Inquiry", "Earthing Audit", "Lightning System"];

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<FormData>({
    defaultValues: { subject: "General Inquiry" }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const selectedSubject = watch("subject");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, service: data.subject }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 6000);
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles = "w-full px-0 py-3 bg-transparent border-0 border-b border-slate-300 text-slate-900 placeholder-slate-400 text-sm transition-all duration-300 focus:outline-none focus:ring-0 focus:border-slate-800 rounded-none";

  return (
    <AnimatePresence mode="wait">
      {isSuccess ? (
        <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="flex flex-col items-center justify-center text-center h-full min-h-[400px]">
          <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mb-8 shadow-xl shadow-green-500/30">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h3 className="font-display font-extrabold text-2xl text-slate-900 mb-3">Message Sent!</h3>
          <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
            Thank you for reaching out. We will review your enquiry and get back to you soon.
          </p>
          <button onClick={() => setIsSuccess(false)}
            className="px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all font-display font-bold text-sm tracking-wide">
            Send Another
          </button>
        </motion.div>
      ) : (
        <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onSubmit={handleSubmit(onSubmit)} className="bg-transparent h-full flex flex-col justify-between" noValidate>

          <div className="space-y-10">
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
              <div className="relative group">
                <label className="text-xs font-display font-bold text-slate-500 group-focus-within:text-slate-800 transition-colors">
                  First Name
                </label>
                <input
                  {...register("fullName", { required: "Name is required" })}
                  className={`${inputStyles} ${errors.fullName ? "border-red-400 focus:border-red-500" : ""}`}
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.fullName.message}</p>}
              </div>

              <div className="relative group">
                <label className="text-xs font-display font-bold text-slate-500 group-focus-within:text-slate-800 transition-colors">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
                  className={`${inputStyles} ${errors.email ? "border-red-400 focus:border-red-500" : ""}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.email.message}</p>}
              </div>
            </div>

            {/* Phone */}
            <div className="relative group w-full md:w-[calc(50%-1rem)]">
                <label className="text-xs font-display font-bold text-slate-500 group-focus-within:text-slate-800 transition-colors">
                  Phone
                </label>
                <input
                  {...register("phone")}
                  className={inputStyles}
                />
            </div>

            {/* Subject Radios */}
            <div>
              <label className="block text-sm font-display font-bold text-slate-900 mb-4">
                Select Subject?
              </label>
              <div className="flex flex-wrap items-center gap-6">
                {SUBJECTS.map((subject) => (
                  <label key={subject} className="flex items-center gap-2 cursor-pointer group">
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${selectedSubject === subject ? "border-slate-900" : "border-slate-300 group-hover:border-slate-400"}`}>
                      {selectedSubject === subject && <div className="w-2 h-2 rounded-full bg-slate-900" />}
                    </div>
                    <input type="radio" value={subject} {...register("subject")} className="hidden" />
                    <span className="text-sm text-slate-600">{subject}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="relative group">
              <label className="text-xs font-display font-bold text-slate-500 group-focus-within:text-slate-800 transition-colors">
                Message
              </label>
              <textarea
                {...register("message")}
                rows={1}
                placeholder="Write your message.."
                className={`${inputStyles} resize-none pt-4 pb-2`}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = "auto";
                  target.style.height = target.scrollHeight + "px";
                }}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-12 flex justify-end">
            <button type="submit" disabled={isSubmitting}
              className="px-10 py-3.5 bg-slate-900 hover:bg-[#F97316] disabled:opacity-60 disabled:cursor-not-allowed text-white font-display font-bold text-sm tracking-wider rounded border border-transparent transition-colors duration-300 flex items-center gap-2 shadow-lg shadow-slate-900/10">
              {isSubmitting ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
              ) : (
                "Send Message"
              )}
            </button>
          </div>

        </motion.form>
      )}
    </AnimatePresence>
  );
}
