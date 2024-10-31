import Link from 'next/link'
import s from './not-found.module.scss'

export default function NotFound() {
  return (
    <div className={s.container}>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <Link href="/">홈으로</Link>
    </div>
  )
}
