
export default function Form (props) {
    const addColor = (e) => {
        e.preventDefault();
        if(e.target.size.value === "") {
          e.target.size.value = 200
        }
        props.setColor([...props.color, {color:e.target.color.value, size:e.target.size.value}])
        e.target.reset()
      }
    return(
        <form onSubmit={addColor}>
        <div>
            <label htmlFor='color'>Color: </label>
            <input type="text" name="color"/>
        </div>
        <div>
            <label htmlFor='size'>Size: </label>
            <input type="text" name="size"/>
        </div>
        <input type="submit" value="Add"/>
        </form>
    )
}