import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { toast } from "sonner";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  HelpCircle,
  Handshake,
  MessageSquare,
  Globe,
  Building,
  User,
  Briefcase,
  FileText,
  ExternalLink,
  Laptop
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us | MocDoc — Digital Healthcare Solution" },
      { name: "description", content: "Get in touch with MocDoc. Contact us for product demos, partnerships, or general inquiries." },
    ],
  }),
});

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    countryCode: "+91",
    mobileNumber: "",
    businessEmail: "",
    country: "",
    city: "",
    businessName: "",
    businessType: "",
    bedsCapacity: "",
    websiteUrl: "",
    remarks: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.designation.trim()) newErrors.designation = "Designation is required";
    if (!formData.mobileNumber.trim()) newErrors.mobileNumber = "Mobile number is required";
    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.businessEmail)) {
      newErrors.businessEmail = "Invalid email format";
    }
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.businessName.trim()) newErrors.businessName = "Business name is required";
    if (!formData.businessType) newErrors.businessType = "Business type is required";
    if (!formData.bedsCapacity.trim()) newErrors.bedsCapacity = "Beds capacity is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill in all required fields correctly.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you! Your personalized demo request has been submitted successfully.");
      setFormData({
        name: "",
        designation: "",
        countryCode: "+91",
        mobileNumber: "",
        businessEmail: "",
        country: "",
        city: "",
        businessName: "",
        businessType: "",
        bedsCapacity: "",
        websiteUrl: "",
        remarks: ""
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb Section */}
      <div className="bg-[#fff7f0] border-b border-[#ffe6d4]/60 py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Link to="/" className="text-[#c25100] hover:underline">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-[#c25100]/60" />
            <span className="text-[#c25100]/60">Contact Us</span>
          </div>
        </div>
      </div>

      <main className="pb-20">
        {/* Section 1: Hero Header */}
        <section className="bg-[#fff7f0] py-16 text-center border-b border-[#ffe6d4]/40">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4.5xl font-extrabold text-foreground tracking-tight mb-6"
            >
              Best Healthcare Management Software for{" "}
              <span className="text-[#c25100]">Hospitals</span> &{" "}
              <span className="text-[#c25100]">Labs</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base text-muted-foreground font-semibold leading-relaxed max-w-3xl mx-auto"
            >
              Contact us for personalized assistance on our products and services. Our team is ready to provide the
              guidance you need to enhance your healthcare management experience with MocDoc. Reach out today
            </motion.p>
          </div>
        </section>

        {/* Section 2: How We Make Things Easier */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3.5xl font-extrabold text-center text-foreground mb-16">
              How We Make <span className="text-[#c25100]">Things Easier</span> for You
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Product Demos */}
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#fff7f0] border-2 border-[#ffe6d4] flex items-center justify-center mb-6 text-[#c25100]">
                  <HelpCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Product Demos & Inquiries</h3>
                <p className="text-sm text-muted-foreground font-semibold leading-relaxed">
                  Discover how our solutions can elevate your practice with a customized demo tailored to your workflow and current challenges.
                </p>
              </motion.div>

              {/* Partnerships */}
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#fff7f0] border-2 border-[#ffe6d4] flex items-center justify-center mb-6 text-[#c25100]">
                  <Handshake className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Partnerships</h3>
                <p className="text-sm text-muted-foreground font-semibold leading-relaxed">
                  Interested in collaborating with MocDoc? Let's discuss how we can work together to innovate healthcare.
                </p>
              </motion.div>

              {/* General Inquiries */}
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#fff7f0] border-2 border-[#ffe6d4] flex items-center justify-center mb-6 text-[#c25100]">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">General Inquiries</h3>
                <p className="text-sm text-muted-foreground font-semibold leading-relaxed">
                  Have a general question or feedback? We're always open to hearing from you.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: Interactive Demo Form */}
        <section className="py-16 bg-muted/20 border-y border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3.5xl font-extrabold text-center text-foreground mb-12 leading-snug">
              Connect with a Solution Expert for a <br />
              <span className="text-[#c25100]">Free Personalized Demo</span>
            </h2>

            <form onSubmit={handleSubmit} className="bg-card border border-border shadow-xl rounded-3xl p-8 sm:p-12 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-bold text-foreground flex">
                    Name<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Dr Adam John"
                    className={`px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 focus:ring-red-400' : 'border-border focus:ring-[#c25100]'} focus:outline-none focus:ring-2`}
                  />
                  {errors.name && <span className="text-xs text-red-500 font-semibold">{errors.name}</span>}
                </div>

                {/* Designation */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="designation" className="text-sm font-bold text-foreground flex">
                    Designation<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    placeholder="Eg., Chief Medical Officer, IT Director"
                    className={`px-4 py-3 rounded-xl border ${errors.designation ? 'border-red-500 focus:ring-red-400' : 'border-border focus:ring-[#c25100]'} focus:outline-none focus:ring-2`}
                  />
                  {errors.designation && <span className="text-xs text-red-500 font-semibold">{errors.designation}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Mobile Number */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="mobileNumber" className="text-sm font-bold text-foreground flex">
                    Mobile Number<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className="px-3 py-3 rounded-xl border border-border bg-card focus:outline-none text-sm font-semibold max-w-[140px]"
                    >
                      <option value="+91">India (+91)</option>
                      <option value="+1">US (+1)</option>
                      <option value="+44">UK (+44)</option>
                      <option value="+971">UAE (+971)</option>
                      <option value="+60">Malaysia (+60)</option>
                    </select>
                    <input
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      placeholder="9360952112"
                      className={`flex-1 px-4 py-3 rounded-xl border ${errors.mobileNumber ? 'border-red-500 focus:ring-red-400' : 'border-border focus:ring-[#c25100]'} focus:outline-none focus:ring-2`}
                    />
                  </div>
                  {errors.mobileNumber && <span className="text-xs text-red-500 font-semibold">{errors.mobileNumber}</span>}
                </div>

                {/* Business Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="businessEmail" className="text-sm font-bold text-foreground flex">
                    Business Email<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    type="email"
                    id="businessEmail"
                    name="businessEmail"
                    value={formData.businessEmail}
                    onChange={handleInputChange}
                    placeholder="your.name@organisation.com"
                    className={`px-4 py-3 rounded-xl border ${errors.businessEmail ? 'border-red-500 focus:ring-red-400' : 'border-border focus:ring-[#c25100]'} focus:outline-none focus:ring-2`}
                  />
                  {errors.businessEmail && <span className="text-xs text-red-500 font-semibold">{errors.businessEmail}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Country */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="country" className="text-sm font-bold text-foreground flex">
                    Country<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className={`px-4 py-3 rounded-xl border ${errors.country ? 'border-red-500 focus:ring-red-400' : 'border-border bg-card focus:ring-[#c25100]'} focus:outline-none focus:ring-2`}
                  >
                    <option value="">Please Select</option>
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Nigeria">Nigeria</option>
                  </select>
                  {errors.country && <span className="text-xs text-red-500 font-semibold">{errors.country}</span>}
                </div>

                {/* City */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="city" className="text-sm font-bold text-foreground flex">
                    City<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Mumbai"
                    className={`px-4 py-3 rounded-xl border ${errors.city ? 'border-red-500 focus:ring-red-400' : 'border-border focus:ring-[#c25100]'} focus:outline-none focus:ring-2`}
                  />
                  {errors.city && <span className="text-xs text-red-500 font-semibold">{errors.city}</span>}
                </div>
              </div>

              {/* Business Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="businessName" className="text-sm font-bold text-foreground flex">
                  Business Name<span className="text-red-500 ml-0.5">*</span>
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="ABC Hospital / XYZ Healthcare"
                  className={`px-4 py-3 rounded-xl border ${errors.businessName ? 'border-red-500 focus:ring-red-400' : 'border-border focus:ring-[#c25100]'} focus:outline-none focus:ring-2`}
                />
                {errors.businessName && <span className="text-xs text-red-500 font-semibold">{errors.businessName}</span>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Business Type */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="businessType" className="text-sm font-bold text-foreground flex">
                    Business Type<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className={`px-4 py-3 rounded-xl border ${errors.businessType ? 'border-red-500 focus:ring-red-400' : 'border-border bg-card focus:ring-[#c25100]'} focus:outline-none focus:ring-2`}
                  >
                    <option value="">Please Select</option>
                    <option value="Hospitals / Medical College">Hospitals / Medical College</option>
                    <option value="Clinic / Polyclinic">Clinic / Polyclinic</option>
                    <option value="Diagnostic Lab">Diagnostic Lab</option>
                    <option value="Pharmacy Store">Pharmacy Store</option>
                  </select>
                  {errors.businessType && <span className="text-xs text-red-500 font-semibold">{errors.businessType}</span>}
                </div>

                {/* Bed's Capacity */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="bedsCapacity" className="text-sm font-bold text-foreground flex">
                    Bed's Capacity<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    id="bedsCapacity"
                    name="bedsCapacity"
                    value={formData.bedsCapacity}
                    onChange={handleInputChange}
                    placeholder="e.g. 50, 100, 250"
                    className={`px-4 py-3 rounded-xl border ${errors.bedsCapacity ? 'border-red-500 focus:ring-red-400' : 'border-border focus:ring-[#c25100]'} focus:outline-none focus:ring-2`}
                  />
                  {errors.bedsCapacity && <span className="text-xs text-red-500 font-semibold">{errors.bedsCapacity}</span>}
                </div>
              </div>

              {/* Website URL */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="websiteUrl" className="text-sm font-bold text-foreground">
                  Website URL (If available)
                </label>
                <input
                  type="url"
                  id="websiteUrl"
                  name="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={handleInputChange}
                  placeholder="www.johnhospitals.com"
                  className="px-4 py-3 rounded-xl border border-border focus:ring-[#c25100] focus:outline-none focus:ring-2"
                />
              </div>

              {/* Remarks */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="remarks" className="text-sm font-bold text-foreground">
                  Remarks
                </label>
                <textarea
                  id="remarks"
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your requirement in detail ? **** No's of Beds/Locations and more..."
                  className="px-4 py-3 rounded-xl border border-border focus:ring-[#c25100] focus:outline-none focus:ring-2 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 rounded-xl font-bold transition-all text-base shadow-lg"
              >
                {isSubmitting ? "Submitting Request..." : "Request a Demo"}
              </button>
            </form>
          </div>
        </section>

        {/* Section 4: Contact Details & Map */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center text-[#c25100] mb-16">Contact Us</h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Address Columns */}
              <div className="lg:col-span-5 space-y-12">
                {/* India HQ */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-foreground">India(HQ)</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-sm font-semibold text-muted-foreground leading-relaxed">
                      <MapPin className="h-5 w-5 shrink-0 text-[#c25100] mt-0.5" />
                      <span>
                        #17, 3rd Cross Street, Swamy Square,<br />
                        Vijayanagar, Velachery, Chennai - 600 042.
                      </span>
                    </li>
                    <li className="flex gap-3 text-sm font-semibold text-muted-foreground items-center">
                      <Phone className="h-5 w-5 shrink-0 text-[#c25100]" />
                      <a href="tel:+919360952112" className="hover:text-[#c25100] transition-colors">+91 93609 52112</a>
                    </li>
                    <li className="flex gap-3 text-sm font-semibold text-muted-foreground items-center">
                      <Mail className="h-5 w-5 shrink-0 text-[#c25100]" />
                      <a href="mailto:sales@mocdoc.net" className="hover:text-[#c25100] transition-colors">sales@mocdoc.net</a>
                    </li>
                  </ul>
                </div>

                {/* US */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-foreground">US</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-sm font-semibold text-muted-foreground leading-relaxed">
                      <MapPin className="h-5 w-5 shrink-0 text-[#c25100] mt-0.5" />
                      <span>
                        345 Poplar Ave, Devon, PA<br />
                        19333 United States
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Map embed */}
              <div className="lg:col-span-7">
                <div className="bg-card border border-border p-2 rounded-3xl shadow-xl overflow-hidden aspect-[1.5] w-full">
                  <iframe
                    title="MocDoc HQ Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0016428751515!2d80.21319777592476!3d12.971746214878438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267ea6fffffff%3A0xe54e6ac1bbfd1182!2sMocDoc%20HMS%20-%20Hospital%20%26%20Clinic%20Management%20Software!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Urgent Assistance callout */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-[#fff7f0] border border-[#ffe6d4] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mb-2">Need Immediate Assistance?</h3>
              <p className="text-sm sm:text-base text-muted-foreground font-semibold">
                For urgent matters, please call our support line at <span className="text-[#c25100] font-bold">+91 81898 81898</span>.
              </p>
            </div>
            <a
              href="#demo"
              onClick={() => {
                document.getElementById("name")?.focus();
                toast.info("Please fill in the demo request form above.");
              }}
              className="btn-primary px-8 py-3.5 rounded-xl font-bold whitespace-nowrap"
            >
              Request a Demo
            </a>
          </div>
        </section>

        {/* Section 6: Feedback & Suggestions */}
        <section className="bg-muted/10 py-16 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4">Feedback and Suggestions</h2>
            <p className="text-sm text-muted-foreground font-semibold max-w-xl mx-auto mb-12">
              We value your feedback! Please share your thoughts, suggestions, or experiences with MocDoc on the following platforms:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {/* Platform 1: G2 */}
              <motion.a
                whileHover={{ y: -4 }}
                href="https://www.g2.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center gap-2 group"
              >
                <div className="h-10 flex items-center justify-center">
                  <span className="text-lg font-black tracking-tight text-slate-800">
                    G<span className="text-[#c25100]">2</span> <span className="text-slate-400 font-normal">CROWD</span>
                  </span>
                </div>
                <span className="text-[10px] font-bold text-muted-foreground/60 group-hover:text-[#c25100] transition-colors flex items-center gap-1">
                  Write Review <ExternalLink className="w-3 h-3" />
                </span>
              </motion.a>

              {/* Platform 2: Crozdesk */}
              <motion.a
                whileHover={{ y: -4 }}
                href="https://crozdesk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center gap-2 group"
              >
                <div className="h-10 flex items-center justify-center gap-1.5">
                  <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center text-white text-[10px] font-extrabold">C</div>
                  <span className="text-base font-bold text-slate-800 tracking-tight">crozdesk</span>
                </div>
                <span className="text-[10px] font-bold text-muted-foreground/60 group-hover:text-[#c25100] transition-colors flex items-center gap-1">
                  Write Review <ExternalLink className="w-3 h-3" />
                </span>
              </motion.a>

              {/* Platform 3: SoftwareSuggest */}
              <motion.a
                whileHover={{ y: -4 }}
                href="https://www.softwaresuggest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center gap-2 group"
              >
                <div className="h-10 flex items-center justify-center gap-1">
                  <span className="text-sm font-extrabold text-blue-900 tracking-tight">
                    S<span className="text-[#c25100]">oftware</span>Suggest
                  </span>
                </div>
                <span className="text-[10px] font-bold text-muted-foreground/60 group-hover:text-[#c25100] transition-colors flex items-center gap-1">
                  Write Review <ExternalLink className="w-3 h-3" />
                </span>
              </motion.a>

              {/* Platform 4: Techjockey */}
              <motion.a
                whileHover={{ y: -4 }}
                href="https://www.techjockey.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center gap-2 group"
              >
                <div className="h-10 flex items-center justify-center gap-1">
                  <div className="w-4 h-4 rounded-full border-2 border-orange-500 flex items-center justify-center text-[8px] font-bold text-orange-500">Q</div>
                  <span className="text-sm font-bold text-slate-800 tracking-tight">techjockey</span>
                </div>
                <span className="text-[10px] font-bold text-muted-foreground/60 group-hover:text-[#c25100] transition-colors flex items-center gap-1">
                  Write Review <ExternalLink className="w-3 h-3" />
                </span>
              </motion.a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Utility class merger helper
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
