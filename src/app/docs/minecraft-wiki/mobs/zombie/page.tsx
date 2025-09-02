'use client'

import Navigation from '@/components/Navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

export default function ZombiePage() {
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
            <Link href="/docs/minecraft-wiki/mobs" className="hover:underline">Mobs</Link>
            <span className="text-gray-400">›</span>
            <span className="text-gray-700">Zombie</span>
          </div>
          
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-normal text-black">Zombie</h1>
            <Link 
              href="/docs/minecraft-wiki/mobs"
              className="text-sm text-blue-600 hover:underline flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Mobs
            </Link>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1">
            {/* Infobox */}
            <div className="float-right ml-6 mb-4 w-80 border border-gray-400 bg-gray-50">
              <div className="bg-gray-200 text-center py-2 font-semibold border-b border-gray-400">
                Zombie
              </div>
              <div className="p-4">
                <div className="text-center mb-4">
                  <Image 
                    src="/images/minecraft-wiki/zombie-face.png" 
                    alt="Zombie" 
                    width={128}
                    height={128}
                    className="mx-auto border border-gray-400"
                    style={{ imageRendering: 'pixelated' }}
                  />
                </div>
                
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-t border-gray-300">
                      <td className="py-1 px-2 bg-gray-100 font-semibold">Health</td>
                      <td className="py-1 px-2">20 × 10</td>
                    </tr>
                    <tr className="border-t border-gray-300">
                      <td className="py-1 px-2 bg-gray-100 font-semibold">Attack Damage</td>
                      <td className="py-1 px-2">Easy: 2.5 × 1.25<br/>Normal: 3 × 1.5<br/>Hard: 4.5 × 2.25</td>
                    </tr>
                    <tr className="border-t border-gray-300">
                      <td className="py-1 px-2 bg-gray-100 font-semibold">Size</td>
                      <td className="py-1 px-2">Adult: Height: 1.95 blocks<br/>Width: 0.6 blocks<br/>Baby: Height: 0.975 blocks<br/>Width: 0.3 blocks</td>
                    </tr>
                    <tr className="border-t border-gray-300">
                      <td className="py-1 px-2 bg-gray-100 font-semibold">Spawn</td>
                      <td className="py-1 px-2">Light level 0<br/>Solid opaque blocks</td>
                    </tr>
                    <tr className="border-t border-gray-300">
                      <td className="py-1 px-2 bg-gray-100 font-semibold">Classification</td>
                      <td className="py-1 px-2">Hostile mob<br/>Undead mob</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Article content */}
            <div className="text-black leading-relaxed">
              <p className="mb-4">
                A <strong>zombie</strong> is a common undead <a href="#" className="text-blue-600 hover:underline">hostile mob</a> that deals melee damage and commonly spawns at night in the <a href="#" className="text-blue-600 hover:underline">Overworld</a>.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">Spawning</h2>
              
              <p className="mb-4">
                Zombies spawn in groups of 4 in <strong>Java Edition</strong> or 2-4 in <strong>Bedrock Edition</strong> at a <a href="#" className="text-blue-600 hover:underline">light level</a> of 0, on solid <a href="#" className="text-blue-600 hover:underline">opaque blocks</a>. They spawn in most Overworld biomes.
              </p>

              <h3 className="text-lg font-semibold mt-4 mb-2">Variants</h3>
              <ul className="list-disc ml-6 mb-4">
                <li className="mb-1">5% chance to spawn as <a href="#" className="text-blue-600 hover:underline">baby zombie</a></li>
                <li className="mb-1">5% chance to spawn as <a href="#" className="text-blue-600 hover:underline">zombie villager</a></li>
                <li className="mb-1">Chance to spawn with equipment increases with difficulty and regional difficulty</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">Behavior</h2>
              
              <p className="mb-4">
                Zombies pursue <a href="#" className="text-blue-600 hover:underline">players</a> within a 35-block radius (increased from 16 blocks when holding items). They attack players, <a href="#" className="text-blue-600 hover:underline">villagers</a>, <a href="#" className="text-blue-600 hover:underline">iron golems</a>, <a href="#" className="text-blue-600 hover:underline">snow golems</a>, and <a href="#" className="text-blue-600 hover:underline">wandering traders</a>.
              </p>

              <h3 className="text-lg font-semibold mt-4 mb-2">Sunlight</h3>
              <p className="mb-4">
                Zombies burn in direct <a href="#" className="text-blue-600 hover:underline">sunlight</a> unless they are wearing a <a href="#" className="text-blue-600 hover:underline">helmet</a>, in <a href="#" className="text-blue-600 hover:underline">water</a>, or in the <a href="#" className="text-blue-600 hover:underline">shade</a>.
              </p>

              <h3 className="text-lg font-semibold mt-4 mb-2">Door Breaking</h3>
              <p className="mb-4">
                On <strong>Hard</strong> difficulty, zombies can break <a href="#" className="text-blue-600 hover:underline">wooden doors</a>. They cannot break <a href="#" className="text-blue-600 hover:underline">iron doors</a>.
              </p>

              <h3 className="text-lg font-semibold mt-4 mb-2">Item Pickup</h3>
              <p className="mb-4">
                Zombies can pick up dropped items and will equip <a href="#" className="text-blue-600 hover:underline">armor</a>, <a href="#" className="text-blue-600 hover:underline">weapons</a>, or <a href="#" className="text-blue-600 hover:underline">tools</a>.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">Variants</h2>

              <h3 className="text-lg font-semibold mt-4 mb-2">Baby Zombies</h3>
              <p className="mb-4">
                <strong>Baby zombies</strong> make up 5% of zombie spawns. They are much faster than adult zombies and have a smaller hitbox, making them more dangerous. Baby zombies do not burn in sunlight and never grow up.
              </p>
              
              <ul className="list-disc ml-6 mb-4">
                <li className="mb-1">50% faster movement speed</li>
                <li className="mb-1">Cannot be cured if they are <a href="#" className="text-blue-600 hover:underline">zombie villagers</a></li>
                <li className="mb-1">Can ride <a href="#" className="text-blue-600 hover:underline">chickens</a> in Java Edition (chicken jockey)</li>
                <li className="mb-1">Can ride various mobs in Bedrock Edition</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">Drops</h2>
              
              <div className="mb-6">
                <table className="w-full border border-gray-400 text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-400 px-3 py-2 text-left font-semibold">Item</th>
                      <th className="border border-gray-400 px-3 py-2 text-left font-semibold">Quantity</th>
                      <th className="border border-gray-400 px-3 py-2 text-left font-semibold">Drop Chance</th>
                      <th className="border border-gray-400 px-3 py-2 text-left font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 px-3 py-2"><a href="#" className="text-blue-600 hover:underline">Rotten Flesh</a></td>
                      <td className="border border-gray-400 px-3 py-2">0–2</td>
                      <td className="border border-gray-400 px-3 py-2">100%</td>
                      <td className="border border-gray-400 px-3 py-2">+1 per level of Looting</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-400 px-3 py-2"><a href="#" className="text-blue-600 hover:underline">Iron Ingot</a></td>
                      <td className="border border-gray-400 px-3 py-2">1</td>
                      <td className="border border-gray-400 px-3 py-2">0.83%</td>
                      <td className="border border-gray-400 px-3 py-2">Rare drop</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-3 py-2"><a href="#" className="text-blue-600 hover:underline">Carrot</a></td>
                      <td className="border border-gray-400 px-3 py-2">1</td>
                      <td className="border border-gray-400 px-3 py-2">0.83%</td>
                      <td className="border border-gray-400 px-3 py-2">Rare drop</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-400 px-3 py-2"><a href="#" className="text-blue-600 hover:underline">Potato</a></td>
                      <td className="border border-gray-400 px-3 py-2">1</td>
                      <td className="border border-gray-400 px-3 py-2">0.83%</td>
                      <td className="border border-gray-400 px-3 py-2">Rare drop</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-3 py-2"><a href="#" className="text-blue-600 hover:underline">Zombie Head</a></td>
                      <td className="border border-gray-400 px-3 py-2">1</td>
                      <td className="border border-gray-400 px-3 py-2">100%</td>
                      <td className="border border-gray-400 px-3 py-2">Only when killed by <a href="#" className="text-blue-600 hover:underline">charged creeper</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-semibold mt-4 mb-2">Equipment</h3>
              <p className="mb-4">
                If a zombie spawned with equipment, there is an 8.5% chance of dropping it. The chance increases by 1% per level of <a href="#" className="text-blue-600 hover:underline">Looting</a>, for a maximum of 11.5% with Looting III.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">Transformation</h2>
              
              <h3 className="text-lg font-semibold mt-4 mb-2">Drowning</h3>
              <p className="mb-4">
                If a zombie&apos;s head remains submerged in <a href="#" className="text-blue-600 hover:underline">water</a> for 30 seconds, it begins converting to a <a href="#" className="text-blue-600 hover:underline">drowned</a>. The zombie shakes, similar to a <a href="#" className="text-blue-600 hover:underline">zombie villager</a> being cured. Once converted, the drowned can no longer be cured back into a zombie.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">Data values</h2>
              
              <h3 className="text-lg font-semibold mt-4 mb-2">ID</h3>
              <div className="mb-6">
                <table className="w-full border border-gray-400 text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-400 px-3 py-2 text-left font-semibold">Edition</th>
                      <th className="border border-gray-400 px-3 py-2 text-left font-semibold">Identifier</th>
                      <th className="border border-gray-400 px-3 py-2 text-left font-semibold">Translation key</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 px-3 py-2">Java Edition</td>
                      <td className="border border-gray-400 px-3 py-2"><code className="bg-gray-200 px-1">zombie</code></td>
                      <td className="border border-gray-400 px-3 py-2"><code className="bg-gray-200 px-1">entity.minecraft.zombie</code></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-400 px-3 py-2">Bedrock Edition</td>
                      <td className="border border-gray-400 px-3 py-2"><code className="bg-gray-200 px-1">zombie</code></td>
                      <td className="border border-gray-400 px-3 py-2"><code className="bg-gray-200 px-1">entity.zombie.name</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">History</h2>
              <div className="mb-6">
                <table className="w-full border border-gray-400 text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-400 px-3 py-2 text-left font-semibold">Version</th>
                      <th className="border border-gray-400 px-3 py-2 text-left font-semibold">Changes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 px-3 py-2 font-mono">Classic 0.24_SURVIVAL_TEST</td>
                      <td className="border border-gray-400 px-3 py-2">Added zombies</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-400 px-3 py-2 font-mono">Alpha v1.2.0</td>
                      <td className="border border-gray-400 px-3 py-2">Zombies now drop feathers instead of nothing</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-3 py-2 font-mono">Beta 1.8</td>
                      <td className="border border-gray-400 px-3 py-2">Zombies now drop rotten flesh instead of feathers</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-400 px-3 py-2 font-mono">1.4.2</td>
                      <td className="border border-gray-400 px-3 py-2">Added baby zombies and zombie villagers</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-3 py-2 font-mono">1.13</td>
                      <td className="border border-gray-400 px-3 py-2">Zombies now convert to drowned when underwater</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">Trivia</h2>
              <ul className="list-disc ml-6 mb-4">
                <li className="mb-2">Zombies were the first hostile mob added to Minecraft.</li>
                <li className="mb-2">The zombie&apos;s groaning sound files are actually the word &ldquo;brains&rdquo; played at a lower pitch and backwards.</li>
                <li className="mb-2">Zombies can break doors on Hard difficulty, but iron doors are immune.</li>
                <li className="mb-2">Baby zombies cannot be cured if they are zombie villagers in some editions.</li>
                <li className="mb-2">On Halloween (October 31st), zombies have a chance to spawn wearing pumpkins or jack o&apos;lanterns.</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">See also</h2>
              <ul className="list-disc ml-6 mb-6">
                <li className="mb-1"><a href="#" className="text-blue-600 hover:underline">Zombie Villager</a></li>
                <li className="mb-1"><a href="#" className="text-blue-600 hover:underline">Drowned</a></li>
                <li className="mb-1"><a href="#" className="text-blue-600 hover:underline">Husk</a></li>
                <li className="mb-1"><a href="#" className="text-blue-600 hover:underline">Zombified Piglin</a></li>
                <li className="mb-1"><a href="#" className="text-blue-600 hover:underline">Undead</a></li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-64 text-sm">
            <div className="border border-gray-400 bg-gray-50 mb-4">
              <div className="bg-gray-200 text-center py-2 font-semibold border-b border-gray-400">
                Navigation
              </div>
              <div className="p-3">
                <div className="mb-3">
                  <div className="font-semibold text-gray-800 mb-1">Hostile Mobs</div>
                  <ul className="text-xs space-y-1 ml-2">
                    <li><span className="font-semibold">Zombie</span></li>
                    <li><a href="#" className="text-blue-600 hover:underline">Skeleton</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">Creeper</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">Spider</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">Enderman</a></li>
                  </ul>
                </div>
                
                <div className="mb-3">
                  <div className="font-semibold text-gray-800 mb-1">Zombie Variants</div>
                  <ul className="text-xs space-y-1 ml-2">
                    <li><a href="#" className="text-blue-600 hover:underline">Baby Zombie</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">Zombie Villager</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">Drowned</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">Husk</a></li>
                  </ul>
                </div>

                <div className="mb-3">
                  <div className="font-semibold text-gray-800 mb-1">Related</div>
                  <ul className="text-xs space-y-1 ml-2">
                    <li><a href="#" className="text-blue-600 hover:underline">Undead</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">Mob spawning</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">Difficulty</a></li>
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