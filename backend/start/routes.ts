/*
|--------------------------------------------------------------------------
| routers file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import PostsController from '#controllers/posts_controller'
import router from '@adonisjs/core/services/router'

router.group(() => {
  router.get('/', [PostsController, 'index']) // Get all posts
  router.get('/:id', [PostsController, 'show']) // Get a single post by ID
  router.post('/', [PostsController, 'store']) // Create a new post
  router.put('/:id', [PostsController, 'update']) // Update a post
  router.delete('/:id', [PostsController, 'destroy']) // Delete a post
}).prefix('/posts')