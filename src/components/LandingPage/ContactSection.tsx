import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { SocialLinksProps } from "../types/SocialLinksProps";

const socialLinks: SocialLinksProps[] = [
  {
    name: "GitHub",
    username: "FardinMahadi",
    icon: Github,
    url: "https://github.com/FardinMahadi/",
    color: "hover:text-slate-300",
    glow: "group-hover:shadow-slate-500/50",
  },
  {
    name: "LinkedIn",
    username: "mahadi-hasan-fardin",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/mahadi-hasan-fardin",
    color: "hover:text-blue-400",
    glow: "group-hover:shadow-blue-500/50",
  },
  {
    name: "Email",
    icon: Mail,
    username: "mahadihasanfardin",
    url: "mailto:mahadihasanfardin2015@gmail.com",
    color: "hover:text-cyan-400",
    glow: "group-hover:shadow-cyan-500/50",
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0e1a] relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-green-400 font-mono text-xl">{">"}_</span>
            <h2 className="text-green-400">Let&apos;s Collaborate</h2>
          </div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I&apos;m
            always open to new challenges and collaborations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Terminal-style form header */}
              <div className="bg-slate-900/50 rounded-t-lg border border-slate-700/50 px-4 py-2">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-slate-500 text-xs font-mono ml-2">
                    contact-form.tsx
                  </span>
                </div>
              </div>

              <div className="bg-linear-to-br from-slate-800/50 to-slate-900/50 rounded-b-lg border-x border-b border-slate-700/50 p-6 space-y-4 backdrop-blur-sm">
                <div>
                  <label className="text-slate-300 text-sm font-mono mb-2 flex items-center gap-2">
                    <span className="text-purple-400">const</span>
                    <span className="text-cyan-400">name</span>
                    <span className="text-pink-400">=</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-slate-900/50 border-slate-700 focus:border-cyan-500 text-slate-200 placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="text-slate-300 text-sm font-mono mb-2 flex items-center gap-2">
                    <span className="text-purple-400">const</span>
                    <span className="text-cyan-400">email</span>
                    <span className="text-pink-400">=</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-slate-900/50 border-slate-700 focus:border-cyan-500 text-slate-200 placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="text-slate-300 text-sm font-mono mb-2 flex items-center gap-2">
                    <span className="text-purple-400">const</span>
                    <span className="text-cyan-400">message</span>
                    <span className="text-pink-400">=</span>
                  </label>
                  <Textarea
                    placeholder="Your message..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-slate-900/50 border-slate-700 focus:border-cyan-500 text-slate-200 placeholder:text-slate-600 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/70"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Social links */}
            <div>
              <h3 className="text-slate-200 mb-6 font-mono">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="group flex items-center gap-4 p-4 bg-linear-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-slate-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div
                      className={`p-3 rounded-lg bg-slate-900/50 border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-300 shadow-lg ${social.glow}`}
                    >
                      <social.icon
                        className={`w-5 h-5 text-slate-400 ${social.color} transition-colors duration-300`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-slate-200 group-hover:text-cyan-400 transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-slate-500 text-sm font-mono">
                        @{social.username}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Command prompt style info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-slate-900/50 rounded-lg border border-slate-700/50 p-6 font-mono text-sm backdrop-blur-sm"
            >
              <div className="space-y-2">
                <div className="flex gap-2">
                  <span className="text-green-400">$</span>
                  <span className="text-slate-400">cat status.txt</span>
                </div>
                <div className="pl-4 space-y-1">
                  <div className="text-slate-500">
                    <span className="text-cyan-400">Location:</span> Remote /
                    Dhaka / Cumilla
                  </div>
                  <div className="text-slate-500">
                    <span className="text-violet-400">Availability:</span> Open
                    to opportunities
                  </div>
                  <div className="text-slate-500">
                    <span className="text-pink-400">Response Time:</span> {"<"}{" "}
                    24 hours
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <span className="text-green-400">$</span>
                  <span className="text-slate-400 animate-pulse">_</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
