export const courseModules = {
  "children-module-1": {
    id: "children-module-1",
    ageGroup: "Children (Ages 8-12)",
    courseTitle: "Course 1A: Integrity in My Community: Being Fair and Honest",
    moduleNumber: 1,
    moduleTitle: "What is Fairness and Honesty?",
    description: "This module aims to instill ethical awareness and a personal commitment to acting with integrity in daily life, recognizing that corruption prevention begins with core values.",

    sections: [
      {
        id: "section-1",
        number: "I",
        title: "Introduction and Objectives",
        type: "introduction",
        content: {
          welcome: "Welcome to our course on fairness and honesty. This course introduces you to the concept of anti-corruption, which means fighting unfairness and dishonesty in our communities. Although corruption often seems like a complicated problem for adults, it starts with simple choices about doing the right thing in our daily lives. Our goal is to build your ethical awareness and commitment to acting with integrity.",

          keyTopics: [
            {
              heading: "What is Corruption?",
              text: "Corruption has existed for a very long time, and unfortunately, no country is completely free from it. The simplest way to understand corruption is the abuse of entrusted power for private gain. This means when someone who has been given trust or power (like a teacher, a public official, or a team leader) uses that power unfairly to get a benefit for themselves or their friends, that is corruption. The key to fighting this problem is fostering a culture of rejection of corruption."
            },
            {
              heading: "Why Being Fair Matters (The Impact of Corruption)",
              text: "When people act corruptly, they violate core values like honesty and accountability, and this behavior has extremely harmful consequences for society.",
              bulletPoints: [
                "Corruption is harmful because it steals resources—the money that was meant for shared things that help everyone, like funding for schools, healthcare, or development projects.",
                "When resources are stolen or misused, the negative impact is felt most severely by the poorest and most vulnerable individuals. Learning to spot corruption is a key step toward achieving the universal commitment to 'leave no one behind'.",
                "When corruption occurs, it erodes trust in systems and institutions."
              ]
            },
            {
              heading: "Integrity and Action",
              text: "To fight this problem, you need to understand that integrity means doing the right thing even when no one is watching. Integrity involves more than just following the written rules; sometimes acting ethically requires deciding to go beyond what the law requires. By learning these concepts now, you are empowering yourself to be an agent of change who can help create a fairer future."
            }
          ],

          objectives: [
            "Define Core Values: Understand the simple meanings of fairness, honesty, and integrity.",
            "Understand Abuse of Power: Grasp the basic definition of corruption as the abuse of entrusted power.",
            "Recognize Personal Responsibility: Commit to making ethical decisions and acting with integrity in daily life.",
            "Relate Values to Anti-Corruption: Understand that core values are necessary to prevent the misuse of shared resources in their community."
          ]
        }
      },

      {
        id: "section-2",
        number: "II",
        title: "Core Concepts: Defining Integrity",
        type: "content",
        content: {
          introduction: "The fight against corruption starts with understanding how to be a good person and how to make good choices. In this module, we are learning the foundational skills needed for anti-corruption work: honesty, fairness, and integrity, which together build your ethical awareness.",

          coreValues: {
            intro: "Core values are the beliefs and principles that guide how you act every day. They help you know the difference between right and wrong. When you practice these values, you are building the strong ethical character needed to stand up against unfairness.",

            values: [
              {
                name: "Honesty: Telling the Truth",
                definition: "Honesty means telling the truth (truthfulness). It means not lying, even when you are worried about consequences.",
                reflection: "Think about a time you made a mistake. Was it harder to hide the mistake or to tell the truth about it? Choosing the honest path, even when it's difficult, is a crucial part of acting rightly."
              },
              {
                name: "Fairness: Playing by the Rules",
                definition: "Fairness means making sure everyone gets equal treatment. If a teacher gives out prizes, fairness means everyone who earned a prize gets one, and no one gets one just because they are the teacher's friend.",
                keyPoints: [
                  "Fairness means treating people without distinction or preference.",
                  "When we expect fairness, we are also promoting accountability and transparency in how things are managed."
                ]
              },
              {
                name: "Integrity: Doing the Right Thing",
                definition: "Integrity is the most important concept we will learn. Integrity means having strong ethical values and acting rightly. It is the foundation of an anti-corruption mindset.",
                highlight: "Integrity means doing the right thing, even when no one is watching.",
                explanation: "Think of integrity as choosing to obey the rules, keep your promises, and act fairly, even when you are unsupervised. Having integrity shows that you are committed to achieving a culture of rejection of corruption in your community. Corruption is essentially the abuse of entrusted power, and when you choose integrity, you are choosing to use any power or trust you have been given in a way that helps everyone, not just yourself."
              }
            ]
          }
        }
      },

      {
        id: "section-3",
        number: "III",
        title: "Interactive Activity: The Honest Share",
        type: "interactive",
        content: {
          description: "This section uses an animated scenario and an interactive decision point to illustrate how fairness and honesty apply to managing shared resources.",

          scenario: {
            title: "The Game Scenario: Earning Shared Time",
            setup: "Three characters (Leo, Mia, and Kai) work together to complete a challenging online task or game module. They succeed and earn a communal reward: 60 minutes of bonus 'Free Time' (a virtual resource the entire group needs or enjoys).",
            problem: "Because Leo was the team leader, he is entrusted with deciding how to divide the 60 minutes of Free Time. Leo decides to give himself 30 minutes, give his best friend Mia 25 minutes, and give Kai, who did most of the hard work but isn't Leo's friend, only 5 minutes.",
            question: "Did Leo share fairly?"
          },

          interactiveChoice: {
            prompt: "How should the 60 minutes be divided?",
            options: [
              {
                id: "A",
                label: "Fair Share",
                distribution: "Split the time equally (20 minutes each)",
                correct: true
              },
              {
                id: "B",
                label: "Merit Share",
                distribution: "Split based on effort (Kai: 30, Leo: 20, Mia: 10)",
                correct: true
              },
              {
                id: "C",
                label: "Unfair Share",
                distribution: "Keep original (Leo: 30, Mia: 25, Kai: 5)",
                correct: false
              }
            ]
          },

          explanation: {
            title: "Why Fairness Always Wins",
            points: [
              {
                heading: "The Abuse of Power",
                text: "In our team, Leo had power because he was the leader entrusted with dividing the 60 minutes. When someone uses entrusted power for private gain, that is the definition of corruption. Leo abused his power because he put his private gain first, giving himself and his friend Mia the largest shares of the time."
              },
              {
                heading: "The Damage Caused by Unfairness",
                text: "When people use their position unfairly, they violate the basic principle of equal treatment.",
                subPoints: [
                  "It breaks trust: By using his position to benefit his friends, Leo showed he wasn't committed to fairness for everyone.",
                  "It steals shared resources: The 60 minutes belonged to the whole team, just like public money belongs to the whole community."
                ]
              },
              {
                heading: "Corruption and Inequality",
                text: "Leo's actions created inequality. Kai was the one who worked hard, but he got the least amount of time due to Leo's favoritism. Corruption and unfairness always hit the people who are the most vulnerable or marginalized the hardest. By choosing integrity, honesty, and equal sharing, you are helping to build a system where no one is left behind."
              }
            ]
          },

          quiz: [
            {
              id: "Q1",
              question: "What is corruption?",
              options: [
                "Stealing money",
                "Being unfair to others who rely on you",
                "Using power you were trusted with to help yourself or your friends instead of everyone equally",
                "Forgetting to share toys"
              ],
              correctAnswer: 2
            },
            {
              id: "Q2",
              question: "If a leader shares resources fairly, what is the core goal that should be met?",
              options: [
                "Only their friends get the most",
                "Everyone gets treated equally",
                "The leader gets to decide everything",
                "Only the people who follow the rules"
              ],
              correctAnswer: 1
            },
            {
              id: "Q3",
              question: "Who is hurt the most when a leader uses favoritism to share resources unfairly?",
              options: [
                "The powerful leader",
                "People who are already vulnerable or marginalized",
                "The people who got a small share but still got something",
                "Only the people who follow the rules"
              ],
              correctAnswer: 1
            },
            {
              id: "Q4",
              question: "Integrity means choosing to do the right thing...",
              options: [
                "Only when your teacher is watching",
                "Even when no one is watching",
                "Only when it is easy",
                "So you can get a reward"
              ],
              correctAnswer: 1
            }
          ]
        }
      },

      {
        id: "section-4",
        number: "IV",
        title: "Ethical Challenge: Being an Integrity Hero",
        type: "interactive",
        content: {
          introduction: "Corruption often begins when people, even children, choose a dishonest path to get a small personal advantage, even when they know it is wrong. This section uses a simple scenario to help you practice integrity—choosing to be honest and fair when it is difficult and takes courage.",

          scenario: {
            title: "The Digital Dilemma",
            story: "You and your friend, Alex, are taking an important quiz online. This isn't just any quiz—it counts toward a special end-of-week reward given to the students who demonstrate the most knowledge and work the hardest.\n\nThe school computer lab is quiet. Everyone is focused on their screen. You glance over at Alex, who is sitting next to you. Alex has their phone hidden under the desk, quickly typing answers from a search screen onto the quiz page.\n\nYou realize that Alex is cheating on the assignment. If Alex succeeds, they will get a perfect score and might win a reward that someone else earned honestly. You feel sick. You know cheating is unfair to everyone else who studied hard. But Alex is your friend, and if you say something, Alex will be embarrassed, possibly lose the reward, and definitely be angry at you.",
            challenge: "This is a true test of integrity: choosing to do the right thing, even when no one is watching. It takes courage to put fairness first."
          },

          choices: [
            {
              id: "A",
              label: "Stay Silent",
              outcome: "You keep your friend happy, but you sacrifice your integrity and allow unfairness to the rest of the class.",
              correct: false,
              feedback: "This choice, while understandable because you did not want to betray your friend or cause trouble, means you failed the test of integrity. Choosing silence means you sacrifice your integrity, because acting with integrity means choosing to do the right thing, even when no one is watching. By staying silent, you allowed Alex to gain an unfair advantage, and thus the situation remained unfair to all the students who worked honestly."
            },
            {
              id: "B",
              label: "Confront Alex right now",
              outcome: "You stop the cheating immediately, but you risk causing a scene, distracting the class, and turning a private issue into a public argument.",
              correct: false,
              feedback: "Speaking up shows initial courage, which is an important quality of integrity. However, confronting Alex immediately and publicly is usually not the most effective way to solve the problem or restore fairness. Your action risks creating a loud argument or conflict, turning a serious issue into a public spectacle. The safest and most effective way to correct broken trust is to talk to a trusted adult privately."
            },
            {
              id: "C",
              label: "Send a private message or talk to your teacher after class",
              outcome: "You show courage and determination by upholding honesty, restoring fairness, and handling the conflict responsibly by trusting an adult leader with entrusted power.",
              correct: true,
              feedback: "This choice demonstrates that you are an Integrity Hero because you understood that honesty often takes courage and determination. You honored your integrity by refusing to be silent. You ensured fairness by telling the trusted adult privately. You were courageous by putting principle ahead of friendship and choosing to do the right thing, even though it was difficult."
            }
          ]
        }
      },

      {
        id: "section-5",
        number: "V",
        title: "Review and Quick Quiz",
        type: "review",
        content: {
          summary: "Throughout this module, you have learned that the serious global problem of corruption, often defined as the abuse of entrusted power for private gain, starts with simple choices made every day about right and wrong. The core message of this module is that preventing corruption begins with personal behavior and developing strong ethical character.",

          coreValuesReview: [
            {
              term: "Honesty",
              definition: "Means being truthful in your words and actions, even when it requires courage."
            },
            {
              term: "Fairness",
              definition: "Means ensuring everyone is treated equally and that rules and resources are applied without favoritism."
            },
            {
              term: "Integrity",
              definition: "This is your commitment to having strong ethical values and acting rightly. Integrity means doing the right thing, even when no one is watching."
            }
          ],

          keyTakeaways: [
            "Against Abuse of Power: When a person uses their position (like a team leader or resource monitor) to favor themselves or their friends, that is an abuse of entrusted power. This action violates fairness and honesty, leading to inequality and disproportionately harming those who are already the most vulnerable or marginalized.",
            "Being an Integrity Hero: By consistently choosing to act with honesty and challenging unfairness, even when it is difficult, you contribute to a culture of rejection of corruption in your school and community."
          ],

          finalQuiz: [
            {
              id: "Q1",
              question: "What is corruption?",
              options: [
                "Stealing money",
                "Being unfair to others who rely on you",
                "Using power you were trusted with to help yourself or your friends instead of everyone equally",
                "Forgetting to share toys"
              ],
              correctAnswer: 2
            },
            {
              id: "Q2",
              question: "If a leader shares resources fairly, what is the core goal that should be met?",
              options: [
                "Only their friends get the most",
                "Everyone gets treated equally",
                "The leader gets to decide everything",
                "Only the people who follow the rules"
              ],
              correctAnswer: 1
            },
            {
              id: "Q3",
              question: "Who is hurt the most when a leader uses favoritism to share resources unfairly?",
              options: [
                "The powerful leader",
                "People who are already vulnerable or marginalized",
                "The people who got a small share but still got something",
                "Only the people who follow the rules"
              ],
              correctAnswer: 1
            },
            {
              id: "Q4",
              question: "Integrity means choosing to do the right thing...",
              options: [
                "Only when your teacher is watching",
                "Even when no one is watching",
                "Only when it is easy",
                "So you can get a reward"
              ],
              correctAnswer: 1
            }
          ]
        }
      }
    ]
  }
};
