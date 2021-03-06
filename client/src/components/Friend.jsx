import { useState } from 'react'
import classnames from 'classnames';
import './Friend.scss';
import Button from './Button'


function Friend(props) {

  const [formState, setFormState] = useState({
    email: props.email || ""
    // password: "",
  })

  function friend() {
    console.log(formState.email)
    const friendData = {
      friends_list: formState.email,
      user_id: props.user.id
    }
    return props.onFriend(friendData)
  }


  return (
    <div>
      {/* <Button className='back-arrow' back onClick={(event) => props.displayForm(event)}>Back</Button> */}
      <form onSubmit={event => event.preventDefault()}>
        {/* <h2 className='add_friend_text'>Add your bud</h2> */}
        <span className="input"></span>
        <input
          className='email'
          type='email'
          placeholder="Enter Friend's Email..."
          value={formState.email}
          onChange={event => setFormState({ ...formState, email: event.target.value })}
          autoFocus
          required
        />
        <Button friend onClick={friend}>Add Friend</Button>
      </form>
    </div>
  )
};

export default Friend;