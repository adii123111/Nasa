

export default function Sidebar(props) {
  const { handleToggleModal, data }= props
  return (
    <div className="sidebar">
      <div className="bgOverLay" onClick={handleToggleModal}></div>
      <div className="sidebarContent">
     <h2>{data?.title}</h2>
     <div className="descContainer">
      <p className="desc">{data?.date}</p>
      <p>{data?.explanation}</p>
      </div>
      <button onClick={handleToggleModal}>
      <i className="fa-solid fa-circle-arrow-right"></i>
      </button>
     </div>
    </div>
  )
}
