/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Mail, Phone, MapPin, Send, MessageSquare, User, AtSign, Linkedin, Github, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function Contact() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);

     const [loading, setLoading] = useState(false);

     const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-header", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom-=100",
                },
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            });

            gsap.from(infoRef.current, {
                scrollTrigger: {
                    trigger: infoRef.current,
                    start: "top bottom-=100",
                },
                x: -50,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out"
            });

            gsap.from(formRef.current, {
                scrollTrigger: {
                    trigger: formRef.current,
                    start: "top bottom-=100",
                },
                x: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);



     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current || loading) return;

    try {
      setLoading(true);
      toast.loading("Sending message...", { id: "sendToast" });

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("Message sent successfully", { id: "sendToast" });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      formRef.current.reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message", { id: "sendToast" });
    } finally {
      setLoading(false);
    }
  };


 




    return (
        <section id="contact" ref={sectionRef} className="py-32 px-6 relative overflow-hidden bg-white dark:bg-[#020617]">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="contact-header text-center mb-24 space-y-6">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-purple-500/20 bg-white/50 dark:bg-white/5 backdrop-blur-md shadow-lg shadow-purple-500/10 text-purple-600 dark:text-purple-400 text-[11px] font-black uppercase tracking-[0.3em]">
                        <MessageSquare size={14} /> Contact
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-b from-black to-black/20  dark:from-white dark:to-white/20">
                        Let's Work <span className="text-purple-700 dark:text-purple-600">Together.</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
                        Have a project in mind? Let's discuss how we can create something extraordinary together.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Contact Info */}
                    <div ref={infoRef} className="space-y-12">
                        <div className="px-3 py-6 md:p-10 rounded-xl md:rounded-[2.5rem] bg-secondary/30 dark:bg-white/5 border border-black/20 dark:border-white/20 backdrop-blur-sm">
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-8">Get in Touch</h3>
                            <div className="space-y-8">
                                <a  className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl  bg-white dark:bg-white/10 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                                        <p className="text-lg font-bold text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">rekasharmin46@gmail.com</p>
                                    </div>
                                </a>
                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Phone</p>
                                        <p className="text-lg font-bold text-foreground">+8801798409071</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Location</p>
                                        <p className="text-lg font-bold text-foreground">Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 md:p-10 rounded-[2.5rem] bg-secondary/30 dark:bg-white/5 border border-black/20 dark:border-white/20 backdrop-blur-sm">
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-8">Connect</h3>
                            <div className="flex gap-4">
                                <a href="https://www.linkedin.com/in/sharmin-rika-2b17a42b4/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-white dark:bg-white/10 transition-all duration-300 border-2 hover:text-purple-600  border-black/20 dark:border-white/5 dark:hover:text-purple-400 hover:border-purple-500 dark:hover:border-purple-500">
                                    <Linkedin size={24} />
                                </a>
                                <a href="https://github.com/Rika4698" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-white dark:bg-white/10   transition-all duration-300 border-2 hover:text-purple-600  border-black/20 dark:border-white/5 dark:hover:text-purple-400 hover:border-purple-500 dark:hover:border-purple-500">
                                    <Github size={24} />
                                </a>
                                <a href="mailto:rekasharmin46@gmail.com" className="p-4 rounded-xl bg-white dark:bg-white/10  transition-all duration-300 border-2 hover:text-purple-600  border-black/20 dark:border-white/5 dark:hover:text-purple-400 hover:border-purple-500 dark:hover:border-purple-500">
                                    <Mail size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div  className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-[3rem] blur-xl -z-10" />
                        <form ref={formRef} onSubmit={sendEmail} className="p-8 md:p-12 rounded-[3rem] bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/20 shadow-2xl space-y-8" >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground pl-4">Name</label>
                                    <div className="relative group ">
                                        <User size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-purple-600 transition-colors" />
                                        <input type="text"  name="name" required placeholder="Enter Name"  value={formData.name}
                      onChange={handleInputChange} className="w-full pl-14 pr-6 py-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-transparent focus:border-purple-500/50 outline-none transition-all font-medium" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground pl-4">Email</label>
                                    <div className="relative group">
                                        <Mail size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-purple-600 transition-colors" />
                                        <input type="email"  name="email" required placeholder="Enter Email"  value={formData.email}
                      onChange={handleInputChange} className="w-full pl-14 pr-6 py-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-transparent focus:border-purple-500/50 outline-none transition-all font-medium" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground pl-4">Subject</label>
                                <div className="relative group">
                                    <MessageSquare size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-purple-600 transition-colors" />
                                    <input type="text" name="subject" required placeholder="Project Inquiry" value={formData.subject}
                      onChange={handleInputChange} className="w-full pl-14 pr-6 py-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-transparent focus:border-purple-500/50 outline-none transition-all font-medium" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground pl-4">Message</label>
                                <textarea rows={5} name="message" required placeholder="Tell me about your project..." value={formData.message}
                    onChange={handleInputChange} className="w-full p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-transparent focus:border-purple-500/50 outline-none transition-all font-medium resize-none" />
                            </div>

                            <button  type="submit" className="w-full py-5 rounded-2xl border-2 border-transparent hover:border-purple-700 hover:bg-purple-600 hover:transition-transform  hover:scale-105 bg-foreground text-background font-black uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-3 group">
                                Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
