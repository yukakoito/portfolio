const Button = ({children, url}) => {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer')
  } 

  return(
    <button onClick={() => openInNewTab(url)}>
      {children}
    </button>
  )
}

export default Button;