export const ADDRECORD = (data) => {
    return{
        type : "ADDRECORD",
        payload : data
    }
}
export const DELETE_RECORD = (id) => {
        return{
            type : "DELETE_RECORD",
            payload : id
        }
}
export const EDIT_RECORD = (id) => {
    return{
        type : "EDIT_RECORD",
        payload : id
    }
}
export const UPDATE = (data) => {
    return{
        type : "UPDATE",
        payload : data
    }
}