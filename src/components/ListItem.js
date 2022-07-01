
function ListItem (props) {

  return (
    <div>
      <p>
        {`${props.todoItem.id}-${props.todoItem.text}`}
      </p>
    </div>
  )
}

export default ListItem;

