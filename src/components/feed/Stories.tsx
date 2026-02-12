'use client';

import { Avatar } from '@/components/ui/Avatar';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const stories = [
  { id: '1', user: 'Stephen', avatar: 'https://i.pravatar.cc/150?img=11' },
  { id: '2', user: 'Edgar', avatar: 'https://i.pravatar.cc/150?img=12' },
  { id: '3', user: 'Joyce', avatar: 'https://i.pravatar.cc/150?img=5' },
  { id: '4', user: 'Minnie', avatar: 'https://i.pravatar.cc/150?img=9' },
  { id: '5', user: 'Leon', avatar: 'https://i.pravatar.cc/150?img=13' },
  { id: '6', user: 'Jordan', avatar: 'https://i.pravatar.cc/150?img=14' },
  { id: '7', user: 'Mike', avatar: 'https://i.pravatar.cc/150?img=8' },
];

export function Stories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="card mb-6">
      <h3 className="text-h3 mb-4 text-neutral-50">Stories</h3>
      
      <div className="relative group/container">
        {/* Left Button */}
        <button 
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-neutral-700/80 p-1 rounded-full shadow-medium opacity-0 group-hover/container:opacity-100 transition-opacity hover:bg-neutral-600"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-neutral-50" />
        </button>
        
        {/* Stories List */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-2 py-1"
        >
          {stories.map((story) => (
            <button
              key={story.id}
              className="flex flex-col items-center gap-2 min-w-fit group"
            >
              {/* Avatar Container with Gradient Border */}
              <div className="p-[2.5px] rounded-full bg-brand-gradient hover:scale-110 shadow-lg glow-pink transition-transform duration-300">
                <div className="bg-neutral-800 rounded-full p-[2px]">
                  <Avatar src={story.avatar} alt={story.user} size="md" className="ring-2 ring-black/20" />
                </div>
              </div>
              
              <span className="text-caption text-neutral-300 group-hover:text-neutral-50 transition-colors">
                {story.user}
              </span>
            </button>
          ))}
        </div>

        {/* Right Button */}
        <button 
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-neutral-700/80 p-1 rounded-full shadow-medium opacity-0 group-hover/container:opacity-100 transition-opacity hover:bg-neutral-600"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-neutral-50" />
        </button>
      </div>
    </div>
  );
}
