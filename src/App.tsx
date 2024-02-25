import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from './Home';
import CardDetailPage from './CardDetailPage'; //


export default function App() {
    const [value, setValue] = React.useState(0); // State for the bottom menu
    const cardData : CardData[] = [
        {
            id: 1,
            imageUrl: 'preview1.jpeg',
            title: 'Sunny Day Stroll',
            description: 'Bubble tea in hand, a smiling teenager takes a walk under the warm sunshine and leafy trees.',
            description_long: 'With a cheerful smile and a twinkle in her eye, the bubble tea girl expertly mixed colorful syrups and ice. The sweet, fruity aroma wafted through the air as she deftly added the final touch: a generous scoop of plump, chewy tapioca pearls.  Her hands moved with practiced ease, a testament to countless afternoons perfecting her craft. A line of eager customers buzzed around her small stall, their eyes bright with anticipation for their own taste of her refreshing creations.'
        },
        {
            id: 2,
            imageUrl: 'preview2.jpeg',
            title: 'Daydreaming Break',
            description: 'Exhausted after endless meetings, a teenager takes a break on their bed, their mind wandering towards the sunlit playground outside.',
            description_long: 'The weight of a thousand conversations pressed down on the teenager\'s shoulders as they collapsed onto their bed. Days of agendas, presentations, and forced smiles had left them utterly drained. Their mind, a whirlwind of deadlines and to-do lists, craved silence. Yet, through the open window, a playful breeze carried the cheerful sounds of the playground – children\'s laughter and the rhythmic thump of a bouncing ball. A wistful longing pulled at their heart, a reminder of the carefree days they seemed to have left behind.'
        },
        {
            id: 3,
            imageUrl: 'preview3.jpeg',
            title: 'The World is My Playground',
            description: 'A vibrant teenager, fueled by the experiences of travel, finds joy and excitement in every new adventure.',
            description_long: '\n' +
                'Here are a few options for a longer description, each with a slightly different angle:\n' +
                '\n' +
                'Option 1: Emphasizing a Bright Spirit\n' +
                '\n' +
                'The teenager\'s eyes sparkled with a restless energy that seemed to come from within. Each new destination wasn\'t just a place on a map; it was a promise of experiences yet to be had. From the bustling markets of Marrakech to the ancient temples of Kyoto, they embraced the unknown with an infectious enthusiasm.  Whether haggling over the price of a colorful scarf or trying a strange and unfamiliar dish, every moment was an opportunity for discovery.  '
        },

    ];

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home cardData={cardData} />} />
                <Route path="/card/:cardId" element={<CardDetailPage cardData={cardData} />} />
            </Routes>
        </BrowserRouter>
  );
}
