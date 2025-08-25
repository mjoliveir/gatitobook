export interface Animal {
    id: number,
    postDate: Date,
    description: string,
    allowComments: boolean,
    likes: number,
    comments: number,
    userId: number,
    url: string
}

export type Animais = Array<Animal>
