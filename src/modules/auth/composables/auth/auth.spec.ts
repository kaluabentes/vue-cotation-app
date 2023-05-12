import { beforeEach, describe, it, expect, vi, Mock } from 'vitest'
import { useRouter as useVueRouter } from 'vue-router'

import { withSetup } from '@/lib/utils/test/withSetup'
import useAuth from './auth'

vi.mock('vue-router')

const useRouter = useVueRouter as Mock

describe('useAuth', () => {
  useRouter.mockReturnValue({
    push: vi.fn()
  })

  beforeEach(() => {
    useRouter().push.mockReset()
  })

  it('works properly', () => {
    const [{ user, isLoading }] = withSetup(() => useAuth())

    expect(user.value).toBe(null)
    expect(isLoading.value).toBe(false)
  })
})
