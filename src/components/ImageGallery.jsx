import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box, IconButton, Typography, Grid, Container, ImageList, ImageListItem } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import InfoIcon from '@mui/icons-material/Info';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ImageGallery = ({ category }) => {
  const totalImages = category === 'male' ? 85 : 121; // Ajusta según el número total de imágenes
  const excludedImages = category === 'female' ? [60, 102] : []; // Excluir 60 y 102 para "female"

  // Generar rutas dinámicamente, excluyendo las imágenes eliminadas
  const images = [];
  for (let i = 1; i <= totalImages; i++) {
    if (excludedImages.includes(i)) continue; // Saltar las imágenes eliminadas
    
    // Generar el nombre de la imagen según la categoría
    const imageName = category === 'male'
      ? `img-${i}male.png`
      : `perfume-female-${i}.png`;

    // Agregar la ruta de la imagen a la lista de imágenes
   
   
    images.push(`${process.env.PUBLIC_URL}/galeria/${category}/${imageName}`);
  }

  const [mode, setMode] = useState('light'); // Estado para manejar el modo

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Esto aplica los estilos globales de Material UI */}
      <Box sx={{ mt: 4, position: 'relative' }}>
        <Container maxWidth="md">
          <Typography 
            variant="h4" 
            align="center" 
            gutterBottom
            sx={{
              fontSize: { xs: '1.8rem', sm: '2.5rem' }, // Tamaño de fuente dinámico según el tamaño de la pantalla
            }}
          >
            {category === 'male' ? 'Perfumes Masculinos' : 'Perfumes Femeninos'}
          </Typography>

          {/* Botón para cambiar entre modo claro y oscuro */}
          <Box sx={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}>
            <IconButton onClick={toggleMode} sx={{ 
              backgroundColor: mode === 'light' ? 'yellow' : 'gray', 
              borderRadius: '15px', 
              padding: '10px', 
              '&:hover': { backgroundColor: mode === 'light' ? 'lightyellow' : 'darkgray' },
            }}>
              {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Box>

          {/* Sección sobre nosotros */}
          <Box sx={{
            textAlign: 'center',
            mb: 4,
            p: 3,
            borderRadius: '10px',
            backdropFilter: 'blur(10px)', // Aplica el desenfoque
            backgroundColor: 'rgba(255, 255, 255, 0.3)', // Fondo translúcido
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Sombra suave para destacar
            maxWidth: '600px', 
            margin: '0 auto', // Centra el Box
          }}>
            <IconButton color="primary" href="/about" sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
              <InfoIcon />
            </IconButton>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Sobre Nosotros
            </Typography>
            <Typography variant="body1">
              En Under-Perfum ofrecemos una variedad exclusiva de perfumes para hombres y mujeres. 
              Encuentra la fragancia perfecta para cada ocasión.
            </Typography>
          </Box>

          {/* Redes Sociales */}
          <Grid container justifyContent="center" spacing={2} sx={{ mb: 4 }}>
            <Grid item>
              <IconButton color="primary" href="https://wa.me/2613409224" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton color="primary" href="https://www.facebook.com/pablo.piris.5" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton color="primary" href="https://www.instagram.com/pablo_piris2389/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </IconButton>
            </Grid>
          </Grid>

          {/* Galería de Imágenes */}
          <ImageList cols={3} gap={10}>
            {images.map((img, index) => (
              <ImageListItem key={index}>
                <img src={img} alt={`Perfume ${category} ${index + 1}`} loading="lazy" style={{ borderRadius: '8px' }} />
              </ImageListItem>
            ))}
          </ImageList>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default ImageGallery;
