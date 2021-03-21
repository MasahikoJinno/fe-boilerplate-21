/**
 * パス一覧の型
 */
type Paths = Readonly<
  {
    pattern: string
    href: string
  }[]
>

/**
 * アプリケーションのパス一覧
 */
export const APP_PATHS: Paths = [
  { pattern: '/dynamic/.*', href: '/dynamic/[id]' },
  { pattern: '/about', href: '/about' }
] as const
