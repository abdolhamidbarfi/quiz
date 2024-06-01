
const obj: any = {}

let api = ""

//apiGenerator get data to generate a api link and get some names to remove some data query from api link
export function queryGenerator(data: any, ...names: string[]) {
    for (const [key] of Object.entries(data)) {
        data[key].value !== undefined
            ? obj[key] = data[key].value
            : obj[key] = data[key]
    }

    for (const [key, value] of Object.entries(obj)) {
        if (!names.includes(key) && value) {
            api = api.concat(`${key}=${value}&`)
        }
    }

    api = "?" + api.slice(0, -1)

    return api
} 