'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, MessageSquare, Zap, Trophy, Timer, Brain, Users, Target, Gift, Eye, AlertCircle, Star } from 'lucide-react'

const gameTypes = [
  {
    title: 'Math Challenges',
    description: 'Solve arithmetic problems quickly to claim victory',
    icon: Brain,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    examples: [
      'Quick addition and subtraction',
      'Multiplication tables',
      'Simple division problems',
      'Number pattern recognition'
    ]
  },
  {
    title: 'Word Unscramble',
    description: 'Unscramble letters to form the correct word',
    icon: MessageSquare,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    examples: [
      'Minecraft item names',
      'TumbleCraft features',
      'Common English words',
      'Server-related terms'
    ]
  },
  {
    title: 'Quick Reactions',
    description: 'React to prompts and commands at lightning speed',
    icon: Zap,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    examples: [
      'Type specific words quickly',
      'Follow simple commands',
      'Color identification',
      'Number sequences'
    ]
  },
  {
    title: 'Trivia Questions',
    description: 'Test your knowledge with various trivia topics',
    icon: Target,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    examples: [
      'Minecraft facts',
      'TumbleCraft history',
      'General knowledge',
      'Gaming trivia'
    ]
  }
]

const participationTips = [
  {
    category: 'Speed & Accuracy',
    icon: Timer,
    tips: [
      'Stay focused on the chat when games appear',
      'Type your answer quickly but accurately',
      'Practice common math problems offline',
      'Use proper spelling and formatting'
    ]
  },
  {
    category: 'Staying Alert',
    icon: Eye,
    tips: [
      'Keep chat visible while playing',
      'Listen for game announcement sounds',
      'Play during peak server hours',
      'Join community Discord for notifications'
    ]
  },
  {
    category: 'Competitive Edge',
    icon: Star,
    tips: [
      'Learn common unscramble patterns',
      'Memorize multiplication tables',
      'Study TumbleCraft terminology',
      'Practice typing speed regularly'
    ]
  }
]

const rewards = [
  {
    type: 'Experience Points',
    description: 'Bonus XP for quick thinking and fast reactions',
    icon: Star,
    value: '50-200 XP'
  },
  {
    type: 'In-Game Currency',
    description: 'Earn coins to spend in shops and trades',
    icon: Gift,
    value: '10-100 coins'
  },
  {
    type: 'Achievement Progress',
    description: 'Unlock special chat game achievements',
    icon: Trophy,
    value: 'Various milestones'
  },
  {
    type: 'Leaderboard Points',
    description: 'Climb the chat games leaderboard',
    icon: Target,
    value: 'Ranking system'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export default function ChatGamesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-24 pb-12">
        {/* Breadcrumb */}
        <motion.div 
          className="flex items-center space-x-2 text-sm text-foreground-muted mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link href="/docs" className="hover:text-primary transition-colors">
            Documentation
          </Link>
          <span>/</span>
          <Link href="/docs/social" className="hover:text-primary transition-colors">
            Social
          </Link>
          <span>/</span>
          <span className="text-foreground">Chat Games</span>
        </motion.div>

        {/* Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <Link 
              href="/docs/social"
              className="p-2 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="hero-title">Chat Games</h1>
              <p className="subtitle">
                Quick-fire mini competitions that pop up in chat. Test your speed, 
                knowledge, and reflexes while having fun with the community!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick Start */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                How to Participate
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Watch Chat</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Games appear randomly in public chat</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Answer Fast</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span>Type your answer quickly and accurately</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Win Rewards</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>First correct answer wins prizes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Game Types */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Types of Chat Games</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {gameTypes.map((game) => (
              <motion.div key={game.title} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${game.bgColor} flex items-center justify-center`}>
                      <game.icon className={`w-6 h-6 ${game.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {game.title}
                      </h3>
                      <p className="text-foreground-muted text-sm">
                        {game.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground mb-2">Examples:</h4>
                    {game.examples.map((example) => (
                      <div key={example} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                        <span className="text-sm text-foreground-muted">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Rewards Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Rewards & Incentives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {rewards.map((reward) => (
              <div key={reward.type} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <reward.icon className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{reward.type}</h3>
                    <div className="text-xs text-primary font-medium">{reward.value}</div>
                  </div>
                </div>
                <p className="text-xs text-foreground-muted">{reward.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tips for Success */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Tips for Success</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {participationTips.map((tipCategory) => (
              <motion.div key={tipCategory.category} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <tipCategory.icon className="w-4 h-4 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {tipCategory.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {tipCategory.tips.map((tip) => (
                      <div key={tip} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-foreground-muted">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community & Fun Factor */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Users className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Community & Social Aspect
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Friendly Competition</h4>
                  <div className="space-y-2 text-sm text-foreground-muted">
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                      <span>Compete with friends and community members</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                      <span>Celebrate victories and learn from defeats</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                      <span>Build reputation as a quick-thinking player</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Social Interaction</h4>
                  <div className="space-y-2 text-sm text-foreground-muted">
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <span>Break the ice with new players</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <span>Create memorable moments with the community</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <span>Encourage others and share strategies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div 
          className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Important Notes</h3>
              <div className="space-y-2 text-sm text-amber-700">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Games appear randomly - there&apos;s no set schedule</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Only the first correct answer wins - speed matters!</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Stay respectful even when you don&apos;t win</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Games are meant to be fun for everyone</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Getting Started */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Ready to Join the Fun?
          </h3>
          <p className="text-foreground-muted text-center mb-6 max-w-2xl mx-auto">
            Chat games are happening right now! Keep your eyes on the chat and be ready 
            to jump in when the next challenge appears. Good luck!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <h4 className="font-medium text-foreground mb-2">Stay Alert</h4>
              <p className="text-foreground-muted text-sm mb-4">
                Keep chat visible and watch for game announcements.
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm">
                <Eye className="w-4 h-4 mr-2 text-gray-600" />
                Watch Chat
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-medium text-foreground mb-2">Practice Skills</h4>
              <p className="text-foreground-muted text-sm mb-4">
                Work on your speed and accuracy to improve your chances.
              </p>
              <Link 
                href="/docs/social/communication"
                className="inline-flex items-center px-4 py-2 bg-white text-foreground rounded-lg hover:bg-gray-50 transition-colors border border-gray-200 text-sm"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Chat Guide
              </Link>
            </div>
            <div className="text-center">
              <h4 className="font-medium text-foreground mb-2">Join Community</h4>
              <p className="text-foreground-muted text-sm mb-4">
                Connect with other players and share your victories.
              </p>
              <Link 
                href="/docs/social/teams"
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm"
              >
                <Users className="w-4 h-4 mr-2" />
                Teams & Social
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}