import { Link } from 'react-router-dom'

import oasjviLogo from '../../assets/oasjvi.webp'

export function HeaderLogo() {
  return (
    <Link
      to="/"
      aria-label="Ojasvi home"
      className="flex items-center justify-center"
    >
      <img
        src={oasjviLogo}
        alt="Oasjvi"
        className="h-11 w-auto object-contain sm:h-12 lg:h-14"
      />
    </Link>
  )
}