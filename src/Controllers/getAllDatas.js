const getAllDatas = async (dest) => {
    const response = await fetch(`http://localhost:3000/${dest}`);
    if(!response.ok){
      return []
    }
    const data=await response.json();
    return data;
}

export default getAllDatas;