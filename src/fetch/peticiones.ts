export async function userLogin(method: string, body: object){
    try {
        let myHeaders = new Headers();
        myHeaders.append("Access-Control-Request-Headers", "*");
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify(body);
        let resultFetch = fetch("https://pbakxq15qi.execute-api.us-west-2.amazonaws.com/testing", {
            method,
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(data =>data)
            return resultFetch;
    } catch (error) {
        return error;
    }

}