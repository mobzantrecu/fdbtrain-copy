import Form001 from './form_001'
import Form002 from './form_002'

const forms: Record<string, JSX.Element> = {
  form_001: <Form001 />,
  form_002: <Form002 />
}

const formStrategy = (title?: string) => {
  return title ? forms[title] : <></>
}

export const getFormName = (title?: string) => {
  if (!title) return
  const index = title.indexOf('form_')
  if (index === -1) return

  return title.substring(index)
}

export default formStrategy
