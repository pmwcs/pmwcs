import { useState } from 'preact/hooks'
import { useFoundation } from '@pmwcs/base'
import { MDCTextFieldCharacterCounterFoundation } from '@material/textfield'

export const useTextFieldCharacterCountFoundation = (
  props
) => {
  const [content, setContent] = useState()

  const { foundation, ...elements } = useFoundation({
    props,
    api: ({ foundation }) => {
      return {
        getFoundation: () => foundation
      }
    },
    elements: {},
    foundation: () => {
      return new MDCTextFieldCharacterCounterFoundation({
        setContent: (content) => {
          setContent(content)
        }
      })
    }
  })

  return {
    content,
    ...elements
  }
}
