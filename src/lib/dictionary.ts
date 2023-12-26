import 'server-only'
import type { Locale } from '@/src/i18n.config'

const dictionaries = {
  en: () => import('@/src/dictionaries/en.json').then(module => module.default), 
  ru: () => import('@/src/dictionaries/ru.json').then(module => module.default),
  kk: () => import('@/src/dictionaries/kk.json').then(module => module.default) 
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()