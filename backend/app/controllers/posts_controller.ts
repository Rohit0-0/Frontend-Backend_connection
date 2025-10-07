import Post from '#models/post'
import type { HttpContext } from '@adonisjs/core/http'

export default class PostsController {
  // ✅ Get all posts
  async index({ response }: HttpContext) {
    const posts = await Post.all()
    return response.ok(posts)
  }

  // ✅ Create a new post
  async store({ request, response }: HttpContext) {
    const data = request.only(['title', 'content'])
    const post = await Post.create(data)
    return response.created(post)
  }

  // ✅ Get a single post by ID
  async show({ params, response }: HttpContext) {
    const post = await Post.find(params.id)
    if (!post) return response.notFound({ message: 'Post not found' })
    return response.ok(post)
  }

  // ✅ Update a post
  async update({ params, request, response }: HttpContext) {
    const post = await Post.find(params.id)
    if (!post) return response.notFound({ message: 'Post not found' })

    const data = request.only(['title', 'content'])
    post.merge(data)
    await post.save()

    return response.ok(post)
  }

  // ✅ Delete a post
  async destroy({ params, response }: HttpContext) {
    const post = await Post.find(params.id)
    if (!post) return response.notFound({ message: 'Post not found' })

    await post.delete()
    return response.ok({ message: 'Post deleted successfully' })
  }
}
