const api_url = process.env.API_URL || "https://dummyjson.com"
function calculateReadTime(text){
  const WORDS_PER_MINUTE = 200
  const time = Math.ceil(text.split(" ").length / WORDS_PER_MINUTE)
  return `${time} min`
}

function calculateExtract(text){
  const MAX_EXTRACT_LENGth = 50
  const extract = text.split(" ").slice(0, MAX_EXTRACT_LENGth).join(" ")
  return `${extract} (...)`
}

function reduceTags(tags){
  const MAX_TAGS = 4
  return tags.slice(0, MAX_TAGS)
}

export default async function handler(req, res) {
  const {posts} = await fetch(`${api_url}/posts`).then((data) => data.json())
  
  const mappedPost = posts.map((post) => ({

    "unsplashID": "photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "unsplashAlt": "Web Components",
    "tags": reduceTags(post.tags),
    "title": post.title,
    "extract": calculateExtract(post.body),
    "author": post.author,
    "date": post.date,
    "readTime": calculateReadTime(post.body)

  }))
  res.status(200).json(mappedPost)
}