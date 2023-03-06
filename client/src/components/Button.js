const Button = ({children, url, onClickFunc}) => {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer')
  } 

  return(
    <button onClick={() => url? openInNewTab(url) : onClickFunc()}>
      {children}
    </button>
  )
}

export default Button;