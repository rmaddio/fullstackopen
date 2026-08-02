const Footer = ( {parts} ) => {
  const total = parts.reduce((accumulator, part) => {
    return accumulator + part.exercises
  }, 0)
  return (
    <p><strong>total of {total} exercises</strong></p>
  )
}

export default Footer