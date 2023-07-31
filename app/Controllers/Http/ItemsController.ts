import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ItemsController {
    public async get(ctx: HttpContextContract) {
        return [
          {
            id: 1,
            title: 'Gari',
          },
          {
            id: 2,
            title: 'Sugar',
          },
        ]
      }
    
}
