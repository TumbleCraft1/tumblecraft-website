'use client'

import Navigation from '@/components/Navigation'
// import { motion } from 'framer-motion'
// import { Briefcase, Video, Code, Megaphone, ChevronRight } from 'lucide-react'

// ARCHIVED: Jobs section temporarily removed for revision - will revisit later this week
/*
const jobCategories = [
  {
    title: "Content Creator / Streamer",
    description: "Sponsored, Twitch or YouTube, long form content creator, livestream or video",
    icon: <Video className="w-6 h-6" />,
    requirements: [
      "Active streaming or content creation experience",
      "Engaging personality and strong communication skills",
      "Ability to create sponsored content that aligns with TumbleCraft brand",
      "Consistent upload/streaming schedule"
    ]
  },
  {
    title: "Media Creation",
    description: "Create videos on the SMP on our brand account + marketing",
    icon: <Megaphone className="w-6 h-6" />,
    requirements: [
      "Video editing and production skills",
      "Understanding of marketing and brand voice",
      "Creative storytelling abilities",
      "Experience with social media content"
    ]
  },
  {
    title: "Server Development",
    description: "Creation of custom plugins, modification and maintenance of existing servers",
    icon: <Code className="w-6 h-6" />,
    requirements: [
      "Java/Kotlin programming experience",
      "Bukkit/Spigot/Paper plugin development",
      "Server administration knowledge",
      "Problem-solving and debugging skills"
    ]
  }
]
*/

export default function Jobs() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Jobs</h1>
            <p className="text-xl text-foreground-secondary">
              This section is currently being revised and will be updated soon.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

/* ARCHIVED CONTENT - will be restored later this week
          {/* Header *//*}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Briefcase className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold">Join Our Team</h1>
            </div>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
              Help us build the ultimate Minecraft experience. We&apos;re looking for passionate individuals 
              to join the TumbleCraft team and make an impact in our growing community.
            </p>
          </motion.div>

          {/* Job Categories *//*}
          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {jobCategories.map((job, index) => (
              <motion.div
                key={index}
                className="bg-background-secondary border border-border-color rounded-xl p-8 hover:border-primary/50 group flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background">
                    {job.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                </div>
                
                <p className="text-foreground-secondary mb-6 leading-relaxed">
                  {job.description}
                </p>
                
                <div className="space-y-3 mb-6 flex-grow">
                  <h4 className="font-semibold text-foreground mb-3">Key Requirements:</h4>
                  {job.requirements.map((req, reqIndex) => (
                    <div key={reqIndex} className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground-secondary">{req}</span>
                    </div>
                  ))}
                </div>
                
                <motion.a
                  href="https://forms.gle/66M8KGygBYSfLptu8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm px-4 py-2 w-full text-center inline-block mt-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply for this role
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* Call to Action *//*}
          <motion.div 
            className="text-center bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Don&apos;t see your title listed here?
            </h2>
            <p className="text-foreground-secondary mb-6 max-w-2xl mx-auto">
              Apply anyway! You can learn a skill but you can&apos;t learn motivation or hunger. 
              We&apos;re always looking for passionate individuals who want to contribute to our community.
            </p>
            <motion.a 
              href="https://forms.gle/66M8KGygBYSfLptu8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-3 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.a>
          </motion.div>
*/