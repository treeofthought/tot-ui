async function unpackResponse(target) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/${target}`)
  const parsed = JSON.parse(await response.text())
  return parsed
}

async function getBlog(slug) {
  const parsed = await unpackResponse(`blogs/${slug}`)
  return parsed
}

async function getBlogsList() {
  const parsed = await unpackResponse('blog-list')
  return parsed
}

async function getLatestBlog() {
  const parsed = await unpackResponse('blog-latest')
  return parsed
}

const apiService = {
  getBlog,
  getBlogsList,
  getLatestBlog
}

export default apiService;
