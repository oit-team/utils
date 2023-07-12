import mime from 'mime'

export function fileTypeAcceptCheck(accept: string, file: File) {
  return accept.split(',').some((type) => {
    type = type.trim()

    if (type === '*' || type === file.type)
      return true

    if (type.endsWith('/*')) {
      const [typePrefix] = type.split('/')
      return file.type.startsWith(typePrefix)
    }

    return mime.getType(type) === file.type
  })
}
