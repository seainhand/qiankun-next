import Link from 'next/link'
export default function B() {
  console.log('我当场死锁');
  return (
        <Link href="/navi">
          <a>navi</a>
        </Link>
        )
}
