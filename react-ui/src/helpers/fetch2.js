 export const fetchCondition = async (api, body,) => {
    const res = await fetch(api, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            // Authorization token only need at the time of create todo.
            "Authorization": localStorage.getItem('token'),
        },
        body: JSON.stringify(body)
    });
    return await res.json();
}


 export const fetchDeleteTodos = async (api, type) => {
    const res = await fetch(api, {
        method: type,
        headers: {
            "Content-Type": "application/json",
            // Authorization token only need at the time of get or delete todo.
            "Authorization": localStorage.getItem('token'),
        },
        body: JSON.stringify()
    });
    return await res.json();
}