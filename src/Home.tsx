import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import {Navigation} from "./Navigation";
import './Style.css';

export const Home: React.FC< { cardData: CardData[] }> = ({ cardData }) => {
    return (
        <Container maxWidth="sm">
            <Box sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                flexGrow: 1,
                overflowY: 'auto',
                p: 0,
                boxShadow: 4 // Add the boxShadow property
        }}>
            {/* Content area (List with Cards) */}
            <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 1.5, mb:7 }}> {/* Scrollable */}
            {/* Example - Replace with your list generation logic */}
                {cardData.map((card) => (
                    <Link key={card.id} to={`/card/${card.id}`} style={{ textDecoration: 'none' }} >
                    <Card sx={{ mb: 2 }}>
                        <CardMedia
                            component="img"
                            height="170"
                            image={card.imageUrl}
                            alt="Image Preview"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {card.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {card.description}
                            </Typography>
                        </CardContent>
                    </Card>
                    </Link>
                ))}
            </Box>
            <Navigation />
            </Box>
        </Container>
);
}
