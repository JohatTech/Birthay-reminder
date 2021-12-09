import React from 'react'

export const Birthday = (props) => {
  const { name, day, month, instagram_account } = props.birthday
  const sendDm = (url) => {
    window.open(instagram_account)
  }
  return (
    <article className='birthdays'>
      <h1>&#127874;Hey Johat!</h1>
      <h2>
      Reminder: {name}'s Birthday is in {month} {day}
      </h2>
    </article>
  )
}

export default Birthday
