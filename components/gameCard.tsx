import {Game} from "@/types";
import Link from "next/link";
import Image from "next/image";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

type Props = {
    game: Game
}

const GameCard = ({game}: Props) => {

    // @ts-ignore
    return (
        <Link key={game.slug} href="/games/[slug]" as={`/games/${game.slug}`}>
            <Card className="flex flex-col justify-between rounded-lg border-2 h-[100%]">
                <CardHeader>
                    <div className="aspect-square relative py-4">
                        <Image
                            alt={game.title}
                            src={game.image}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md transition-all duration-300 transform hover:scale-105"
                        />
                    </div>
                    <p className="font-bold">{game.title}</p>
                </CardHeader>

                <CardContent className="flex justify-between">
                    <Badge variant="outline">
                        {game.category.toUpperCase()}
                    </Badge>
                    <span className="text-slate-500">{game.price}</span>
                </CardContent>

                <CardFooter>
                    <div className="flex gap-2">
                        <div className="flex items-center gap-1">
                            <span className="text-slate-500">{game.caption}</span>
                        </div>
                        <div className="flex items-center gap-1">

                        </div>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
};

export default GameCard;