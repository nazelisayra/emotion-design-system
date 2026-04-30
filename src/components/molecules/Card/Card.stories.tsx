import Card from './Card';
import { SuccessButton, DownloadButton } from '../../atoms';

export default {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          'Card is a flexible surface that groups a header, body content, and optional actions.\n\nUse cards to present related information compactly — include images, lists, or form controls inside the body. Variations below show common usages: with an image and actions, without an image, without actions, and a minimal text-only card.',
      },
    },
  },
};

export const Default = () => (
  <Card
    title="Hero — Trust Example"
    subtitle="Demonstrates a trust-focused surface and action"
    actions={<><DownloadButton href="#" filename="" label="Download Asset" /><SuccessButton>Confirm</SuccessButton></>}
  >
    <img src="/src/assets/hero.png" alt="Hero" style={{ maxWidth: '100%', borderRadius: 8 }} />
  </Card>
);

export const NoImage = () => (
  <Card
    title="Focus — Text Surface"
    subtitle="Readable, low-arousal layout"
    actions={<><SuccessButton>Confirm</SuccessButton></>}
  >
    <p>A focus-oriented card showing readable text with reduced chrome.</p>
  </Card>
);

export const NoActions = () => (
  <Card title="Trust — Visual Surface" subtitle="Image-first card (no actions)">
    <img src="/src/assets/hero.png" alt="Hero" style={{ maxWidth: '100%', borderRadius: 8 }} />
  </Card>
);

export const TextOnly = () => (
  <Card>
    <p>
      A minimal card for brief inline content — suited to calm, low-arousal contexts.
    </p>
  </Card>
);

// Emotion-focused card examples
export const CardClarity = () => (
  <Card title="Clarity" subtitle="Minimal chrome" actions={null}>
    <p>Clarity card: low visual noise, ideal for reading and focus.</p>
  </Card>
);
CardClarity.storyName = 'Emotion: Clarity';

export const CardTrust = () => (
  <Card title="Trust" subtitle="Stable call-to-action" actions={<><SuccessButton>Confirm</SuccessButton></>}>
    <p>Trust card: uses reliable visual weight and a clear primary action.</p>
  </Card>
);
CardTrust.storyName = 'Emotion: Trust';

export const CardAction = () => (
  <Card title="Action" subtitle="Attention-focused" actions={<><SuccessButton>Go</SuccessButton></>}>
    <p>Action card: elevated and highlighted to drive conversions.</p>
  </Card>
);
CardAction.storyName = 'Emotion: Action';
