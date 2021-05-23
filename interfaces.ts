export interface CartInterface{
    isUpdated: boolean

    add()
    remove()
    view()
    find()
    initialize()
    updateBackend()
    clear()
}

export interface RequestCart{
    userId: string
    cart: UserCart
}

export interface UserCart{
    productId: string
    quantity: number
}