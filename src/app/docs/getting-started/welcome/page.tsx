import Link from 'next/link'
import { ArrowRight, Users, Zap, Shield, Trophy } from 'lucide-react'

export default function WelcomePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Welcome to TumbleCraft
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Built by software veterans with deep ties to tech creators and gaming culture, 
          TumbleCraft is redefining what SMP should feel like.
        </p>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h2>Start Your Adventure</h2>
        <p>
          TumbleCraft offers a unique survival multiplayer experience that combines classic 
          Minecraft gameplay with modern server features. Whether you're a veteran player 
          or just starting out, our server provides something for everyone.
        </p>

        <h3>What Makes TumbleCraft Special?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
          <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
            <div className="flex items-center space-x-3 mb-3">
              <Users className="w-6 h-6 text-blue-600" />
              <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100">
                Active Community
              </h4>
            </div>
            <p className="text-blue-700 dark:text-blue-300">
              Join a thriving community of players who are passionate about Minecraft 
              and love to collaborate on amazing builds and adventures.
            </p>
          </div>

          <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
            <div className="flex items-center space-x-3 mb-3">
              <Zap className="w-6 h-6 text-green-600" />
              <h4 className="text-lg font-semibold text-green-900 dark:text-green-100">
                Modern Features
              </h4>
            </div>
            <p className="text-green-700 dark:text-green-300">
              Experience cutting-edge server features including advanced economy systems, 
              skill progression, jobs, and interactive quest systems.
            </p>
          </div>

          <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
            <div className="flex items-center space-x-3 mb-3">
              <Shield className="w-6 h-6 text-purple-600" />
              <h4 className="text-lg font-semibold text-purple-900 dark:text-purple-100">
                Protected Builds
              </h4>
            </div>
            <p className="text-purple-700 dark:text-purple-300">
              Your creations are safe with our comprehensive land claiming system. 
              Build with confidence knowing your work is protected.
            </p>
          </div>

          <div className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-700">
            <div className="flex items-center space-x-3 mb-3">
              <Trophy className="w-6 h-6 text-orange-600" />
              <h4 className="text-lg font-semibold text-orange-900 dark:text-orange-100">
                Progression System
              </h4>
            </div>
            <p className="text-orange-700 dark:text-orange-300">
              Level up, unlock new abilities, complete quests, and earn rewards 
              as you progress through your TumbleCraft journey.
            </p>
          </div>
        </div>

        <h3>Getting Connected</h3>
        <p>
          Before diving into the gameplay, here are the essential ways to connect 
          with TumbleCraft:
        </p>

        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700 not-prose">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Server Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium text-gray-900 dark:text-white mb-1">Server IP</h5>
              <code className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded block">
                play.tumblecraft.net
              </code>
            </div>
            <div>
              <h5 className="font-medium text-gray-900 dark:text-white mb-1">Version</h5>
              <code className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded block">
                1.21+ (Latest)
              </code>
            </div>
          </div>
        </div>

        <h3>Your First Steps</h3>
        <p>
          Once you join the server, you'll spawn in our beautiful spawn area. From here, 
          you can explore different worlds, visit the shop, open crates, and begin your 
          survival adventure.
        </p>

        <p>
          The most important first step is to teleport to the Survival World where you'll 
          begin gathering resources and building your base. You can do this by using the 
          <code>/rtp</code> command or talking to the Worlds NPC at spawn.
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
              Ready to Start?
            </h3>
            <p className="text-blue-700 dark:text-blue-300">
              Continue to the next step to learn about world selection and how to enter the survival world.
            </p>
          </div>
          <Link 
            href="/docs/getting-started/world-selection"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Next: World Selection
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}