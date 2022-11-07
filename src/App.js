import {useState} from 'react'
import List from './List'
import MainList from './MainList'

function App() {

  const [type, setType] = useState('tall')
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const [depth, setDepth] = useState(0)
  const [shelves, setShelves] = useState(false)
  const [noOfShelves, setNoOfShelves] = useState(0)
  const [topVariant, setTopVariant] = useState('')
  const [tallVariant, setTallVariant] = useState('')
  const [btmVariant, setBtmVariant] = useState('normal')
  const [list, setList] = useState([])
  const [noOfDrawers, setNoOfDrawers] = useState(0)
  const [drawer, setDrawer] = useState(null)
  const [drawerTestHeight, setDrawerTestHeight] = useState(0)
  const [boxQuantity, setBoxQuantity] = useState(1)

  const makeList = () => {
    let box

    if(type === 'bottom'){
      box = {
        type,
        btmVariant,
        height,
        width,
        depth,
        noOfShelves,
        quantity:boxQuantity
      }}else{
        box = {
          type,
          height,
          width,
          depth,
          noOfShelves,
          quantity:boxQuantity
        }
    }
      setList((prevState) => [box, ...prevState])
    }

    const previewDrawer = () => {
      let dec
      let no = noOfDrawers
      let dfSize = Math.floor(((drawerTestHeight - 8) - (noOfDrawers-1)*4)/noOfDrawers)
      if(dfSize <= 100){
        dec = 20
      }else{
        dec = 50
      }
      let dbBoxHeight = Math.floor((((drawerTestHeight - 8) - (noOfDrawers-1)*4)/noOfDrawers) - dec)
      setDrawer({dfSize, dbBoxHeight, no})
    }


  
    const [togBool, setTogBool] = useState(false)

    const toggleList = () => {
      setTogBool(!togBool)
    }

  return (
    <div className="app">
      <div className="nav">
        <div style={{display: 'flex',alignItems:'flex-end'}}>
          <i onClick={toggleList} id='listIcon' class="fa-solid fa-list"></i>
          <h1>{list.reduce((acc, curr) => acc + parseInt(curr.quantity), 0)}</h1>
        </div>
      </div>
      <MainList bool={togBool}/>
      <div className="chooseType">
        <div className="chooseType-group">
          <h1>CHOOSE TYPE</h1>
          <select
            onChange={(e) => setType(e.target.value)}
            value={type}
          >
            <option value='tall'>TALL</option>
            <option value='top'>TOP</option>
            <option value='bottom'>BOTTOM</option>
          </select>
        </div>
      </div>
      <div className="chooseVariant">
        {
          type === 'top' && 
          (
            <div className="top-variants">
              <h1>choose top cupboard TYPE</h1>
              <select
                onChange={(e) => setTopVariant(e.target.value)}
                value={topVariant}
              >
                <option value='normal'>NORMAL</option>
                <option value='singleFlap'>FLAP DOOR SINGLE</option>
              </select>
            </div>
          )
        }
        {
          type === 'tall' && 
          (
            <div className="tall-variants">
                <h1>choose tall cupboard TYPE</h1>
                <select
                  onChange={(e) => setTallVariant(e.target.value)}
                  value={tallVariant}
                  >
                  <option value='normal'>NORMAL</option>
                </select>
            </div>
          )
        }
        {
          type === 'bottom' && 
          (
            <div className="bottom-variants">
                <h1>choose bottom cupboard TYPE</h1>
                <select
                  onChange={(e) => setBtmVariant(e.target.value)}
                  value={btmVariant}
                  >
                  <option value='normal'>NORMAL</option>
                  <option value='drawer'>DRAWERS</option>
                  <option value='oven'>OVEN</option>
                </select>
            </div>
          )
        }
      </div>
      {
        btmVariant === 'drawer' && (
          <div className="drawer">
            <div>
            <h1>please choose amount of drawers</h1>
            <input 
            type="text"
            value={noOfDrawers}
            onChange={(e) => setNoOfDrawers(e.target.value)}
             />
            <input 
            type="text"
            value={drawerTestHeight}
            onChange={(e) => setDrawerTestHeight(e.target.value)}
             />
             <button onClick={previewDrawer}>preview drawer sizes</button>
          </div>
          {
            drawer && (
              <div>
                <h1>drawer front height{drawer.dfSize}</h1>
                <h1>drawer box height {drawer.dbBoxHeight}</h1>
                </div>
            )
          }
          </div>
        )
      }
      <div className="specs">
        <div>
          <label>HEIGHT mm</label>
          <input type="number" 
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <label>WIDTH mm</label>
          <input type="number" 
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          />
        </div>
        <div>
          <label>DEPTH mm</label>
          <input type="number" 
          value={depth}
          onChange={(e) => setDepth(e.target.value)}
          />
        </div>
        <div>
          <label>SHELVES</label>
          <select
            onChange={(e) => setShelves(e.target.value)}
            value={shelves}
            >
            <option value={null}>NO</option>
            <option value={true}>YES</option>
          </select>
        </div>
        {shelves && <div>
          <label>NO OF SHELVES</label>
          <input type="number" 
          value={noOfShelves}
          onChange={(e) => setNoOfShelves(e.target.value)}
          />
        </div>
        }
        <div>
          <label>Quantity</label>
          <input type="number" 
          value={boxQuantity}
          onChange={(e) => setBoxQuantity(e.target.value)}
          />
        </div>
        <button onClick={makeList}>generate list</button>
      </div>
      <List list={list} drawer={drawer}/>
    </div>
  );
}

export default App;
