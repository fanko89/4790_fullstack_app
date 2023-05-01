//npm install --save-dev @faker-js/faker  to get random names api
import { faker } from '@faker-js/faker'

export async function load({ params }) {
    
    const {lastName} = params // destructoring 
    const firstName  = faker.name.firstName()
    console.log(params)
    return{
        lastName,
        address: faker.address.streetAddress(),
        firstName: faker.name.firstName(),
        avatar:`https://avatars.dicebear.com/api/identicon/${lastName}.svg`,
        title: faker.name.jobTitle(),
        phone: faker.phone.number(),
        email: faker.internet.email(`${firstName}`, `${lastName}`)
    
    }
}