'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft, 
  Clock, 
  Coins, 
  Gift, 
  MapPin, 
  Users, 
  Timer,
  Trophy,
  TrendingUp,
  Shield,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'

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

export default function AFKPondPage() {
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
          <Link href="/docs/server" className="hover:text-primary transition-colors">
            Server
          </Link>
          <span>/</span>
          <span className="text-foreground">AFK Pond</span>
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
              href="/docs/server"
              className="p-2 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="hero-title">AFK Pond</h1>
              <p className="subtitle">
                A dedicated area where players can safely AFK while earning automatic rewards. 
                Perfect for passive income generation and staying connected to the community.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick Overview */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                AFK Pond Quick Facts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Coins className="w-4 h-4 text-yellow-500" />
                    <span><strong>15 Minutes:</strong> 2 Coins automatically</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Gift className="w-4 h-4 text-purple-500" />
                    <span><strong>1 Hour:</strong> Common Key reward</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-green-500" />
                    <span><strong>Access:</strong> /warp afk command</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-blue-500" />
                    <span><strong>Safety:</strong> Protected AFK environment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* What is the AFK Pond */}
          <motion.div 
            variants={itemVariants}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">What is the AFK Pond?</h2>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  The AFK Pond is a special designated area on TumbleCraft where players can safely remain 
                  inactive while still earning valuable rewards. This feature allows you to stay connected 
                  to the server and continue progressing even when you&apos;re not actively playing.
                </p>
                <p className="text-foreground-muted leading-relaxed">
                  Whether you&apos;re taking a break, doing homework, or just want to keep your presence on the 
                  server while away, the AFK Pond provides a secure environment with automatic reward generation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Reward System */}
          <motion.div 
            variants={itemVariants}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Trophy className="w-5 h-5 text-yellow-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground mb-6">Reward System</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* 15 Minute Rewards */}
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <Timer className="w-4 h-4 text-yellow-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">15-Minute Rewards</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Coins className="w-4 h-4 text-yellow-500" />
                        <span className="font-medium">2 Coins</span>
                      </div>
                      <p className="text-sm text-foreground-muted">
                        Receive 2 coins every 15 minutes automatically while AFK. Perfect for 
                        building up your currency over time.
                      </p>
                    </div>
                  </div>

                  {/* 1 Hour Rewards */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Clock className="w-4 h-4 text-purple-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">Hourly Rewards</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Gift className="w-4 h-4 text-purple-500" />
                        <span className="font-medium">Common Key</span>
                      </div>
                      <p className="text-sm text-foreground-muted">
                        Every hour spent in the AFK Pond rewards you with a Common Key that 
                        can unlock valuable items and rewards.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start space-x-2">
                    <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-blue-900 mb-1">Cumulative Benefits</h4>
                      <p className="text-sm text-blue-800">
                        The longer you stay AFK, the more rewards you accumulate! In 1 hour, you&apos;ll 
                        earn 8 coins (4 × 15-minute intervals) plus 1 Common Key.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* How to Access */}
          <motion.div 
            variants={itemVariants}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground mb-4">How to Access the AFK Pond</h2>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Primary Command</h4>
                    <code className="block bg-white px-4 py-3 rounded border font-mono text-sm">
                      /warp afk
                    </code>
                    <p className="text-sm text-foreground-muted mt-2">
                      This command instantly teleports you to the AFK Pond area.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Step-by-Step Instructions:</h4>
                    <ol className="space-y-2 text-foreground-muted">
                      <li className="flex items-start space-x-2">
                        <span className="text-primary font-bold min-w-[1.5rem]">1.</span>
                        <span>Open your chat by pressing &apos;T&apos; or &apos;Enter&apos;</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary font-bold min-w-[1.5rem]">2.</span>
                        <span>Type <code className="bg-gray-100 px-1 rounded">/warp afk</code> and press Enter</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary font-bold min-w-[1.5rem]">3.</span>
                        <span>You&apos;ll be instantly teleported to the AFK Pond</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary font-bold min-w-[1.5rem]">4.</span>
                        <span>Find a comfortable spot and start earning rewards!</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AFK Strategies and Tips */}
          <motion.div 
            variants={itemVariants}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-orange-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground mb-6">AFK Strategies & Tips</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Maximizing Rewards</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground-muted text-sm">
                          <strong>Long Sessions:</strong> Plan longer AFK sessions to maximize Common Key rewards
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground-muted text-sm">
                          <strong>Stable Connection:</strong> Ensure a stable internet connection to avoid disconnects
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground-muted text-sm">
                          <strong>Inventory Space:</strong> Keep inventory space available for rewards
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Best Practices</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground-muted text-sm">
                          <strong>Safe Positioning:</strong> Find a secure spot away from edges or hazards
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground-muted text-sm">
                          <strong>Power Management:</strong> Consider your device&apos;s power settings for long sessions
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground-muted text-sm">
                          <strong>Check Periodically:</strong> Occasionally check to ensure you&apos;re still connected
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Rules and Guidelines */}
          <motion.div 
            variants={itemVariants}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground mb-6">Rules & Guidelines</h2>
                
                <div className="space-y-6">
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-red-900 mb-2">Important Rules</h4>
                        <ul className="space-y-1 text-sm text-red-800">
                          <li>• No using AFK machines or automated movement devices</li>
                          <li>• Respect other players&apos; space in the AFK area</li>
                          <li>• Don&apos;t build or place blocks in the AFK Pond</li>
                          <li>• Follow all general server rules while AFK</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-green-900 mb-2">Allowed Activities</h4>
                        <ul className="space-y-1 text-sm text-green-800">
                          <li>• Standing or sitting idle in the designated area</li>
                          <li>• Light chat participation with other AFK players</li>
                          <li>• Checking your progress and rewards periodically</li>
                          <li>• Moving occasionally to prevent disconnection</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Economy Integration */}
          <motion.div 
            variants={itemVariants}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground mb-6">Economy Integration</h2>
                
                <div className="space-y-4">
                  <p className="text-foreground-muted leading-relaxed">
                    The AFK Pond plays an important role in TumbleCraft&apos;s economy by providing a 
                    steady source of coins and Common Keys for all players, regardless of their 
                    active playtime or skill level.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                      <h4 className="font-medium text-yellow-900 mb-2">Coin Economy</h4>
                      <p className="text-sm text-yellow-800">
                        The steady flow of coins from AFK rewards helps maintain economic stability 
                        and gives all players access to the server&apos;s trading systems.
                      </p>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                      <h4 className="font-medium text-purple-900 mb-2">Key Distribution</h4>
                      <p className="text-sm text-purple-800">
                        Common Keys from AFK rewards provide regular access to crates and loot boxes, 
                        keeping the reward system active for all players.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-medium text-blue-900 mb-2">Balanced Progression</h4>
                    <p className="text-sm text-blue-800">
                      AFK rewards complement active gameplay rather than replacing it. The rewards 
                      provide a foundation that allows players to engage in more expensive activities 
                      like enchanting, trading, and building projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Navigation */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Ready to Start Earning?
          </h3>
          <p className="text-foreground-muted text-center mb-6">
            Head to the AFK Pond now and start earning passive rewards, or explore more server features.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/docs/server"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Server Guide
            </Link>
            <Link 
              href="/docs"
              className="inline-flex items-center px-6 py-3 bg-white text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium border border-gray-200"
            >
              <MapPin className="w-4 h-4 mr-2" />
              All Documentation
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}