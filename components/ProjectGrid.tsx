
import React, { useState, useMemo, useEffect } from 'react';
import { BlogPost, ProjectCategory } from '../types';
import { ArrowUpRight, Plus } from 'lucide-react';

interface ProjectGridProps {
  posts: BlogPost[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ posts }) => {
  const [filter, setFilter] = useState<ProjectCategory | 'ALL'>('ALL');
  // Set initial count to 6 for a balanced grid (3 rows on mobile, 2 rows on tablet, 1+ on desktop)
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = ['ALL', ...Object.values(ProjectCategory)];

  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(6);
  }, [filter]);

  // Sort by Date (Newest first) and Filter
  const sortedAndFilteredPosts = useMemo(() => {
    const sorted = [...posts].sort((a, b) => {
      // Replace dots with dashes for better date parsing compatibility
      const dateA = new Date(a.date.replace(/\./g, '-')).getTime();
      const dateB = new Date(b.date.replace(/\./g, '-')).getTime();
      return dateB - dateA; // Descending order
    });

    if (filter === 'ALL') {
      return sorted;
    }
    return sorted.filter(post => post.category === filter);
  }, [posts, filter]);

  const visiblePosts = sortedAndFilteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < sortedAndFilteredPosts.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6); // Load 6 more
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 uppercase tracking-tight">PROJECT</h2>
            <p className="text-neutral-500 max-w-xl text-xs md:text-sm">
              계획안부터 완공까지, (주)SLK & (주)PhilArt의 건축 여정을 최신순으로 소개합니다.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as ProjectCategory | 'ALL')}
                className={`px-3 md:px-5 py-1.5 md:py-2 text-[10px] md:text-xs font-bold uppercase tracking-wider border transition-all ${filter === cat
                  ? 'bg-black text-white border-black'
                  : 'bg-transparent text-neutral-400 border-neutral-200 hover:border-black hover:text-black'
                  }`}
              >
                {cat === 'ALL' ? 'ALL' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid: 2 columns on mobile, 3 on tablet, 5 on large screens */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {visiblePosts.map((post) => (
            <a
              key={post.id}
              href={post.naverUrl}
              target="_blank"
              rel="noreferrer"
              className="group bg-white cursor-pointer overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
            >
              {/* Thumbnail Image */}
              <div className="relative h-36 md:h-48 overflow-hidden bg-neutral-200">
                <img
                  src={post.thumbnailUrl}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-0 left-0 bg-black text-white text-[8px] md:text-[9px] font-bold px-1.5 md:px-2 py-0.5 md:py-1 uppercase tracking-wider">
                  {post.category}
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="rounded-full bg-white p-1.5 md:p-2 text-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                </div>
              </div>

              {/* Content Info */}
              <div className="p-3 md:p-4 flex flex-col flex-grow">
                <div className="flex gap-1 mb-1.5 md:mb-2">
                  {post.tags.slice(0, 1).map(tag => (
                    <span key={tag} className="text-[8px] md:text-[9px] uppercase font-medium text-neutral-400 border border-neutral-100 px-1 md:px-1.5 py-0.5">#{tag}</span>
                  ))}
                </div>
                <h3 className="text-xs md:text-sm font-bold text-black mb-1.5 md:mb-2 group-hover:text-neutral-600 transition-colors line-clamp-2 leading-tight min-h-[2rem] md:min-h-[2.5rem]">
                  {post.title}
                </h3>
                <p className="hidden md:line-clamp-2 text-neutral-500 text-[10px] mb-3 flex-grow leading-relaxed">
                  {post.summary}
                </p>
                <div className="pt-2 border-t border-neutral-100 flex justify-between items-center text-[8px] md:text-[9px] text-neutral-400 uppercase tracking-wider">
                  <span>{post.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-12 md:mt-16 text-center">
            <button
              onClick={handleLoadMore}
              className="group inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-white border border-neutral-200 text-black text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition-all"
            >
              <span>View More</span>
              <Plus className="w-3 h-3 md:w-4 md:h-4 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGrid;
