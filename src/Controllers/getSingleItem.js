// getSingleItem = async ({dest, orderId, URL=`http://localhost:3000`})
const getSingleItem = async (dest, orderId, URL=`http://localhost:3000`) => {
  const response = await fetch(`${URL}/${dest}/${orderId}`);
  if(!response.ok){
    return []
  }
  const data=await response.json();
  return data;
};

export default getSingleItem;
