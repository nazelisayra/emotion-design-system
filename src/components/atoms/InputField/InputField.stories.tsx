import InputField from './InputField'

export default {
  title: 'Atoms/InputField',
  component: InputField,
}

export const Default = () => (
  <InputField label="Name" placeholder="Enter your name" />
)

export const WithHint = () => (
  <InputField
    label="Email"
    type="email"
    placeholder="you@example.com"
    hint="We'll never share your email."
  />
)

export const ErrorState = () => (
  <InputField
    label="Email"
    type="email"
    defaultValue="notvalid"
    error="Please enter a valid email address."
  />
)

export const SuccessState = () => (
  <InputField
    label="Email"
    type="email"
    defaultValue="hello@example.com"
    success="Looks good!"
  />
)

export const Disabled = () => (
  <InputField label="Username" defaultValue="sayra" disabled />
)

export const Sizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360 }}>
    <InputField label="Small" size="sm" placeholder="Small input" />
    <InputField label="Medium" size="md" placeholder="Medium input" />
    <InputField label="Large" size="lg" placeholder="Large input" />
  </div>
)

export const Types = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360 }}>
    <InputField label="Text" type="text" placeholder="Plain text" />
    <InputField label="Email" type="email" placeholder="you@example.com" />
    <InputField label="Password" type="password" placeholder="••••••••" />
    <InputField label="Number" type="number" placeholder="42" />
  </div>
)
