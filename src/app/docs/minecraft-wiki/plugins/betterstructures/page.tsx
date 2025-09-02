'use client'

import Navigation from '@/components/Navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export default function BetterStructuresPage() {
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
            <span className="text-gray-700">BetterStructures</span>
          </div>
          
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-normal text-black">BetterStructures</h1>
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
            {/* Infobox */}
            <div className="float-right ml-6 mb-4 w-80 border border-gray-400 bg-gray-50">
              <div className="bg-gray-200 text-center py-2 font-semibold border-b border-gray-400">
                BetterStructures
              </div>
              <div className="p-4">
                <div className="text-center mb-4">
                  <Image 
                    src="/images/betterstructures/plugin-icon.png" 
                    alt="BetterStructures Plugin" 
                    width={128}
                    height={128}
                    className="mx-auto border border-gray-400 rounded"
                  />
                </div>
                
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-t border-gray-300">
                      <td className="py-1 px-2 bg-gray-100 font-semibold">Developer</td>
                      <td className="py-1 px-2"><a href="https://github.com/MagmaGuy" className="text-blue-600 hover:underline">MagmaGuy</a></td>
                    </tr>
                    <tr className="border-t border-gray-300">
                      <td className="py-1 px-2 bg-gray-100 font-semibold">Type</td>
                      <td className="py-1 px-2">Spigot Plugin</td>
                    </tr>
                    <tr className="border-t border-gray-300">
                      <td className="py-1 px-2 bg-gray-100 font-semibold">Latest Version</td>
                      <td className="py-1 px-2">1.0+</td>
                    </tr>
                    <tr className="border-t border-gray-300">
                      <td className="py-1 px-2 bg-gray-100 font-semibold">Supported Versions</td>
                      <td className="py-1 px-2">1.18, 1.19, 1.20, 1.20.6, 1.21</td>
                    </tr>
                    <tr className="border-t border-gray-300">
                      <td className="py-1 px-2 bg-gray-100 font-semibold">Dependencies</td>
                      <td className="py-1 px-2"><a href="#" className="text-blue-600 hover:underline">WorldEdit</a></td>
                    </tr>
                    <tr className="border-t border-gray-300">
                      <td className="py-1 px-2 bg-gray-100 font-semibold">License</td>
                      <td className="py-1 px-2">Open Source</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Article content */}
            <div className="text-black leading-relaxed">
              <p className="mb-4">
                <strong>BetterStructures</strong> is a <a href="#" className="text-blue-600 hover:underline">Spigot</a> plugin 
                created by <a href="https://github.com/MagmaGuy" className="text-blue-600 hover:underline">MagmaGuy</a> that 
                adds custom structures to <a href="#" className="text-blue-600 hover:underline">Minecraft</a> worlds using 
                <a href="#" className="text-blue-600 hover:underline"> WorldEdit</a> schematics. The plugin uses a 
                generator-agnostic topology scanner to find optimal placement spots and seamlessly integrates structures 
                into any world generation system.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">Overview</h2>
              
              <p className="mb-4">
                BetterStructures revitalizes Minecraft worlds with custom-built structures that are randomly placed 
                throughout the world. These structures come filled with a variety of <a href="#" className="text-blue-600 hover:underline">mobs</a> 
                and <a href="#" className="text-blue-600 hover:underline">loot</a>, offering fresh exploration and excitement 
                for players. The plugin is designed to be lightweight and performance-friendly while maintaining 
                compatibility with any world generator.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">Features</h2>

              <h3 className="text-lg font-semibold mt-4 mb-2">Core Features</h3>
              <ul className="list-disc ml-6 mb-4">
                <li className="mb-1"><strong>Generator-Agnostic</strong> - Works with any world generator</li>
                <li className="mb-1"><strong>Topology Scanning</strong> - Intelligent placement based on terrain geometry</li>
                <li className="mb-1"><strong>Randomized Content</strong> - Chests contain randomized loot</li>
                <li className="mb-1"><strong>Mob Integration</strong> - Structures spawn with vanilla mobs</li>
                <li className="mb-1"><strong>New Chunk Generation</strong> - Only spawns in newly generated chunks</li>
                <li className="mb-1"><strong>Custom Item Support</strong> - Full support for custom items and equipment</li>
                <li className="mb-1"><strong>Performance Optimized</strong> - Fast and lightweight with minimal server impact</li>
              </ul>

              <h3 className="text-lg font-semibold mt-4 mb-2">Plugin Integrations</h3>
              <ul className="list-disc ml-6 mb-4">
                <li className="mb-1"><a href="/docs/elite-mobs" className="text-blue-600 hover:underline"><strong>EliteMobs</strong></a> - Advanced boss fights and elite encounters</li>
                <li className="mb-1"><strong>MMOItems</strong> - Custom item integration</li>
                <li className="mb-1"><strong>MythicMobs</strong> - Custom mob spawning capabilities</li>
                <li className="mb-1"><strong>WorldGuard</strong> - Region protection compatibility</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">Installation</h2>
              
              <h3 className="text-lg font-semibold mt-4 mb-2">Requirements</h3>
              <ul className="list-disc ml-6 mb-4">
                <li className="mb-1"><strong>WorldEdit</strong> - Required for structure pasting</li>
                <li className="mb-1"><strong>3GB+ RAM</strong> - Recommended for optimal performance</li>
                <li className="mb-1"><strong>Spigot/Paper</strong> - Compatible Minecraft server software</li>
              </ul>

              <h3 className="text-lg font-semibold mt-4 mb-2">Installation Steps</h3>
              <ol className="list-decimal ml-6 mb-4">
                <li className="mb-2">Download BetterStructures and place it in your plugins folder</li>
                <li className="mb-2">Visit <a href="https://nightbreak.io" className="text-blue-600 hover:underline">nightbreak.io</a>, 
                  <a href="https://magmaguy.itch.io" className="text-blue-600 hover:underline"> magmaguy.itch.io</a>, or 
                  <a href="https://patreon.com/magmaguy" className="text-blue-600 hover:underline"> patreon.com/magmaguy</a></li>
                <li className="mb-2">Download the content packs you want</li>
                <li className="mb-2">Place the downloaded zip files (do not unzip) in <code className="bg-gray-200 px-1">~/plugins/BetterStructures/imports</code></li>
                <li className="mb-2">Run the command <code className="bg-gray-200 px-1">/bs reload</code></li>
                <li className="mb-2">Structures will now start spawning in new chunks</li>
              </ol>

              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">Structure Types</h2>

              <div className="mb-6">
                <table className="w-full border border-gray-400 text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-400 px-3 py-2 text-left font-semibold">Structure Type</th>
                      <th className="border border-gray-400 px-3 py-2 text-left font-semibold">Spawn Height</th>
                      <th className="border border-gray-400 px-3 py-2 text-left font-semibold">Environment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 px-3 py-2"><strong>Sky Structures</strong></td>
                      <td className="border border-gray-400 px-3 py-2">Y: 80-120 (Overworld)<br/>Air-like areas (Nether)</td>
                      <td className="border border-gray-400 px-3 py-2">All dimensions</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-400 px-3 py-2"><strong>Underground Shallow</strong></td>
                      <td className="border border-gray-400 px-3 py-2">Y: 0-60 (Overworld)<br/>Y: 60-120 (Nether)</td>
                      <td className="border border-gray-400 px-3 py-2">Overworld, Nether, End</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-3 py-2"><strong>Underground Deep</strong></td>
                      <td className="border border-gray-400 px-3 py-2">Y: -64-0 (Overworld)<br/>Y: 0-60 (Nether)</td>
                      <td className="border border-gray-400 px-3 py-2">Overworld, Nether</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-400 px-3 py-2"><strong>Liquid Surface</strong></td>
                      <td className="border border-gray-400 px-3 py-2">On liquid surfaces</td>
                      <td className="border border-gray-400 px-3 py-2">Where liquids exist</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">Special Blocks</h2>
              
              <p className="mb-4">
                BetterStructures uses special block types to enhance structure integration:
              </p>
              
              <h3 className="text-lg font-semibold mt-4 mb-2">Barrier Blocks</h3>
              <p className="mb-4">
                <strong>Barrier blocks</strong> in schematics are treated specially by the plugin and provide 
                additional functionality for structure placement.
              </p>

              <h3 className="text-lg font-semibold mt-4 mb-2">Bedrock Blocks</h3>
              <p className="mb-4">
                <strong>Bedrock blocks</strong> tell the plugin to guarantee a solid floor at that location. 
                If a solid block already exists in the world generation, it remains unchanged. However, 
                if the block is liquid or air, it will be replaced with a solid block from the pedestal.
              </p>

              <h3 className="text-lg font-semibold mt-4 mb-2">Spawn Signs</h3>
              <p className="mb-4">
                <strong>Spawn signs</strong> are special signs that spawn persistent entities. Create a normal 
                sign with <code className="bg-gray-200 px-1">[spawn]</code> on the first line and the entity 
                type name (following Spigot API) on the second line to spawn entities at that location.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">Commands</h2>
              
              <div className="mb-6">
                <table className="w-full border border-gray-400 text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-400 px-3 py-2 text-left font-semibold">Command</th>
                      <th className="border border-gray-400 px-3 py-2 text-left font-semibold">Description</th>
                      <th className="border border-gray-400 px-3 py-2 text-left font-semibold">Permission</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 px-3 py-2"><code className="bg-gray-200 px-1">/bs reload</code></td>
                      <td className="border border-gray-400 px-3 py-2">Reloads the plugin and imports new structure packs</td>
                      <td className="border border-gray-400 px-3 py-2">Admin</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-400 px-3 py-2"><code className="bg-gray-200 px-1">/bs</code></td>
                      <td className="border border-gray-400 px-3 py-2">Shows plugin information and help</td>
                      <td className="border border-gray-400 px-3 py-2">Default</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">Content Packs</h2>
              
              <p className="mb-4">
                BetterStructures offers various pre-made content packs, both free and premium:
              </p>
              
              <h3 className="text-lg font-semibold mt-4 mb-2">Available Packs</h3>
              <ul className="list-disc ml-6 mb-4">
                <li className="mb-1"><strong>Vanilla-Inspired Pack</strong> - 103 structures that blend with classic Minecraft aesthetic</li>
                <li className="mb-1"><strong>Elite Shrines</strong> - 49 elite shrines with boss fights, 56 boss files, and 70+ unique loot entries</li>
                <li className="mb-1"><strong>Adventure Pack</strong> - 107 adventure-themed structures with massive builds and intricate traps</li>
                <li className="mb-1"><strong>Lost Civilizations</strong> - 122 structures evoking ancient wonder and abandoned settlements</li>
                <li className="mb-1"><strong>Caves and Underground</strong> - Underground exploration content with ancient themes</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">Performance Optimization</h2>
              
              <h3 className="text-lg font-semibold mt-4 mb-2">Recommended Setup</h3>
              <ul className="list-disc ml-6 mb-4">
                <li className="mb-1">Use <strong>Fast Async WorldEdit (FAWE)</strong> instead of regular WorldEdit for better performance</li>
                <li className="mb-1">Consider <strong>world pregeneration</strong> with BetterStructures installed to eliminate runtime performance impact</li>
                <li className="mb-1">Adjust server <strong>view distance</strong> settings appropriately</li>
                <li className="mb-1">Ensure adequate <strong>server RAM</strong> (3GB+ recommended)</li>
              </ul>

              <p className="mb-4">
                <strong>Note:</strong> Pregeneration means you won&apos;t be able to add new structure packs 
                without generating a new world.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">Development</h2>
              
              <h3 className="text-lg font-semibold mt-4 mb-2">Creating Custom Structures</h3>
              <p className="mb-4">
                Players and server administrators can create custom structures using WorldEdit:
              </p>
              
              <ol className="list-decimal ml-6 mb-4">
                <li className="mb-1">Build your structure in-game using any blocks</li>
                <li className="mb-1">Use WorldEdit to create a schematic of your build</li>
                <li className="mb-1">Configure the structure&apos;s spawn parameters</li>
                <li className="mb-1">Add the schematic to your BetterStructures configuration</li>
              </ol>

              <h3 className="text-lg font-semibold mt-4 mb-2">API for Developers</h3>
              <p className="mb-4">
                BetterStructures provides a developer API for plugin integration. Documentation 
                is available in the <a href="https://github.com/MagmaGuy/BetterStructures/wiki" className="text-blue-600 hover:underline">GitHub wiki</a>.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">Links</h2>
              
              <div className="mb-6">
                <div className="bg-gray-50 border border-gray-300 p-4">
                  <h4 className="font-semibold mb-3">Official Resources</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <a href="https://www.spigotmc.org/resources/betterstructures.103241/" className="text-blue-600 hover:underline flex items-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      SpigotMC Page
                    </a>
                    <a href="https://github.com/MagmaGuy/BetterStructures" className="text-blue-600 hover:underline flex items-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      GitHub Repository
                    </a>
                    <a href="https://github.com/MagmaGuy/BetterStructures/wiki" className="text-blue-600 hover:underline flex items-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Documentation Wiki
                    </a>
                    <a href="https://youtu.be/1z47lSxmyq0" className="text-blue-600 hover:underline flex items-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      YouTube Demonstration
                    </a>
                    <a href="https://nightbreak.io/plugin/betterstructures/" className="text-blue-600 hover:underline flex items-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Nightbreak.io
                    </a>
                    <a href="https://patreon.com/magmaguy" className="text-blue-600 hover:underline flex items-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      MagmaGuy&apos;s Patreon
                    </a>
                  </div>
                </div>
              </div>

              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">See also</h2>
              <ul className="list-disc ml-6 mb-6">
                <li className="mb-1"><a href="/docs/elite-mobs" className="text-blue-600 hover:underline">EliteMobs</a> - Complementary plugin by the same developer</li>
                <li className="mb-1"><a href="#" className="text-blue-600 hover:underline">WorldEdit</a> - Required dependency for structure creation</li>
                <li className="mb-1"><a href="#" className="text-blue-600 hover:underline">Spigot Plugins</a> - Server plugin ecosystem</li>
                <li className="mb-1"><a href="#" className="text-blue-600 hover:underline">World Generation</a> - Minecraft world creation mechanics</li>
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
                  <div className="font-semibold text-gray-800 mb-1">Plugin Info</div>
                  <ul className="text-xs space-y-1 ml-2">
                    <li><a href="#installation" className="text-blue-600 hover:underline">Installation</a></li>
                    <li><a href="#commands" className="text-blue-600 hover:underline">Commands</a></li>
                    <li><a href="#structure-types" className="text-blue-600 hover:underline">Structure Types</a></li>
                    <li><a href="#content-packs" className="text-blue-600 hover:underline">Content Packs</a></li>
                  </ul>
                </div>
                
                <div className="mb-3">
                  <div className="font-semibold text-gray-800 mb-1">Related Plugins</div>
                  <ul className="text-xs space-y-1 ml-2">
                    <li><a href="/docs/elite-mobs" className="text-blue-600 hover:underline">EliteMobs</a></li>
                    <li><span className="text-gray-500">WorldEdit</span></li>
                    <li><span className="text-gray-500">MythicMobs</span></li>
                    <li><span className="text-gray-500">MMOItems</span></li>
                  </ul>
                </div>

                <div className="mb-3">
                  <div className="font-semibold text-gray-800 mb-1">External Links</div>
                  <ul className="text-xs space-y-1 ml-2">
                    <li><a href="https://www.spigotmc.org/resources/betterstructures.103241/" className="text-blue-600 hover:underline">SpigotMC</a></li>
                    <li><a href="https://github.com/MagmaGuy/BetterStructures" className="text-blue-600 hover:underline">GitHub</a></li>
                    <li><a href="https://nightbreak.io" className="text-blue-600 hover:underline">Nightbreak.io</a></li>
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