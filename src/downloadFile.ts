/**
 * 下载文件
 * @param blob 文件流
 * @param filename 文件名
 */
async function downloadFile(blob: Blob | ArrayBuffer, filename: string) {
  if (blob instanceof ArrayBuffer)
    blob = new Blob([blob], { type: 'application/octet-stream' })

  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = filename
  a.click()
  URL.revokeObjectURL(a.href)
}

export default downloadFile
