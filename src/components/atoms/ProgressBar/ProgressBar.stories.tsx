import ProgressBar from './ProgressBar'

export default {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
}

export const Default = () => <ProgressBar value={40} label="Loading" showValue />
export const Success = () => <ProgressBar value={100} label="Complete" showValue variant="success" />
export const Error = () => <ProgressBar value={60} label="Failed" showValue variant="error" />
export const Sizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
    <ProgressBar value={60} label="Small" size="sm" showValue />
    <ProgressBar value={60} label="Medium" size="md" showValue />
    <ProgressBar value={60} label="Large" size="lg" showValue />
  </div>
)
