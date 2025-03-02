import { memo } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";

interface Props {
  title: string;
  author: string;
  onSelect: () => void;
}

const PostComponent = ({ title, author, onSelect }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title.substring(0, 20)}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          Автор: <span className="font-semibold">{author}</span>
        </p>
      </CardContent>
      <CardFooter className="justify-center">
        <Button size={"xs"} variant={"secondary"} onClick={onSelect}>
          Комментарии поста
        </Button>
      </CardFooter>
    </Card>
  );
};

export const Post = memo(PostComponent);
