import Card from './Card';
import { SuccessButton } from '../../atoms';

export default {
  title: 'Molecules/Card',
  component: Card,
};

export const Action = () => (
  <Card
    variant="action"
    title="Action"
    subtitle="Conversion-focused surface"
    actions={<SuccessButton>Get Started</SuccessButton>}
  >
    <p>High-priority surface built for decisions. Strong hierarchy, clear CTA, elevated presence.</p>
  </Card>
);

export const Passive = () => (
  <Card
    variant="passive"
    title="Passive"
    subtitle="Observational surface"
  >
    <p>A steady, watchful surface. Suited for data and informational content with no required action.</p>
  </Card>
);

export const Minimal = () => (
  <Card
    variant="minimal"
    title="Minimal"
    subtitle="Low cognitive load"
  >
    <p>A quiet surface. Reduced chrome for calm contexts where visual noise needs to disappear.</p>
  </Card>
);
