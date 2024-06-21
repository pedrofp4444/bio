import { motion } from "framer-motion";
import Link from "next/link";

export interface BlogCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  author: string;
}

export default function BlogCard(props: BlogCardProps) {
  return (
    <Link href={`/blog/${props.id}`} passHref>
      <motion.div
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{
          type: "spring",
          duration: 0.4,
        }}
        className="w-full overflow-hidden rounded-lg border border-accent/20 bg-background shadow-md transition-shadow duration-150 hover:shadow-md hover:shadow-accent/20 dark:bg-zinc-800 dark:hover:shadow-lg"
      >
        <div className="p-3 text-foreground sm:p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">{props.title}</span>
            <span className="text-xs text-accent">{props.date}</span>
          </div>
          <div className="mt-1 text-xs text-gray-500">{props.subtitle}</div>
          <div className="mt-3">
            <p className="text-xs md:text-sm">{props.description}</p>
          </div>
          <div className="mt-3 flex items-center">
            <span className="text-xs font-medium text-gray-600">
              {props.author}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
