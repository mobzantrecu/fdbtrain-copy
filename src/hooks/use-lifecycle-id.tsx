import { useEffect, useState } from 'react'
import casualUid from 'lib/util/casual-uid'

const useLifecycleId = () => {
  const [id, setId] = useState<string>()

  useEffect(() => {
    setId(casualUid())
  }, [])

  return id
}

export default useLifecycleId
