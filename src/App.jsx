import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Award,
  Code,
  Rocket,
  Brain,
  Lightbulb,
  Cpu,
  ChevronRight,
  Star,
  ExternalLink,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";
import Logo from "./assets/logo.png";
import LogoWhite from "./assets/logo_white.png";

const FutureFest2025 = () => {
  const [activeDay, setActiveDay] = useState("day1");
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scheduleData = {
    day1: {
      title: "Day 1 : Innovation Day",
      date: "August 15, Friday",
      events: [
        {
          time: "10:00 AM",
          title: "Opening Ceremony",
          desc: "Welcome to Future Fest 2025",
        },
        {
          time: "11:00 AM",
          title: "AI & Machine Learning Workshop",
          desc: "Hands-on ML experience",
        },
        {
          time: "2:00 PM",
          title: "Startup Pitch Competition",
          desc: "Present your innovative ideas",
        },
        {
          time: "4:00 PM",
          title: "Tech Career Fair",
          desc: "Connect with leading companies",
        },
        {
          time: "5:30 PM",
          title: "Networking Session",
          desc: "Build valuable connections",
        },
      ],
    },
    day2: {
      title: "Day 2: Career Development Day",
      date: "August 16, Saturday",
      events: [
        {
          time: "10:00 AM",
          title: "Career Guidance Session",
          desc: "Expert advice on career paths",
        },
        {
          time: "11:30 AM",
          title: "Industry Panel Discussion",
          desc: "Leaders share insights",
        },
        {
          time: "2:00 PM",
          title: "Skills Assessment Workshop",
          desc: "Identify your strengths",
        },
        {
          time: "3:30 PM",
          title: "Resume Building Session",
          desc: "Create standout resumes",
        },
        {
          time: "5:00 PM",
          title: "Job Interview Simulation",
          desc: "Practice makes perfect",
        },
      ],
    },
    day3: {
      title: "Day 3: Future Technology Day",
      date: "August 17, Sunday",
      events: [
        {
          time: "10:00 AM",
          title: "Emerging Technologies Showcase",
          desc: "See the future today",
        },
        {
          time: "11:30 AM",
          title: "Blockchain & Web3 Workshop",
          desc: "Next-gen web development",
        },
        {
          time: "2:00 PM",
          title: "Robotics Competition",
          desc: "Build and compete",
        },
        {
          time: "4:00 PM",
          title: "Innovation Awards",
          desc: "Recognize excellence",
        },
        {
          time: "5:30 PM",
          title: "Closing Ceremony",
          desc: "Celebrate achievements",
        },
      ],
    },
  };

  const focusAreas = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Artificial Intelligence",
      desc: "Explore cutting-edge AI technologies and their real-world applications in various industries.",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Development",
      desc: "Learn modern programming languages, frameworks, and development methodologies.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Entrepreneurship",
      desc: "Discover how to turn innovative ideas into successful startups and businesses.",
      color: "from-orange-500 to-pink-500",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Hardware Innovation",
      desc: "Dive into IoT, robotics, and next-generation hardware technologies.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creative Technology",
      desc: "Merge creativity with technology in design, gaming, and digital media.",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const workshops = [
    {
      title: "AI Bootcamp",
      duration: "3 Days",
      prize: "₹50,000",
      description:
        "Intensive hands-on training in machine learning and AI development",
      color: "from-purple-500 to-blue-500",
    },
    {
      title: "Blockchain Workshop",
      duration: "2 Days",
      prize: "₹30,000",
      description:
        "Learn decentralized application development and smart contracts",
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Startup Accelerator",
      duration: "3 Days",
      prize: "₹1,00,000",
      description: "Turn your innovative ideas into viable business models",
      color: "from-orange-500 to-pink-500",
    },
  ];

  const partners = [
    { name: "Kathmandu University", type: "college" },
    { name: "Tribhuvan University", type: "college" },
    { name: "Pokhara University", type: "college" },
    { name: "NIST College", type: "college" },
    { name: "Deerwalk Institute", type: "college" },
    { name: "Herald College", type: "college" },
  ];

  const clubs = [
    "Tech Club KU",
    "Innovation Hub TU",
    "Startup Circle",
    "AI Society Nepal",
    "Blockchain Nepal",
    "Women in Tech",
    "Developer Community",
    "Robotics Club",
  ];

  const supporters = [
    "Ministry of Education",
    "Nepal Government",
    "FNCCI",
    "CAN Federation",
    "Kathmandu Metropolitan City",
    "Tech Entrepreneurs Nepal",
  ];

  const themeClasses = {
    bg: darkMode ? "bg-gray-900" : "bg-white",
    text: darkMode ? "text-white" : "text-gray-900",
    textSecondary: darkMode ? "text-gray-300" : "text-gray-600",
    card: darkMode ? "bg-gray-800/50" : "bg-white/80",
    cardBorder: darkMode ? "border-gray-700" : "border-gray-200",
    nav: darkMode ? "bg-gray-900/95" : "bg-white/95",
    section: darkMode ? "bg-gray-800/20" : "bg-gray-50",
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${themeClasses.bg} ${themeClasses.text}`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? `${themeClasses.nav} backdrop-blur-md shadow-lg` : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 animate-pulse">
              {darkMode ? (
                <img src={LogoWhite} style={{ height: 70, margin: 10 }} />
              ) : (
                <img src={Logo} style={{ height: 70, margin: 10 }} />
              )}
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#registration"
                className="hover:text-cyan-500 transition-colors duration-300 transform hover:scale-105"
              >
                Registration
              </a>
              <a
                href="#schedule"
                className="hover:text-purple-500 transition-colors duration-300 transform hover:scale-105"
              >
                Schedule
              </a>
              <a
                href="#bootcamp"
                className="hover:text-pink-500 transition-colors duration-300 transform hover:scale-105"
              >
                Bootcamp
              </a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden ${themeClasses.nav} backdrop-blur-md border-t ${themeClasses.cardBorder} animate-slideDown`}
          >
            <div className="px-4 py-2 space-y-2">
              <a
                href="#registration"
                className="block py-2 hover:text-cyan-500 transition-colors"
              >
                Registration
              </a>
              <a
                href="#schedule"
                className="block py-2 hover:text-purple-500 transition-colors"
              >
                Schedule
              </a>
              <a
                href="#bootcamp"
                className="block py-2 hover:text-pink-500 transition-colors"
              >
                Bootcamp
              </a>
            </div>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className={`absolute inset-0 transition-colors duration-500 ${darkMode ? "bg-gradient-to-br from-gray-900 to-gray-800" : "bg-gradient-to-br from-cyan-50 to-purple-50"}`}
        ></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-ping delay-500"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-green-400 rounded-full animate-bounce delay-1500"></div>

          {/* Floating Geometric Shapes */}
          <div className="absolute top-1/4 left-1/3 w-16 h-16 border-2 border-cyan-400/30 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-1/4 right-1/3 w-12 h-12 border-2 border-purple-400/30 rotate-45 animate-pulse"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Future Fest 2025
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slideUp delay-300">
            <span className="bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent font-semibold">
              Your Blueprint For Tomorrow
            </span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm md:text-base animate-slideUp delay-500">
            {["Innovation", "Career Expo", "Technology", "Networking"].map(
              (item, index) => (
                <span
                  key={item}
                  className={`px-4 py-2 bg-gradient-to-r ${index % 2 === 0 ? "dark:from-cyan-900/50 dark:to-purple-900/50" : "dark:from-purple-900/50 dark:to-pink-900/50"} rounded-full backdrop-blur-sm border ${themeClasses.cardBorder} transform hover:scale-105 transition-all duration-300 animate-float`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {item}
                </span>
              ),
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8 animate-slideUp delay-700">
            <div className="flex items-center gap-2 group">
              <MapPin className="w-5 h-5 text-cyan-500 group-hover:animate-bounce" />
              <span className={themeClasses.textSecondary}>
                Trade Tower, Kathmandu
              </span>
            </div>
            <div className="flex items-center gap-2 group">
              <Calendar className="w-5 h-5 text-purple-500 group-hover:animate-pulse" />
              <span className={themeClasses.textSecondary}>
                August 15-17, 2025
              </span>
            </div>
            <div className="flex items-center gap-2 group">
              <Clock className="w-5 h-5 text-pink-500 group-hover:animate-spin" />
              <span className={themeClasses.textSecondary}>
                10:00 AM - 6:00 PM
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp delay-1000">
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all transform hover:scale-105 hover:shadow-lg animate-pulse">
              Register Now
            </button>
            <button
              className={`px-8 py-3 border-2 border-cyan-500 rounded-full font-semibold hover:bg-cyan-500 hover:text-white transition-all transform hover:scale-105 ${themeClasses.text}`}
            >
              View Schedule
            </button>
          </div>
        </div>
      </section>

      {/* Event Info */}
      <section className={`py-20 ${themeClasses.section}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              About Future Fest 2025
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              <span className={`${themeClasses.textSecondary} font-medium`}>
                Nepal's premier innovation and career expo! Connect with leading
                bachelor colleges, get insights from the expo, and connect with
                leading companies through bootcamp.
              </span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Network & Connect",
                desc: "Meet industry leaders, startup founders, and fellow innovators in Nepal's tech ecosystem.",
                color: "from-cyan-500 to-blue-500",
              },
              {
                icon: Lightbulb,
                title: "Learn & Grow",
                desc: "Participate in workshops, bootcamps, and skill-building sessions led by experts.",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Rocket,
                title: "Launch Your Future",
                desc: "Discover career opportunities and pathways to success in emerging technologies.",
                color: "from-green-500 to-teal-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group ${themeClasses.card} p-8 rounded-2xl backdrop-blur-sm border ${themeClasses.cardBorder} hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-slideUp`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className={`${themeClasses.textSecondary} leading-relaxed`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Event Visual */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <div className="aspect-video bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center">
              <div className="text-center animate-float">
                <Rocket className="w-32 h-32 mx-auto mb-6 text-white opacity-80 group-hover:animate-bounce" />
                <h3 className="text-3xl font-bold text-white mb-2">
                  Innovation Awaits
                </h3>
                <p className="text-white/80 text-lg">
                  Where Technology Meets Opportunity
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section id="schedule" className={`py-20 ${themeClasses.section}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent animate-fadeInUp">
            Event Schedule
          </h2>

          <div className="flex justify-center mb-12 animate-slideUp">
            <div
              className={`flex ${themeClasses.card} rounded-full p-2 backdrop-blur-sm border ${themeClasses.cardBorder} shadow-lg`}
            >
              {Object.entries(scheduleData).map(([key, data]) => (
                <button
                  key={key}
                  onClick={() => setActiveDay(key)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 transform ${
                    activeDay === key
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg scale-105"
                      : `${themeClasses.textSecondary} hover:${themeClasses.text} hover:scale-105`
                  }`}
                >
                  {data.title}
                </button>
              ))}
            </div>
          </div>

          <div
            className={`${themeClasses.card} rounded-3xl p-8 backdrop-blur-sm border ${themeClasses.cardBorder} shadow-xl animate-slideUp`}
          >
            <h3 className="text-3xl font-bold mb-2 text-center">
              {scheduleData[activeDay].title}
            </h3>
            <p className="text-cyan-500 text-center mb-12 text-lg">
              {scheduleData[activeDay].date}
            </p>

            <div className="space-y-4">
              {scheduleData[activeDay].events.map((event, index) => (
                <div
                  key={index}
                  className={`group flex items-start gap-6 p-6 ${themeClasses.card} rounded-xl border ${themeClasses.cardBorder} hover:shadow-lg transition-all duration-300 transform hover:scale-102 animate-slideUp`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-cyan-500 font-bold min-w-[100px] text-lg">
                    {event.time}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-xl mb-2 group-hover:text-purple-500 transition-colors">
                      {event.title}
                    </h4>
                    <p
                      className={`${themeClasses.textSecondary} leading-relaxed`}
                    >
                      {event.desc}
                    </p>
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent animate-fadeInUp">
            Main Focus Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className={`group ${themeClasses.card} p-8 rounded-2xl backdrop-blur-sm border ${themeClasses.cardBorder} hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-slideUp`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}
                >
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-500 transition-colors">
                  {area.title}
                </h3>
                <p className={`${themeClasses.textSecondary} leading-relaxed`}>
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops & Prizes */}
      <section id="bootcamp" className={`py-20 ${themeClasses.section}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent animate-fadeInUp">
            Bootcamp Workshops & Prizes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <div
                key={index}
                className={`group ${themeClasses.card} p-8 rounded-2xl backdrop-blur-sm border ${themeClasses.cardBorder} hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-slideUp`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${workshop.color} rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}
                  >
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                    {workshop.prize}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-500 transition-colors">
                  {workshop.title}
                </h3>
                <p className="text-cyan-500 font-medium mb-4">
                  {workshop.duration}
                </p>
                <p className={`${themeClasses.textSecondary} leading-relaxed`}>
                  {workshop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-events */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent animate-fadeInUp">
            Pre-Events
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Idea Competition",
                desc: "Submit your innovative ideas for a chance to present at the main event.",
                deadline: "Deadline: August 1, 2025",
                color: "from-purple-500 to-pink-500",
              },
              {
                title: "Online Masterclass",
                desc: "Join our virtual preparatory sessions with industry experts.",
                deadline: "Starting: August 5, 2025",
                color: "from-green-500 to-teal-500",
              },
            ].map((event, index) => (
              <div
                key={index}
                className={`group ${themeClasses.card} p-8 rounded-2xl backdrop-blur-sm border ${themeClasses.cardBorder} hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-slideUp`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${event.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}
                >
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-500 transition-colors">
                  {event.title}
                </h3>
                <p
                  className={`${themeClasses.textSecondary} mb-4 leading-relaxed`}
                >
                  {event.desc}
                </p>
                <span className="text-cyan-500 font-medium">
                  {event.deadline}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className={`py-20 ${themeClasses.section}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent animate-fadeInUp">
            Past Events Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className={`group aspect-square bg-gradient-to-br ${item % 3 === 0 ? "from-purple-500 to-pink-500" : item % 2 === 0 ? "from-cyan-500 to-blue-500" : "from-green-500 to-teal-500"} rounded-2xl flex items-center justify-center hover:scale-105 transition-all duration-300 animate-slideUp`}
                style={{ animationDelay: `${item * 0.1}s` }}
              >
                <Star className="w-8 h-8 text-white opacity-70 group-hover:opacity-100 group-hover:rotate-12 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* College Partners */}
            <div className="animate-slideUp">
              <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                College Partners
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className={`${themeClasses.card} p-6 rounded-xl text-center backdrop-blur-sm border ${themeClasses.cardBorder} hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-slideUp`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="font-medium">{partner.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Clubs */}
            <div className="animate-slideUp delay-300">
              <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                Student Clubs
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {clubs.map((club, index) => (
                  <div
                    key={index}
                    className={`${themeClasses.card} p-6 rounded-xl text-center backdrop-blur-sm border ${themeClasses.cardBorder} hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-slideUp`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="font-medium">{club}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supporters */}
      <section className={`py-20 ${themeClasses.section}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent animate-fadeInUp">
            Supported By
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {supporters.map((supporter, index) => (
              <div
                key={index}
                className={`${themeClasses.card} p-8 rounded-xl text-center backdrop-blur-sm border ${themeClasses.cardBorder} hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-slideUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="font-semibold text-lg">{supporter}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-16 ${darkMode ? "bg-gray-900" : "bg-gray-900"} text-white`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-fadeInUp">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center animate-pulse">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Future Fest 2025</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Your Blueprint For Tomorrow
              </p>
            </div>

            <div className="animate-fadeInUp delay-200">
              <h4 className="font-semibold mb-6 text-cyan-400 text-lg">
                Quick Links
              </h4>
              <div className="space-y-3 text-sm">
                <a
                  href="#registration"
                  className="block text-gray-300 hover:text-white transition-colors duration-300 transform hover:translate-x-1"
                >
                  Registration
                </a>
                <a
                  href="#schedule"
                  className="block text-gray-300 hover:text-white transition-colors duration-300 transform hover:translate-x-1"
                >
                  Schedule
                </a>
                <a
                  href="#bootcamp"
                  className="block text-gray-300 hover:text-white transition-colors duration-300 transform hover:translate-x-1"
                >
                  Bootcamp
                </a>
              </div>
            </div>

            <div className="animate-fadeInUp delay-400">
              <h4 className="font-semibold mb-6 text-purple-400 text-lg">
                Support
              </h4>
              <div className="space-y-3 text-sm">
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors duration-300 transform hover:translate-x-1"
                >
                  FAQs
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors duration-300 transform hover:translate-x-1"
                >
                  Terms & Conditions
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors duration-300 transform hover:translate-x-1"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <div className="animate-fadeInUp delay-600">
              <h4 className="font-semibold mb-6 text-pink-400 text-lg">
                Connect
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
                >
                  <ExternalLink className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
                >
                  <ExternalLink className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-pink-400 transition-all duration-300 transform hover:scale-110"
                >
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm animate-fadeInUp delay-800">
            <p>
              © 2025 Future Fest. All rights reserved. Organized by Open Tech
              Communtiy.
            </p>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 0.4s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-400 {
          animation-delay: 400ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-600 {
          animation-delay: 600ms;
        }

        .delay-700 {
          animation-delay: 700ms;
        }

        .delay-800 {
          animation-delay: 800ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }

        .hover\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default FutureFest2025;
