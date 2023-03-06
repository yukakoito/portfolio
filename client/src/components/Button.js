const Button = ({children, url}) => {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer')
  } 

  return(
    <button onClick={() => url? openInNewTab(url) : null}>
      {children}
    </button>
  )
}

export default Button;