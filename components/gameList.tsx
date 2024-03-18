import { Game } from "@/types";
import GameCard from "@/components/gameCard";

type Props = {
    games: Game[]
}

const GameList = ({ games }: Props) => {

    return (
        <div className="grid grid-cols-1 gap-20 px-16 mt-24 sm:grid-cols-2 md:grid-cols-3"
        >
            {games.map((game: Game) => (
                <GameCard key={game.id} game={game} />
            )) }
        </div>
    );
};

export default GameList;