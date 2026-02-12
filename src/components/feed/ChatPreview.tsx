import { Avatar } from '@/components/ui/Avatar';
import type { ChatMessage } from '@/types';

const messages: ChatMessage[] = [
  {
    id: '1',
    user: {
      id: '2',
      name: 'Julio Mendez',
      username: '@julio',
      avatar: 'https://i.pravatar.cc/150?img=19',
      bio: '',
      followers: 0,
      following: 0,
      postsCount: 0,
    },
    message: 'Memphis, US',
    timestamp: '2h ago',
    unread: true,
  },
  {
    id: '2',
    user: {
      id: '3',
      name: 'Johnathan Hartley',
      username: '@john',
      avatar: 'https://i.pravatar.cc/150?img=20',
      bio: '',
      followers: 0,
      following: 0,
      postsCount: 0,
    },
    message: 'Newark, US',
    timestamp: '5h ago',
    unread: true,
  },
  {
    id: '3',
    user: {
      id: '4',
      name: 'Maximus Mckay',
      username: '@max',
      avatar: 'https://i.pravatar.cc/150?img=21',
      bio: '',
      followers: 0,
      following: 0,
      postsCount: 0,
    },
    message: 'Fort Worth, TX US',
    timestamp: '1d ago',
    unread: false,
  },
];

export function ChatPreview() {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-h3 text-neutral-50 font-bold">Messages</h3>
        <button className="text-caption text-primary-cyan font-bold uppercase tracking-wider hover:underline">
          See all
        </button>
      </div>
      
      <div className="space-y-3">
        {messages.map((msg) => (
          <button
            key={msg.id}
            className="flex items-center gap-4 w-full p-3 rounded-input hover:bg-white/5 transition-all duration-300 group"
          >
            <div className="relative">
              <Avatar src={msg.user.avatar} alt={msg.user.name} size="sm" className="group-hover:ring-2 ring-primary-cyan/30 transition-all" />
              {msg.unread && (
                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-primary-cyan rounded-full shadow-[0_0_8px_rgba(0,255,241,0.6)] animate-pulse" />
              )}
            </div>
            <div className="flex-1 text-left">
              <p className="text-body-sm font-bold text-neutral-50 group-hover:text-primary-cyan transition-colors">
                {msg.user.name}
              </p>
              <p className="text-caption text-neutral-400 truncate font-medium">
                {msg.message}
              </p>
            </div>
            <span className="text-[10px] text-neutral-500 font-mono">
              {msg.timestamp}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
