


const Drawer = () =>{

    return (
   <div style={{display: 'none'}} className="overlay">
        <div className="drawer">
    <h2 className="mb-20">Корзина   <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" /></h2>
    <div className="items">

    <div className="mb-20 cartItem d-flex align-center">
        <div  style={{backgroundImage: 'url(/img/pic/1.png)'}} className="cartItemImg">
        <img className="mr-20" width={70} height={70} src="/img/pic/1.png" alt="Sneakers" />
      
        </div>
         <div className="mr-20 flex">
          <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
          <b>12 999 руб.</b>
        </div>
        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
      </div>

      <div className="mb-20 cartItem d-flex align-center">
        <div  style={{backgroundImage: 'url(/img/pic/1.png)'}} className="cartItemImg">
        <img className="mr-20" width={70} height={70} src="/img/pic/1.png" alt="Sneakers" />
      
        </div>
         <div className="mr-20 flex">
          <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
          <b>12 999 руб.</b>
        </div>
        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
      </div>
      <div className="mb-20 cartItem d-flex align-center">
        <div  style={{backgroundImage: 'url(/img/pic/1.png)'}} className="cartItemImg">
        <img className="mr-20" width={70} height={70} src="/img/pic/1.png" alt="Sneakers" />
      
        </div>
         <div className="mr-20 flex">
          <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
          <b>12 999 руб.</b>
        </div>
        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
      </div>
      <div className="mb-20 cartItem d-flex align-center">
        <div  style={{backgroundImage: 'url(/img/pic/1.png)'}} className="cartItemImg">
        <img className="mr-20" width={70} height={70} src="/img/pic/1.png" alt="Sneakers" />
      
        </div>
         <div className="mr-20 flex">
          <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
          <b>12 999 руб.</b>
        </div>
        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
      </div>

      <div className="mb-20 cartItem d-flex align-center">
        <div  style={{backgroundImage: 'url(/img/pic/1.png)'}} className="cartItemImg">
        <img className="mr-20" width={70} height={70} src="/img/pic/1.png" alt="Sneakers" />
      
        </div>
         <div className="mr-20 flex">
          <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
          <b>12 999 руб.</b>
        </div>
        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
      </div>
    </div>
      <div className="cartTotalBlock">
      <ul>
        <li className="d-flex">
          <span>Итого:</span>
          <div></div>
          <b>21468 руб.</b>
        </li>
        <li  className="d-flex">
          <span>Налог 5%:</span>
          <div></div>
          <b>1074 руб.</b>
        </li>
      </ul>
    <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /></button>
      </div>
   
        </div>
      </div>
    )
}

export default Drawer