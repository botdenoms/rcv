function AppBar({home}) {
    return (
      <div className="appbar">
        <span onClick={()=>home()}>RCV</span>
        <span>?</span>
      </div>
    )
}
  
  export default AppBar