import React from 'react'

export default function Age(props) {
  const today = new Date();
  const birthDateObject = new Date(props.day);
  const ageDifference = today.getFullYear() - birthDateObject.getFullYear();
  return (
    ageDifference
  )
}
