function calculateReadTime(text){
  const WORDS_PER_MINUTE = 200
  const time = Math.ceil(text.split(" ").length / WORDS_PER_MINUTE)
  return `${time} min`
}

export default async function handler(req, res) {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then((data) => data.json())
  
  const mappedPost = posts.map((post) => ({

    "unsplashID": "photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "unsplashAlt": "Web Components",
    "tags": ["Design", "Web Components"],
    "title": post.title,
    "extract": post.body,
    "author": "JSON Placeholder",
    "date": "2024-08-01",
    "readTime": calculateReadTime(post.body)

  }))
  res.status(200).json(mappedPost)
}