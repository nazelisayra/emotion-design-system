import './DownloadButton.css'

type Props = {
  href?: string
  filename?: string
  label?: string
  onClick?: () => void
  className?: string
}

export default function DownloadButton({
  href,
  filename,
  label = 'Download',
  onClick,
  className = ''
}: Props) {
  const base = 'download-button'
  const cls = `${base} ${base}--primary ${className}`.trim()

  if (href) {
    return (
      <a className={cls} href={href} download={filename} role="button" aria-label={label}>
        <span className={`${base}__label`}>{label}</span>
        <span className={`${base}__icon`} aria-hidden="true">⬇️</span>
      </a>
    )
  }

  return (
    <button type="button" className={cls} onClick={onClick} aria-label={label}>
      <span className={`${base}__label`}>{label}</span>
      <span className={`${base}__icon`} aria-hidden="true">⬇️</span>
    </button>
  )
}
