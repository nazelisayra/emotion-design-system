import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Outline = () => <Button variant="outline">Outline</Button>;
export const Ghost = () => <Button variant="ghost">Ghost</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;
export const Link = () => <Button variant="link">Link Style</Button>;
export const Disabled = () => <Button variant="disabled">Disabled</Button>;
export const Sizes = () => (
  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
    <Button variant="primary" size="sm">Small</Button>
    <Button variant="primary" size="md">Medium</Button>
    <Button variant="primary" size="lg">Large</Button>
  </div>
);

// Emotion-focused stories
export const EmotionClarity = () => (
  <Button variant="ghost">Clarity — Minimal</Button>
);
EmotionClarity.storyName = 'Emotion: Clarity';

export const EmotionTrust = () => (
  <Button variant="primary">Trust — Confirm</Button>
);
EmotionTrust.storyName = 'Emotion: Trust';

export const EmotionAction = () => (
  <Button variant="secondary">Action — Take Action</Button>
);
EmotionAction.storyName = 'Emotion: Action';
