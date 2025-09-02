'use client'

import Navigation from '@/components/Navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

const pluginCategories = [
  {
    title: 'Structure Generation',
    description: 'Plugins that add or modify world structures',
    plugins: [
      { 
        name: 'BetterStructures', 
        href: '/docs/minecraft-wiki/plugins/betterstructures', 
        available: true, 
        description: 'Advanced structure generation system by MagmaGuy',
        developer: 'MagmaGuy',
        features: ['WorldEdit Integration', 'Custom Structures', 'Topology Scanning', 'Plugin Integration']
      }
    ]
  },
  {
    title: 'Combat Enhancement',
    description: 'Plugins that enhance combat mechanics and add new challenges',
    plugins: [
      { 
        name: 'EliteMobs', 
        href: '/docs/elite-mobs', 
        available: true, 
        description: 'Advanced mob combat system with scaling difficulty',
        developer: 'MagmaGuy',
        features: ['Scaling Mobs', 'Custom Loot', 'Boss Battles', 'Guild System']
      }
    ]
  },
  {
    title: 'World Building',
    description: 'Tools and plugins for world creation and modification',
    plugins: [
      { 
        name: 'WorldEdit', 
        href: '/docs/minecraft-wiki/plugins/worldedit', 
        available: false, 
        description: 'Essential world editing and building tool',
        developer: 'EngineHub',
        features: ['Block Manipulation', 'Schematics', 'Brushes', 'Selection Tools']
      }
    ]
  }
]

