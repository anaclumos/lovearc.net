import { withImageProxy } from '@blazity/next-image-proxy'

export default withImageProxy({
  // pbs.twimg.com is a default whitelisted pattern
  whitelistedPatterns: ['pbs.twimg.com', 'abs.twimg.com'],
})
