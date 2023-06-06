import React from 'react'
import { useEffect, useState } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from '../users/UserItem'

function UserResults() {
    const [users, setUsers] = useState([])
    const [loading, isLoading] = useState(true)

    useEffect(() => {
        fetchUsers()
    }, [])
  return (
    <div>UserResults</div>
  )
}

export default UserResults