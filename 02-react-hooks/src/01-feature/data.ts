export type Card = {
  id: string
  topic: 'dog' | 'cat' | 'caterpillar'
  title: string
  description: string
  background: string
  isFavorite: boolean
}

export const cards: Card[] = [
  {
    id: 'dog-1',
    topic: 'dog',
    title: 'The Joy of Owning a Dog',
    description:
      'Discover the happiness and companionship that comes with owning a dog.',
    background: 'linear-gradient(90deg, #b07ccf 0%, #2f568c 100%)',
    isFavorite: false,
  },
  {
    id: 'cat-1',
    topic: 'cat',
    title: 'Caring for Your Feline Friend',
    description:
      'Learn how to provide the best care for your beloved cat (not caterpillar).',
    background: 'linear-gradient(90deg, #a017cf 0%, #c0553c 100%)',
    isFavorite: false,
  },
  {
    id: 'caterpillar-1',
    topic: 'caterpillar',
    title: 'The Fascinating World of Caterpillars',
    description:
      'Explore the incredible transformation of caterpillars into beautiful butterflies.',
    background: 'linear-gradient(90deg, #d98976 0%, #3a2f61 100%)',
    isFavorite: false,
  },
  {
    id: 'dog-2',
    topic: 'dog',
    title: 'Training Your Dog: Tips and Tricks',
    description:
      'Discover effective techniques to train your dog and build a strong bond.',
    background: 'linear-gradient(90deg, #5f0031 0%, #7b0014 100%)',
    isFavorite: false,
  },
  {
    id: 'cat-2',
    topic: 'cat',
    title: 'Cat Breeds: Choosing the Perfect Companion',
    description:
      'Find the ideal cat breed that matches your lifestyle and personality.',
    background: 'linear-gradient(90deg, #a11fcf 0%, #7b51c6 100%)',
    isFavorite: false,
  },
  {
    id: 'caterpillar-2',
    topic: 'caterpillar',
    title: 'The Life Cycle of a Butterfly',
    description:
      "Learn about the stages of a butterfly's life and its importance in nature.",
    background: 'linear-gradient(90deg, #1737d4 0%, #2f2f73 100%)',
    isFavorite: false,
  },
]
