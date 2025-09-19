import Head from 'next/head'
import Image from 'next/image'
import { HERO, PROJECTS, RESUME, CONTACT } from '../data/siteData'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const sectionVariant = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

export default function Home({theme,setTheme}) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
      <Head>
        <title>Faisal Imam — Portfolio</title>
        <meta name="description" content="Faisal Imam - Computer Science Engineer, System Programmer, Full-stack Developer" />
      </Head>

      <Navbar theme={theme} setTheme={setTheme} />

      <main className="max-w-6xl mx-auto px-6">
        <motion.section id="home" className="flex flex-col md:flex-row items-center gap-8 py-12"
          initial={{opacity:0, y: -10}} animate={{opacity:1, y:0}} transition={{duration:0.7}}>
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold">{HERO.tagline}</h1>
            <p className="mt-4 text-slate-700 dark:text-slate-300">{HERO.short}</p>
            <div className="mt-6 flex gap-3">
              <a href="#projects" className="px-4 py-2 bg-sky-600 text-white rounded hover:scale-105 transition">See projects</a>
              <a href="#contact" className="px-4 py-2 border rounded hover:scale-105 transition">Contact</a>
            </div>
            <div className="mt-4 text-sm text-slate-500">Location: {HERO.location}</div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image src={HERO.photo} alt="profile" width={260} height={260} className="rounded-xl object-cover shadow" />
          </div>
        </motion.section>

        <motion.section id="about" className="py-8 border-t border-slate-100 dark:border-slate-800"
          initial="hidden" whileInView="visible" viewport={{once:true}} variants={sectionVariant}>
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-3 whitespace-pre-line text-slate-700 dark:text-slate-300">{HERO.long}</p>
        </motion.section>

        <motion.section id="projects" className="py-8" initial="hidden" whileInView="visible" viewport={{once:true}} variants={sectionVariant}>
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS.map(p => (
              <motion.article key={p.title} className="p-4 border rounded bg-white dark:bg-slate-800"
                whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{p.summary}</p>
                <div className="mt-2 flex gap-2 overflow-x-auto">
                  {p.screenshots.map((s, i) => (
                    <Image key={i} src={s} alt={p.title + '-' + i} width={320} height={200} className="rounded" />
                  ))}
                </div>
                <div className="mt-3 text-sm text-slate-500">Tech: {p.tech.join(', ')}</div>
                <a href={p.repo} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sky-600">View repo</a>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section id="skills" className="py-8 border-t border-slate-100 dark:border-slate-800" initial="hidden" whileInView="visible" viewport={{once:true}} variants={sectionVariant}>
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(HERO.skills).map(([k,v]) => (
              <motion.div key={k} className="p-4 rounded bg-white dark:bg-slate-800 border" whileHover={{ scale: 1.02 }}>
                <h4 className="font-medium">{k}</h4>
                <div className="text-sm mt-2 text-slate-600 dark:text-slate-300">{v.join(', ')}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section id="experience" className="py-8" initial="hidden" whileInView="visible" viewport={{once:true}} variants={sectionVariant}>
          <h2 className="text-2xl font-semibold">Experience & Roles</h2>
          <div className="mt-4 space-y-3">
            {HERO.experience.map((e,i) => (
              <div key={i} className="p-3 rounded bg-white dark:bg-slate-800 border">
                <div className="font-semibold">{e.org} <span className="text-sm text-slate-500">• {e.role} • {e.date}</span></div>
                <p className="text-sm mt-2 text-slate-600 dark:text-slate-300">{e.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="contact" className="py-8" initial="hidden" whileInView="visible" viewport={{once:true}} variants={sectionVariant}>
          <h2 className="text-2xl font-semibold">Contact</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded bg-white dark:bg-slate-800 border">
              <h4 className="font-medium">Get in touch</h4>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Prefer mail? <a href={CONTACT.mailto} className="text-sky-600">{CONTACT.email}</a></p>
              <a href={RESUME.url} className="mt-3 inline-block text-sm px-4 py-2 bg-emerald-500 text-white rounded">Download Resume</a>
            </div>
            <div className="p-4 rounded bg-white dark:bg-slate-800 border">
              <h4 className="font-medium">Message me</h4>
              <form action={CONTACT.formEndpoint} method="POST" className="mt-3 space-y-3">
                <input type="text" name="name" placeholder="Your name" required className="w-full border px-3 py-2 rounded" />
                <input type="email" name="email" placeholder="Your email" required className="w-full border px-3 py-2 rounded" />
                <textarea name="message" placeholder="Message" rows="5" required className="w-full border px-3 py-2 rounded"></textarea>
                <button type="submit" className="px-4 py-2 bg-sky-600 text-white rounded hover:scale-105 transition">Send message</button>
                <p className="text-xs text-slate-500 mt-2">Submissions are sent via Formspree. First submission may require confirmation based on Formspree settings.</p>
              </form>
            </div>
          </div>
        </motion.section>

      </main>
      <Footer />
    </div>
  )
}
