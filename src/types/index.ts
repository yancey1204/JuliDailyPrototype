// For your card data
interface CardData {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
    description_long: string;
}

// For props in specific components
interface CardDetailPageProps {
    cardData: CardData[];
}
