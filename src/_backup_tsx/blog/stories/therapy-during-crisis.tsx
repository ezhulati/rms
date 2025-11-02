import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, MessageCircle, Clock, Heart, Shield, Sunrise, Anchor } from 'lucide-react';
import BlogLayout from '../BlogLayout';

const TherapyDuringCrisis = () => {
  return (
    <BlogLayout>
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-indigo-600">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/blog" className="hover:text-indigo-600">Blog</Link>
        <span className="mx-2">/</span>
        <Link to="/blog/stories" className="hover:text-indigo-600">Stories</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Therapy During Crisis</span>
      </div>

      {/* Article Header */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <img
          src="/images/blog/therapy-during-crisis.jpg"
          alt="Therapy During Crisis"
          className="blog-featured-image h-96"
        />
        <div className="p-8">
          <h1 className="blog-title">How Therapy Helped Me Through My Darkest Times</h1>

          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6">
            <div className="flex items-center mr-6 mb-2 sm:mb-0">
              <Calendar className="h-4 w-4 mr-1" />
              <span>April 2, 2025</span>
            </div>
            <div className="flex items-center mr-6 mb-2 sm:mb-0">
              <User className="h-4 w-4 mr-1" />
              <span>By Michael Chen, Journalist</span>
            </div>
            <div className="flex items-center mr-6 mb-2 sm:mb-0">
              <Tag className="h-4 w-4 mr-1" />
              <Link to="/blog/tag/crisis-support" className="hover:text-indigo-600">Crisis Support</Link>,{" "}
              <Link to="/blog/tag/resilience" className="hover:text-indigo-600 ml-1">Resilience</Link>
            </div>
            <div className="flex items-center mr-6 mb-2 sm:mb-0">
              <Clock className="h-4 w-4 mr-1" />
              <span>14 min read</span>
            </div>
          </div>

          <div className="bg-indigo-50 rounded-lg p-4 mb-6">
            <p className="text-gray-700 italic">
              "In our darkest moments, when life feels overwhelming and hope seems distant, therapy can provide the anchor we need. These are stories of how professional support helped individuals navigate their most challenging times—and emerge stronger." — Michael Chen, Journalist
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="blog-content">
          <p>
            Life rarely follows a predictable path. Even the most carefully constructed lives can be upended by grief, loss, trauma, or major transitions. In these moments of crisis, when our usual coping mechanisms feel inadequate and the future appears uncertain, therapy can provide crucial support and guidance.
          </p>

          <p>
            I interviewed three individuals who turned to therapy during some of the most challenging periods of their lives. Their stories illuminate how professional support can make the difference between merely surviving a crisis and moving through it with greater resilience, self-understanding, and ultimately, growth.
          </p>

          <h2 className="blog-subtitle">Elena's Story: Navigating Grief After Sudden Loss</h2>
          <p>
            Elena, 38, lost her husband suddenly in a car accident three years ago. They'd been married for 10 years and had two young children. "One morning he left for work and never came home. My entire world shattered in an instant."
          </p>

          <h3 className="blog-subheading">The Immediate Aftermath</h3>
          <p>
            The first weeks after her husband's death were a blur. "I was on autopilot, going through motions—funeral arrangements, talking to lawyers, trying to comfort my kids while barely holding myself together. Friends and family surrounded us, brought meals, helped with childcare. Everyone was incredibly supportive."
          </p>

          <p>
            But as weeks turned into months, that initial surge of support naturally faded as people returned to their lives. "I was drowning in grief but felt like I had to hold it together for my children. I'd cry in the shower so they wouldn't see. At night, after they went to bed, I'd just sit in the dark feeling this crushing weight on my chest."
          </p>

          <h3 className="blog-subheading">Starting Therapy</h3>
          <p>
            Two months after her husband's death, a friend gently suggested therapy. "I resisted at first. I thought, 'What can a therapist do? They can't bring him back.' But I also knew I wasn't coping well. I wasn't sleeping, wasn't eating properly, was having panic attacks. I needed help."
          </p>

          <p>
            Elena found a grief counselor who specialized in traumatic loss. "Dr. Park didn't try to rush my grief or push me to 'move on.' She created space for me to feel everything—the rage, the devastation, the guilt, the loneliness. She normalized my experience, helping me understand that there's no 'right' way to grieve."
          </p>

          <h3 className="blog-subheading">Working Through Complicated Grief</h3>
          <p>
            One of Elena's biggest struggles was guilt. "I kept replaying that morning, wondering if I could have done something differently. What if I'd asked him to stay home? What if we'd taken a different route? The 'what ifs' were torturing me."
          </p>

          <p>
            Through therapy, Elena learned about survivor's guilt and worked on self-compassion. "Dr. Park helped me understand that guilt is a common grief response, but I wasn't actually responsible for a random accident. She had me write letters to my husband—things I wish I'd said, things I needed to forgive myself for. It sounds simple, but it was incredibly healing."
          </p>

          <h3 className="blog-subheading">Rebuilding Identity</h3>
          <p>
            Beyond processing the immediate grief, therapy helped Elena navigate a fundamental identity shift. "I'd been someone's wife for a decade. Suddenly I was a widow, a single parent. I didn't know who I was anymore. Everything I'd planned—growing old together, watching our kids graduate, retiring—all those futures disappeared."
          </p>

          <p>
            Dr. Park helped Elena slowly reconstruct her sense of self and imagine a different future. "It wasn't about replacing what I'd lost or pretending I wasn't changed by this. It was about finding a way to carry my love for my husband forward while also building a new life. She introduced me to the concept of 'continuing bonds'—that I didn't have to let him go completely. He's still part of our family's story."
          </p>

          <h3 className="blog-subheading">Life Today</h3>
          <p>
            Three years later, Elena still sees Dr. Park monthly. "Grief isn't something you 'get over.' It changes, softens, but it doesn't disappear. I still have hard days, especially around anniversaries or milestones my husband is missing. But I've built a life my children and I can thrive in. I've returned to work, reconnected with friends, even started dating again—which felt impossible a year ago."
          </p>

          <p>
            Elena credits therapy with her ability to move through grief rather than staying stuck in it. "Without Dr. Park, I genuinely don't know if I would have made it through. She was my anchor when everything else felt unstable."
          </p>

          <div className="blog-callout">
            <h3 className="blog-subheading"><Heart className="h-5 w-5 inline mr-2" />Key Elements of Elena's Healing</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Specialized grief counseling for traumatic loss</li>
              <li>Safe space to express all emotions without judgment</li>
              <li>Processing guilt and practicing self-compassion</li>
              <li>Rebuilding identity beyond "wife" role</li>
              <li>Concept of "continuing bonds" with deceased loved one</li>
              <li>Gradual work toward imagining a different future</li>
            </ul>
          </div>

          <h2 className="blog-subtitle">Robert's Story: Career Collapse and Identity Crisis</h2>
          <p>
            Robert, 52, had worked in finance for 25 years when his company underwent a massive restructuring. He was laid off along with hundreds of colleagues. "I'd defined myself by my career. I was successful, respected, made good money. Suddenly, at 49, I was unemployed and felt completely adrift."
          </p>

          <h3 className="blog-subheading">The Downward Spiral</h3>
          <p>
            Initially, Robert threw himself into job searching. "I was confident I'd land something quickly. I had experience, contacts, a strong resume." But months passed without offers. "The rejection emails piled up. I'd get to final rounds and then... nothing. I started taking it personally, feeling like I was a failure."
          </p>

          <p>
            His mental health deteriorated. "I became depressed, withdrawn. I'd stay in bed until noon, barely showering, binge-watching TV. My marriage was strained—my wife was supportive but also worried about our finances. I felt like I was letting everyone down."
          </p>

          <h3 className="blog-subheading">Reluctantly Seeking Help</h3>
          <p>
            Robert's wife finally insisted he see a therapist. "I thought therapy was for people with 'real' problems. I was just unemployed—millions of people lose jobs. But I agreed because I knew something was seriously wrong. I had no motivation, no hope, no sense of purpose."
          </p>

          <p>
            His therapist, Dr. Williams, helped Robert recognize he was dealing with more than job loss. "We unpacked how much of my identity and self-worth was tied to my career. When that was taken away, I didn't know who I was. Dr. Williams said I was experiencing an identity crisis on top of situational depression—that this was, in fact, a 'real' problem that warranted professional support."
          </p>

          <h3 className="blog-subheading">Redefining Success and Identity</h3>
          <p>
            Through therapy, Robert examined long-held beliefs about success, masculinity, and worth. "I'd internalized this narrative that my value came from my job title and salary. Dr. Williams challenged me to consider what else gave my life meaning. Who was I beyond my career?"
          </p>

          <p>
            This exploration was uncomfortable. "I realized I'd neglected relationships, hobbies, community involvement—all the things that make life rich—because I was so career-focused. My identity was one-dimensional, which made it incredibly fragile. When I lost my job, I lost everything."
          </p>

          <h3 className="blog-subheading">A Different Path Forward</h3>
          <p>
            As therapy progressed, Robert's job search became less desperate and more intentional. "I started thinking about what kind of work would actually be fulfilling, not just what would pay the most or sound impressive. Dr. Williams encouraged me to explore what I was passionate about."
          </p>

          <p>
            Robert eventually took a position at a nonprofit, earning significantly less than before but finding unexpected satisfaction. "I'm using my financial skills to help an organization I believe in. The work feels meaningful. I'm also coaching my son's soccer team, volunteering, spending real time with my wife. My life is more balanced, more whole."
          </p>

          <h3 className="blog-subheading">Reflections on the Crisis</h3>
          <p>
            "Losing my job was devastating, but in hindsight, it forced me to confront how narrow my life had become. Therapy helped me navigate the crisis and come out the other side with a more authentic, sustainable sense of who I am. I'm not just 'Robert the finance executive' anymore. I'm a husband, father, coach, volunteer, mentor. My identity is multifaceted now, which actually makes me more resilient."
          </p>

          <div className="blog-callout">
            <h3 className="blog-subheading"><Anchor className="h-5 w-5 inline mr-2" />Key Elements of Robert's Healing</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Recognition that job loss triggered identity crisis</li>
              <li>Examination of beliefs about success and self-worth</li>
              <li>Exploration of values beyond career achievement</li>
              <li>Building multidimensional identity and life</li>
              <li>Intentional career choices aligned with values</li>
              <li>Focus on relationships and community engagement</li>
            </ul>
          </div>

          <h2 className="blog-subtitle">Maya's Story: Leaving an Abusive Relationship</h2>
          <p>
            Maya, 31, spent six years in a psychologically and emotionally abusive relationship. "It happened so gradually that I didn't see it at first. He isolated me from friends, criticized everything I did, controlled our finances. By the time I recognized it as abuse, I felt trapped."
          </p>

          <h3 className="blog-subheading">The Breaking Point</h3>
          <p>
            Maya's wake-up call came during a particularly bad fight. "He didn't hit me, but he punched the wall next to my head. I saw something in his eyes that terrified me. I realized it could escalate, that I might not be safe. I left that night and stayed with my sister."
          </p>

          <p>
            Leaving was both relief and terror. "I was free, but I was also completely disoriented. I second-guessed everything—maybe I'd overreacted, maybe I could have tried harder, maybe it was my fault. I felt ashamed that I'd stayed so long, ashamed that I was struggling now that I was out."
          </p>

          <h3 className="blog-subheading">Trauma-Informed Therapy</h3>
          <p>
            Maya's sister helped her find a therapist who specialized in domestic violence and trauma. "Dr. Hassan understood immediately. She explained how psychological abuse works, how abusers systematically undermine your reality and self-trust. She normalized my confusion and self-blame. I wasn't crazy or weak—I'd been systematically manipulated."
          </p>

          <p>
            A critical part of Maya's therapy was safety planning and building support systems. "Dr. Hassan helped me think through practical safety concerns—he knew where I was staying, he had keys to my car, he controlled our joint accounts. We created a plan to untangle my life from his while minimizing risk."
          </p>

          <h3 className="blog-subheading">Rebuilding Trust and Autonomy</h3>
          <p>
            Beyond immediate safety, Maya worked on rebuilding her sense of self. "In the relationship, he'd convinced me I was incompetent, overly emotional, couldn't be trusted to make good decisions. I'd lost all confidence. Simple choices—what to eat, what to wear—felt paralyzing."
          </p>

          <p>
            Dr. Hassan used exercises to help Maya reconnect with her own judgment and preferences. "She'd ask 'What do you think?' or 'How does that feel to you?' At first, I'd reflexively say 'I don't know.' She'd gently persist: 'Try. What's your gut telling you?' Slowly, I started trusting my own perceptions again."
          </p>

          <h3 className="blog-subheading">Processing Betrayal and Anger</h3>
          <p>
            As Maya's clarity increased, so did her anger. "Once the fog lifted, I was furious. He'd stolen years of my life, isolated me, made me doubt my sanity. Dr. Hassan gave me permission to feel that rage fully. We worked with it rather than trying to push past it prematurely."
          </p>

          <p>
            Maya also grieved the relationship she'd wanted but never had. "I'd loved him, or at least I'd loved who I thought he was. Accepting that the person I fell in love with was a façade, that the relationship was fundamentally unhealthy from the start—that was its own loss."
          </p>

          <h3 className="blog-subheading">Building a New Life</h3>
          <p>
            Two years later, Maya has rebuilt her life. "I'm back in school finishing my degree, which I'd abandoned during the relationship. I've reconnected with old friends and made new ones. I'm financially independent. Most importantly, I trust myself again. I know my worth."
          </p>

          <p>
            She still sees Dr. Hassan occasionally for maintenance. "Leaving was just the first step. Healing from abuse is a process. I've had to unlearn so many harmful patterns, rebuild my self-esteem, learn what healthy relationships look like. Therapy made that possible."
          </p>

          <div className="blog-callout">
            <h3 className="blog-subheading"><Shield className="h-5 w-5 inline mr-2" />Key Elements of Maya's Healing</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Trauma-informed care specialized in domestic violence</li>
              <li>Safety planning and practical support</li>
              <li>Psychoeducation about abuse dynamics</li>
              <li>Rebuilding self-trust and autonomous decision-making</li>
              <li>Permission to feel and process anger</li>
              <li>Grieving the loss of hoped-for relationship</li>
              <li>Learning healthy relationship patterns</li>
            </ul>
          </div>

          <h2 className="blog-subtitle">Common Themes: What Therapy Offers During Crisis</h2>
          <p>
            While each crisis is unique, several common elements emerge about how therapy supports people through their darkest times:
          </p>

          <h3 className="blog-subheading">1. A Stable, Consistent Presence</h3>
          <p>
            During life upheavals when everything feels uncertain, having a therapist who shows up consistently can provide crucial stability. As Elena put it, therapy was her "anchor."
          </p>

          <h3 className="blog-subheading">2. Permission to Feel</h3>
          <p>
            All three individuals needed permission to fully experience difficult emotions rather than rushing to "fix" themselves or "be positive." Good therapy creates space for grief, anger, fear, and despair without judgment.
          </p>

          <h3 className="blog-subheading">3. External Perspective</h3>
          <p>
            When we're in crisis, our thinking often becomes distorted by trauma, grief, or stress. A skilled therapist helps restore perspective, challenge unhelpful thoughts, and see possibilities we can't currently envision.
          </p>

          <h3 className="blog-subheading">4. Specialized Expertise</h3>
          <p>
            Each person benefited from therapists with specialized training relevant to their specific crisis—grief, career transitions, domestic violence. This expertise allowed for more effective, targeted support.
          </p>

          <h3 className="blog-subheading">5. Identity Reconstruction</h3>
          <p>
            Major life crises often shatter our sense of who we are. Therapy provides scaffolding for rebuilding identity in a more authentic, resilient way that incorporates the crisis experience.
          </p>

          <h3 className="blog-subheading">6. Practical Support Alongside Emotional Processing</h3>
          <p>
            Effective crisis therapy isn't just talking about feelings—it includes practical problem-solving, safety planning, skill-building, and concrete strategies for moving forward.
          </p>

          <h2 className="blog-subtitle">When to Seek Crisis Support</h2>
          <p>
            You don't need to wait until you're completely overwhelmed to seek therapy. Consider professional support if:
          </p>
          <ul>
            <li>You've experienced a major loss (death, divorce, job loss, health crisis)</li>
            <li>Your usual coping strategies aren't working</li>
            <li>You're experiencing persistent difficulty with sleep, appetite, or concentration</li>
            <li>You feel overwhelmed, hopeless, or unable to imagine a positive future</li>
            <li>You're using substances to cope or engaging in risky behaviors</li>
            <li>Your relationships or daily functioning are significantly impaired</li>
            <li>You're having thoughts of self-harm or suicide</li>
          </ul>

          <p>
            Early intervention often prevents crises from escalating and can shorten recovery time.
          </p>

          <h2 className="blog-subtitle">Finding the Right Crisis Support</h2>
          <p>
            When seeking therapy during crisis, consider:
          </p>

          <h3 className="blog-subheading">Specialized Training</h3>
          <p>
            Look for therapists with specific experience in your type of crisis—grief counseling, domestic violence, trauma, career transitions, etc.
          </p>

          <h3 className="blog-subheading">Evidence-Based Approaches</h3>
          <p>
            For trauma and crisis, approaches like EMDR, trauma-focused CBT, or prolonged exposure therapy have strong research support.
          </p>

          <h3 className="blog-subheading">Availability</h3>
          <p>
            During acute crisis, you may need more frequent sessions or availability for check-ins between sessions. Discuss this upfront.
          </p>

          <h3 className="blog-subheading">Emergency Resources</h3>
          <p>
            For immediate crisis support, contact:
          </p>
          <ul>
            <li>988 Suicide & Crisis Lifeline: Call or text 988</li>
            <li>Crisis Text Line: Text HOME to 741741</li>
            <li>National Domestic Violence Hotline: 1-800-799-7233</li>
            <li>Your local emergency services: 911</li>
          </ul>

          <h2 className="blog-subtitle">Conclusion</h2>
          <p>
            Crisis is often described as both danger and opportunity—the Chinese word for crisis (危机) combines characters meaning "dangerous" and "crucial point." While no one would choose the crises Elena, Robert, and Maya faced, each found that with professional support, their darkest times became transformative turning points.
          </p>
          <p>
            Therapy during crisis doesn't magically resolve the situation or eliminate pain. What it does is provide expert guidance, emotional support, and practical tools to navigate the storm. It offers perspective when we're lost, hope when we're despairing, and companionship when we feel alone.
          </p>
          <p>
            As Maya reflected: "I wish I hadn't gone through what I did. But having Dr. Hassan by my side made the difference between being destroyed by it and being transformed by it. I emerged stronger, wiser, and more whole than I was before."
          </p>
          <p>
            If you're in a dark place right now, know that professional support can help. You don't have to navigate your crisis alone.
          </p>
        </div>
      </div>

      {/* Author Bio */}
      <div className="blog-author">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
          alt="Michael Chen"
          className="blog-author-image"
        />
        <div>
          <h3 className="blog-author-name">About the Author</h3>
          <p className="blog-author-bio">
            Michael Chen is an award-winning journalist who specializes in human interest stories and mental health topics. His work focuses on amplifying voices of resilience and exploring how people navigate life's most challenging moments. Michael believes in the power of storytelling to foster empathy and connection.
          </p>
          <div className="flex items-center">
            <Link to="/blog/author/michael-chen" className="text-indigo-600 hover:text-indigo-800 mr-4">
              More from Michael
            </Link>
            <a href="https://twitter.com/michaelchen" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              @michaelchen
            </a>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="blog-related">
        <h3 className="blog-related-title">Related Articles</h3>
        <div className="blog-related-grid">
          <div className="flex items-start">
            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
              alt="Therapy Success Stories"
              className="blog-related-image"
            />
            <div>
              <h4 className="blog-related-item-title">Therapy Success Stories: When the Right Match Makes All the Difference</h4>
              <Link to="/blog/stories/therapy-success-stories" className="blog-related-item-link bg-indigo-50 px-4 py-2 rounded-md hover:bg-indigo-100 transition-all duration-200 inline-flex w-auto">
                Read article <ArrowRight className="h-3 w-3 ml-1" />
              </Link>
            </div>
          </div>
          <div className="flex items-start">
            <img
              src="https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
              alt="Self-Care Practices"
              className="blog-related-image"
            />
            <div>
              <h4 className="blog-related-item-title">5 Effective Self-Care Practices for Mental Wellness</h4>
              <Link to="/blog/stories/self-care-practices" className="blog-related-item-link bg-indigo-50 px-4 py-2 rounded-md hover:bg-indigo-100 transition-all duration-200 inline-flex w-auto">
                Read article <ArrowRight className="h-3 w-3 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="blog-comments">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-800">Comments (31)</h3>
          <button className="text-indigo-600 font-medium bg-indigo-50 px-4 py-2 rounded-md hover:bg-indigo-100 transition-all duration-200 shadow-sm border border-indigo-100">
            Leave a comment
          </button>
        </div>

        <div className="space-y-6">
          <div className="border-b pb-6">
            <div className="flex items-start mb-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <div>
                <div className="flex items-center mb-1">
                  <h4 className="font-bold text-gray-800 mr-2">Sarah Williams</h4>
                  <span className="text-gray-500 text-sm">4 days ago</span>
                </div>
                <p className="text-gray-700">
                  Elena's story brought me to tears. I lost my mother suddenly last year and so much of what she described resonated with me. The guilt, the identity shift, the feeling of being adrift. I'm so glad this article emphasizes that grief doesn't have a timeline—we don't just "get over" major losses. Thank you for sharing these powerful stories.
                </p>
                <button className="text-indigo-600 text-sm mt-2 flex items-center bg-indigo-50 px-3 py-1 rounded-md hover:bg-indigo-100 transition-all duration-200">
                  <MessageCircle className="h-3 w-3 mr-1" /> Reply
                </button>
              </div>
            </div>
          </div>

          <div className="border-b pb-6">
            <div className="flex items-start">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <div>
                <div className="flex items-center mb-1">
                  <h4 className="font-bold text-gray-800 mr-2">David Kim</h4>
                  <span className="text-gray-500 text-sm">2 days ago</span>
                </div>
                <p className="text-gray-700">
                  Robert's story really hit home. I was laid off during COVID and went through a similar identity crisis. It's so true that when your whole identity is wrapped up in your career, losing it feels like losing yourself. I wish I'd gone to therapy sooner—I tried to "tough it out" and just sank deeper. Don't wait like I did!
                </p>
                <button className="text-indigo-600 text-sm mt-2 flex items-center bg-indigo-50 px-3 py-1 rounded-md hover:bg-indigo-100 transition-all duration-200">
                  <MessageCircle className="h-3 w-3 mr-1" /> Reply
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-start">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <div>
                <div className="flex items-center mb-1">
                  <h4 className="font-bold text-gray-800 mr-2">Jessica Martinez</h4>
                  <span className="text-gray-500 text-sm">1 day ago</span>
                </div>
                <p className="text-gray-700">
                  Thank you for including Maya's story. As someone who also left an abusive relationship, I can't emphasize enough how crucial specialized therapy was for my recovery. The gaslighting and manipulation distort your reality so much—you need someone who understands the dynamics to help you see clearly again. If anyone reading this is in a similar situation, please reach out for help. You deserve support.
                </p>
                <button className="text-indigo-600 text-sm mt-2 flex items-center bg-indigo-50 px-3 py-1 rounded-md hover:bg-indigo-100 transition-all duration-200">
                  <MessageCircle className="h-3 w-3 mr-1" /> Reply
                </button>
              </div>
            </div>
          </div>

          <button className="w-full py-3 text-indigo-600 font-medium bg-indigo-50 rounded-md hover:bg-indigo-100 transition-all duration-200 shadow-sm border border-indigo-100">
            Load more comments
          </button>
        </div>
      </div>

      {/* Newsletter */}
      <div className="blog-newsletter">
        <h3 className="blog-newsletter-title">Subscribe to Our Newsletter</h3>
        <p className="blog-newsletter-description">
          Stay up-to-date with the latest mental health news, research, and resources delivered straight to your inbox.
        </p>
        <div className="blog-newsletter-form">
          <input
            type="email"
            placeholder="Your email address"
            className="blog-newsletter-input"
          />
          <button className="blog-newsletter-button">
            Subscribe
          </button>
        </div>
        <p className="blog-newsletter-privacy">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </BlogLayout>
  );
};

export default TherapyDuringCrisis;
