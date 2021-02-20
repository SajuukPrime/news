export default (id) => {
    const reg = /[1-9]\d{6}/ //Number.parseInt(id)
    const res = id.match(reg)
    if (res) {
        return id
    } else {
        console.error('Wrong column')
    }
}