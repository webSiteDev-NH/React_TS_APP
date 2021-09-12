export type Props = {
  title: string
  num: number
}

export const LANGUAGES: string[] = [
  'JavaScript',
  'C++',
  'Ruby',
  'Java',
  'PHP',
  'Go'
]

// Promiseに型指定しないとエラー
export const getLanguages = () => {
  return new Promise<string[]>((resolve) => {
    setTimeout( () => {
      resolve(LANGUAGES);
    }, 1000)
  })
}

