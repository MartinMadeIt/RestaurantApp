
export const postData = async (dest, newData) => {
    const response = await fetch(`http://localhost:3000/${dest}`, {
        method: "POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(newData),
    });
    if(response.ok) {
        // z reponse wyciagnac id albo caly obiekt 
        return {};
    }
    const data = await response.json();
    return data;
} 