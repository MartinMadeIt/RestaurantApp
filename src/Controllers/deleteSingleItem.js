const deleteSingleItem = async (dest, orderId, URL=`http://localhost:3000`) => {
    fetch(`${URL}/${dest}/${orderId}`, {method: 'DELETE'} )
}

export default deleteSingleItem;