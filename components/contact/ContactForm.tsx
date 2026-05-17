"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FormData = { fullName: string; email: string; phone: string; company: string; service: string; message: string };

const SERVICES = ["Earthing Audit", "LPS Adequacy Audit", "Earthing System", "Lightning System", "Ground Design", "Surge Protection", "Other"];

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1600));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 6000);
  };

  return (
    <AnimatePresence mode="wait">
      {isSuccess ? (
        <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
          className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-3xl p-12 flex flex-col items-center justify-center text-center min-h-[560px]">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-8 shadow-xl shadow-green-500/30"
          >
            <CheckCircle2 className="w-10 h-10 text-white" />
          </motion.div>
          <h3 className="font-display font-extrabold text-2xl text-slate-900 mb-3">Message Sent!</h3>
          <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
            Thank you for reaching out. Our engineering team will review your enquiry and get back to you within 24 hours.
          </p>
          <button onClick={() => setIsSuccess(false)}
            className="px-6 py-3 bg-white border border-green-200 text-green-700 rounded-xl hover:bg-green-50 transition-all font-display font-bold text-sm uppercase tracking-wider shadow-sm">
            Send Another
          </button>
        </motion.div>
      ) : (
        <motion.form key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
          onSubmit={handleSubmit(onSubmit)} className="bg-white border border-slate-100 rounded-3xl p-8 lg:p-10 shadow-xl shadow-slate-200/50" noValidate>

          {/* Form header */}
          <div className="mb-8 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-maroon-600" />
              <span className="text-xs font-display font-bold text-maroon-700 uppercase tracking-[0.15em]">Send an Enquiry</span>
            </div>
            <h3 className="font-display font-extrabold text-2xl text-slate-900 mb-1">Request a Free Consultation</h3>
            <p className="text-slate-500 text-sm">Fill in the details below and our engineering team will respond within 24 hours.</p>
          </div>

          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className={`block text-xs font-display font-bold uppercase tracking-[0.12em] mb-2 transition-colors ${focusedField === "fullName" ? "text-maroon-700" : "text-slate-500"}`}>
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                {...register("fullName", { required: "Name is required" })}
                onFocus={() => setFocusedField("fullName")}
                onBlur={() => setFocusedField(null)}
                placeholder="John Doe"
                className={`w-full px-4 py-3.5 bg-slate-50 border rounded-xl text-slate-900 placeholder-slate-400 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-maroon-600/20 focus:bg-white ${errors.fullName ? "border-red-300 focus:ring-red-500/20" : "border-slate-200 focus:border-maroon-600"}`}
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-red-500" />{errors.fullName.message}</p>}
            </div>
            <div>
              <label className={`block text-xs font-display font-bold uppercase tracking-[0.12em] mb-2 transition-colors ${focusedField === "email" ? "text-maroon-700" : "text-slate-500"}`}>
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                placeholder="john@company.com"
                className={`w-full px-4 py-3.5 bg-slate-50 border rounded-xl text-slate-900 placeholder-slate-400 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-maroon-600/20 focus:bg-white ${errors.email ? "border-red-300 focus:ring-red-500/20" : "border-slate-200 focus:border-maroon-600"}`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-red-500" />{errors.email.message}</p>}
            </div>
          </div>

          {/* Phone & Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className={`block text-xs font-display font-bold uppercase tracking-[0.12em] mb-2 transition-colors ${focusedField === "phone" ? "text-maroon-700" : "text-slate-500"}`}>
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                {...register("phone", { required: "Phone is required" })}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField(null)}
                placeholder="+91 98765 43210"
                className={`w-full px-4 py-3.5 bg-slate-50 border rounded-xl text-slate-900 placeholder-slate-400 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-maroon-600/20 focus:bg-white ${errors.phone ? "border-red-300 focus:ring-red-500/20" : "border-slate-200 focus:border-maroon-600"}`}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-red-500" />{errors.phone.message}</p>}
            </div>
            <div>
              <label className={`block text-xs font-display font-bold uppercase tracking-[0.12em] mb-2 transition-colors ${focusedField === "company" ? "text-maroon-700" : "text-slate-500"}`}>
                Company
              </label>
              <input
                {...register("company")}
                onFocus={() => setFocusedField("company")}
                onBlur={() => setFocusedField(null)}
                placeholder="Your Company Ltd."
                className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-maroon-600/20 focus:bg-white focus:border-maroon-600"
              />
            </div>
          </div>

          {/* Service */}
          <div className="mb-5">
            <label className={`block text-xs font-display font-bold uppercase tracking-[0.12em] mb-2 transition-colors ${focusedField === "service" ? "text-maroon-700" : "text-slate-500"}`}>
              Service of Interest
            </label>
            <select
              {...register("service")}
              onFocus={() => setFocusedField("service")}
              onBlur={() => setFocusedField(null)}
              className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-maroon-600/20 focus:bg-white focus:border-maroon-600 appearance-none cursor-pointer"
            >
              <option value="">Select a service...</option>
              {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          {/* Message */}
          <div className="mb-8">
            <label className={`block text-xs font-display font-bold uppercase tracking-[0.12em] mb-2 transition-colors ${focusedField === "message" ? "text-maroon-700" : "text-slate-500"}`}>
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              rows={5}
              placeholder="Describe your project or query..."
              className={`w-full px-4 py-3.5 bg-slate-50 border rounded-xl text-slate-900 placeholder-slate-400 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-maroon-600/20 focus:bg-white resize-none ${errors.message ? "border-red-300 focus:ring-red-500/20" : "border-slate-200 focus:border-maroon-600"}`}
            />
            {errors.message && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-red-500" />{errors.message.message}</p>}
          </div>

          {/* Submit button */}
          <button type="submit" disabled={isSubmitting}
            className="group relative w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-maroon-700 to-maroon-600 hover:from-maroon-600 hover:to-maroon-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-display font-bold text-sm uppercase tracking-wider rounded-2xl transition-all duration-300 shadow-lg shadow-maroon-600/25 hover:shadow-xl hover:shadow-maroon-600/40 hover:-translate-y-0.5 overflow-hidden">
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10 flex items-center gap-2.5">
              {isSubmitting ? (
                <><Loader2 className="w-5 h-5 animate-spin" />Sending Enquiry…</>
              ) : (
                <>Submit Enquiry <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" /></>
              )}
            </span>
          </button>

          {/* Privacy note */}
          <p className="text-center text-xs text-slate-400 mt-4">
            By submitting, you agree to our privacy policy. We&apos;ll never share your data.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
