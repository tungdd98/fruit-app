import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import { FRUIT_STATUSES, STATUS_LABELS } from './fruit';
import { useFruitFilter } from './use-fruit-filter';

export function App() {
  const { fruits, status, toggle } = useFruitFilter();

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
          <ToggleButtonGroup
            exclusive
            size="small"
            value={status ?? null}
            onChange={(_, next) => toggle(next)}
            sx={{ my: 2 }}
          >
            {FRUIT_STATUSES.map((value) => (
              <ToggleButton key={value} value={value}>
                {STATUS_LABELS[value]}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
          {fruits.map((fruit) => (
            <Typography key={fruit.id} variant="body1">
              {fruit.emoji} {fruit.name} — {STATUS_LABELS[fruit.status]}
            </Typography>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default App;
