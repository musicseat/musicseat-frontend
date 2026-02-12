import { ChatPreview } from '@/components/feed/ChatPreview';
import { FriendsList } from '@/components/feed/FriendsList';
import { Stories } from '@/components/feed/Stories';

export function RightSidebar() {
  return (
    <aside className="hidden xl:flex fixed right-0 top-0 h-screen w-[340px] flex-col overflow-y-auto p-6 pb-20 scrollbar-hide glass border-l border-white/5 z-20">
      <Stories />
      <FriendsList />
      <ChatPreview />
    </aside>
  );
}
