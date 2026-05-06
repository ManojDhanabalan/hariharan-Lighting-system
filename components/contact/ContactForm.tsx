"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FormData = { fullName: string; email: string; phone: string; company: string; service: string; message: string };

const SERVICES = ["Earthing Audit","LPS Adequacy Audit","Power Quality Studies","Power System Studies","Earthing System","Lightning System","Ground Design","Surge Protection","Other"];

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess]       = useState(false);

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
          className="bg-green-50 border border-green-200 rounded-2xl p-10 flex flex-col items-center justify-center text-center min-h-[460px] shadow-sm">
          <div className="w-20 h-20 rounded-full bg-green-100 border-2 border-green-200 flex items-center justify-center mb-6 animate-float">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="font-display font-bold text-2xl text-slate-900 uppercase tracking-tight mb-3">Message Sent!</h3>
          <p className="text-text-secondary max-w-sm mb-8 leading-relaxed">
            Thank you for reaching out. Our engineering team will review your enquiry and get back to you within 24 hours.
          </p>
          <button onClick={() => setIsSuccess(false)}
            className="px-6 py-2.5 border-2 border-green-300 text-green-700 rounded-xl hover:bg-green-100 transition-all font-display font-bold text-sm uppercase tracking-wider">
            Send Another
          </button>
        </motion.div>
      ) : (
        <motion.form key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
          onSubmit={handleSubmit(onSubmit)} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-card" noValidate>
          <div className="mb-7 pb-5 border-b border-slate-100">
            <h3 className="font-display font-bold text-2xl text-slate-900 uppercase tracking-tight">Send an Enquiry</h3>
            <p className="text-text-secondary text-sm mt-1">Our engineering team responds within 24 hours.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-xs font-display font-bold text-text-secondary uppercase tracking-[0.12em] mb-2">Full Name <span className="text-volt">*</span></label>
              <input {...register("fullName", { required: "Name is required" })} placeholder="John Doe" className="input-field" />
              {errors.fullName && <p className="text-red-500 text-xs mt-1.5">{errors.fullName.message}</p>}
            </div>
            <div>
              <label className="block text-xs font-display font-bold text-text-secondary uppercase tracking-[0.12em] mb-2">Email <span className="text-volt">*</span></label>
              <input type="email" {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })} placeholder="john@company.com" className="input-field" />
              {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-xs font-display font-bold text-text-secondary uppercase tracking-[0.12em] mb-2">Phone <span className="text-volt">*</span></label>
              <input {...register("phone", { required: "Phone is required" })} placeholder="+91 98765 43210" className="input-field" />
              {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone.message}</p>}
            </div>
            <div>
              <label className="block text-xs font-display font-bold text-text-secondary uppercase tracking-[0.12em] mb-2">Company</label>
              <input {...register("company")} placeholder="Your Company Ltd." className="input-field" />
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-xs font-display font-bold text-text-secondary uppercase tracking-[0.12em] mb-2">Service of Interest</label>
            <select {...register("service")} className="input-field appearance-none">
              <option value="">Select a service...</option>
              {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div className="mb-7">
            <label className="block text-xs font-display font-bold text-text-secondary uppercase tracking-[0.12em] mb-2">Your Message <span className="text-volt">*</span></label>
            <textarea {...register("message", { required: "Message is required" })} rows={5} placeholder="Describe your project or query..." className="input-field resize-none" />
            {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message.message}</p>}
          </div>

          <button type="submit" disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2.5 py-4 bg-volt hover:bg-volt-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-display font-bold uppercase tracking-widest rounded-2xl transition-all shadow-volt-btn hover:shadow-volt-strong hover:-translate-y-0.5">
            {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" />Sending…</> : <><Send className="w-5 h-5" />Submit Enquiry</>}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