export default function PluginsPage() {
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
            <span className="text-gray-700">Plugins</span>
          </div>
          
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-normal text-black">Minecraft Plugins</h1>
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
                <strong>Minecraft plugins</strong> are server-side modifications that extend the functionality 
                of <a href="#" className="text-blue-600 hover:underline">Minecraft servers</a>. They can add new 
                features, modify existing gameplay mechanics, and enhance the overall player experience without 
                requiring client-side modifications.
              </p>
              <p className="mb-4 text-black leading-relaxed">
                This section covers plugins commonly used on Minecraft servers, with detailed documentation 
                about their features, installation, configuration, and usage. Each plugin page includes 
                comprehensive information to help server administrators and players understand their capabilities.
              </p>
            </div>

            {/* Contents */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">Contents</h2>
              <ol className="list-decimal ml-6 text-blue-600">
                <li className="mb-1"><a href="#structure-generation" className="hover:underline">Structure Generation</a></li>
                <li className="mb-1"><a href="#combat-enhancement" className="hover:underline">Combat Enhancement</a></li>
                <li className="mb-1"><a href="#world-building" className="hover:underline">World Building</a></li>
              </ol>
            </div>

            {/* Plugin Categories */}
            {pluginCategories.map((category) => (
              <div key={category.title} className="mb-8" id={category.title.toLowerCase().replace(' ', '-')}>
                <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">{category.title}</h2>
                <p className="mb-4 text-black leading-relaxed">{category.description}</p>
                
                {category.plugins.map((plugin) => (
                  <div key={plugin.name} className="bg-gray-50 border border-gray-300 p-4 mb-4">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-gray-300 border border-gray-400 flex items-center justify-center text-xs text-gray-600 flex-shrink-0">
                        {plugin.name}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {plugin.available ? (
                            <h3 className="text-lg font-semibold">
                              <a href={plugin.href} className="text-blue-600 hover:underline">{plugin.name}</a>
                            </h3>
                          ) : (
                            <h3 className="text-lg font-semibold text-gray-700">{plugin.name}</h3>
                          )}
                          <span className="text-sm text-gray-600">by {plugin.developer}</span>
                          {!plugin.available && (
                            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                              Coming Soon
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-700 mb-3">{plugin.description}</p>
                        
                        <div className="mb-3">
                          <div className="text-xs text-gray-600 mb-1"><strong>Key Features:</strong></div>
                          <div className="flex flex-wrap gap-1">
                            {plugin.features.map((feature) => (
                              <span 
                                key={feature}
                                className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        {plugin.available && (
                          <Link href={plugin.href} className="text-blue-600 hover:underline text-sm">
                            Read full documentation →
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}

            {/* Featured Plugin */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">Featured: BetterStructures</h2>
              
              <div className="bg-gray-50 border border-gray-300 p-6">
                <div className="flex gap-4 mb-4">
                  <Image 
                    src="/images/betterstructures/plugin-icon.png" 
                    alt="BetterStructures" 
                    width={64}
                    height={64}
                    className="border border-gray-400 flex-shrink-0 rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      <a href="/docs/minecraft-wiki/plugins/betterstructures" className="text-blue-600 hover:underline">BetterStructures</a>
                    </h3>
                    <p className="text-sm text-gray-700 mb-2">
                      A powerful structure generation plugin that adds custom buildings to your Minecraft world. 
                      Uses intelligent topology scanning to find the best placement spots and seamlessly integrates 
                      structures into any world generator.
                    </p>
                    <div className="text-xs text-gray-600">
                      <strong>Developer:</strong> MagmaGuy | <strong>Type:</strong> Spigot Plugin | <strong>Dependencies:</strong> WorldEdit
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 text-sm">
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800 mb-1">Key Features</div>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Generator-agnostic structure placement</li>
                      <li>• Integration with EliteMobs, MythicMobs, MMOItems</li>
                      <li>• Randomized loot and mob spawning</li>
                      <li>• Performance-optimized with minimal server impact</li>
                    </ul>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800 mb-1">Content Packs Available</div>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Vanilla-Inspired Structures (103 builds)</li>
                      <li>• Elite Shrines (49 boss encounter shrines)</li>
                      <li>• Adventure Pack (107 adventure structures)</li>
                      <li>• Lost Civilizations (122 ancient ruins)</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-300">
                  <Link href="/docs/minecraft-wiki/plugins/betterstructures" className="text-blue-600 hover:underline text-sm">
                    View complete BetterStructures documentation →
                  </Link>
                </div>
              </div>
            </div>

            {/* General Information */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">Plugin Development</h2>
              
              <h3 className="text-lg font-semibold mt-4 mb-2">Server Software Compatibility</h3>
              <p className="mb-4 text-black leading-relaxed">
                Most plugins are designed for <strong><a href="#" className="text-blue-600 hover:underline">Spigot</a></strong> 
                or <strong><a href="#" className="text-blue-600 hover:underline">Paper</a></strong> servers, which provide 
                the API framework that plugins use to extend Minecraft functionality. Some plugins may also support 
                <strong><a href="#" className="text-blue-600 hover:underline"> Bukkit</a></strong> or other server implementations.
              </p>

              <h3 className="text-lg font-semibold mt-4 mb-2">Installation Process</h3>
              <p className="mb-4 text-black leading-relaxed">
                Plugin installation typically involves downloading the plugin JAR file and placing it in the 
                server&apos;s <code className="bg-gray-200 px-1">plugins</code> directory, then restarting the server 
                or using a reload command. Some plugins may require additional <strong>dependencies</strong> or 
                specific <strong>configuration</strong> to function properly.
              </p>

              <h3 className="text-lg font-semibold mt-4 mb-2">Performance Considerations</h3>
              <p className="mb-4 text-black leading-relaxed">
                When choosing plugins for a server, it&apos;s important to consider their <strong>performance impact</strong>. 
                Well-designed plugins should have minimal effect on server TPS (ticks per second) and memory usage. 
                Always test plugins in a development environment before deploying them on a production server.
              </p>
            </div>

            {/* See Also */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-300 pb-1">See also</h2>
              <ul className="list-disc ml-6 mb-6">
                <li className="mb-1"><a href="/docs/elite-mobs" className="text-blue-600 hover:underline">EliteMobs System</a> - TumbleCraft&apos;s advanced combat plugin</li>
                <li className="mb-1"><a href="#" className="text-blue-600 hover:underline">Spigot</a> - Popular Minecraft server software</li>
                <li className="mb-1"><a href="#" className="text-blue-600 hover:underline">Paper</a> - High-performance Minecraft server</li>
                <li className="mb-1"><a href="#" className="text-blue-600 hover:underline">Plugin Development</a> - Creating custom Minecraft plugins</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-64 text-sm">
            <div className="border border-gray-400 bg-gray-50 mb-4">
              <div className="bg-gray-200 text-center py-2 font-semibold border-b border-gray-400">
                Plugin Categories
              </div>
              <div className="p-3">
                <div className="mb-3">
                  <div className="font-semibold text-gray-800 mb-1">Structure Generation</div>
                  <ul className="text-xs space-y-1 ml-2">
                    <li><a href="/docs/minecraft-wiki/plugins/betterstructures" className="text-blue-600 hover:underline">BetterStructures</a></li>
                  </ul>
                </div>
                
                <div className="mb-3">
                  <div className="font-semibold text-gray-800 mb-1">Combat Enhancement</div>
                  <ul className="text-xs space-y-1 ml-2">
                    <li><a href="/docs/elite-mobs" className="text-blue-600 hover:underline">EliteMobs</a></li>
                  </ul>
                </div>

                <div className="mb-3">
                  <div className="font-semibold text-gray-800 mb-1">World Building</div>
                  <ul className="text-xs space-y-1 ml-2">
                    <li><span className="text-gray-500">WorldEdit</span></li>
                    <li><span className="text-gray-500">VoxelSniper</span></li>
                    <li><span className="text-gray-500">FastAsyncWorldEdit</span></li>
                  </ul>
                </div>

                <div className="mb-3">
                  <div className="font-semibold text-gray-800 mb-1">Featured</div>
                  <ul className="text-xs space-y-1 ml-2">
                    <li><a href="/docs/minecraft-wiki/plugins/betterstructures" className="text-blue-600 hover:underline">BetterStructures</a></li>
                    <li><a href="/docs/elite-mobs" className="text-blue-600 hover:underline">EliteMobs</a></li>
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