'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Tag, Star, Users, Palette, Crown, Heart, Zap, Trophy, Target, Gem, Search, Copy } from 'lucide-react'
import { useState } from 'react'

const tagCategories = [
  {
    name: 'Emotions & Expressions',
    description: 'Show your mood and personality',
    icon: Heart,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    count: 15,
    examples: ['😊 Smile', '😎 Cool', '😍 Love', '😂 Laugh', '🥳 Party'],
    tags: ['Happy Face', 'Cool Sunglasses', 'Heart Eyes', 'Laughing', 'Party Hat', 'Wink', 'Kiss', 'Thinking', 'Surprised', 'Sleepy', 'Angry', 'Sad', 'Neutral', 'Excited', 'Confused']
  },
  {
    name: 'Animals & Nature',
    description: 'Connect with the natural world',
    icon: Target,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    count: 18,
    examples: ['🐺 Wolf', '🦅 Eagle', '🐱 Cat', '🌲 Tree', '🌊 Wave'],
    tags: ['Wolf', 'Eagle', 'Cat', 'Dog', 'Lion', 'Bear', 'Fox', 'Owl', 'Butterfly', 'Tree', 'Flower', 'Leaf', 'Mountain', 'Ocean', 'Sun', 'Moon', 'Star', 'Fire']
  },
  {
    name: 'Gaming & Achievements',
    description: 'Show your gaming prowess',
    icon: Trophy,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    count: 12,
    examples: ['🏆 Trophy', '👑 Crown', '⚔️ Sword', '🛡️ Shield', '💎 Diamond'],
    tags: ['Trophy', 'Crown', 'Sword', 'Shield', 'Diamond', 'Gold Medal', 'Silver Medal', 'Bronze Medal', 'Target', 'Bullseye', 'Lightning', 'Thunder']
  },
  {
    name: 'Food & Drinks',
    description: 'Express your favorite treats',
    icon: Star,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    count: 14,
    examples: ['🍕 Pizza', '🍔 Burger', '🍰 Cake', '☕ Coffee', '🍎 Apple'],
    tags: ['Pizza', 'Burger', 'Cake', 'Coffee', 'Apple', 'Banana', 'Cookie', 'Ice Cream', 'Donut', 'Popcorn', 'Hot Dog', 'Taco', 'Sushi', 'Watermelon']
  },
  {
    name: 'Activities & Hobbies',
    description: 'Share your interests and passions',
    icon: Zap,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    count: 16,
    examples: ['🎮 Gaming', '🎨 Art', '⚽ Soccer', '🎵 Music', '📚 Book'],
    tags: ['Gaming Controller', 'Art Palette', 'Soccer Ball', 'Music Note', 'Book', 'Camera', 'Guitar', 'Basketball', 'Tennis', 'Swimming', 'Running', 'Cycling', 'Chess', 'Dice', 'Puzzle', 'Rocket']
  },
  {
    name: 'Symbols & Special',
    description: 'Unique symbols and special icons',
    icon: Gem,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    count: 13,
    examples: ['⭐ Star', '💫 Sparkle', '🔥 Fire', '⚡ Lightning', '💎 Gem'],
    tags: ['Star', 'Sparkle', 'Fire', 'Lightning', 'Gem', 'Diamond', 'Crystal', 'Magic Wand', 'Infinity', 'Peace Sign', 'Yin Yang', 'Recycle', 'Check Mark']
  },
  {
    name: 'Seasonal & Holidays',
    description: 'Celebrate special occasions',
    icon: Crown,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    count: 12,
    examples: ['🎄 Christmas', '🎃 Halloween', '🌸 Spring', '☀️ Summer', '🍂 Fall'],
    tags: ['Christmas Tree', 'Pumpkin', 'Cherry Blossom', 'Snowflake', 'Gift', 'Balloon', 'Fireworks', 'Birthday Cake', 'Party Popper', 'Confetti', 'Easter Egg', 'Four Leaf Clover']
  }
]

const tagFeatures = [
  {
    title: 'Personal Expression',
    description: 'Show your unique personality and style to other players',
    icon: Palette,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    benefits: [
      'Choose from 100+ unique icons',
      'Express your mood and interests',
      'Stand out in the community',
      'Change tags anytime'
    ]
  },
  {
    title: 'Easy Discovery',
    description: 'Browse and find the perfect tag with intuitive categories',
    icon: Search,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    benefits: [
      'Organized by categories',
      'Visual preview system',
      'Search and filter options',
      'Popular tags recommendations'
    ]
  },
  {
    title: 'Social Recognition',
    description: 'Your tag appears next to your name everywhere in-game',
    icon: Users,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    benefits: [
      'Visible in chat messages',
      'Shows on leaderboards',
      'Appears in player lists',
      'Displayed in team rosters'
    ]
  },
  {
    title: 'Unlock & Collect',
    description: 'Earn new tags through gameplay and achievements',
    icon: Star,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    benefits: [
      'Achievement-based unlocks',
      'Seasonal exclusive tags',
      'Rare collectible icons',
      'Progress tracking system'
    ]
  }
]

