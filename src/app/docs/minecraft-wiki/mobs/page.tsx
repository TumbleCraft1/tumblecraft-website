'use client'

import Navigation from '@/components/Navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

const mobCategories = [
  {
    title: 'Hostile Mobs',
    description: 'Aggressive creatures that attack players on sight',
    mobs: [
      { name: 'Zombie', href: '/docs/minecraft-wiki/mobs/zombie', available: true, description: 'Common undead hostile mob' },
      { name: 'Skeleton', href: '/docs/minecraft-wiki/mobs/skeleton', available: false, description: 'Bow-wielding undead mob' },
      { name: 'Creeper', href: '/docs/minecraft-wiki/mobs/creeper', available: false, description: 'Explosive mob that silently approaches' },
      { name: 'Spider', href: '/docs/minecraft-wiki/mobs/spider', available: false, description: 'Eight-legged arthropod that can climb walls' },
      { name: 'Enderman', href: '/docs/minecraft-wiki/mobs/enderman', available: false, description: 'Tall, dark mob that can teleport' }
    ]
  },
  {
    title: 'Passive Mobs',
    description: 'Peaceful creatures that never attack players',
    mobs: [
      { name: 'Cow', href: '/docs/minecraft-wiki/mobs/cow', available: false, description: 'Source of leather, raw beef, and milk' },
      { name: 'Pig', href: '/docs/minecraft-wiki/mobs/pig', available: false, description: 'Pink farm animal that drops pork' },
      { name: 'Sheep', href: '/docs/minecraft-wiki/mobs/sheep', available: false, description: 'Woolly mob that can be dyed and sheared' },
      { name: 'Chicken', href: '/docs/minecraft-wiki/mobs/chicken', available: false, description: 'Feathered mob that lays eggs' },
      { name: 'Horse', href: '/docs/minecraft-wiki/mobs/horse', available: false, description: 'Rideable and tameable mount' }
    ]
  },
  {
    title: 'Neutral Mobs',
    description: 'Creatures that are passive until provoked',
    mobs: [
      { name: 'Wolf', href: '/docs/minecraft-wiki/mobs/wolf', available: false, description: 'Tameable canine that can become a pet' },
      { name: 'Iron Golem', href: '/docs/minecraft-wiki/mobs/iron-golem', available: false, description: 'Large defensive mob that protects villages' },
      { name: 'Zombified Piglin', href: '/docs/minecraft-wiki/mobs/zombified-piglin', available: false, description: 'Undead Nether mob with golden sword' },
      { name: 'Bee', href: '/docs/minecraft-wiki/mobs/bee', available: false, description: 'Flying insect that produces honey' },
      { name: 'Dolphin', href: '/docs/minecraft-wiki/mobs/dolphin', available: false, description: 'Friendly aquatic mammal' }
    ]
  },
  {
    title: 'Boss Mobs',
    description: 'Powerful bosses with unique mechanics and rewards',
    mobs: [
      { name: 'Ender Dragon', href: '/docs/minecraft-wiki/mobs/ender-dragon', available: false, description: 'Main boss of the End dimension' },
      { name: 'Wither', href: '/docs/minecraft-wiki/mobs/wither', available: false, description: 'Three-headed undead boss mob' },
      { name: 'Elder Guardian', href: '/docs/minecraft-wiki/mobs/elder-guardian', available: false, description: 'Aquatic boss found in ocean monuments' },
      { name: 'Warden', href: '/docs/minecraft-wiki/mobs/warden', available: false, description: 'Powerful blind mob from the deep dark' }
    ]
  }
]

