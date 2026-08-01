import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
        <Typography variant="h3" component="h1">
          Banana{' '}
          <span role="img" aria-label="banana">
            🍌
          </span>
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
