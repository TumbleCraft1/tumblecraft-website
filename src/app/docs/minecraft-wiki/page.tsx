'use client'

import Navigation from '@/components/Navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function MinecraftWikiPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-12">
        {/* Wiki Header */}
        <div className="border-b border-gray-300 pb-4 mb-6">
          <div className="flex items-center space-x-2 text-sm text-blue-600 mb-2">
            <Link href="/docs" className="hover:underline">Documentation</Link>
            <span className="text-gray-400">›</span>
            <span className="text-gray-700">Minecraft Wiki</span>
          </div>
          
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-normal text-black">Minecraft Wiki</h1>
            <Link 
              href="/docs"
              className="text-sm text-blue-600 hover:underline flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Documentation
            </Link>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1">
            {/* Introduction */}
            <div className="mb-8">
              <p className="mb-4 text-black leading-relaxed">
                Welcome to the <strong>Minecraft Wiki</strong>, a comprehensive reference for all aspects of Minecraft gameplay. 
                This wiki contains detailed information about <a href="/docs/minecraft-wiki/mobs" className="text-blue-600 hover:underline">mobs</a>, 
                items, blocks, and game mechanics.
              </p>
              <p className="mb-4 text-black leading-relaxed">
                Whether you&apos;re a new player learning the basics or a veteran looking for specific details 
                about game mechanics, this wiki serves as your complete reference guide for the world of Minecraft.
              </p>
            </div>

            {/* Contents */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">Contents</h2>
              <ol className="list-decimal ml-6 text-blue-600">
                <li className="mb-1"><a href="#mobs" className="hover:underline">Mobs</a></li>
                <li className="mb-1"><a href="#plugins" className="hover:underline">Plugins</a></li>
                <li className="mb-1"><a href="#items-blocks" className="hover:underline">Items & Blocks</a></li>
                <li className="mb-1"><a href="#mechanics" className="hover:underline">Game Mechanics</a></li>
              </ol>
            </div>

            {/* Mobs Section */}
            <div className="mb-8" id="mobs">
              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">Mobs</h2>
              <p className="mb-4 text-black leading-relaxed">
                <strong>Mobs</strong> (short for &ldquo;mobile entities&rdquo;) are living creatures in Minecraft. They can be found 
                throughout the various biomes of the Overworld, Nether, and End dimensions.
              </p>
              
              <div className="bg-gray-50 border border-gray-300 p-4 mb-4">
                <div className="font-semibold mb-2">Featured Article: <a href="/docs/minecraft-wiki/mobs/zombie" className="text-blue-600 hover:underline">Zombie</a></div>
                <p className="text-sm text-gray-700">
                  A zombie is a common undead hostile mob that deals melee damage and commonly spawns at night. 
                  Zombies are one of the most iconic mobs in Minecraft.
                </p>
                <div className="mt-2">
                  <Link href="/docs/minecraft-wiki/mobs/zombie" className="text-blue-600 hover:underline text-sm">Read more →</Link>
                </div>
              </div>

              <h3 className="text-lg font-semibold mt-4 mb-2">Mob Categories</h3>
              <ul className="list-disc ml-6 mb-4 text-black">
                <li className="mb-1"><strong><a href="/docs/minecraft-wiki/mobs" className="text-blue-600 hover:underline">Hostile mobs</a></strong> - Aggressive creatures that attack players</li>
                <li className="mb-1"><strong>Passive mobs</strong> - Peaceful creatures that never attack</li>
                <li className="mb-1"><strong>Neutral mobs</strong> - Creatures that are passive until provoked</li>
                <li className="mb-1"><strong>Boss mobs</strong> - Powerful bosses with unique abilities</li>
              </ul>

              <p className="mb-4">
                <Link href="/docs/minecraft-wiki/mobs" className="text-blue-600 hover:underline">→ Main article: Mobs</Link>
              </p>
            </div>

            {/* Plugins Section */}
            <div className="mb-8" id="plugins">
              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">Plugins</h2>
              <p className="mb-4 text-black leading-relaxed">
                <strong>Minecraft plugins</strong> are server-side modifications that extend gameplay functionality. 
                They can add new features, modify existing mechanics, and enhance the player experience.
              </p>
              
              <div className="bg-gray-50 border border-gray-300 p-4 mb-4">
                <div className="font-semibold mb-2">Featured Plugin: <a href="/docs/minecraft-wiki/plugins/betterstructures" className="text-blue-600 hover:underline">BetterStructures</a></div>
                <p className="text-sm text-gray-700">
                  A powerful structure generation plugin by MagmaGuy that adds custom buildings to Minecraft worlds. 
                  Uses intelligent topology scanning and integrates with EliteMobs and other popular plugins.
                </p>
                <div className="mt-2">
                  <Link href="/docs/minecraft-wiki/plugins/betterstructures" className="text-blue-600 hover:underline text-sm">Read more →</Link>
                </div>
              </div>

              <h3 className="text-lg font-semibold mt-4 mb-2">Plugin Categories</h3>
              <ul className="list-disc ml-6 mb-4 text-black">
                <li className="mb-1"><strong><a href="/docs/minecraft-wiki/plugins" className="text-blue-600 hover:underline">Structure generation</a></strong> - Plugins that add custom buildings and structures</li>
                <li className="mb-1"><strong>Combat enhancement</strong> - Advanced combat systems and boss battles</li>
                <li className="mb-1"><strong>World building</strong> - Tools for creating and modifying worlds</li>
                <li className="mb-1"><strong>Server management</strong> - Administration and utility plugins</li>
              </ul>

              <p className="mb-4">
                <Link href="/docs/minecraft-wiki/plugins" className="text-blue-600 hover:underline">→ Main article: Plugins</Link>
              </p>
            </div>

            {/* Items & Blocks Section */}
            <div className="mb-8" id="items-blocks">
              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">Items & Blocks</h2>
              <p className="mb-4 text-black leading-relaxed">
                Minecraft features hundreds of different <strong>items</strong> and <strong>blocks</strong> that players can 
                collect, craft, and use to build and survive in the world.
              </p>
              
              <h3 className="text-lg font-semibold mt-4 mb-2">Categories</h3>
              <ul className="list-disc ml-6 mb-4 text-black">
                <li className="mb-1"><strong>Tools</strong> - Items used for mining, combat, and utility</li>
                <li className="mb-1"><strong>Weapons</strong> - Items designed for combat</li>
                <li className="mb-1"><strong>Armor</strong> - Protective equipment for players</li>
                <li className="mb-1"><strong>Building blocks</strong> - Blocks used for construction</li>
                <li className="mb-1"><strong>Crafting materials</strong> - Items used in crafting recipes</li>
              </ul>

              <p className="mb-4 text-gray-600 italic">
                Coming soon - Comprehensive item and block database
              </p>
            </div>

            {/* Game Mechanics Section */}
            <div className="mb-8" id="mechanics">
              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">Game Mechanics</h2>
              <p className="mb-4 text-black leading-relaxed">
                Understanding Minecraft&apos;s <strong>game mechanics</strong> is essential for advanced gameplay. 
                These systems govern how the game world operates and how players can interact with it.
              </p>
              
              <h3 className="text-lg font-semibold mt-4 mb-2">Core Systems</h3>
              <ul className="list-disc ml-6 mb-4 text-black">
                <li className="mb-1"><strong>Combat system</strong> - How damage, armor, and weapons work</li>
                <li className="mb-1"><strong>Redstone</strong> - Minecraft&apos;s electrical system</li>
                <li className="mb-1"><strong>Enchanting</strong> - Adding magical properties to items</li>
                <li className="mb-1"><strong>Brewing</strong> - Creating potions with various effects</li>
                <li className="mb-1"><strong>Farming</strong> - Growing crops and breeding animals</li>
              </ul>

              <p className="mb-4 text-gray-600 italic">
                Coming soon - Detailed mechanics documentation
              </p>
            </div>

            {/* See Also */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">See also</h2>
              <ul className="list-disc ml-6 mb-6 text-black">
                <li className="mb-1"><a href="/docs" className="text-blue-600 hover:underline">TumbleCraft Documentation</a></li>
                <li className="mb-1"><a href="/docs/elite-mobs" className="text-blue-600 hover:underline">Elite Mobs System</a></li>
                <li className="mb-1"><a href="/docs/getting-started" className="text-blue-600 hover:underline">Getting Started Guide</a></li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-64 text-sm">
            <div className="border border-gray-400 bg-gray-50 mb-4">
              <div className="bg-gray-200 text-center py-2 font-semibold border-b border-gray-400">
                Wiki Navigation
              </div>
              <div className="p-3">
                <div className="mb-3">
                  <div className="font-semibold text-gray-800 mb-1">Main Sections</div>
                  <ul className="text-xs space-y-1 ml-2">
                    <li><a href="/docs/minecraft-wiki/mobs" className="text-blue-600 hover:underline">Mobs</a></li>
                    <li><a href="/docs/minecraft-wiki/plugins" className="text-blue-600 hover:underline">Plugins</a></li>
                    <li><span className="text-gray-500">Items & Blocks (Coming Soon)</span></li>
                    <li><span className="text-gray-500">Game Mechanics (Coming Soon)</span></li>
                  </ul>
                </div>
                
                <div className="mb-3">
                  <div className="font-semibold text-gray-800 mb-1">Featured Content</div>
                  <ul className="text-xs space-y-1 ml-2">
                    <li><a href="/docs/minecraft-wiki/mobs/zombie" className="text-blue-600 hover:underline">Zombie</a></li>
                    <li><a href="/docs/minecraft-wiki/plugins/betterstructures" className="text-blue-600 hover:underline">BetterStructures</a></li>
                    <li><span className="text-gray-500">More coming soon...</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 bg-gray-50">
              <div className="bg-gray-200 text-center py-2 font-semibold border-b border-gray-400">
                Tools
              </div>
              <div className="p-3">
                <ul className="text-xs space-y-2">
                  <li><a href="#" className="text-blue-600 hover:underline">What links here</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Related changes</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Print version</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Permanent link</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Page information</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}