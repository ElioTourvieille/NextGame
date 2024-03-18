import {CarouselFilter} from "@/components/categoriesFilter";
import GameList from "@/components/gameList";
import { GAMES } from "@/utils/games";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {/* Filter Menu */}
            <CarouselFilter />

            {/* Game Cards */}
            <GameList games={GAMES} />
        </main>
    );
}
