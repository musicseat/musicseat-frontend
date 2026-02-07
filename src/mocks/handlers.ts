import type { Comment, Post, User } from '@/types';
import { http, HttpResponse } from 'msw';

// Mock users
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Luna Vox',
    username: '@lunavox_official',
    avatar: 'https://i.pravatar.cc/150?img=5',
    bio: 'Singer-songwriter | New album "Starlight" out now! 🎵✨',
    followers: 1250400,
    following: 150,
    postsCount: 1240,
  },
  {
    id: '2',
    name: 'Marcus Bass',
    username: '@marcus_groove',
    avatar: 'https://i.pravatar.cc/150?img=11',
    bio: 'Jazz Bassist | Composer | Session Musician 🎸 Find me on tour.',
    followers: 45200,
    following: 890,
    postsCount: 542,
  },
  {
    id: '3',
    name: 'DJ Echo',
    username: '@dj_echo_beats',
    avatar: 'https://i.pravatar.cc/150?img=3',
    bio: 'Electronic Music Producer 🎧 | Bringing the underground to your ears.',
    followers: 89300,
    following: 1200,
    postsCount: 368,
  },
  {
    id: '4',
    name: 'Elena Strings',
    username: '@elenastrings',
    avatar: 'https://i.pravatar.cc/150?img=47',
    bio: 'Classical Violinist | Teaching & Performing 🎻 | Passion for Bach.',
    followers: 128900,
    following: 320,
    postsCount: 189,
  }
];

// Mock comments
const mockComments: Comment[] = [
  {
    id: 'c1',
    author: mockUsers[2], // DJ Echo
    content: 'Essa produção está absurda! Que timbragem é essa? 🔥',
    createdAt: '2026-02-06T12:30:00Z',
  },
  {
    id: 'c2',
    author: mockUsers[3], // Elena Strings
    content: 'A harmonia dessa composição ficou impecável. Parabéns! 🎻✨',
    createdAt: '2026-02-06T13:15:00Z',
  },
  {
    id: 'c3',
    author: mockUsers[0], // Luna Vox
    content: 'Já quero fazer um feat! Me manda essa demo por DM? 🎤🎶',
    createdAt: '2026-02-06T14:45:00Z',
  },
  {
    id: 'c4',
    author: mockUsers[1], // Marcus Bass
    content: 'O groove do baixo no segundo refrão é de outro planeta. Sensacional! 🎸🤘',
    createdAt: '2026-02-06T15:20:00Z',
  },
  {
    id: 'c5',
    author: mockUsers[2], // DJ Echo
    content: 'Aumenta o volume que lá vem pedrada! 🔊🙌',
    createdAt: '2026-02-06T16:05:00Z',
  }
];

