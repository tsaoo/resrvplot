import { LinkPreset, type NavBarLink } from "@/types/config";
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";

export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
  [LinkPreset.Home]: {
    name: i18n(I18nKey.home),
    url: '/',
  },
  [LinkPreset.Img]: {
    name: i18n(I18nKey.img),
    url: '/img/',
  },
  [LinkPreset.CV]: {
    name: i18n(I18nKey.cv),
    url: '/cv/',
  },
  [LinkPreset.Links]: {
    name: i18n(I18nKey.links),
    url: '/links/',
  },
  [LinkPreset.Archive]: {
    name: i18n(I18nKey.archive),
    url: '/archive/',
  },
}
