import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import {Navigation} from "./Navigation";

export const CardDetailPage: React.FC<CardDetailPageProps> = ({ cardData }) => {
    const { cardId = '1' } = useParams();
    const card = cardData.find((item) => item.id === parseInt(cardId));

    return (
        <Container maxWidth="sm">
            <Box sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                flexGrow: 1,
                overflowY: 'auto',
                p: 2,
                boxShadow: 4 // Add the boxShadow property
            }}>
            {card ? (
                <Card>
                    <CardMedia
                        component="img"
                        height="500"
                        image={`../${card.imageUrl}`}  // Double-check imageUrl here
                        alt={card.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {card.title}
                        </Typography>
                        <Typography variant="body1">
                            {card.description_long}
                        </Typography>
                    </CardContent>
                </Card>
            ) : (
                <div>Card not found</div>
            )}
                <Navigation />
        </Box>
        </Container>
    );
}

export default CardDetailPage;
