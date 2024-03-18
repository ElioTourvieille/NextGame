import GameList from "@/components/gameList";
import {GAMES} from "@/utils/games";
import PageTitle from "@/components/pageTitle";

type Props = {
    params: {
        slug: string;
    };
}

export default function CategoriesPage({ params } : Props) {
    const {slug} = params;

    // Filter games by category
    const filteredGames = GAMES.filter((game) => game.category === slug);

    return (
        <div className="p-20 mb-8">
            <PageTitle title={`Catégorie : ${slug.toUpperCase()}`}/>

            {/* Game Cards */}
            <GameList games={filteredGames}/>
        </div>
    );
};