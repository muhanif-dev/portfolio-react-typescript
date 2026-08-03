import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.target);

    // Enter your Web3Forms Access Key here
    formData.append("access_key", "47222c88-afe2-4a35-8501-e2b9f287fd44");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setResult("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#0b0f19] min-h-screen text-white py-20 px-6 flex items-center justify-center font-sans rounded-xl">
      <div className="max-w-5xl mx-auto w-full bg-[#121826] border border-gray-800/80 rounded-3xl p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Heading & Contact Info */}
        <div className="lg:col-span-6 space-y-6">
          <p className="text-xs uppercase tracking-[3px] text-[#FF6A3D] font-semibold">
            I'M HERE TO HELP YOU
          </p>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Discuss Your <br />
            <span className="text-[#FF6A3D]">Project</span> Needs
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Are you looking for top-quality web solutions tailored to your needs? Reach out to us.
          </p>

          <div className="space-y-4 pt-2">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#FF6A3D]/10 border border-[#FF6A3D]/30 flex items-center justify-center text-[#FF6A3D] shrink-0">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <span className="text-xs text-gray-500 block">E-mail</span>
                <span className="text-sm font-medium text-gray-200">muhanif.dev@gmail.com</span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#FF6A3D]/10 border border-[#FF6A3D]/30 flex items-center justify-center text-[#FF6A3D] shrink-0">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div>
                <span className="text-xs text-gray-500 block">Phone number</span>
                <span className="text-sm font-medium text-gray-200">+92 3295258847</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-6 bg-[#0b0f19] border border-gray-800/80 rounded-2xl p-6 sm:p-8 shadow-inner">
          <form onSubmit={onSubmit} className="space-y-4">
            
            {/* Name Field */}
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Name</label>
              <input 
                type="text" 
                name="name"
                required
                placeholder="Full Name" 
                className="w-full bg-[#121826] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FF6A3D] transition-colors"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Email</label>
              <input 
                type="email" 
                name="email"
                required
                placeholder="Email"
                className="w-full bg-[#121826] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FF6A3D] transition-colors"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Message</label>
              <textarea 
                name="message"
                required
                placeholder="Type your message" 
                className="w-full bg-[#121826] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FF6A3D] transition-colors resize-none h-32"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-[#FF6A3D] hover:bg-[#e05b31] disabled:opacity-50 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-orange-600/20 transition-all duration-300 flex items-center justify-center gap-3 w-full text-sm mt-2 cursor-pointer"
            >
              <span>{isSubmitting ? "Sending..." : "Submit"}</span>
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white">
                <FontAwesomeIcon icon={faArrowRight} size="xs" />
              </span>
            </button>

            {/* Result Message */}
            {result && (
              <p className="text-center text-xs mt-3 text-gray-300">{result}</p>
            )}

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;