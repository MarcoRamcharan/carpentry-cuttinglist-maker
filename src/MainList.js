const MainList = ({bool}) => {
    return ( 
        <div style={bool ? { width:'50%'} : {width : '0%'}} className="mainList">
        </div>
     );
}
 
export default MainList;