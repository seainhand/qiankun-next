import Link from 'next/link'

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/navi">
          <a>navi</a>
        </Link>
      </li>
      <li>
        <Link href="/home">
          <a>home</a>
        </Link>
      </li>
    </ul>
  )
}
