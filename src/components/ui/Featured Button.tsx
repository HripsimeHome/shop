import { cn } from "@/lib/utils";

type FeaturedButtonProps = {
  featured: boolean;
};

export default function FeaturedButton({
  featured = false,
}: FeaturedButtonProps) {
  return (
    <button
      className={cn(
        "w-full rounded-[14px] border p-[18px] bg-[#d0fb99]", //green
        featured && "border-[#dbec62] bg-[#142556] text-white" , // dark blue
        "md:p-[22px]",
      )}
    >
      featured
    </button>
  );
}
