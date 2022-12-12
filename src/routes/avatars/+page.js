//npm install --save-dev @faker-js/faker  to get random names api
import { faker } from '@faker-js/faker'

export async function load(){
    const fiftyNames = [...Array(50)].map(() => {   //... is using the spread operator
        const lastName = faker.name.lastName()
        return {
            lastName,  //when the name of the key and property is the same you only need to put one yep
            avatar:`https://avatars.dicebear.com/api/big-smile/${lastName}.svg`
        }
    })
        return  {allNames:fiftyNames}
}