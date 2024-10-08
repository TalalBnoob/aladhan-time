import { QueryFunctionContext } from '@tanstack/react-query'
import APIResponse from '../../../types'

const baseUrl = `https://api.aladhan.com/v1/calendarByCity`

export async function getAladanData({ queryKey }: QueryFunctionContext) {
  const fullUrl = `${baseUrl}/${queryKey[3]}/${queryKey[2]}?city=${queryKey[1]}&country=sa&method=4`
  console.log(fullUrl)
  const res = await fetch(fullUrl)
  const aladhanData: APIResponse = await res.json()
  return aladhanData
}
