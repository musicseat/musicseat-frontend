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
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-h3 text-[var(--color-neutral-50)]">Messages</h3>
        <button className="text-body-sm text-[var(--color-primary-cyan)] hover:underline">
          See all
        </button>
      </div>
      
      <div className="space-y-2">
        {messages.map((msg) => (
          <button
            key={msg.id}
            className="flex items-center gap-3 w-full p-3 rounded-[var(--radius-input)] hover:bg-[var(--color-neutral-600)] transition-colors"
          >
            <div className="relative">
              <Avatar src={msg.user.avatar} alt={msg.user.name} size="sm" />
              {msg.unread && (
                <span className="absolute top-0 right-0 w-2 h-2 bg-[var(--color-primary-cyan)] rounded-full" />
              )}
            </div>
            <div className="flex-1 text-left">
              <p className="text-body-sm font-semibold text-[var(--color-neutral-50)]">
                {msg.user.name}
              </p>
              <p className="text-caption text-[var(--color-neutral-400)] truncate">
                {msg.message}
              </p>
            </div>
            <span className="text-caption text-[var(--color-neutral-400)]">
              {msg.timestamp}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
