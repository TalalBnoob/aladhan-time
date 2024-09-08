export interface Timings {
  Fajr: string
  Sunrise: string
  Dhuhr: string
  Asr: string
  Sunset: string
  Maghrib: string
  Isha: string
  Imsak: string
  Midnight: string
  Firstthird: string
  Lastthird: string
}

export interface GregorianDate {
  date: string
  format: string
  day: string
  weekday: {
    en: string
  }
  month: {
    number: number
    en: string
  }
  year: string
  designation: {
    abbreviated: string
    expanded: string
  }
}

export interface HijriDate {
  date: string
  format: string
  day: string
  weekday: {
    en: string
    ar: string
  }
  month: {
    number: number
    en: string
    ar: string
  }
  year: string
  designation: {
    abbreviated: string
    expanded: string
  }
  holidays: unknown[] // You might want to define a type for holidays if available
}

export interface DateInfo {
  readable: string
  timestamp: string
  gregorian: GregorianDate
  hijri: HijriDate
}

export interface Method {
  id: number
  name: string
  params: {
    Fajr: number
    Isha: number
  }
  location: {
    latitude: number
    longitude: number
  }
}

export interface Meta {
  latitude: number
  longitude: number
  timezone: string
  method: Method
  latitudeAdjustmentMethod: string
  midnightMode: string
  school: string
  offset: Record<string, number>
}

export interface PrayerData {
  timings: Timings
  date: DateInfo
  meta: Meta
}

export default interface APIResponse {
  code: number
  status: string
  data: PrayerData[]
}
