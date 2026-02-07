import { ChatPreview } from '@/components/feed/ChatPreview';
import { FriendsList } from '@/components/feed/FriendsList';
import { Stories } from '@/components/feed/Stories';

export function RightSidebar() {
  return (
    <aside className="sticky top-0 h-screen overflow-y-auto p-6 scrollbar-hide">
      <Stories />
      <FriendsList />
      <ChatPreview />
    </aside>
  );
}
