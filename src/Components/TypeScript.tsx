let nazwa:number[]=[3,2]

type OrderItem = {
    id:string;
    name: string;
    price: number;
}
const orders:OrderItem[]=[{
    id:"1",
    name: "kebab",
    price: 10
}]

enum Colors {
    RED=32,
    ORANGE=84,
    GREEN=10
}

function setColor(color:Colors | string) {
    //
}
setColor("string");

type status="loading"|"error"|"fetched";

interface ComponentProps {
    setState: (a:number)=>number;
}

function getData<T>(url){
    return fetch(url).then(resp=>resp.json()).then(data=>data as T)
}
getData<OrderItem>("a")
getData<string>("a")