// Mock posts
const mockPosts: Post[] = [
  {
    id: 'p1',
    author: mockUsers[1], // Marcus Bass
    content: 'O ensaio de hoje rendeu! Testando novos pedais para a turnê de inverno. O som do baixo está ganhando uma textura incrível... ler mais',
    image: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=800&h=600&fit=crop', // Pedalboard/Guitarra
    likes: 3200,
    comments: mockComments,
    shares: 120,
    createdAt: '2026-02-06T09:21:00Z',
    isLiked: false,
  },
  {
    id: 'p2',
    author: mockUsers[2], // DJ Echo
    content: 'Setlist pronto para o festival deste final de semana! Preparem os ouvidos para muito grave e sintetizadores modulares. 🎧🔥',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop', // Equipamento de DJ/Mesa
    likes: 4500,
    comments: [mockComments[0], mockComments[4]],
    shares: 890,
    createdAt: '2026-02-06T11:45:00Z',
    isLiked: true,
  },
  {
    id: 'p3',
    author: mockUsers[3], // Elena Strings
    content: 'A acústica deste teatro é simplesmente divina. Praticando os últimos movimentos do concerto de amanhã. 🎻🏛️',
    image: 'https://images.unsplash.com/photo-1624367171718-14026220ee35?q=80&w=687&auto=format&fit=crop', // Violino/Concerto
    likes: 1234,
    comments: [mockComments[1]],
    shares: 156,
    createdAt: '2026-02-06T08:30:00Z',
    isLiked: true,
  },
  {
    id: 'p4',
    author: mockUsers[0], // Luna Vox
    content: 'Escrever música é transformar silêncio em sentimento. Grata por cada um de vocês que ouviu meu novo single hoje! 🎤✨',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=600&fit=crop', // Cantora no microfone
    likes: 15400,
    comments: [mockComments[2]],
    shares: 2300,
    createdAt: '2026-02-05T16:20:00Z',
    isLiked: false,
  },
  {
    id: 'p5',
    author: mockUsers[1], // Marcus Bass
    content: 'Aquecimento rápido antes de subir ao palco. A energia da galera de SP é diferente! 🎸🇧🇷',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&h=600&fit=crop', // Bastidores/Palco
    likes: 2100,
    comments: [],
    shares: 45,
    createdAt: '2026-02-06T20:10:00Z',
    isLiked: false,
  },
  {
    id: 'p6',
    author: mockUsers[2], // DJ Echo
    content: 'Noite produtiva no estúdio! 🎚️ Testando o novo sintetizador analógico. A vibe está bem dark techno. O que vocês acham dessa sequência?',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=600&fit=crop', // Estúdio/Sintetizador
    likes: 5600,
    comments: [],
    shares: 412,
    createdAt: '2026-02-06T22:15:00Z',
    isLiked: false,
  },
  {
    id: 'p7',
    author: mockUsers[3], // Elena Strings
    content: 'Ensinar é aprender duas vezes. Hoje o workshop de violino foi sobre técnica de vibrato. Ver a evolução dos alunos não tem preço! 🎻📚',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop', // Sala de música/Partitura
    likes: 3100,
    comments: [],
    shares: 89,
    createdAt: '2026-02-06T18:30:00Z',
    isLiked: false,
  },
  {
    id: 'p8',
    author: mockUsers[0], // Luna Vox
    content: 'Aeroporto, café e sono acumulado. A "Starlight Tour" continua e a próxima parada é Londres! See you soon ✈️🇬🇧🎤',
    image: 'https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=800&h=600&fit=crop', // Lifestyle/Café/Viagem
    likes: 28400,
    comments: [],
    shares: 1540,
    createdAt: '2026-02-07T06:10:00Z',
    isLiked: true,
  },
  {
    id: 'p9',
    author: mockUsers[1], // Marcus Bass
    content: 'Aquele momento clássico de trocar as cordas antes do show. Quem mais sente que o timbre muda completamente? 🎸⚡',
    image: 'https://images.unsplash.com/photo-1550985616-10810253b84d?w=800&h=600&fit=crop', // Detalhe de cordas/Guitarra
    likes: 1890,
    comments: [],
    shares: 22,
    createdAt: '2026-02-07T09:45:00Z',
    isLiked: false,
  }
];

export const handlers = [
  // Get feed
  http.get('/api/feed', () => {
    return HttpResponse.json(mockPosts);
  }),

  // Get user profile
  http.get('/api/users/:id', ({ params }) => {
    const { id } = params;
    const user = mockUsers.find((u) => u.id === id);
    if (!user) {
      return new HttpResponse(null, { status: 404 });
    }
    return HttpResponse.json(user);
  }),

  // Get user posts
  http.get('/api/users/:id/posts', ({ params }) => {
    const { id } = params;
    const userPosts = mockPosts.filter((p) => p.author.id === id);
    return HttpResponse.json(userPosts);
  }),

  // Like post
  http.post('/api/posts/:id/like', ({ params }) => {
    const { id } = params;
    const post = mockPosts.find((p) => p.id === id);
    
    if (!post) {
      return new HttpResponse(null, { status: 404 });
    }

    if(post.isLiked) {
      post.likes -= 1;
      post.isLiked = false;

    } else {
      post.likes += 1;
      post.isLiked = true;
    }

    
    return HttpResponse.json({ likes: post.likes });
  }),

  // Comment on post
  http.post('/api/posts/:id/comment', async ({ params, request }) => {
    const { id } = params;
    const body = await request.json() as { content: string };
    const post = mockPosts.find((p) => p.id === id);
    if (!post) {
      return new HttpResponse(null, { status: 404 });
    }

    const newComment: Comment = {
      id: `c${Date.now()}`,
      author: mockUsers[0], // Current user
      content: body.content,
      createdAt: new Date().toISOString(),
    };

    post.comments.push(newComment);
    return HttpResponse.json(post);
  }),

  // Share post
  http.post('/api/posts/:id/share', ({ params }) => {
    const { id } = params;
    const post = mockPosts.find((p) => p.id === id);
    if (!post) {
      return new HttpResponse(null, { status: 404 });
    }
    post.shares += 1;
    return HttpResponse.json({ shares: post.shares });
  }),
];
