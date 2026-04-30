import LoadingSpinner from './LoadingSpinner'

export default {
  title: 'Atoms/LoadingSpinner',
  component: LoadingSpinner,
}

export const Small = () => <LoadingSpinner size="sm" />
export const Medium = () => <LoadingSpinner size="md" />
export const Large = () => <LoadingSpinner size="lg" />

export const AllSizes = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
    <LoadingSpinner size="sm" />
    <LoadingSpinner size="md" />
    <LoadingSpinner size="lg" />
  </div>
)
