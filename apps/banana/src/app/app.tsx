import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useFruits } from './use-fruits';

export function App() {
  const fruits = useFruits();

  return (
    <Container maxWidth="sm">
      <Box sx={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
        <Box>
          <Typography variant="h3" component="h1">
            Banana{' '}
            <span role="img" aria-label="banana">
              🍌
            </span>
          </Typography>
          {fruits.map((fruit) => (
            <Typography key={fruit.id} variant="body1">
              {fruit.emoji} {fruit.name} — {fruit.ripeness}
            </Typography>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default App;
