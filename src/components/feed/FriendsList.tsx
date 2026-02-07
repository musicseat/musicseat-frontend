import { Avatar } from '@/components/ui/Avatar';
import type { Friend } from '@/types';

const friends: Friend[] = [
  { id: '1', name: 'Jak Lozano', avatar: 'https://i.pravatar.cc/150?img=15', isOnline: true },
  { id: '2', name: 'Vanessa Mccann', avatar: 'https://i.pravatar.cc/150?img=16', isOnline: true },
  { id: '3', name: 'Abbie and 109 others', avatar: 'https://i.pravatar.cc/150?img=17', isOnline: false },
  { id: '4', name: 'Samson Clay', avatar: 'https://i.pravatar.cc/150?img=18', isOnline: true },
];

export function FriendsList() {
  return (
    <div className="card mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-h3 text-[var(--color-neutral-50)]">Contacts</h3>
        <button className="text-body-sm text-[var(--color-primary-cyan)] hover:underline">
          View All
        </button>
      </div>
      
      <div className="space-y-3">
        {friends.map((friend) => (
          <button
            key={friend.id}
            className="flex items-center gap-3 w-full p-2 rounded-[var(--radius-input)] hover:bg-[var(--color-neutral-600)] transition-colors"
          >
            <div className="relative">
              <Avatar src={friend.avatar} alt={friend.name} size="sm" />
              {friend.isOnline && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[var(--color-primary-lime)] border-2 border-[var(--color-neutral-700)] rounded-full" />
              )}
            </div>
            <span className="text-body-sm text-[var(--color-neutral-200)] text-left flex-1">
              {friend.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
