import { createIsomorphicFn } from '@tanstack/react-start'

export const log = createIsomorphicFn()
  .server((message: string) => { console.log(`[SERVER LOG]: ${message}`); })
  .client((message: string) => { console.log(`[CLIENT LOG]: ${message}`); })