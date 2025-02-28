import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  image: string;
  title: string;
  code: string;
  avatar: string;
}

export default function ProjectCard({
  image,
  title,
  code,
  avatar,
}: ProjectCardProps) {
  return (
    <div className="space-y-2">
      <div className="relative group">
        <img src={image} alt={title} className="w-full rounded-lg" />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xl font-bold">
          {title}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <img src={avatar} alt="Avatar" className="w-12 h-12 rounded-full" />
        <div className="flex-1">
          <p className="text-sm">{title}</p>
          <p className="text-sm text-gray-600">{code}</p>
        </div>
        <Button
          variant="outline"
          className="border-[#B87B44] text-[#B87B44] hover:bg-[#B87B44] hover:text-white"
        >
          Đặt lịch tư vấn
        </Button>
      </div>
    </div>
  );
}
