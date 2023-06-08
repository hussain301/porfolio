import { PageInfo } from '../typings'

export const fetchPageInfo = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getPageInfo`)

  const data = await res.json()
  const pageinfo: PageInfo = data.pageinfo

  return pageinfo
}
