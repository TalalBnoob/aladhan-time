import { ChangeEvent } from 'react'

type propsType = {
  countryName: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const countries = {
  sa: [
    { ar: 'الرياض', en: 'Riyadh' },
    { ar: 'جدة', en: 'Jeddah' },
    { ar: 'مكة', en: 'Makkah' },
    { ar: 'المدينة', en: 'Medina' },
    { ar: 'دمام', en: 'Dammam' },
    { ar: 'الخبر', en: 'Al Khobar' },
    { ar: 'الطائف', en: "Ta'if" },
    { ar: 'تبوك', en: 'Tabuk' },
    { ar: 'بريدة', en: 'Buraydah' },
    { ar: 'أبها', en: 'Abha' },
    { ar: 'الهفوف', en: 'Al Hufuf' },
    { ar: 'ينبع', en: 'Yanbu' },
    { ar: 'جبيل', en: 'Jubail' },
    { ar: 'نجران', en: 'Najran' },
    { ar: 'حايل', en: 'Hail' },
    { ar: 'القطيف', en: 'Al Qatif' },
    { ar: 'خميس مشيط', en: 'Khamis Mushait' },
    { ar: 'الباحة', en: 'Al Bahah' },
    { ar: 'القنفذة', en: 'Al Qunfudhah' },
    { ar: 'سَكَاكَا', en: 'Sakakah' },
    { ar: 'الخرج', en: 'Al-Kharj' },
    { ar: 'القصيم', en: 'Qassim' },
    { ar: 'حايل', en: "Ha'il" },
    { ar: 'عسير', en: 'Arar' },
    { ar: 'رأس تنورة', en: 'Ras Tanura' },
  ],
}

function CitySelect(props: propsType) {
  return (
    <>
      <select
        onChange={props.onChange}
        id='select city'
        className='ml-auto mr-4 max-w-40 rounded bg-gray-700 px-2 py-1 text-right text-gray-100  focus:outline-none'
        name='country'
      >
        {countries.sa.map((city) => (
          <option
            value={city.en}
            key={city.en}
          >
            {city.ar}
          </option>
        ))}
      </select>
    </>
  )
}

export default CitySelect
