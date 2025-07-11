export const cases = [
  {
    id: '1',
    title: 'The Disappearing Artifact',
    description: 'A priceless relic vanishes from the museum floor.',
    clues: [
      { id: 'c1', title: 'Security Footage', image: '/clues/footage.jpg' },
      { id: 'c2', title: 'Fiber Sample', image: '/clues/fiber.jpg' }
    ],
    suspects: [
      { id: 's1', name: 'Dr. Ellis', role: 'Curator' },
      { id: 's2', name: 'Morgan', role: 'Janitor' }
    ],
    solution: 'The artifact was smuggled out in the janitor cart.'
  }
];
