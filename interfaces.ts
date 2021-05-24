export interface CartInterface{
    isUpdated: boolean

    initialize(): UserCart[];

    add(productId: string, quantity?: number): CartUpdateResponse;
    remove(productId: string, quantity?: number): CartUpdateResponse;
    view(): UserCart[]
    find(): boolean;


    clear(): boolean
    updateBackend(): boolean
}

export interface RequestCart{
    userId: string
    cart: UserCart
}

export interface UserCart{
    productId: string
    quantity: number
}

export interface CartUpdateResponse{
    error: boolean
    response: string
}
