import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import {
  Calendar,
  Globe,
  MapPin,
  Stethoscope,
  FileText,
  Activity,
  Users,
  Search,
  ArrowUpRight,
  TrendingUp,
  Target,
  FileCheck,
  ChevronRight,
  Phone,
  Mail,
  Clock,
  Sparkles
} from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us | MocDoc — Digital Healthcare Solution" },
      { name: "description", content: "Learn more about MocDoc, the leading provider of cloud-based integrated healthcare management solutions." },
    ],
  }),
});

export function AboutPage() {
  const statsList = [
    { icon: <Clock className="h-6 w-6 text-[#c25100]" />, value: "12+", label: "Years" },
    { icon: <Globe className="h-6 w-6 text-[#c25100]" />, value: "10+", label: "Countries" },
    { icon: <MapPin className="h-6 w-6 text-[#c25100]" />, value: "50+", label: "Cities" },
    { icon: <Stethoscope className="h-6 w-6 text-[#c25100]" />, value: "30K+", label: "Doctors" },
    { icon: <FileText className="h-6 w-6 text-[#c25100]" />, value: "25M+", label: "Patients Records" },
    { icon: <Activity className="h-6 w-6 text-[#c25100]" />, value: "99.9%", label: "Uptime" },
    { icon: <Users className="h-6 w-6 text-[#c25100]" />, value: "1500+", label: "Customers" },
  ];

  const missionPoints = [
    {
      num: 1,
      title: "Empower Healthcare Providers",
      desc: "Equip clinics, hospitals, diagnostic centers, and pharmacies with advanced tools to manage their operations efficiently and provide top-notch patient care.",
      align: "left"
    },
    {
      num: 2,
      title: "Improve Patient Experiences",
      desc: "Enhance patient satisfaction by simplifying processes and ensuring timely, accurate medical services.",
      align: "right"
    },
    {
      num: 3,
      title: "Ensure Quality and Compliance",
      desc: "Maintain the highest standards of quality and compliance in all our offerings, ensuring the safety and security of patient data.",
      align: "left"
    }
  ];

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
            <span className="text-[#c25100]/60">About Us</span>
          </div>
        </div>
      </div>

      <main className="overflow-hidden">
        {/* Section 1: Hero Stats & Map */}
        <section className="relative py-20 lg:py-28 overflow-hidden bg-radial-gradient">
          {/* Decorative floating shapes */}
          <div className="absolute top-10 left-[-5%] w-[300px] h-[300px] bg-gradient-to-tr from-pink-300/20 to-orange-200/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-[-5%] w-[400px] h-[400px] bg-gradient-to-tr from-[#FFEF91]/30 to-orange-200/20 rounded-full blur-3xl pointer-events-none" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column Content */}
              <div className="lg:col-span-6 z-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ffe6d4] px-3 py-1.5 text-xs font-bold text-[#c25100] mb-5 uppercase tracking-wider">
                    <Sparkles className="h-3.5 w-3.5" /> Who We Are
                  </span>
                  <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15] mb-8">
                    Best Healthcare <br />
                    <span className="text-gradient-brand">Management Solutions</span> <br />
                    For Hospitals & Laboratories
                  </h1>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8"
                >
                  {statsList.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -4 }}
                      className="bg-card border border-border p-4 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group"
                    >
                      <div className="p-2 rounded-lg bg-[#fff7f0] group-hover:bg-[#ffe6d4] transition-colors mb-3">
                        {stat.icon}
                      </div>
                      <span className="text-xl sm:text-2xl font-extrabold text-foreground group-hover:text-[#c25100] transition-colors">
                        {stat.value}
                      </span>
                      <span className="text-xs font-semibold text-muted-foreground mt-1 leading-snug">
                        {stat.label}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Right Column: World Map Illustration */}
              <div className="lg:col-span-6 relative flex justify-center items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full max-w-[600px] relative"
                >
                  {/* Glowing halo behind India */}
                  <div className="absolute top-[48%] left-[71.5%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-[#c25100]/25 rounded-full blur-xl animate-pulse pointer-events-none" />

                  {/* Dot Grid / Stylized Vector World Map */}
                  <svg
                    viewBox="0 0 1000 500"
                    className="w-full h-auto text-muted-foreground/15 dark:text-muted-foreground/5 fill-current"
                  >
                    {/* Basic Outline World Map */}
                    <path d="M150,150 Q180,120 220,130 T300,160 T350,140 T400,180 T450,120 T500,100 T580,120 T620,90 T700,100 T750,130 T800,90 T900,120 T950,180 T980,240 T900,320 T850,380 T800,420 T720,380 T680,450 T620,400 T580,420 T500,350 T450,380 T380,320 T300,340 T250,380 T180,350 T120,280 T80,240 Z" className="opacity-10" />
                    {/* Continents Details */}
                    {/* North America */}
                    <path d="M80,100 Q120,70 180,80 T260,90 T280,140 T220,180 T150,220 T100,240 T50,220 T40,160 Z" />
                    {/* South America */}
                    <path d="M180,230 Q220,260 250,300 T270,360 T250,420 T210,450 T180,420 T160,340 T150,280 Z" />
                    {/* Africa */}
                    <path d="M420,200 Q480,180 520,220 T550,280 T560,340 T520,380 T480,360 T440,320 T400,260 Z" />
                    {/* Eurasia */}
                    <path d="M380,90 Q460,70 540,80 T650,60 T750,70 T850,90 T920,120 T940,180 T880,240 T800,260 T700,280 T600,220 T500,170 T400,130 Z" />
                    {/* Australia */}
                    <path d="M780,320 Q840,300 880,340 T860,400 T800,410 T760,360 Z" />
                    
                    {/* India Highlighted (Vibrant Orange & Pulsing) */}
                    <motion.path
                      d="M620,175 L628,172 L635,178 L642,175 L644,185 L652,192 L648,198 L640,202 L636,212 L633,218 L631,222 L628,214 L625,206 L620,202 L616,198 L612,190 L618,185 Z"
                      fill="#c25100"
                      stroke="#c25100"
                      strokeWidth="2"
                      initial={{ scale: 0.95 }}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                      className="cursor-pointer origin-[630px_195px] drop-shadow-[0_4px_12px_rgba(194,81,0,0.5)]"
                    />
                  </svg>
                  
                  {/* Pin locator overlay on India */}
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: -8 }}
                    transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.2, ease: "easeInOut" }}
                    className="absolute top-[34%] left-[62.8%] -translate-x-1/2 -translate-y-1/2 bg-[#c25100] text-white p-2 rounded-full shadow-lg border border-white"
                  >
                    <MapPin className="h-4 w-4" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Innovative IT Solutions Provider */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column Content */}
              <div className="lg:col-span-7">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="inline-flex items-center gap-1 rounded-full bg-[#fff7f0] px-3.5 py-1.5 text-xs font-bold text-[#c25100] mb-5 border border-[#ffe6d4]"
                >
                  Since 2012
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6"
                >
                  Innovative Healthcare IT Solutions Provider
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="space-y-6 text-base text-muted-foreground leading-relaxed font-medium"
                >
                  <p>
                    MocDoc is a leading provider of healthcare management solutions based in Chennai, India. We began in 2012 as an online portal to help doctors connect with patients through technology.
                  </p>
                  <p>
                    What started as a simple idea has since grown into a comprehensive healthcare management suite, transforming the operations of clinics, hospitals, diagnostic centers, and pharmacies.
                  </p>
                  <p>
                    Over the years, MocDoc has evolved beyond its initial scope. Our relentless commitment to innovation and excellence has enabled us to expand our offerings to meet the diverse needs of the healthcare industry. Today, MocDoc provides an all-encompassing platform that integrates practice management, patient records, finance tools, and more, streamlining operations and enhancing patient care.
                  </p>
                </motion.div>
              </div>

              {/* Right Column: Computer Monitor and Workflow Graphic */}
              <div className="lg:col-span-5 flex justify-center items-center relative">
                {/* Floating Gears */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                  className="absolute -top-6 -left-6 text-[#ffe6d4] opacity-80"
                >
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
                  </svg>
                </motion.div>

                {/* Main Monitor Display Component */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full relative filter drop-shadow-xl"
                >
                  <div className="bg-[#1e2530] rounded-xl p-3 border border-slate-700 shadow-2xl relative">
                    {/* Screen Outer */}
                    <div className="bg-white rounded-lg aspect-[1.4] overflow-hidden relative border border-slate-800 p-2 flex flex-col justify-between">
                      {/* Browser header */}
                      <div className="flex items-center gap-1.5 pb-2 border-b border-slate-100">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                        <div className="bg-slate-50 border border-slate-100 rounded text-[9px] px-4 py-0.5 ml-2 text-slate-400 font-sans truncate w-44">mocdoc.com/dashboard</div>
                      </div>

                      {/* Screen Content Graphic */}
                      <div className="flex-1 relative bg-slate-50 p-2 rounded mt-1.5 overflow-hidden flex gap-2">
                        {/* Sidebar Mock */}
                        <div className="w-8 bg-slate-200/50 rounded flex flex-col gap-1.5 p-1">
                          <div className="h-2 w-full bg-slate-300 rounded" />
                          <div className="h-1.5 w-4 bg-slate-300 rounded" />
                          <div className="h-1.5 w-6 bg-slate-300 rounded" />
                        </div>
                        {/* Main Grid mock */}
                        <div className="flex-1 flex flex-col gap-2">
                          <div className="flex justify-between items-center bg-white p-1.5 rounded border border-slate-100">
                            <div className="h-3 w-16 bg-slate-200 rounded" />
                            <div className="h-3.5 w-3.5 rounded-full bg-[#c25100]/20" />
                          </div>
                          <div className="grid grid-cols-2 gap-1.5">
                            <div className="bg-[#fff7f0] border border-[#ffe6d4] p-1.5 rounded flex flex-col justify-between h-14">
                              <div className="h-2 w-10 bg-[#c25100]/40 rounded" />
                              <div className="h-4 w-6 bg-[#c25100] rounded" />
                            </div>
                            <div className="bg-white border border-slate-100 p-1.5 rounded flex flex-col justify-between h-14">
                              <div className="h-2 w-8 bg-slate-200 rounded" />
                              <div className="h-4 w-5 bg-slate-300 rounded" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Growing Orange Arrow overlaid */}
                      <svg viewBox="0 0 200 120" className="absolute inset-0 w-full h-full pointer-events-none">
                        <motion.path
                          d="M10,110 C40,90 90,80 130,40 C145,25 155,10 160,0"
                          fill="none"
                          stroke="#c25100"
                          strokeWidth="4"
                          strokeDasharray="300"
                          initial={{ strokeDashoffset: 300 }}
                          whileInView={{ strokeDashoffset: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                        <motion.polygon
                          points="160,0 152,8 165,6"
                          fill="#c25100"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 1.3 }}
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Monitor Stand */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-slate-800" />
                    <div className="w-28 h-2 bg-slate-800 rounded-t" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Complete Healthcare & Hospital Management Solutions */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column: Target Illustration */}
              <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="w-full max-w-[400px] relative aspect-square"
                >
                  {/* Floating elements */}
                  <div className="absolute top-2 left-6 bg-[#ffe6d4] text-[#c25100] p-2.5 rounded-xl shadow-lg border border-white animate-bounce">
                    <Target className="h-5 w-5" />
                  </div>
                  <div className="absolute bottom-6 right-6 bg-[#FFEF91] text-amber-800 p-2.5 rounded-xl shadow-lg border border-white">
                    <TrendingUp className="h-5 w-5" />
                  </div>

                  {/* Custom SVG Target & Graph illustration */}
                  <svg viewBox="0 0 200 200" className="w-full h-auto">
                    {/* Background circular target elements */}
                    <circle cx="100" cy="100" r="80" className="fill-[#fff7f0] stroke-[#ffe6d4] stroke-width-1" />
                    <circle cx="100" cy="100" r="50" className="fill-none stroke-[#ffe6d4]/80 stroke-width-1 stroke-dasharray-4" />

                    {/* Target board */}
                    <g transform="translate(140, 50)">
                      <circle cx="0" cy="0" r="30" className="fill-white stroke-[#c25100]/20 stroke-width-2 shadow" />
                      <circle cx="0" cy="0" r="22" className="fill-[#ffe6d4] stroke-[#c25100]/30" />
                      <circle cx="0" cy="0" r="14" className="fill-[#c25100]" />
                      <circle cx="0" cy="0" r="6" className="fill-white" />
                      <path d="M-40,40 L-10,10" className="stroke-[#c25100] stroke-width-2" strokeDasharray="3" />
                      {/* Target cross arrow */}
                      <path d="M-35,30 L-25,35 M-25,25 L-35,35" className="stroke-[#c25100] stroke-width-2" />
                    </g>

                    {/* Bars graph */}
                    <g transform="translate(20, 100)">
                      {/* Bar 1 */}
                      <motion.rect
                        x="10" y="50" width="16" height="30" rx="3" className="fill-[#ffe6d4]"
                        initial={{ height: 0, y: 80 }}
                        whileInView={{ height: 30, y: 50 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      />
                      {/* Bar 2 */}
                      <motion.rect
                        x="34" y="35" width="16" height="45" rx="3" className="fill-[#ffd0b0]"
                        initial={{ height: 0, y: 80 }}
                        whileInView={{ height: 45, y: 35 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                      />
                      {/* Bar 3 */}
                      <motion.rect
                        x="58" y="15" width="16" height="65" rx="3" className="fill-[#c25100]"
                        initial={{ height: 0, y: 80 }}
                        whileInView={{ height: 65, y: 15 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                      />
                    </g>

                    {/* Stylized vector character silhouette looking through a telescope */}
                    <g transform="translate(45, 110)">
                      {/* Legs */}
                      <line x1="20" y1="50" x2="10" y2="70" className="stroke-slate-700 stroke-width-3" />
                      <line x1="25" y1="50" x2="35" y2="70" className="stroke-slate-700 stroke-width-3" />
                      {/* Body */}
                      <rect x="15" y="20" width="15" height="30" rx="2" className="fill-slate-800" />
                      {/* Head */}
                      <circle cx="22.5" cy="12.5" r="7.5" className="fill-slate-700" />
                      {/* Telescope */}
                      <motion.polygon
                        points="25,12 65,3 65,9 25,15"
                        className="fill-[#c25100] origin-[25px_12px]"
                        initial={{ rotate: 15 }}
                        whileInView={{ rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      />
                    </g>
                  </svg>
                </motion.div>
              </div>

              {/* Right Column Content */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="inline-flex items-center gap-1 rounded-full bg-[#fff7f0] px-3.5 py-1.5 text-xs font-bold text-[#c25100] mb-5 border border-[#ffe6d4]"
                >
                  Transforming Healthcare
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6"
                >
                  Complete Healthcare & <br /> Hospital Management Solutions
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-base text-muted-foreground leading-relaxed font-medium"
                >
                  Our vision is to revolutionize healthcare management by providing a seamless, integrated, and user-friendly platform that empowers healthcare providers to deliver exceptional patient care. We aspire to be the leading healthcare management solution globally, known for our innovation, reliability, and commitment to improving healthcare delivery.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Our Mission (Winding Path) */}
        <section className="py-24 bg-muted/20 relative">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4"
              >
                Our Mission
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-muted-foreground font-semibold max-w-2xl mx-auto"
              >
                Our mission is to continuously innovate and enhance our platform to meet the evolving needs of the healthcare industry. We aim to:
              </motion.p>
            </div>

            {/* Mission Points Container with SVG Path background */}
            <div className="relative">
              {/* Connecting Curved Dotted Path (Desktop only) */}
              <div className="absolute inset-0 hidden md:block pointer-events-none">
                <svg viewBox="0 0 800 500" className="w-full h-full stroke-[#c25100] stroke-width-2" fill="none">
                  <motion.path
                    d="M 120,70 Q 220,120 400,120 T 680,240 Q 680,300 400,320 T 120,410"
                    strokeDasharray="6 6"
                    initial={{ strokeDashoffset: 500 }}
                    whileInView={{ strokeDashoffset: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "linear" }}
                  />
                </svg>
              </div>

              {/* Path Nodes List */}
              <div className="space-y-16 relative">
                {missionPoints.map((point) => (
                  <motion.div
                    key={point.num}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className={cn(
                      "flex flex-col md:flex-row items-center gap-8 md:gap-12 relative",
                      point.align === "right" ? "md:flex-row-reverse" : ""
                    )}
                  >
                    {/* Circle Node */}
                    <div className="flex-shrink-0 z-10">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 rounded-full bg-[#c25100] text-white flex items-center justify-center text-2xl font-black shadow-lg border-4 border-white"
                      >
                        {point.num}
                      </motion.div>
                    </div>

                    {/* Text block */}
                    <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{point.title}</h3>
                      <p className="text-muted-foreground text-sm font-semibold leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Get Started Call to Action & Doctors Group */}
        <section className="bg-[#ff7a14] py-16 lg:py-24 text-white relative overflow-hidden">
          {/* Glowing abstract circles */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/5 rounded-full blur-3xl pointer-events-none" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column Content */}
              <div className="lg:col-span-6 z-10 text-center lg:text-left">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4.5xl font-black mb-6 leading-tight"
                >
                  Get Started with MocDoc Today!
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-white/90 text-base font-semibold leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
                >
                  Join us in our mission to revolutionize healthcare management. Contact our team today to explore the MocDoc suite and experience a new era of healthcare efficiency and patient safety.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-white/90 text-sm font-bold leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
                >
                  Contact us for a demo to streamline operations, improve patient care, and support ABDM goals.
                </motion.p>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href="#demo"
                    className="inline-block bg-black hover:bg-slate-900 text-white font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5 active:translate-y-0 text-base"
                  >
                    Book a Demo
                  </a>
                </motion.div>
              </div>

              {/* Right Column: Doctors Illustration & Testimonial bubble */}
              <div className="lg:col-span-6 relative flex flex-col justify-center items-center">
                {/* Speech Bubble */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white text-slate-800 px-5 py-3 rounded-2xl shadow-xl font-bold text-sm mb-8 relative after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-[8px] after:border-transparent after:border-t-white"
                >
                  "Our <span className="text-[#c25100]">Patients</span> Trust Us, We Trust <span className="text-[#c25100]">MocDoc</span>"
                </motion.div>

                {/* Vector illustrations of medical personnel */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="w-full max-w-[500px]"
                >
                  {/* Custom SVGs of medical professionals */}
                  <svg viewBox="0 0 400 180" className="w-full h-auto">
                    {/* Dr. 1 */}
                    <g transform="translate(40, 10)">
                      <circle cx="20" cy="30" r="14" className="fill-amber-100" />
                      {/* hair */}
                      <path d="M10,25 Q20,15 30,25 L32,35 L8,35 Z" className="fill-amber-900" />
                      {/* body */}
                      <rect x="5" y="44" width="30" height="130" rx="6" className="fill-emerald-600" />
                      <rect x="12" y="44" width="16" height="130" className="fill-white" />
                      {/* stethoscope */}
                      <path d="M15,44 L15,65 Q20,70 25,65 L25,44" className="stroke-slate-500 stroke-width-2 fill-none" />
                    </g>
                    {/* Dr. 2 */}
                    <g transform="translate(100, 5)">
                      <circle cx="20" cy="30" r="14" className="fill-amber-100" />
                      <path d="M8,30 C8,20 32,20 32,30" className="fill-blue-900" />
                      <rect x="5" y="44" width="30" height="130" rx="6" className="fill-blue-700" />
                      <rect x="11" y="44" width="18" height="130" className="fill-white" />
                    </g>
                    {/* Dr. 3 (Center Female Doctor) */}
                    <g transform="translate(160, 0)">
                      <circle cx="25" cy="28" r="15" className="fill-[#ffd3b6]" />
                      <path d="M10,24 C10,12 40,12 40,24" className="fill-amber-600" />
                      <rect x="5" y="43" width="40" height="140" rx="8" className="fill-teal-500" />
                      <rect x="15" y="43" width="20" height="140" className="fill-white" />
                      {/* stethoscope */}
                      <circle cx="25" cy="72" r="5" className="fill-slate-600" />
                      <path d="M18,43 L18,65 Q25,70 32,65 L32,43" className="stroke-slate-600 stroke-width-2 fill-none" />
                    </g>
                    {/* Dr. 4 */}
                    <g transform="translate(240, 5)">
                      <circle cx="20" cy="30" r="14" className="fill-amber-100" />
                      <path d="M10,22 Q20,15 30,22" className="fill-slate-900" />
                      <rect x="5" y="44" width="30" height="130" rx="6" className="fill-blue-600" />
                      <rect x="12" y="44" width="16" height="130" className="fill-white" />
                    </g>
                    {/* Dr. 5 */}
                    <g transform="translate(300, 10)">
                      <circle cx="20" cy="30" r="14" className="fill-amber-100" />
                      <path d="M12,24 C12,16 28,16 28,24" className="fill-zinc-800" />
                      <rect x="5" y="44" width="30" height="130" rx="6" className="fill-teal-600" />
                      <rect x="12" y="44" width="16" height="130" className="fill-white" />
                    </g>
                  </svg>
                </motion.div>
              </div>
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
