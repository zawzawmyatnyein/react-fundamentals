// Create a custom component
function Box({ style, className = "", ...otherProps }) {
  return (
    <div
      className={`box ${className}`}
      style={{ fontStyle: "italic", ...style }}
      {...otherProps}
    />
  )
}

function App() {
  return (
    <div>
      <Box className="box--small" style={{ backgroundColor: "lightblue" }}>
        small lightblue box
      </Box>
      <Box className="box--medium" style={{ backgroundColor: "pink" }}>
        medium pink box
      </Box>
      <Box className="box--large" style={{ backgroundColor: "orange" }}>
        large orange box
      </Box>
    </div>
  )
}

export default App
