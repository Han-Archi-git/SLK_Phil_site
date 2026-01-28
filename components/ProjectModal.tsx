import React from 'react';
import { X, ExternalLink, Calendar, Tag } from 'lucide-react';
import { BlogPost } from '../types';

interface ProjectModalProps {
    post: BlogPost | null;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ post, onClose }) => {
    if (!post) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 md:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-6xl max-h-[100dvh] md:max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:rounded-lg overflow-hidden">

                {/* Close Button (Floating) */}
                <button
                    onClick={onClose}
                    className="fixed top-4 right-4 md:absolute md:top-6 md:right-6 z-50 bg-black/50 hover:bg-black text-white p-2 rounded-full backdrop-blur-md transition-all"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col md:flex-row h-full">
                    {/* Left: Images */}
                    <div className="w-full md:w-3/5 bg-neutral-100">
                        <div className="flex flex-col gap-1">
                            {/* Main Image */}
                            <img
                                src={post.thumbnailUrl}
                                alt={post.title}
                                referrerPolicy="no-referrer"
                                className="w-full h-auto object-cover"
                            />
                            {/* Additional Images */}
                            {post.images && post.images.length > 1 && (
                                post.images.slice(1).map((img, idx) => (
                                    <img key={idx} src={img} alt={`${post.title} detail ${idx + 1}`} referrerPolicy="no-referrer" className="w-full h-auto object-cover" />
                                ))
                            )}
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-2/5 p-8 md:p-12 bg-white flex flex-col">
                        <div className="mb-8">
                            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {post.date}
                                </span>
                                <span className="w-px h-3 bg-neutral-300"></span>
                                <span className="text-black">{post.category}</span>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 leading-tight">
                                {post.title}
                            </h2>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {post.tags.map(tag => (
                                    <span key={tag} className="flex items-center gap-1 px-3 py-1 bg-neutral-100 text-neutral-600 text-[10px] font-bold uppercase tracking-wider">
                                        <Tag className="w-3 h-3" />
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="prose prose-sm prose-neutral max-w-none text-neutral-600 leading-relaxed mb-12">
                                {/* Render HTML content safely */}
                                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                            </div>
                        </div>

                        <div className="mt-auto pt-8 border-t border-neutral-100">
                            <a
                                href={post.naverUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black hover:text-neutral-600 transition-colors group border-b border-black pb-1 hover:border-neutral-600"
                            >
                                <span>View Full Post on Naver Blog</span>
                                <ExternalLink className="w-3 h-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;