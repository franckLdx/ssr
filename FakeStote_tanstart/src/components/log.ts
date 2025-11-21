import { createIsomorphicFn } from '@tanstack/react-start'

export const wait = () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 10000);
  })
}

export const logInfo = createIsomorphicFn()
  .server((message: string) => { console.log(`[SERVER LOG]: ${message} - ${new Date()}`); })
  .client((message: string) => { console.log(`[CLIENT LOG]: ${message} - ${new Date()}`); })