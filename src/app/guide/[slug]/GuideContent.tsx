'use client'

import { useState } from 'react'
import { BookOpen, Download, User, Server, Play } from 'lucide-react'

export default function GuideContent() {
  const [activeTab, setActiveTab] = useState(0)

  const steps = [
    {
      icon: <Download className="w-8 h-8" />,
      title: "Get Minecraft Java Edition",
      description: "Make sure you have Minecraft Java Edition version 1.21 or newer installed on your computer.",
      detail: "Available on minecraft.net"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Connect to Server",
      description: "Open Minecraft, go to Multiplayer, and add our server using the IP address below.",
      detail: "tumblecraft.gg"
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Choose Your Path",
      description: "Decide whether you want to join our SMP survival world or start grinding in Prison mode.",
      detail: "Use /smp or /prison"
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "Start Playing!",
      description: "Join our Discord, read the rules, and begin your TumbleCraft adventure with the community.",
      detail: "Have fun!"
    }
  ]

  const tabs = [
    { id: 0, title: "Getting Started", icon: <Play className="w-4 h-4" /> },
    { id: 1, title: "Server Info", icon: <Server className="w-4 h-4" /> },
    { id: 2, title: "Rules & Commands", icon: <BookOpen className="w-4 h-4" /> }
  ]

  return (
    <>
      {/* Tab Navigation */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="border-b border-border-color">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-accent-primary text-accent-primary'
                    : 'border-transparent text-foreground-secondary hover:text-foreground hover:border-border-color'
                }`}
              >
                {tab.icon}
                {tab.title}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-4xl mx-auto">
        {/* Tab 1: Getting Started */}
        {activeTab === 0 && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="game-card text-center relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent-primary text-background rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="text-accent-primary mb-4 flex justify-center mt-4">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-foreground-secondary text-sm mb-3 leading-relaxed">{step.description}</p>
                  <div className="text-accent-primary text-xs font-mono bg-background-tertiary px-3 py-1 rounded">
                    {step.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Server Info */}
        {activeTab === 1 && (
          <div className="prose prose-lg prose-invert max-w-none
            prose-headings:text-foreground prose-headings:font-bold
            prose-h1:text-3xl prose-h1:mb-8 prose-h1:text-accent-primary
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-accent-primary
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-foreground-secondary prose-p:leading-relaxed
            prose-li:text-foreground-secondary
            prose-strong:text-foreground prose-strong:font-semibold
            prose-code:bg-background-secondary prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-accent-primary">
            <h2>Server Information</h2>
            <ul>
              <li><strong>Server IP</strong>: <code>tumblecraft.gg</code></li>
              <li><strong>Version</strong>: 1.20.1+</li>
              <li><strong>Type</strong>: Survival Multiplayer (SMP)</li>
              <li><strong>Difficulty</strong>: Normal</li>
            </ul>

            <h2>Game Modes & Features</h2>
            <h3>Survival Mode</h3>
            <p>Experience vanilla Minecraft survival with quality-of-life improvements:</p>
            <ul>
              <li><strong>Land Claiming</strong>: Protect your builds from griefing</li>
              <li><strong>Player Shops</strong>: Trade with other players</li>
              <li><strong>Custom Recipes</strong>: Unique crafting recipes for special items</li>
              <li><strong>Economy System</strong>: Earn and spend in-game currency</li>
            </ul>

            <h3>Events & Activities</h3>
            <ul>
              <li><strong>Weekly Events</strong>: Participate in building contests and challenges</li>
              <li><strong>Seasonal Festivals</strong>: Special events during holidays</li>
              <li><strong>Community Projects</strong>: Collaborate on server-wide builds</li>
              <li><strong>PvP Tournaments</strong>: Test your skills against other players</li>
            </ul>
          </div>
        )}

        {/* Tab 3: Rules & Commands */}
        {activeTab === 2 && (
          <div className="prose prose-lg prose-invert max-w-none
            prose-headings:text-foreground prose-headings:font-bold
            prose-h1:text-3xl prose-h1:mb-8 prose-h1:text-accent-primary
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-accent-primary
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-foreground-secondary prose-p:leading-relaxed
            prose-li:text-foreground-secondary
            prose-strong:text-foreground prose-strong:font-semibold
            prose-code:bg-background-secondary prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-accent-primary">
            <h2>Essential Commands</h2>
            <ul>
              <li><code>/spawn</code> - Return to the spawn area</li>
              <li><code>/home</code> - Teleport to your home location</li>
              <li><code>/sethome</code> - Set your home location</li>
              <li><code>/tpa [player]</code> - Request to teleport to another player</li>
              <li><code>/back</code> - Return to your last location</li>
              <li><code>/balance</code> - Check your in-game currency</li>
            </ul>

            <h2>Rules & Guidelines</h2>
            <h3>Core Rules</h3>
            <ol>
              <li><strong>No Griefing</strong>: Respect other players&apos; builds and property</li>
              <li><strong>No Cheating</strong>: No hacks, exploits, or unfair advantages</li>
              <li><strong>Be Respectful</strong>: Treat all players with kindness and respect</li>
              <li><strong>English Only</strong>: Keep chat in English for moderation purposes</li>
              <li><strong>No Advertising</strong>: Don&apos;t promote other servers or services</li>
            </ol>

            <h3>Building Guidelines</h3>
            <ul>
              <li><strong>Claim Your Land</strong>: Always protect your builds</li>
              <li><strong>Respect Neighbors</strong>: Don&apos;t build too close to others without permission</li>
              <li><strong>Clean Up</strong>: Remove temporary structures when done</li>
              <li><strong>No Lag Machines</strong>: Avoid builds that cause server lag</li>
            </ul>

            <h2>Tips for Success</h2>
            <h3>Building Tips</h3>
            <ul>
              <li>Start with a simple base and expand over time</li>
              <li>Use the <code>/map</code> command to explore and find the perfect location</li>
              <li>Consider joining a town or creating one with friends</li>
              <li>Always backup important builds with screenshots</li>
            </ul>

            <h3>Economy Tips</h3>
            <ul>
              <li>Participate in the server economy through player shops</li>
              <li>Complete daily challenges for bonus rewards</li>
              <li>Trade rare items with other players</li>
              <li>Invest in long-term projects for better returns</li>
            </ul>

            <h3>Social Tips</h3>
            <ul>
              <li>Join community events and competitions</li>
              <li>Collaborate with other players on projects</li>
              <li>Share your builds and get feedback</li>
              <li>Help new players learn the ropes</li>
            </ul>

            <h2>Frequently Asked Questions</h2>
            <h3>Q: How do I claim land?</h3>
            <p>A: Use <code>/claim</code> while holding a golden shovel to select and claim areas.</p>

            <h3>Q: Can I invite friends?</h3>
            <p>A: Absolutely! Share the server IP and help them get started.</p>

            <h3>Q: What happens if I get griefed?</h3>
            <p>A: Contact staff immediately. We have tools to restore griefed builds.</p>

            <h3>Q: How often does the server reset?</h3>
            <p>A: TumbleCraft has a no-reset policy. Your builds are permanent!</p>

            <h3>Q: Can I use mods?</h3>
            <p>A: Client-side cosmetic mods are allowed, but gameplay-affecting mods are not.</p>

            <hr />
            <p><em>Need more help? Join our Discord server or contact our friendly staff team!</em></p>
          </div>
        )}
      </div>
    </>
  )
}