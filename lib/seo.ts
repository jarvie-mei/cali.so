export const seo = {
  title: 'James May | 开发者',
  description:
    '我叫 James，一名开发者，专注linux内核开发',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://hack.mjtech.cc'
      : 'http://localhost:3000'
  ),
} as const
