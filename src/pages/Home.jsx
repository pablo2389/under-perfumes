import React, { useState } from 'react';
import { Container, Button, Typography } from '@mui/material';
import ImageGallery from '../components/ImageGallery';

const Home = () => {
  const [category, setCategory] = useState('male');

  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Bienvenidos a Under-Perfum
      </Typography>
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <Button variant="contained" color="primary" onClick={() => setCategory('male')} style={{ margin: 5 }}>
          Masculinos
        </Button>
        <Button variant="contained" color="secondary" onClick={() => setCategory('female')} style={{ margin: 5 }}>
          Femeninos
        </Button>
      </div>
      <ImageGallery category={category} />
    </Container>
  );
};

export default Home;