const tagTips = [
  {
    category: 'Choosing Your Tag',
    icon: Target,
    tips: [
      'Pick a tag that represents your personality',
      'Consider tags that match your playstyle',
      'Choose something memorable and recognizable',
      'Don\'t be afraid to change it up occasionally'
    ]
  },
  {
    category: 'Unlocking More Tags',
    icon: Trophy,
    tips: [
      'Complete achievements to unlock exclusive tags',
      'Participate in seasonal events for limited tags',
      'Check back regularly for new additions',
      'Some tags require specific milestones'
    ]
  },
  {
    category: 'Tag Etiquette',
    icon: Heart,
    tips: [
      'Choose appropriate tags for the community',
      'Be respectful with your selections',
      'Consider your team\'s image when in groups',
      'Have fun and express yourself positively'
    ]
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

function CommandCard({ command, description }: { command: string; description: string }) {
  const [copied, setCopied] = useState(false)

  const copyCommand = () => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <div>
        <code className="text-sm font-mono text-primary">{command}</code>
        <p className="text-xs text-foreground-muted mt-1">{description}</p>
      </div>
      <button
        onClick={copyCommand}
        className="p-2 text-gray-400 hover:text-primary transition-colors"
        title="Copy command"
      >
        <Copy className="w-4 h-4" />
      </button>
    </div>
  )
}

export default function TagsPage() {
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
          <span className="text-foreground">Tags</span>
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
              <h1 className="hero-title">Player Tags</h1>
              <p className="subtitle">
                Express your personality with 100+ unique icons displayed beside your player name. 
                Choose from diverse categories to find the perfect tag that represents you.
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
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Tag className="w-4 h-4 text-orange-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Getting Started with Tags
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Browse Tags</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Use <code className="bg-gray-100 px-1 rounded text-xs">/tags</code> to open the tag menu</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Select Your Tag</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Left-click on any tag to equip it instantly</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Show It Off</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span>Your tag appears beside your name everywhere</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tag Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Why Use Tags?</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {tagFeatures.map((feature) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center`}>
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-foreground-muted text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {feature.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                        <span className="text-sm text-foreground-muted">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tag Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Available Tag Categories</h2>
          <p className="text-foreground-muted mb-8">
            Explore our diverse collection of tags organized by themes and interests. Each category offers 
            unique icons to help you express different aspects of your personality.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {tagCategories.map((category) => (
              <motion.div key={category.name} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${category.bgColor} flex items-center justify-center`}>
                      <category.icon className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {category.name}
                        </h3>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {category.count} tags
                        </span>
                      </div>
                      <p className="text-foreground-muted text-sm mb-3">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Popular examples:</h4>
                    <div className="flex flex-wrap gap-1">
                      {category.examples.map((example) => (
                        <span key={example} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Available tags:</h4>
                    <div className="max-h-20 overflow-y-auto">
                      <div className="flex flex-wrap gap-1">
                        {category.tags.map((tag) => (
                          <span key={tag} className="text-xs text-gray-500 bg-gray-50 px-1.5 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tag Tips */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Tag Tips & Best Practices</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tagTips.map((tipCategory) => (
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

        {/* Commands */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Tag Commands
          </h3>
          <div className="space-y-3">
            <CommandCard 
              command="/tags" 
              description="Open the tag browser to view and select from all available tags"
            />
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
            Ready to Express Yourself?
          </h3>
          <p className="text-foreground-muted text-center mb-6 max-w-2xl mx-auto">
            With over 100 unique tags across diverse categories, you&apos;ll find the perfect way to 
            show your personality. Start browsing and discover your signature style!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <h4 className="font-medium text-foreground mb-2">Browse Tags</h4>
              <p className="text-foreground-muted text-sm mb-4">
                Open the tag menu and explore all available categories and options.
              </p>
              <div className="bg-gray-100 px-3 py-2 rounded text-sm font-mono text-primary">
                /tags
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-medium text-foreground mb-2">Unlock More</h4>
              <p className="text-foreground-muted text-sm mb-4">
                Complete achievements and participate in events for exclusive tags.
              </p>
              <Link 
                href="/docs/gameplay/achievements"
                className="inline-flex items-center px-4 py-2 bg-white text-foreground rounded-lg hover:bg-gray-50 transition-colors border border-gray-200 text-sm"
              >
                <Trophy className="w-4 h-4 mr-2" />
                Achievements Guide
              </Link>
            </div>
            <div className="text-center">
              <h4 className="font-medium text-foreground mb-2">Join the Community</h4>
              <p className="text-foreground-muted text-sm mb-4">
                Connect with other players and show off your unique tag selection.
              </p>
              <Link 
                href="/docs/social/communication"
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm"
              >
                <Users className="w-4 h-4 mr-2" />
                Social Features
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}