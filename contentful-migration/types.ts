export type Asset = {
  id: number
  url: string
  title: string
  filename: string
  mimeType: string
}

export type Category = {
  id: number
  title: string
  slug: string
}

export type User = {
  id: number
  username: string
  photoId: string
  fullName: string
}

export type Post = {
  id: number
  authorId: string
  title: string
  slug: string
  isCommunityPost: boolean
  blogBodyText: string
  postDate: string
  blogCategory: string[]
  mainBlogImage: string[]
  status: 'live' | 'disabled'
}

export type PressPost = {
  id: number
  authorId: string
  title: string
  linkUrl: string
  postDate: string
  bodyText: string
  mediaSource: string
  mainPressImage: string[]
  status: 'live' | 'disabled'
}
