const List = ({list, drawer}) => {
    return ( 
        <div className="list">
        {
          list.map((box) => {
            if(box.type === 'bottom'){
              return (
                <div className='box'>
                  <h1>PIECES</h1>
                  <p>{box.height} x {box.depth} * {box.quantity*2}</p>
                  <p>{box.width-32} x {box.depth} * {box.quantity*1}</p>
                  {
                    box.noOfShelves !== 0 && (
                      <p>{box.width-32} x {box.depth-15} * {(box.noOfShelves)*(box.quantity*1)}</p>
                    )
                  }
                  <p>{box.width-32} x 70 * {box.quantity*4}</p>
                  {
                    box.btmVariant === 'drawer' && (
                      <>
                      <p>{drawer.dbBoxHeight} x {box.width-92} * {(drawer.no * 2)*(box.quantity)}</p>
                      <p>{drawer.dbBoxHeight} x {box.width - 50} * {(drawer.no * 2)*(box.quantity)}</p>
                      <p>{box.width -32} x {box.width-92} * {(drawer.no * 1)*(box.quantity)}</p>
                      </>
                    )
                  }
                  <h1>DOORS</h1>
                  {
                    box.btmVariant === 'drawer' && (
                      <p>{drawer.dfSize} x {box.width-4} * {drawer.no * box.quantity} D/F</p>
                    )
                  }
                  {
                    box.btmVariant !== 'drawer' && (
                      <>
                  {
                    box.width > 600 && (
                      <p>{box.height - 8} x {(box.width/2)-4} * {box.quantity*2}</p>
                    )
                  }
                  {
                    box.width <= 600 && (
                      <p>{box.height - 8} x {box.width-4} * {box.quantity*1}</p>
                    )
                  }
                  </>
                  )}
                  <h1>MASONITE</h1>
                  <p>{box.height-5} x {box.width-5} * {box.quantity*1}</p>
                  </div>
              )
            }else if(box.type === 'top'){
              return (
                <div className="box">
                <p>{box.height} x {box.depth} * {box.quantity*2}</p>
                <p>{box.width-32} x {box.depth} * {box.quantity*2}</p>
                <p>{box.width-32} x 70 * 2</p>
                {
                  box.noOfShelves.length !== 0 && (
                    <p>{box.width-32} x {box.depth-15} *{box.noOfShelves * box.quantity}</p>
                  )
                }
                <h1>DOORS</h1>
                {
                  box.width > 600 && (
                    <p>{box.height - 8} x {(box.width/2)-4} * {box.quantity*2}</p>
                  )
                }
                {
                  box.width <= 600 && (
                    <p>{box.height - 8} x {box.width-4} * {box.quantity*1}</p>
                  )
                }
                <h1>MASONITE</h1>
                <p>{box.height-5} x {box.width-5} * {box.quantity*1}</p>
              </div>
              )
            }else{
              return (
                <div className="box">
                  <p>{box.height} x {box.depth} * {box.quantity*2}</p>
                  <p>{box.width-32} x {box.depth} * {box.quantity*2}</p>
                  <p>{box.width-32} x 70 * {box.quantity*2}</p>
                  {
                    box.noOfShelves.length !== 0 && (
                      <p>{box.width-32} x {box.depth-15} *{box.noOfShelves * box.quantity}</p>
                    )
                  }
                  <h1>DOORS</h1>
                  {
                    box.width > 600 && (
                      <p>{box.height - 8} x {(box.width/2)-4} * {box.quantity * 2}</p>
                    )
                  }
                  {
                    box.width <= 600 && (
                      <p>{box.height - 8} x {box.width-4} * {box.quantity * 1}</p>
                    )
                  }
                  <h1>MASONITE</h1>
                  <p>{box.height-5} x {box.width-5} * {box.quantity}</p>
                </div>
              )
            }
          }
          )
        }
      </div>
     );
}
 
export default List;