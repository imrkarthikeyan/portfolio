import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      number: "01",
      title: "AI-ML Virtual Intern",
      company: "AICTE–EduSkills | Google for Developers",
      duration: "April 2025 – June 2025 · 10 Weeks",
      isCurrent: false,
      paragraph: "Completed a 10-week virtual internship focused on Artificial Intelligence and Machine Learning. Gained hands-on exposure to machine learning concepts, model development, and AI/ML workflows while applying fundamental ML techniques to understand data preparation, model training, evaluation, and prediction. Strengthened practical knowledge of Python, machine learning algorithms, and data-driven problem solving. Developed a foundation for building and applying AI/ML solutions to real-world problems."
    },
    {
      number: "02",
      title: "SDE Intern",
      company: "Nexgen Nextopia Pvt. Ltd.",
      duration: "October 2026 – Present",
      isCurrent: true,
      paragraph: "Working as a Software Development Engineer Intern as part of a collaborative development team building scalable and maintainable software systems. Developing responsive and reusable frontend components using React.js and TypeScript, while contributing to backend development using Java and Spring Boot, including RESTful APIs and business logic. Collaborating with developers to design, develop, test, and integrate features across the full stack. Gaining practical experience in scalable system design, API integration, debugging, version control, and software development practices."
    }
  ];

  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col justify-center items-center pt-20 pb-12 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="text-center mb-8 md:mb-10">
        <h1 className="lg:text-6xl text-4xl font-bold text-[DodgerBlue] relative inline-block font-[500]">
          <span className="absolute mr-1 top-1/2 left-[-50px] w-[40px] block h-[3px] ml-1 bg-[DodgerBlue]"></span>
          Experience
          <span className="absolute top-1/2 right-[-46px] w-[40px] block h-[3px] ml-2 bg-[DodgerBlue]"></span>
        </h1>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col justify-center flex-1 space-y-6 md:space-y-8">
        {experiences.map((exp, index) => (
          <div key={exp.number} className="w-full">
            <motion.div
              initial={{ opacity: 0.35, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="text-[DodgerBlue] text-xs md:text-sm font-mono font-bold tracking-widest uppercase">
                  {exp.number}
                </span>
                <span className="text-gray-600">|</span>
                <p className={`text-xs md:text-sm font-mono ${exp.isCurrent ? 'text-emerald-400 font-semibold' : 'text-gray-400'}`}>
                  {exp.duration}
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-1 leading-snug tracking-tight">
                {exp.title}
              </h2>

              <p className="text-base md:text-lg text-gray-300 font-medium mb-3">
                {exp.company}
              </p>

              <p className="text-3xl md:text-base  leading-relaxed max-w-7xl font-normal">
                {exp.paragraph}
              </p>
            </motion.div>

            {index < experiences.length - 1 && (
              <div className="py-4 md:py-6 w-full">
                <motion.div
                  initial={{ scaleX: 0.2, opacity: 0.15 }}
                  whileInView={{ scaleX: 1, opacity: 0.4 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full h-[1px] bg-gradient-to-r from-transparent via-[DodgerBlue] to-transparent origin-center"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
