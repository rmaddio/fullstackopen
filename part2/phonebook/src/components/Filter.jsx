const Filter =  ({ value, handleValueChange }) => {
    return (
        <div>
          filter shown with<input value={value} onChange={handleValueChange}/>
      </div>
    )
}

export default Filter;