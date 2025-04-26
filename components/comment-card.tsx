import { Star } from "lucide-react";
import Image from "next/image";

interface CommentCardProps {
  id: number;
  name: string;
  gender: string;
  body: string;
}

const CommentCard: React.FC<CommentCardProps> = ({
  id,
  name,
  gender,
  body,
}) => {
  return (
    <div className="h-full w-full divide-y rounded-lg px-6 py-4">
      <div className="flex flex-col items-center text-center">
        <Image
          src={`https://randomuser.me/api/portraits/thumb/${gender}/${id}.jpg`}
          alt={name}
          width={50}
          height={50}
          className="aspect-square h-10 w-10 rounded-full object-cover shadow"
        />
        <span className="mt-4 font-display font-semibold text-primary-foreground">
          {name}
        </span>
        <div className="flex gap-0.5">
          <Star className="h-4 w-4 text-yellow-500" />
          <Star className="h-4 w-4 text-yellow-500" />
          <Star className="h-4 w-4 text-yellow-500" />
          <Star className="h-4 w-4 text-yellow-500" />
          <Star className="h-4 w-4 text-yellow-500" />
        </div>
        <p className="mt-4">{body}</p>
      </div>
    </div>
  );
};

export default CommentCard;