export default function MobsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-12">
        {/* Wiki Header */}
        <div className="border-b border-gray-300 pb-4 mb-6">
          <div className="flex items-center space-x-2 text-sm text-blue-600 mb-2">
            <Link href="/docs" className="hover:underline">Documentation</Link>
            <span className="text-gray-400">›</span>
            <Link href="/docs/minecraft-wiki" className="hover:underline">Minecraft Wiki</Link>
            <span className="text-gray-400">›</span>
            <span className="text-gray-700">Mobs</span>
          </div>
          
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-normal text-black">Mobs</h1>
            <Link 
              href="/docs/minecraft-wiki"
              className="text-sm text-blue-600 hover:underline flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Wiki
            </Link>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1">
            {/* Introduction */}
            <div className="mb-8">
              <p className="mb-4 text-black leading-relaxed">
                <strong>Mobs</strong> (short for &ldquo;mobile entities&rdquo;) are living creatures in <a href="#" className="text-blue-600 hover:underline">Minecraft</a>. 
                They can be found throughout the various <a href="#" className="text-blue-600 hover:underline">biomes</a> of the 
                <a href="#" className="text-blue-600 hover:underline"> Overworld</a>, <a href="#" className="text-blue-600 hover:underline">Nether</a>, 
                and <a href="#" className="text-blue-600 hover:underline">End</a> dimensions.
              </p>
              <p className="mb-4 text-black leading-relaxed">
                Understanding mob behavior is crucial for survival, farming, and progression in Minecraft. 
                Each mob has unique behaviors, <a href="#" className="text-blue-600 hover:underline">spawn conditions</a>, 
                and <a href="#" className="text-blue-600 hover:underline">drops</a>.
              </p>
            </div>

            {/* Contents */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">Contents</h2>
              <ol className="list-decimal ml-6 text-blue-600">
                <li className="mb-1"><a href="#hostile" className="hover:underline">Hostile mobs</a></li>
                <li className="mb-1"><a href="#passive" className="hover:underline">Passive mobs</a></li>
                <li className="mb-1"><a href="#neutral" className="hover:underline">Neutral mobs</a></li>
                <li className="mb-1"><a href="#boss" className="hover:underline">Boss mobs</a></li>
              </ol>
            </div>

            {/* Mob Categories */}
            {mobCategories.map((category) => (
              <div key={category.title} className="mb-8" id={category.title.toLowerCase().replace(' ', '')}>
                <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">{category.title}</h2>
                <p className="mb-4 text-black leading-relaxed">{category.description}</p>
                
                <div className="mb-6">
                  <table className="w-full border border-gray-400 text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-400 px-3 py-2 text-left font-semibold">Mob</th>
                        <th className="border border-gray-400 px-3 py-2 text-left font-semibold">Description</th>
                        <th className="border border-gray-400 px-3 py-2 text-left font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.mobs.map((mob, mobIndex) => (
                        <tr key={mob.name} className={mobIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="border border-gray-400 px-3 py-2">
                            {mob.available ? (
                              <a href={mob.href} className="text-blue-600 hover:underline font-semibold">
                                {mob.name}
                              </a>
                            ) : (
                              <span className="font-semibold text-gray-700">{mob.name}</span>
                            )}
                          </td>
                          <td className="border border-gray-400 px-3 py-2 text-gray-700">
                            {mob.description}
                          </td>
                          <td className="border border-gray-400 px-3 py-2">
                            {mob.available ? (
                              <span className="text-green-600 text-xs font-semibold">Available</span>
                            ) : (
                              <span className="text-gray-500 text-xs">Coming Soon</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}

            {/* Featured Article */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">Featured: Zombie</h2>
              
              <div className="bg-gray-50 border border-gray-300 p-4 mb-4">
                <div className="flex gap-4">
                  <Image 
                    src="/images/minecraft-wiki/zombie-face.png" 
                    alt="Zombie" 
                    width={64}
                    height={64}
                    className="border border-gray-400 flex-shrink-0"
                    style={{ imageRendering: 'pixelated' }}
                  />
                  <div>
                    <div className="font-semibold mb-2">
                      <a href="/docs/minecraft-wiki/mobs/zombie" className="text-blue-600 hover:underline">Zombie</a>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">
                      A <strong>zombie</strong> is a common undead hostile mob that deals melee damage and commonly spawns at night in the Overworld. 
                      Zombies pursue players from 35 blocks away and can break wooden doors on Hard difficulty.
                    </p>
                    <div className="text-xs text-gray-600">
                      <strong>Health:</strong> 20 × 10 | <strong>Attack:</strong> 2.5-4.5 × 1.25-2.25 | <strong>Spawn:</strong> Light level 0
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-300">
                  <Link href="/docs/minecraft-wiki/mobs/zombie" className="text-blue-600 hover:underline text-sm">
                    Read full article →
                  </Link>
                </div>
              </div>
            </div>

            {/* General Information */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">General Information</h2>
              
              <h3 className="text-lg font-semibold mt-4 mb-2">Spawning</h3>
              <p className="mb-4 text-black leading-relaxed">
                Most mobs spawn naturally in the world under specific conditions. <strong>Hostile mobs</strong> typically spawn at 
                <a href="#" className="text-blue-600 hover:underline"> light level</a> 0, while <strong>passive mobs</strong> spawn 
                on <a href="#" className="text-blue-600 hover:underline">grass blocks</a> at light level 9 or higher.
              </p>

              <h3 className="text-lg font-semibold mt-4 mb-2">Behavior</h3>
              <p className="mb-4 text-black leading-relaxed">
                Mob behavior varies significantly between types. Hostile mobs actively seek out and attack players, 
                while passive mobs ignore players entirely. Neutral mobs are peaceful until provoked.
              </p>

              <h3 className="text-lg font-semibold mt-4 mb-2">Drops</h3>
              <p className="mb-4 text-black leading-relaxed">
                When killed, most mobs drop <a href="#" className="text-blue-600 hover:underline">items</a> and 
                <a href="#" className="text-blue-600 hover:underline"> experience orbs</a>. The type and quantity of drops 
                depend on the mob type and can be affected by <a href="#" className="text-blue-600 hover:underline">enchantments</a> 
                like <a href="#" className="text-blue-600 hover:underline">Looting</a>.
              </p>
            </div>

            {/* See Also */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">See also</h2>
              <ul className="list-disc ml-6 mb-6 text-black">
                <li className="mb-1"><a href="#" className="text-blue-600 hover:underline">Mob spawning</a></li>
                <li className="mb-1"><a href="#" className="text-blue-600 hover:underline">Mob drops</a></li>
                <li className="mb-1"><a href="#" className="text-blue-600 hover:underline">Experience</a></li>
                <li className="mb-1"><a href="#" className="text-blue-600 hover:underline">Difficulty</a></li>
                <li className="mb-1"><a href="/docs/elite-mobs" className="text-blue-600 hover:underline">Elite Mobs (TumbleCraft)</a></li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-64 text-sm">
            <div className="border border-gray-400 bg-gray-50 mb-4">
              <div className="bg-gray-200 text-center py-2 font-semibold border-b border-gray-400">
                Mob Categories
              </div>
              <div className="p-3">
                <div className="mb-3">
                  <div className="font-semibold text-gray-800 mb-1">Hostile Mobs</div>
                  <ul className="text-xs space-y-1 ml-2">
                    <li><a href="/docs/minecraft-wiki/mobs/zombie" className="text-blue-600 hover:underline">Zombie</a></li>
                    <li><span className="text-gray-500">Skeleton</span></li>
                    <li><span className="text-gray-500">Creeper</span></li>
                    <li><span className="text-gray-500">Spider</span></li>
                    <li><span className="text-gray-500">Enderman</span></li>
                  </ul>
                </div>
                
                <div className="mb-3">
                  <div className="font-semibold text-gray-800 mb-1">Passive Mobs</div>
                  <ul className="text-xs space-y-1 ml-2">
                    <li><span className="text-gray-500">Cow</span></li>
                    <li><span className="text-gray-500">Pig</span></li>
                    <li><span className="text-gray-500">Sheep</span></li>
                    <li><span className="text-gray-500">Chicken</span></li>
                    <li><span className="text-gray-500">Horse</span></li>
                  </ul>
                </div>

                <div className="mb-3">
                  <div className="font-semibold text-gray-800 mb-1">Neutral Mobs</div>
                  <ul className="text-xs space-y-1 ml-2">
                    <li><span className="text-gray-500">Wolf</span></li>
                    <li><span className="text-gray-500">Iron Golem</span></li>
                    <li><span className="text-gray-500">Zombified Piglin</span></li>
                    <li><span className="text-gray-500">Bee</span></li>
                  </ul>
                </div>

                <div className="mb-3">
                  <div className="font-semibold text-gray-800 mb-1">Boss Mobs</div>
                  <ul className="text-xs space-y-1 ml-2">
                    <li><span className="text-gray-500">Ender Dragon</span></li>
                    <li><span className="text-gray-500">Wither</span></li>
                    <li><span className="text-gray-500">Elder Guardian</span></li>
                    <li><span className="text-gray-500">Warden</span></li>
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