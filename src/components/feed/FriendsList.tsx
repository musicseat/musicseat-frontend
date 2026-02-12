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
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-h3 text-neutral-50 font-bold">Contacts</h3>
        <button className="text-caption text-primary-cyan font-bold uppercase tracking-wider hover:underline">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {friends.map((friend) => (
          <button
            key={friend.id}
            className="flex items-center gap-4 w-full p-2.5 rounded-input hover:bg-white/5 transition-all duration-300 group"
          >
            <div className="relative">
              <Avatar src={friend.avatar} alt={friend.name} size="sm" className="group-hover:ring-2 ring-primary-cyan/30 transition-all" />
              {friend.isOnline && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-primary-lime border-2 border-neutral-800 rounded-full shadow-[0_0_10px_rgba(205,234,47,0.4)]" />
              )}
            </div>
            <span className="text-body-sm text-neutral-200 text-left flex-1 font-medium group-hover:text-neutral-50 transition-colors">
              {friend.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
