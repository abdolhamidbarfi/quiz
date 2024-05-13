
const obj: any = {}

let baseUrl = "https://opentdb.com/api.php?"

export function apiGenerator(data: any, ...names: string[]) {
    for (const [key] of Object.entries(data)) {
        data[key].value !== undefined
            ? obj[key] = data[key].value
            : obj[key] = data[key]
    }

    for (const [key, value] of Object.entries(obj)) {
        if (!names.includes(key) && value) {
            baseUrl = baseUrl.concat(`${key}=${value}&`)
        }
    }

    return baseUrl.slice(0, -1)
}