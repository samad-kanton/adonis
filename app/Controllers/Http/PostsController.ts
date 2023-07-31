import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
    public async create(ctx: HttpContextContract) {
        return 'Creating Post'
    }

    public async get(ctx: HttpContextContract) {
        return 'Getting Post'        
    }

    public async delete(ctx: HttpContextContract) {
        return 'Deleting Post'        
    }
}
