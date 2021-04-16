import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function NotFound() {
  const router = useRouter()
  const [timeLeft, setTimeLeft] = useState(3)

  useEffect(() => {
    if (timeLeft < 1) {
      router.push('/')
    }
  }, [timeLeft])

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(seconds => seconds - 1)
    }, 1000);

    return () => clearInterval(interval)
  }, [])

  const message = timeLeft > 0 ? `in ${timeLeft} seconds...` : 'now'

  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Oooops! That page cannot be found :(</h2>
      <p>Redirecting to the <Link href="/">Homepage</Link> {message}</p>

      <style jsx>{`
        .not-found {
          background: #fff;
          padding: 30px;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          transform: rotateZ(-1deg);
        }
        h1 {
          font-size: 3em;
        }
      `}</style>
    </div>
  )
}
