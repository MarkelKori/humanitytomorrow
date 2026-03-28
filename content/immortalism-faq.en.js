window.immortalismPageContent = window.immortalismPageContent || {};

(() => {
  const item = (id, title, text) => ({
    id,
    title,
    blocks: [
      { type: 'paragraph', text }
    ]
  });

  // Available block types inside any item's `blocks` array:
  // { type: 'paragraph', text: 'Plain text with \\n line breaks' }
  // { type: 'subheading', text: 'Smaller heading inside the subsection' }
  // { type: 'quote', text: 'Quote text', cite: 'Source' }
  // { type: 'list', items: ['Point one', 'Point two'] }
  // { type: 'interactive', title: 'Widget title', description: 'Short note', html: '<div>Custom HTML here</div>' }
  // { type: 'html', html: '<p>Use <strong>HTML</strong> for custom formatting, links, embeds, or buttons.</p>' }
  // Inline notes:
  // {
  //   type: 'paragraph',
  //   text: 'Some statement[[note:source-1]] inside a paragraph.',
  //   notes: [{ id: 'source-1', text: 'Plain note text' }]
  // }
  // Or with a link:
  // {
  //   type: 'html',
  //   html: '<p>Formatted text with a note[[note:paper]].</p>',
  //   notes: [{ id: 'paper', text: 'Optional description', url: 'https://example.com', linkLabel: 'Open source' }]
  // }
  // Numbers are assigned automatically in reading order.
  // You can also write plain text directly inside a section, without any subsection heading:
  // sections: [{ id: 's1', label: 'Introduction', blocks: [{ type: 'paragraph', text: 'Plain text right away.' }], items: [] }]
  // And a subsection heading is optional too:
  // { id: 'free-text-01', blocks: [{ type: 'paragraph', text: 'Text without h2 heading.' }] }

  window.immortalismPageContent.en = {
    pageTitle: 'Immortalism FAQ',
    intro: 'From the problem of boredom to overpopulation, from eternal dictators to the meaning of life, this FAQ aims to answer any questions you may have about life-extension.',
    sections: [
      {
        id: 's1',
        label: 'Introduction',
        tocLabel: 'Introduction',
        items: [
          {
            id: 'intro-01',
            title: 'What is immortality?',
            blocks: [
              {
                type: 'paragraph',
                text: 'Becoming immortal overnight is not something that can happen. Depending on how one defines words like "life" and "death," it may take different amounts of time, or may even be impossible altogether.'
              },
              {
                type: 'paragraph',
                text: 'That is why, for now, by immortality I mean the first steps in that direction: life extension and rejuvenation. That already sounds less frightening, does it not? For those who are wary of grand words, these more familiar terms will do just fine.'
              },
              {
                type: 'paragraph',
                text: 'But there is no need to worry that immortality somehow "sounds wrong" either. Death is something we ought to fight; there is nothing good in death. A world without death is a far better world than the one we have now. And since the opposite of death is its absence, that is, immortality, that is what we should strive for.'
              },
              {
                type: 'paragraph',
                text: 'I want to define the scope of this FAQ: it will concern people who do not age, who have no upper limit on lifespan, but whose average lifespan is more than a thousand years.'
              },
              {
                type: 'paragraph',
                text: 'I introduce these limits because:'
              },
              {
                type: 'html',
                html: '<p><strong>a)</strong> If throughout life the human risk of death remained roughly at the level it is at age thirty, then on average we really would live about 1,000 years. This is a rough estimate, but it works for the purposes of our discussion.</p>'
              },
              {
                type: 'html',
                html: '<p><strong>b)</strong> The absolute elimination of death, unlike the idea of radical life extension, belongs at the present stage of humanity more to philosophy. Discussing it would provoke even more questions and outrage, so let us postpone that for another time.</p>'
              },
              {
                type: 'paragraph',
                text: '(That said, I do of course support the complete elimination of death as the ultimate culmination of life extension, but it really is too separate a question, and I would like to examine it from another angle in another article.)'
              },
              {
                type: 'paragraph',
                text: 'Whenever in this chain of statements I speak of immortality and the struggle against death, you may take it to mean efforts in life extension, rejuvenation, the fight against diseases, especially age-associated ones, the development of regenerative medicine, and other neighboring fields that could allow a person to be healthier and live longer.'
              },
              {
                type: 'paragraph',
                text: 'Unfortunately, our world has developed a powerful "culture of death," or deathism, as some call it. We justify death and even exalt it, because for almost all of human history we simply had no other choice. Yet now many outstanding scientists have no doubt that rejuvenation and life extension are goals genuinely achievable through scientific and technological progress.'
              },
              {
                type: 'paragraph',
                text: 'Allow me to quote one of the greatest physicists of the twenty-first century, Richard Feynman:'
              },
              {
                type: 'quote',
                text: 'It is one of the most remarkable things that in all of the biological sciences there is no clue as to the necessity of death. If you say we want to make perpetual motion, we have discovered enough laws as we studied physics to see that it is either absolutely impossible or else the laws are wrong. But there is nothing in biology yet found that indicates the inevitability of death. This suggests to me that it is not at all inevitable, and that it is only a matter of time before the biologists discover what it is that is causing us the trouble and that that terrible universal disease or temporariness of the human’s body will be cured.[[note:feynman-source]]',
                cite: 'Richard Feynman',
                appendNoteAtEnd: true,
                notes: [
                  {
                    id: 'feynman-source',
                    url: 'https://artdiamondblog.com/archives/2006/12/feynman_nothing.html'
                  }
                ]
              },
              {
                type: 'paragraph',
                text: 'Over the past decades, scientists have become fully convinced that aging and death are not fundamental laws of the universe, nor magic, but simply specific processes in the organism that can often be slowed or even reversed.'
              },
              {
                type: 'paragraph',
                text: 'Scientists have already extended the lifespan of nematodes[[note:nematodes-study]] and yeast[[note:yeast-study]] tenfold, fruit flies by ~2.5 to ~3.5 times[[note:fruit-flies-study]], and mice by ~1.7 times[[note:mice-study]].',
                notes: [
                  {
                    id: 'nematodes-study',
                    url: 'https://onlinelibrary.wiley.com/doi/10.1111/j.1474-9726.2007.00348.x'
                  },
                  {
                    id: 'yeast-study',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/18225956/'
                  },
                  {
                    id: 'fruit-flies-study',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/35681084/'
                  },
                  {
                    id: 'mice-study',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/40848270/'
                  }
                ]
              },
              {
                type: 'paragraph',
                text: 'Unfortunately, research into life extension in humans is still in its infancy. Many factors affect this, and I will discuss them in other articles. Who knows, perhaps if not for deathism and distrust, we would already have achieved far greater results.'
              },
              {
                type: 'paragraph',
                text: 'For this reason I have compiled an extensive FAQ on common misconceptions, myths, and questions related to immortality, rejuvenation, and life extension. I will try not to linger too long on each point, because there truly are many of them.'
              }
            ]
          },
          {
            id: 'intro-02',
            title: 'Before we begin...',
            blocks: [
              {
                type: 'paragraph',
                text: 'Although in this article I will often be refuting entrenched positions, in truth many of them do not even need refuting. Even if some of these misconceptions were the purest truth, immortality would still be a good.'
              },
              {
                type: 'paragraph',
                text: 'To see this, I suggest using the Reversal Test developed by Nick Bostrom and Toby Ord.'
              },
              {
                type: 'paragraph',
                text: 'Imagine that aging is already gone. People are forever young and live for thousands of years, dying only from accidents or by their own choice. No one even remembers what aging is anymore.'
              },
              {
                type: 'paragraph',
                text: 'But then some problem arises. Let us say civilization truly begins to struggle because of overpopulation, growing inequality, or some other cause.'
              },
              {
                type: 'paragraph',
                text: 'Then a mad scientist comes to you and says he has invented a unique virus that spreads extremely well and will very quickly infect everyone on the planet. This virus will begin slowly destroying people\'s bodies, eventually leading to weakness, chronic pain, deterioration of all bodily systems, and an increased risk of most diseases and injuries. Year by year a person grows more hideous, begins to forget loved ones, and in the end loses their mind and dies in a vegetative state.'
              },
              {
                type: 'paragraph',
                text: 'Absolutely everyone, including you, your parents, your partner, your friends, everyone alive now who has the potential to live for thousands of years, will contract this virus and suffer from it until they burn out over the course of some decades, meaning their expected lifespan will be cut by dozens of times. But it would solve your problem of overpopulation, resource scarcity, inequality, an eternal dictator, or whatever other problem you chose.'
              },
              {
                type: 'paragraph',
                text: 'Would you agree?'
              },
              {
                type: 'paragraph',
                text: 'Is that the most rational solution to such problems? Does the end justify the means? Would you allow billions of living beings to die in order to solve some problem?'
              },
              {
                type: 'paragraph',
                text: 'Is suffering caused by the gradual degradation of the body, and its final destruction as a result, really the optimal solution to any of the problems that might arise from life extension?'
              },
              {
                type: 'paragraph',
                text: 'Or indeed to any problem that might exist at all?'
              },
              {
                type: 'paragraph',
                text: 'Think about this. Human beings have a cognitive bias toward preserving the status quo, that is, the current state of affairs, even when change might make things better.'
              },
              {
                type: 'paragraph',
                text: 'Many people, for various reasons, most often irrational ones, want to keep everything as it is, to leave aging and death exactly as they are. They search for justifications. But if you imagine a world without aging, you will understand that no reason could possibly justify aging and the premature death it brings upon a human being.'
              },
              {
                type: 'paragraph',
                text: 'In this large article I have examined the most common objections, showing that most of them are wholly or partly mistaken. But even if some or all of them turned out to be correct, the Reversal Test shows that, morally speaking, none of these possible difficulties could justify refusing to research life extension.'
              }
            ]
          }
        ]
      },
      {
        id: 's2',
        label: 'General objections',
        tocLabel: 'General objections',
        items: [
          {
            id: 'general-01',
            title: 'What if I do not want to live forever?',
            blocks: [
              {
                type: 'paragraph',
                text: 'If you are encountering the idea of radical life extension for the first time, you probably assume that a long life would bring many problems. Before you read this entire article and realize that, at least in many ways, you were mistaken, I want to note one thing: no one is going to force you to live forever.'
              },
              {
                type: 'paragraph',
                text: 'When rejuvenating or life-extending therapy appears in this world, it is hardly likely to be mandatory for every person on Earth. If you truly, sincerely do not want to extend your life and youth, you will always be free to choose otherwise and die, for example, when your body gives out from accumulated damage.'
              },
              {
                type: 'paragraph',
                text: 'It is also important to understand that this is not about physical immortality, that is, the impossibility of dying under any circumstances. If you are biologically immortal, that only means your risk of death does not increase with age and you show no signs of aging. Potentially you may live forever, but if an anvil falls on your head, you will still die.'
              },
              {
                type: 'paragraph',
                text: '(Unless, of course, we develop astonishing regenerative abilities like Deadpool in the Marvel comics, though I am not sure how possible that is in principle.)'
              },
              {
                type: 'paragraph',
                text: 'It is precisely this risk of accidental death through injury that limits the hypothetical average lifespan of a non-aging human being to about 1,000 years, if we use the modern probability of death for a thirty-year-old.'
              },
              {
                type: 'paragraph',
                text: 'The idea of human biological immortality is that death would no longer be obligatory.'
              }
            ]
          },
          {
            id: 'general-02',
            title: 'Eternal old age?',
            blocks: [
              {
                type: 'paragraph',
                text: 'By "life extension" I mean the extension of healthy life and/or the elimination of old age.'
              },
              {
                type: 'paragraph',
                text: 'If someone speaks of extending life, they are automatically speaking of eternal youth, not eternal old age. If you imagined a person who goes on aging forever but cannot die, you have committed what is called the Tithonus Error.'
              },
              {
                type: 'paragraph',
                text: 'In the ancient Greek myth, Tithonus asked for eternal life but forgot to ask for eternal youth, and so he aged forever and became a cicada. But life does not work like ancient Greek myths.'
              },
              {
                type: 'paragraph',
                text: 'In real life, the idea is that you could feel twenty at eighty, or twenty at one thousand, and that affects many of the questions that follow.'
              }
            ]
          },
          {
            id: 'general-03',
            title: 'Will progress stop?',
            blocks: [
              {
                type: 'paragraph',
                text: 'In connection with point 2, we can immediately refute the claim that death is necessary so that there will not arise a population of people unable to change their minds, thereby halting human progress.'
              },
              {
                type: 'paragraph',
                text: 'The rigidity of thought that comes with age is most often tied to brain aging, and that problem would be solved.'
              },
              {
                type: 'paragraph',
                text: 'And think about it: if people become capable of fully defeating aging and death, would they not also become capable of managing the brain\'s neurochemistry so as to tune the level of plasticity and, accordingly, openness to new experience? Of course we will be able to do that.'
              },
              {
                type: 'paragraph',
                text: 'Some substances, for example psilocybin or LSD, according to research, can already now positively shift openness to experience on the Big Five scale.[[note:psilocybin-openness]]',
                notes: [
                  {
                    id: 'psilocybin-openness',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/21956378/'
                  }
                ]
              },
              {
                type: 'paragraph',
                text: 'It is also worth noting that in the past, progress did not stop because human lives became longer. Historically, greater longevity made the human world richer and accelerated its development, opening doors to new possibilities rather than closing them. The replacement of ideas does not require the replacement of corpses. That is not a humane approach. A new paradigm usually wins not because the old people die, but because it offers better explanations, better tools, and a better quality of life.'
              },
              {
                type: 'paragraph',
                text: 'Imagine a composer with 180 years of practice, a philosopher with 220 years of dialogue across the ages, a film director who has witnessed five technological revolutions, a scientist who personally sees to the end longitudinal studies begun a century earlier.'
              },
              {
                type: 'paragraph',
                text: 'That does not sound like stagnation. It sounds like the possibility of depths of understanding and mastery never before seen.'
              }
            ]
          },
          {
            id: 'general-04',
            title: 'Living forever would be boring',
            blocks: [
              {
                type: 'paragraph',
                text: 'Ask yourself: what reasons are there to suppose that, with life extension, boredom would arise in you more often than during any random period of your present life?'
              },
              {
                type: 'paragraph',
                text: 'There are not many such reasons, in my view. One might say that over a long life you would have time to try everything in the world. That is highly doubtful, because history and science keep moving forward, ever more possibilities open before us, and the amount of human-made content has already grown to unimaginable proportions.'
              },
              {
                type: 'paragraph',
                text: 'But even if we imagine the world freezing in place and nothing new ever being created again, it would still take you thousands, or even tens of thousands, of years to study everything and try every kind of activity and sensation.'
              },
              {
                type: 'paragraph',
                text: 'For example, off the top of my head, to read all of Dumas would require several months of nonstop reading, yes, even without pauses to blink, yawn, or go to the toilet.'
              },
              {
                type: 'paragraph',
                text: 'What is more, as already mentioned above, in the future we may gain the ability to manage our brains and our mental states, perhaps even switching on heightened curiosity at will, as well as immersing ourselves in virtual worlds with an absolutely limitless quantity of experience.'
              }
            ]
          },
          {
            id: 'general-05',
            title: 'Does death give meaning?',
            blocks: [
              {
                type: 'paragraph',
                text: 'To my mind, this is one of the silliest misconceptions about immortality.'
              },
              {
                type: 'paragraph',
                text: 'Do you really think to yourself from time to time, "Oh, soon I will begin to fall apart, suffer chronic fatigue and pain, and then vanish forever. How inspiring"?'
              },
              {
                type: 'paragraph',
                text: 'Would life really lose meaning if you knew that a thousand years, or many thousands of years, of life and possibility lay ahead of you? It seems to me the opposite is true.'
              },
              {
                type: 'paragraph',
                text: 'The only thing death motivates me to do is fight it, so that I can go on living, creating, enjoying life, so that all this does not disappear. I do not believe I would stop striving toward other goals if I became immortal. Those goals are not tied to death, so why should death affect them?'
              },
              {
                type: 'paragraph',
                text: 'If I want to play the guitar, then I want to play the guitar. If I want to write a book, I want to write a book. A rose is a rose is a rose, that is all. I do not do these things because I will die, not because I must "manage to try them in time," but simply because I want to.'
              },
              {
                type: 'paragraph',
                text: '"Death makes life valuable" is absurd.'
              },
              {
                type: 'paragraph',
                text: 'If someone told us that our phone would always work well and never grow obsolete, would we stop valuing it?'
              },
              {
                type: 'paragraph',
                text: 'If the risk of dying gives life meaning, then the older or sicker a person is, the more valuable their life must be. So if you had to choose between saving a 110-year-old man and a small boy, would you choose the 110-year-old? Is an infant\'s life valuable only because he can die easily? I think it is valuable because he has many years of potentially happy life ahead of him. Death has nothing to do with value.'
              },
              {
                type: 'paragraph',
                text: 'In childhood we do not think about death, often we do not even know about it, and yet we still rejoice in life. Often we rejoice far more strongly than we do as adults.'
              },
              {
                type: 'paragraph',
                text: 'In truth, we value life not because it can be taken away, but because it contains love, beauty, knowledge, the possibility of joy and creativity. Death does not create these things; it simply cuts them off.'
              },
              {
                type: 'paragraph',
                text: 'If death itself gave meaning, then why do we regard murder or fatal illness as bad?'
              },
              {
                type: 'paragraph',
                text: 'Death may intensify a feeling of scarcity, the feeling that you do not have much time left and must hurry to do a great deal.'
              },
              {
                type: 'paragraph',
                text: 'But that is not meaning. That is anxiety.'
              },
              {
                type: 'paragraph',
                text: 'Deadlines, as we know, do not protect us from procrastination. If they mobilize our resources at all, it usually happens closer to the deadline itself; they do not make us productive throughout the whole time allotted to the task.'
              },
              {
                type: 'paragraph',
                text: 'And finally, allow me to quote a random commenter on the internet:'
              },
              {
                type: 'quote',
                text: 'Seriously, death as a motivator? Death does not even motivate people to quit smoking! Do people really believe everyone would just sit and watch TV if not for death? Oh wait, most people already do. What a motivator!',
                appendNoteAtEnd: true,
                notes: [
                  {
                    id: 'random-commenter-source',
                    url: 'https://qr.ae/pCLZia'
                  }
                ]
              }
            ]
          },
          {
            id: 'general-06',
            title: 'It\'s unnatural!',
            blocks: [
              {
                type: 'paragraph',
                text: 'There is an interesting cognitive distortion known as an appeal to nature. The idea is that if something does not exist in nature, then it must automatically be bad, while whatever exists in nature must be good. This is an extremely common and dangerous error in thinking.'
              },
              {
                type: 'paragraph',
                text: 'Suppose you were told that you had AIDS, and yes, it can be transmitted by means other than sexual contact. Would you seek treatment, or would you let the disease kill you?'
              },
              {
                type: 'paragraph',
                text: 'Most likely your answer would be: yes, I would seek treatment.'
              },
              {
                type: 'paragraph',
                text: 'But how can that be? AIDS is natural. Why are you fighting for your life? Why do you want those extra decades that treatment under medical supervision might give you? Illness and suffering are among the most natural things there are for our species. For almost all of our history, we died in large numbers from infections.'
              },
              {
                type: 'paragraph',
                text: 'Ah, so it seems you do want to live after all. And do you know what "wanting to live" means? It means not wanting to die.'
              },
              {
                type: 'html',
                html: '<p><strong>So let us fight death.</strong></p>'
              },
              {
                type: 'paragraph',
                text: 'Smallpox, syphilis, cancer, sudden infant death syndrome, and thousands of other things that cause suffering are very natural things. Yet I very much doubt that they are good. No, they are awful, and we ought to resist them just as we ought to resist natural death.'
              },
              {
                type: 'paragraph',
                text: 'And do you know what is synthetic, unnatural? Vaccines, medicines, cardiopulmonary resuscitation, computers, airplanes, cars, telephones. Washing your hands with soap and using shampoo are rather unnatural too. The list could go on and on.'
              },
              {
                type: 'paragraph',
                text: 'What truly separates treatment for AIDS from treatment for old age is simply that in our own time effective treatments for old age do not yet exist. And do you know why they do not exist? Because people keep saying, "Death is natural!"'
              },
              {
                type: 'paragraph',
                text: 'And yes, in nature itself, without any of our "unnatural" interventions, there already exist non-aging species and species that possess biological immortality. The immortal jellyfish is proof enough; its very name says it all.'
              },
              {
                type: 'paragraph',
                text: 'It is worth understanding with complete clarity that the existence of death in the overwhelming majority of species is not connected with death being some basic law of the world or anything of the sort. No. Death emerged through evolution, like everything else in the world of living matter. Aging too arose through evolution. It is not a law of the universe, and it is not magic. It is not some insurmountable invisible rule established by a supernatural power for some kind of cosmic balance. Yet unfortunately, most people still unconsciously perceive death exactly that way.'
              },
              {
                type: 'paragraph',
                text: 'They are mistaken. Aging and death are solvable engineering problems.'
              },
              {
                type: 'paragraph',
                text: 'And evolution is a "blind watchmaker." It has no goal, it can make mistakes, and so on. It does not strive toward any ideal; it merely fixes those factors that happened to be useful for reproduction at a given time and place. That is all. Evolution should not be treated as a genius architect whom foolish humans have no right to challenge.'
              },
              {
                type: 'paragraph',
                text: 'Our entire civilization is a resistance to naturalness, because our natural state is dreadful and brings immense suffering. That is precisely why we continue to develop and invent things that make life easier, and sometimes even a little happier.'
              }
            ]
          },
          {
            id: 'general-07',
            title: 'There are much more important problems',
            blocks: [
              {
                type: 'paragraph',
                text: 'Someone may say: but there are more urgent problems. Let us first solve hunger, warming, the shortage of drinking water, and so on.'
              },
              {
                type: 'paragraph',
                text: 'But here is my claim: aging is the chief humanitarian problem of all humanity. Around 120,000 people die every day from causes related to aging. No other problem kills so many.'
              },
              {
                type: 'paragraph',
                text: 'Aging is the principal factor that, year by year, increases for every living person the risk of illness, disability, and death.'
              },
              {
                type: 'paragraph',
                text: 'If human beings did not age, they could live on average around a thousand years.'
              },
              {
                type: 'paragraph',
                text: 'For example, I support the fight against climate change. But imagine how our arguments now sound to businessmen and politicians: "In the twenty-second century Miami will be underwater" is heard as "something will happen when I have long been dead, so why should I care?"'
              },
              {
                type: 'paragraph',
                text: 'Now imagine that every person had at least a thousand more years of life ahead of them. Then they would have to care about climate change, because it would inevitably affect them personally.'
              },
              {
                type: 'paragraph',
                text: 'And the existence of a large problem X does not mean we must throw all our strength at it and forget problem Y. The existence of cancer does not make us stop funding Alzheimer\'s research.'
              },
              {
                type: 'paragraph',
                text: 'The rational solution is for efforts directed at solving a problem to be proportional to the scale of that problem.'
              },
              {
                type: 'paragraph',
                text: 'Aging, at least in the number of victims, surpasses every other problem on Earth. If you are still young, try to imagine yourself in a decrepit, failing body: cataracts or glaucoma in one eye, both nearsightedness and farsightedness in the other, joints aching, back aching, a hernia, and increasing difficulty swallowing. This is an ordinary picture for many people who live to eighty or eighty-five.'
              },
              {
                type: 'paragraph',
                text: 'Every day, all the wars in the world together kill eight hundred to one thousand times fewer people than aging. A lack of clean water kills roughly ten to thirty times fewer per day than aging.[[note:water-deaths]] Hunger, a very serious problem, kills around five times fewer people than aging.[[note:hunger-deaths]]',
                notes: [
                  {
                    id: 'water-deaths',
                    url: 'https://www.who.int/news-room/fact-sheets/detail/drinking-water'
                  },
                  {
                    id: 'hunger-deaths',
                    url: 'https://www.oxfam.org/en/press-releases/21000-people-are-dying-each-day-conflict-fuelled-hunger-around-world'
                  }
                ]
              },
              {
                type: 'paragraph',
                text: 'These figures are very hard to calculate exactly, but the order of magnitude is correct.'
              },
              {
                type: 'paragraph',
                text: 'To say, "We have problems more important than aging, so let us forget about it," is entirely wrong. A far better approach is this:'
              },
              {
                type: 'paragraph',
                text: 'Let us at the very least fund research into aging, rejuvenation, and radical life extension in proportion to the amount of suffering and/or economic damage these problems cause.'
              }
            ]
          },
          {
            id: 'general-08',
            title: 'Death is the worst thing that will happen to you',
            blocks: [
              {
                type: 'paragraph',
                text: 'By the way, to continue the previous point, why do you want to solve climate change at all? Or hunger, the shortage of drinking water, discrimination, human-rights violations, and so on? Why solve these things? Are you perhaps not indifferent to the suffering of other sentient beings?'
              },
              {
                type: 'paragraph',
                text: 'It seems that you do, after all, want to reduce the suffering of others. That is good. On that point we are very much alike. Then why do you close your eyes to the staggering amounts of suffering created by aging and death?'
              },
              {
                type: 'paragraph',
                text: 'If you have ever lost someone close to you, then you know what unbearable pain grief is. Would you not want to spare yourself, your loved ones, and other people in general from such heartbreaking anguish?'
              },
              {
                type: 'paragraph',
                text: 'Try strapping many little bags of sand all over your body and live like that for a whole day. You may then feel what sarcopenia is, the muscle weakness that inevitably comes with aging. I already gave a modest list of the problems most old people face in the previous point. Do you not want to make them feel better?'
              },
              {
                type: 'paragraph',
                text: 'No, we should not settle for "healthy aging." We must eradicate aging in principle. There is nothing good in it.'
              },
              {
                type: 'paragraph',
                text: 'Unfortunately suffering cannot be measured the way, for example, one measures the distance from point A to point B. But there is no doubt that death is the source of an incredible quantity of suffering.'
              },
              {
                type: 'paragraph',
                text: 'If you are not indifferent to how other people feel, then morally the right thing is to oppose aging and death.'
              }
            ]
          },
          {
            id: 'general-09',
            title: 'Loss of personal identity',
            blocks: [
              {
                type: 'paragraph',
                text: 'Rarely, but sometimes, I hear objections such as: "After so many years my personality will wear away; nothing will remain of it." These objections strike me as very naive. Are you the same person you were yesterday? The same as a year ago, ten years ago, twenty years ago?'
              },
              {
                type: 'paragraph',
                text: 'If I strain my hippocampus and clearly remember who I was three years ago, I understand that very little in that person resonates with who I am now. I think the personalities of only a tiny number of people remain unchanged for decades. The particles that make up our brains change at every moment. The cells of our bodies are constantly renewed, and within a year most of the cells in your body will have been replaced. You are never the same person you were X amount of time ago. Remember rereading your old messages and feeling embarrassed. Sometimes it is difficult even to believe that it was you who wrote them.'
              },
              {
                type: 'paragraph',
                text: 'So there is no single unified personality. You are changeability. Personality is not a point but a process. There is nothing terrible in your going on changing just as you always have, only over a longer span of time.'
              }
            ]
          },
          {
            id: 'general-10',
            title: 'The cold-blooded immortal',
            blocks: [
              {
                type: 'paragraph',
                text: 'Surprisingly often I have encountered claims of this sort: "An immortal person would accumulate trauma that would eventually lead to eternal PTSD."'
              },
              {
                type: 'paragraph',
                text: 'Or: "An immortal would have to become emotionally cold and indifferent in order to endure loss over the centuries."'
              },
              {
                type: 'paragraph',
                text: 'As for the first: over eighty years, an ordinary modern person can also accumulate traumas. They do not therefore go mad or develop endless PTSD. If anything, such an elderly person is more likely to lose their mind because of dementia and other age-related disorders of the brain. People do not become cold simply because they are capable of suffering. If that were so, humanity would long ago have turned into a race of icy automatons.'
              },
              {
                type: 'paragraph',
                text: 'As for the second: what specific losses are we talking about, if everyone has been given the possibility of living as long as they wish while remaining forever young? Yes, losses can take many forms. But most often the heaviest ones are connected precisely with death, illness, or disability. In a world where the second and third do not exist, and the first is purely optional, there will be much less loss, tragedy, and grief.'
              },
              {
                type: 'paragraph',
                text: 'Again, the world is not static. Methods of medicine and psychological help will continue to develop. Even now, for example, there is no accepted scientific consensus about the origins of depression, or schizophrenia. We are scarcely able to treat many chronic mental-health problems. We are at the very beginning of that path, and if there should appear an immortal who truly suffers from accumulated trauma, the medicine of the future would probably be able to help them.'
              }
            ]
          },
          {
            id: 'general-11',
            title: 'I am not afraid of death',
            blocks: [
              {
                type: 'paragraph',
                text: 'Since "fear of death" is an accusation I have personally encountered many times, I will answer it personally and emotionally, though I hope at the same time to convey what drives me in the struggle against death.'
              },
              {
                type: 'paragraph',
                text: 'Contrary to the common misconception held by people I introduce to immortalism, I am not afraid of death. In a sense Epicurus was right: when death is there, you are not, so what is there to fear? No, the matter is not fear. I hate death. I feel toward it profound disgust and fury.'
              },
              {
                type: 'paragraph',
                text: 'That feeling, in my view, is exactly what best motivates one to fight death. It is a killer stalking everyone you love and taking them one by one. It does not ask your loved ones when they wish to live and when they wish to die. It steals the right to choose and interrupts perhaps the greatest value one can have at all: the experience of subjective consciousness. It ends forever.'
              },
              {
                type: 'paragraph',
                text: 'As an acquaintance of mine once said: immortalism is saving your family.'
              },
              {
                type: 'paragraph',
                text: 'I am not afraid to die. But I do not want to let this evolutionary belch called aging continue taking away the people and animals I love, at least not until they themselves, speaking of people, of course, decide they want to go.'
              },
              {
                type: 'paragraph',
                text: 'If they ever do.'
              },
              {
                type: 'paragraph',
                text: 'And yet, of course, I would like to live for thousands of years, or even forever. Not because dying frightens me. Because life is interesting, many-sided, and capable of surprising us. And if I can spend that time with those I love, if aging and death are defeated, there is no doubt that I will always choose life.'
              }
            ]
          }
        ]
      },
      {
        id: 's3',
        label: 'Society, Politics & Economics',
        tocLabel: 'Society, Politics & Economics',
        items: [
          {
            id: 'society-01',
            title: 'Inequality between rich and poor',
            blocks: [
              {
                type: 'paragraph',
                text: 'The unfair distribution of a good is a problem of politics, not a problem with the good itself.'
              },
              {
                type: 'paragraph',
                text: 'By the same logic one could say that antibiotics are bad because at first they were not available to everyone; that the internet is bad because it began as something elite; that transplantation is bad because waiting lists are unfair.'
              },
              {
                type: 'paragraph',
                text: 'Technologies usually reach everyone over time. Computers and mobile phones were once unavailable to ordinary people too. Today a poor person in Europe lives better than a king did three hundred years ago.'
              },
              {
                type: 'paragraph',
                text: 'Second, aging is unlikely to be solved by one single remedy. It is too complex a problem for there to be one universal panacea. By the time intervention 2 appears, intervention 1 will already have every chance of becoming widely available. By the way, this gradual emergence of drugs, which will ultimately lead to immortality, is called the aging escape velocity.'
              },
              {
                type: 'paragraph',
                text: 'And for the development of a hypothetical "vaccine against aging," the rules would still require preclinical testing and then three phases of clinical trials, which cannot be made "top secret." That is simply impossible if manufacturers intend to sell their drugs legally.'
              },
              {
                type: 'paragraph',
                text: 'Creating medicine against aging would truly be profitable: billions of people would want to use it, and that is more customers than any medicine before it has ever had.'
              },
              {
                type: 'paragraph',
                text: 'Finally, I want to quote something I took from another site devoted to life extension:'
              },
              {
                type: 'quote',
                text: 'A significant part of the world\'s population still lives on the edge of hunger. They cannot afford clean drinking water and basic sanitation.\n\nBasic medical services that many of us take for granted are currently unavailable to a large portion of the world\'s population. This inequality has existed for thousands of years. Why should the appearance of some new technology challenge this reality any more than the discovery of antibiotics, water purification, or basic sanitation did?\n\nChildren still die every day from hunger or from simple curable diseases. Whether we are right, wrong, or indifferent, this is reality. We as a species failed to solve this problem in the past. But why should that somehow obstruct the progress of medical science? Why should I die earlier than I must because international inequality, which has existed since the birth of civilization, makes science morally incapable of seeking answers?\n\nAny argument that invokes the lack of global access to life-extension technologies as an obstacle to progress seems to me emotional and detached from reality.',
                appendNoteAtEnd: true,
                notes: [
                  {
                    id: 'fightaging-inequality',
                    url: 'https://www.fightaging.org/archives/2006/02/death-for-everyone-before-inequality-for-anyone/'
                  }
                ]
              }
            ]
          },
          {
            id: 'society-02',
            title: 'The eternal dictator',
            blocks: [
              {
                type: 'paragraph',
                text: 'I am certainly not a political psychologist, but I think a short life may sometimes intensify greed, dynastic thinking, and the struggle to accumulate urgently. A long life may have the opposite effect.'
              },
              {
                type: 'paragraph',
                text: 'But in any case, how many stories do you know in which dictatorship ended because the dictator died of causes related to aging?'
              },
              {
                type: 'paragraph',
                text: 'He simply died, everything ended, people began living happily ever after, and democracy arrived. If such stories exist, they certainly do not seem to be the norm.'
              },
              {
                type: 'paragraph',
                text: 'Simply waiting for a dictator to die is a poor strategy for fighting authoritarian regimes.'
              }
            ]
          },
          {
            id: 'society-03',
            title: 'What about institutions, work, and retirement?',
            blocks: [
              {
                type: 'paragraph',
                text: 'What if our familiar cycle of "school, university, work, retirement" breaks down? I would say: excellent.'
              },
              {
                type: 'paragraph',
                text: 'Even now this cycle corresponds poorly to reality. People change professions, study in adulthood, and return to the labor market. You have probably faced the difficulty of choosing a profession at a young age yourself, because under the old model you had to choose once and for all, and even now people can be shamed for searching for themselves or leaving a position. And older people who retire do not always have an easy time of it either. Some grew up within this linear model of development and devoted their lives to a single calling they now can no longer pursue. The meaning of life may simply disappear, and a person may find themselves alone and desolate in a rocking chair.'
              },
              {
                type: 'paragraph',
                text: 'The linear model of life is a product of the industrial age. It was convenient when life was shorter, work more standardized, and education rare. A longer life would allow us to have cycles of education and many career possibilities.'
              },
              {
                type: 'paragraph',
                text: 'But that is only if we look at the world as though it were static. In reality, artificial intelligence and robotics are not going anywhere, and it is obvious that the labor market will at the very least change radically in the coming years, if it does not nearly disappear altogether. Perhaps UBI, universal basic income, will appear. There will be no need for a separate category called "retirement"; money will simply always be there, and scarcity will become a thing of the past. This idea has both advantages and disadvantages, but since this is an FAQ about immortality, I will not go deeper into it here and will leave it for an FAQ about artificial intelligence.'
              },
              {
                type: 'paragraph',
                text: 'As this point and the two previous ones show, social problems are determined not by biological age as such, but by rules of access to power, property, education, career transitions, the form of the economy, and so on.'
              },
              {
                type: 'paragraph',
                text: 'Death today may serve as a crude compensator for bad institutions, but the problem is not the length of life. The problem is the structure of our society.'
              }
            ]
          },
          {
            id: 'society-04',
            title: 'Time enough for love?',
            blocks: [
              {
                type: 'paragraph',
                text: 'A more pressing question is how one is supposed to put up with one\'s partner for hundreds of years.'
              },
              {
                type: 'paragraph',
                text: 'In fact, people can last together quite a long time. The world record for the length of a marriage now stands at a full ninety years.[[note:marriage-record]] Who knows, perhaps there will be people whose love and devotion are strong enough to pass through centuries.',
                notes: [
                  {
                    id: 'marriage-record',
                    url: 'https://en.wikipedia.org/wiki/List_of_long_marriages'
                  }
                ]
              },
              {
                type: 'paragraph',
                text: 'Of course, that would be the exception. But why must we cling to the form of family now accepted among us? Changing the form of the family is not the same as destroying the family. Just as nature contains many ways of cohabiting and raising offspring, humanity throughout its history has known many forms of family. There have existed, and still exist, polygyny, polyandry, alliance marriages between lineages, exchange marriages, extended families, and clan-based households. Everyone can choose what suits them, and civilization may yet arrive at a new form of family.'
              },
              {
                type: 'paragraph',
                text: 'Even today people usually do not choose one partner for life. We are generally serially monogamous: we are with one person, not until the end of time, but for a while. In 2020, more divorces than marriages were recorded in the United Kingdom. In the United States, the divorce rate in 2021 was above 41 percent.[[note:us-divorce-rate]] Love is each person\'s own affair, and I think many will conclude that one need not live with the same person for hundreds of years, only for as long as one deems sufficient for love.',
                notes: [
                  {
                    id: 'us-divorce-rate',
                    url: 'https://en.wikipedia.org/wiki/List_of_countries_by_marriage_and_divorce_rates'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 's4',
        label: 'Overpopulation',
        tocLabel: 'Overpopulation',
        items: [
          {
            id: 'overpopulation-01',
            title: 'Basic mathematics',
            blocks: [
              {
                type: 'paragraph',
                text: 'The first thing that may help us here is the convergent geometric progression. Let us leave the mathematical details aside and look at an example with the human population.'
              },
              {
                type: 'paragraph',
                text: 'Imagine that we have a population of immortal people, and they all want to have children. But what about overpopulation? Would it not grow forever?'
              },
              {
                type: 'paragraph',
                text: 'Well, actually, no.'
              },
              {
                type: 'paragraph',
                text: 'If we imagine that each pair in this population has only one child, then the maximum size this population could ever reach would be merely twice the size of the initial population.'
              },
              {
                type: 'paragraph',
                text: 'That is, if 8 billion people lived forever but wanted children, and each pair had only one child, and all subsequent people also had only one child per pair, then the population would never exceed 16 billion.'
              },
              {
                type: 'paragraph',
                text: 'Here is another thought experiment. Imagine that over the last hundred years no one died and everyone lived for 1,000 years. Since 1926, roughly 3.2 to 3.5 billion people have died. 8.2 billion, the current figure, plus 3.5 gives 11.7 billion people. That does not exactly look like overpopulation.'
              }
            ]
          },
          {
            id: 'overpopulation-02',
            title: 'Basic demography',
            blocks: [
              {
                type: 'paragraph',
                text: 'We should also bear in mind that a huge number of factors influence demography. Contrary to common opinion, the population in many countries is falling, not rising. In countries with high life expectancy, urbanization, high levels of female education, and access to contraception, birth rates usually fall to low or very low levels.'
              },
              {
                type: 'paragraph',
                text: 'So an "infinite demographic explosion" does not look like the expected scenario. The world is already moving toward a population peak of about 10.3 billion in the mid-2080s, after which a plateau and decline are expected, and the UN estimates the probability of a peak in this century at 80 percent.'
              },
              {
                type: 'paragraph',
                text: 'Europe, for example, will contribute nothing to this growth. In Europe, no country except Monaco has fertility at replacement level, 2.1.[[note:europe-fertility]] South Korea has the lowest fertility rate in the world, 0.72. In many developed countries the population is not growing but rapidly shrinking. Population growth through the end of this century is expected to come exclusively from Africa and Asia.',
                notes: [
                  {
                    id: 'europe-fertility',
                    url: 'https://en.wikipedia.org/wiki/List_of_countries_by_total_fertility_rate'
                  }
                ]
              },
              {
                type: 'paragraph',
                text: 'Quite possibly, a significant part of that growth is explained by poorer female education and poorer access to contraception in some countries of those regions. UNFPA writes that 257 million women worldwide who wish to avoid pregnancy are not using a safe modern method, and that roughly half of all pregnancies, around 121 million per year, are unintended.[[note:unfpa-pregnancy]]',
                notes: [
                  {
                    id: 'unfpa-pregnancy',
                    url: 'https://www.unfpa.org/sites/default/files/pub-pdf/UNFPA%20Supplies%20Partnership%20Annual%20Report%202024_web%20%282%29.pdf'
                  }
                ]
              }
            ]
          },
          {
            id: 'overpopulation-03',
            title: 'Mortality does not disappear',
            blocks: [
              {
                type: 'paragraph',
                text: 'Demography is a dynamic system with an input, births, and an output, deaths. Many people fear that if the output is blocked, the input will overflow the system. But in reality mortality would not disappear entirely, at least not right away. It would only fall to record-low levels.'
              },
              {
                type: 'paragraph',
                text: 'As I said in one of the first sections, biological immortality does not make you physically immortal. You may still die from injuries or from any other cause unrelated to aging. Accidents will still happen, though obviously humanity will strive to prevent them.'
              },
              {
                type: 'paragraph',
                text: 'There will also be people who do not wish to extend their lives for certain religious or value-based reasons. They may even choose not to rejuvenate, thus quickly undergoing the horrors of aging and death and freeing space for new inhabitants of the planet.'
              },
              {
                type: 'paragraph',
                text: 'Perhaps, if the population really were to reach its limit, which is far from certain, some system of support for dynamic equilibrium would be created. It would note every registered death and notify people who wish to have children and have joined a queue that a place had opened up. But that is only my fantasy and need not become reality. Even so, it is already a far more rational and reasonable option than the repellent and, to my mind, very foolish literary trope that one must choose between immortality and reproduction.'
              }
            ]
          },
          {
            id: 'overpopulation-04',
            title: 'Resources',
            blocks: [
              {
                type: 'paragraph',
                text: 'We fear overpopulation not because of the sheer number of people, but because we fear there will literally not be enough space or resources for survival. But at least for now, that is not the real problem. The real problem is that humanity uses the land, water, housing, and food it already has with monstrous inefficiency.'
              },
              {
                type: 'paragraph',
                text: 'Excluding seasonal and weekend homes, the OECD notes that Spain, Japan, and Portugal each have more than 12 percent vacant dwellings in their housing stock.[[note:oecd-vacant-housing]] In Japan in 2023 there were around 9 million vacant dwellings, that is, 13.8 percent of all housing.[[note:japan-vacant-housing]]',
                notes: [
                  {
                    id: 'oecd-vacant-housing',
                    url: 'https://www.oecd.org/content/dam/oecd/en/data/datasets/affordable-housing-database/hm1-1-housing-stock-and-construction.pdf'
                  },
                  {
                    id: 'japan-vacant-housing',
                    url: 'https://www.stat.go.jp/english/data/handbook/pdf/2025half_2.pdf'
                  }
                ]
              },
              {
                type: 'paragraph',
                text: 'In 2022 humanity threw away 1.05 billion tons of food at the household, food service, and retail levels alone; that is about 19 percent of all food already available to consumers. Think about that figure: more than a billion tons.'
              },
              {
                type: 'paragraph',
                text: 'FAO adds that another 13.2 percent of food is lost before it even reaches retail, after harvest and along the supply chain.[[note:fao-food-loss]]',
                notes: [
                  {
                    id: 'fao-food-loss',
                    url: 'https://www.fao.org/policy-support/policy-themes/food-loss-and-food-waste/-Food-Loss-and-Food-Waste-Database/en'
                  }
                ]
              },
              {
                type: 'paragraph',
                text: 'Urban intuition misleads us. Cities seem enormous, but built-up land occupies less than 2 percent of the world\'s land surface.[[note:built-up-land]] The main consumer of land is not housing or cities, but agriculture.',
                notes: [
                  {
                    id: 'built-up-land',
                    url: 'https://ourworldindata.org/how-urban-is-the-world'
                  }
                ]
              },
              {
                type: 'paragraph',
                text: 'About half of all habitable land is already used for agriculture. At the same time, if one adds together pasture and land used to grow feed, livestock farming occupies around 80 percent of agricultural land while supplying only about 17 percent of the world\'s calories.[[note:livestock-land-use]]',
                notes: [
                  {
                    id: 'livestock-land-use',
                    url: 'https://ourworldindata.org/global-land-for-agriculture'
                  }
                ]
              },
              {
                type: 'paragraph',
                text: 'This, by the way, is another argument in favor of shifting toward plant-based food, if ethical arguments are not enough for you. If the whole world switched to a plant-based diet, global agricultural land use would shrink by around 75 percent, that is, from roughly 4 billion hectares to 1 billion.[[note:plant-based-land-use]] Those billions of hectares could be used for housing construction.',
                notes: [
                  {
                    id: 'plant-based-land-use',
                    url: 'https://ourworldindata.org/land-use-diets'
                  }
                ]
              },
              {
                type: 'paragraph',
                text: 'Finally, the FAO notes that agriculture consumes around 70 percent of global freshwater withdrawals.[[note:fao-freshwater]]',
                notes: [
                  {
                    id: 'fao-freshwater',
                    url: 'https://www.fao.org/one-health/areas-of-work/water/en'
                  }
                ]
              },
              {
                type: 'paragraph',
                text: 'Did you think that was all? In reality, we are only warming up when it comes to efficient resource use.'
              },
              {
                type: 'paragraph',
                text: 'A transition to cellular agriculture by 2050 could reduce agricultural land use by around 83 percent.[[note:cellular-agriculture]] Vertical farms can increase yields in tons per hectare per year by ten to one hundred times.[[note:vertical-farms]] The development of underground urbanism, moving transportation, warehouses, and certain elements of logistics below ground, and so on, would free a great deal of surface space.',
                notes: [
                  {
                    id: 'cellular-agriculture',
                    url: 'https://www.nature.com/articles/s43247-024-01227-8'
                  },
                  {
                    id: 'vertical-farms',
                    url: 'https://www.nature.com/articles/s44383-025-00006-4'
                  }
                ]
              },
              {
                type: 'paragraph',
                text: 'In short, it is wrong to view overpopulation simply as an increase in the number of people. There is still an enormous amount we can do about this issue. Talk of shortages of water, food, or housing due to overpopulation is to a large degree a discussion of how we produce food and use land, not a matter of there simply being too many human bodies.'
              }
            ]
          },
          {
            id: 'overpopulation-05',
            title: 'Fertility management',
            blocks: [
              {
                type: 'paragraph',
                text: 'And think about this as well. We often fall into the trap of the present perspective: we look at the world through the eyes of an aging person born into a strange time when most people take death for granted. That keeps us from understanding the psychology of people who do not need to worry that they will soon die.'
              },
              {
                type: 'paragraph',
                text: 'The fertile period in women is extremely limited. After age thirty to thirty-five, the risks of complications associated with childbirth begin to rise noticeably.[[note:maternal-risk-30-35]] In women over forty-five, the risk of dying in childbirth is five times higher than among mothers under twenty-five.[[note:maternal-risk-45]] If a woman wants to give birth, she usually has to do it in the very years of life now considered the best ones. By fifty, menopause will most likely arrive, after which childbearing will in general become impossible. In other words, there is only a very small window in which children can be had, and every day that passes increases the psychological pressure.',
                notes: [
                  {
                    id: 'maternal-risk-30-35',
                    url: 'https://www.healthline.com/health/womens-health/childbearing-age'
                  },
                  {
                    id: 'maternal-risk-45',
                    url: 'https://www.cdc.gov/nchs/data/hestat/maternal-mortality/2023/maternal-mortality-rates-2023.htm#:~:text=Rates%20in%202023%20were%2012.5%20deaths%20per,rates%20between%20age%20groups%20were%20statistically%20significant.'
                  }
                ]
              },
              {
                type: 'paragraph',
                text: 'Now imagine an eternally young woman whose risk of pregnancy complications never rises. She could be fertile when she wants and for as long as she wants. Already now, medicine allows menstruation to be noticeably suppressed or stopped for a time, with the possibility of later returning to the ordinary state without worsening one\'s chances of healthy pregnancy and childbirth.'
              },
              {
                type: 'paragraph',
                text: 'This field is in general extremely interesting in terms of promising research. As one example, scientists are already studying the production of egg cells from ordinary somatic cells.'
              },
              {
                type: 'paragraph',
                text: 'With the development of more complete control over reproductive function, people may gain almost absolute control over family planning. Birth rates could become a far more predictable and manageable variable than they are now. This is yet another argument for why critical overpopulation should not be treated as the most likely scenario.'
              },
              {
                type: 'paragraph',
                text: 'Even if radical longevity one day requires restrictions on births, that would still be incomparably more humane than regulating population through universal frailty, cancer, dementia, heart failure, and death from aging.'
              },
              {
                type: 'paragraph',
                text: 'Between the two mechanisms of regulation, reduced birth rates and the forcible maintenance of high mortality from aging, the second is morally far worse.'
              }
            ]
          },
          {
            id: 'overpopulation-06',
            title: 'The burden of old age',
            blocks: [
              {
                type: 'paragraph',
                text: 'The population of the Earth is aging. The number of elderly people grows year by year. They have to be supported, their medical care has to be paid for, and there is not always enough young labor to support that.'
              },
              {
                type: 'paragraph',
                text: 'According to the OECD, the average share of the population aged sixty-five and over had already risen to 18.5 percent in 2023.[[note:oecd-aging-share]] The old-age dependency ratio in the OECD, the number of people sixty-five and over per one hundred people aged twenty to sixty-four, is 33 in 2025. In developed countries these indicators are even higher.[[note:un-aging-developed]] Japan, for instance, is the "oldest" OECD country: 29 percent of its population is sixty-five or older, and its old-age dependency ratio is 54.9 elderly people per one hundred people aged twenty to sixty-four.',
                notes: [
                  {
                    id: 'oecd-aging-share',
                    url: 'https://www.oecd.org/en/publications/health-at-a-glance-2025_8f9e3f98-en/full-report/demographic-trends_257a22c9.html'
                  },
                  {
                    id: 'un-aging-developed',
                    url: 'https://www.un.org/development/desa/pd/sites/www.un.org.development.desa.pd/files/undesa_pd_2024_wpa2023-report.pdf'
                  }
                ]
              },
              {
                type: 'paragraph',
                text: 'If we look at the share of total government expenditure, public pensions account on average in the OECD for 18 percent of total government spending.[[note:oecd-pensions-share]] Healthcare accounts for another 15.1 percent in 2023.[[note:oecd-healthcare-share]] The greater part of healthcare spending falls specifically on older people. In the EU, almost half of all social spending already goes to old age and survivor pensions.',
                notes: [
                  {
                    id: 'oecd-pensions-share',
                    url: 'https://www.oecd.org/en/publications/pensions-at-a-glance-2025_e40274c1-en.html'
                  },
                  {
                    id: 'oecd-healthcare-share',
                    url: 'https://www.oecd.org/content/dam/oecd/en/publications/reports/2024/06/society-at-a-glance-2024_08001b73/918d8db3-en.pdf'
                  }
                ]
              },
              {
                type: 'paragraph',
                text: 'In other words, governments spend almost a third of their budgets on problems caused by aging, yet they are in no hurry to spend even 1 percent on fighting aging itself.'
              },
              {
                type: 'paragraph',
                text: 'By working on rejuvenation and the halting of aging, we could achieve a world in which people never become old, but always remain young and capable of work, while those who have already suffered the misfortune of old age could, thanks to the latest rejuvenation methods, regain their health and strength and once again become capable of work.'
              }
            ]
          }
        ]
      },
      {
        id: 's5',
        label: 'Conclusion',
        tocLabel: 'Conclusion',
        items: [
          {
            id: 'conclusion-01',
            title: 'The Myth of Immortality',
            blocks: [
              {
                type: 'paragraph',
                text: 'Life, death, and immortality are profoundly important themes in the culture of any people. Whoever you are, these themes concern you throughout your life, and you certainly have some philosophical or quasi-philosophical views about them, even if you have never truly thought about them.'
              },
              {
                type: 'paragraph',
                text: 'Especially if you have never truly thought about them.'
              },
              {
                type: 'paragraph',
                text: 'Most likely, the decision was made for you. And that decision is this: "Death is good; death gives meaning. Immortality is the lot of the damned, a naive dream that must be abandoned as quickly as possible."'
              },
              {
                type: 'paragraph',
                text: 'It may also include something like: "Immortality is a sign of greed, of ingratitude for the miracle of life. And death is an inseparable part of that life."'
              },
              {
                type: 'paragraph',
                text: 'People are often so deeply convinced of the truth of these phrases that it becomes absurdly funny and tragic at once. One gets the impression that humanity has already encountered immortality and that it truly led to something dreadful, so dreadful that it left a trauma echoing through thousands of generations.'
              },
              {
                type: 'paragraph',
                text: 'Yet in reality we have never encountered immortality. We have never lived forever, and we have not even lived long. People live longer now than at any moment in the past, and yet many hate the idea of immortality just as much as when it really was only a naive dream and nothing more. Now, however, immortality is a technical task, and people need to begin changing their attitude toward it.'
              },
              {
                type: 'paragraph',
                text: 'Note that there exists almost no well-known work of fiction in which immortality is shown as something good, worthy, or still more beautiful.'
              },
              {
                type: 'paragraph',
                text: 'Writers and directors may glorify or justify murder, violence, suicide, famous villains, but almost never life extension. Just notice how astonishing that pattern is. Anything may be good, except a life of ten thousand years. A mass murderer may be good, but eternal youth may not.'
              },
              {
                type: 'paragraph',
                text: 'But the answer to this disturbing strangeness seems to lie on the surface. In a sense, Aesop found the reason for hatred of immortality many thousands of years ago in his famous fable:'
              },
              {
                type: 'quote',
                text: 'There once was a fox who saw juicy clusters of grapes hanging from a vine beyond his reach. However hard he tried, he could not get to them. So he gave up and, as he walked away, said: "Those grapes are probably sour anyway."'
              },
              {
                type: 'paragraph',
                text: 'This fable seems to explain the constant attempts people make to find some defect in immortality. It reaches the point of a learned reflex, where the very discussion of immortality automatically provokes disgust, indignation, anger. I have seen this more than once while speaking about immortalism and transhumanism.'
              },
              {
                type: 'paragraph',
                text: 'Let me quote a random internet user:'
              },
              {
                type: 'quote',
                text: 'I never cease to be amazed at the tricks writers resort to in order to make eternal youth somehow seem like something bad, something only bad people would want.'
              },
              {
                type: 'paragraph',
                text: 'Exactly so. Someone wants immortality, and it will almost certainly turn out to be inseparably tied to some horrifying condition, for example that one must kill for it, drink the blood of virgins, or split one\'s soul into tiny pieces and become some immoral snake-like monstrosity. If immortality was desired by a villain, he dies in torment; if it was desired by a hero, he realizes the whole idea was foolish, accepts death, and dies of old age with a smile on his face.'
              },
              {
                type: 'paragraph',
                text: '(Most likely they mistook the smile for a grimace of arthritic pain. Or else it was facial distortion during a stroke.)'
              },
              {
                type: 'paragraph',
                text: 'I regard such stories as a manifestation of the author\'s furious ignorance. At the very least, such plots may be very harmful in the twenty-first century, when it is in our hands to cast aging down into the past forever.'
              },
              {
                type: 'paragraph',
                text: 'Yes, in earlier times people really had to reconcile themselves to their fate. Science was not developed, magic obviously did not help, and experiments could easily make things worse. We tried to find the philosopher\'s stone and the magic elixir, to no avail. Chinese emperors sought peaches of immortality, islands where people lived forever, and consumed mercury and other metals, only to die of poisoning in the end.'
              },
              {
                type: 'paragraph',
                text: 'Of course, after so many failed attempts, one wants to console oneself. One wants to say that death gives meaning, that it is not so bad, that in general it is even desirable.'
              },
              {
                type: 'paragraph',
                text: '"And anyway, everyone who does not want to die is an idiot. They are just afraid, that is all!"'
              },
              {
                type: 'paragraph',
                text: 'But the time for self-consolation is over. We strive to stand on equal terms with nature, to stop suffering the torments it has unfailingly brought us since the dawn of the human race. We can change the state of affairs through technology, so let us do so, just as we have done many times before.'
              },
              {
                type: 'paragraph',
                text: 'Let us overcome our nature just as we once learned to fly. That too was considered utterly impossible: Lord Kelvin declared that people would never make any heavier-than-air machine fly.'
              },
              {
                type: 'paragraph',
                text: 'He said this even though nature already contained organisms capable of flight. Likewise, even now there exist organisms that do not suffer aging, or even possess the potential to live forever.'
              },
              {
                type: 'paragraph',
                text: 'And if we understood flight and rose to the clouds, and later went beyond them and stepped upon the surface of a distant celestial body, then what, other than our own misconceptions, stands in our way from the noble goal of allowing people to live for as long as they themselves wish?'
              },
              {
                type: 'paragraph',
                text: 'To live without bearing the burdens of disease and old age. Without grieving as the lives of loved ones slowly fade away.'
              },
              {
                type: 'paragraph',
                text: 'Let us do it, then. Let us do the impossible.'
              },
              {
                type: 'paragraph',
                text: 'Or rather, what only seemed impossible to us.'
              }
            ]
          }
        ]
      }
    ],
    resources: [
      {
        type: 'Book',
        title: '"Ageless"',
        description: 'One of the best introductions to life extension.',
        author: 'Andrew Steele'
      },
      {
        type: 'Book',
        title: '"Immortality or Death"',
        description: 'A modern book by a well-known science popularizer.',
        author: 'Alexander Panchin'
      },
      {
        type: 'Blog post',
        title: 'Yehuda',
        description: 'A heartbreaking post by Eliezer Yudkowsky.',
        url: 'https://www.yudkowsky.net/other/yehuda'
      }
    ]
  };
})();
