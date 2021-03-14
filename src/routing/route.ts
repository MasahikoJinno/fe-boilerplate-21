/**
 * 当アプリケーションのパス
 */
export const APP_ROUTES: Readonly<
  {
    pattern: string
    href: string
  }[]
> = [
  { pattern: '/dynamic/*', href: '/dynamic/[id]' },
  { pattern: '/about', href: '/about' }
] as const
