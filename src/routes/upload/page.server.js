import { Storage } from 'aws-amplify'
import { FileReader } from 'node:fs'

export const actions = {
    upload: async ({request}) => {
        const data = await request.formData()
        const file = data.get('file-upload')
        console.log(file)
        let reader = new FileReader()
        reader.readAsArrayBuffer(file)
        console.log(reader)
/*         try {
            await Storage.put(file.name, file, { level: 'protected' })
        } catch (error) {
            console.log(error)
            return { success: false }
        } */
        return { success: true }
    }
}