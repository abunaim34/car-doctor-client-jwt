import { useContext } from "react";
import { useEffect } from "react";
import { AuthCotext } from "../Provider/AuthProvider";
import { useState } from "react";
import axios from "axios";

const Bookings = () => {
    const { user } = useContext(AuthCotext)
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         setBookings(data)
        //         console.log(data);
        //     })
        axios.get(url, {withCredentials: true})
        .then(res => {
            setBookings(res.data)
        })
    }, [url])

    const handleDelete = id => {
        const proceed = confirm("Are You sure you want to delete")
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted successfully')
                    const remaining = bookings.filter(booking => booking._id !== id)
                    setBookings(remaining)
                }
            })
        }
    }
    const handleConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PATCH", 
            headers: {'content-type': "application/json"},
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                const remaining = bookings.filter(booking => booking._id !== id)
                const updated = bookings.find(booking => booking._id == id)
                updated.status = 'confirm'
                const newBookings = [updated, ...remaining]
                setBookings(newBookings)
            }
            
        })
    }
    return (
        <div>
            <h2 className="text-4xl font-bold">Your bookings: {bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings?.map(booking => <tr key={booking._id}>
                                <th>
                                    <button onClick={() =>handleDelete(booking._id)}  className="btn btn-sm btn-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                                <td>
                                    <div className="avatar">
                                        <div className="rounded w-24 h-24">
                                            {booking.img && <img src={booking.img} />}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {booking.service}
                                </td>
                                <td>{booking.date}</td>
                                <td>{booking.price}</td>
                                <th>
                                    {
                                        booking.status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :
                                        <button onClick={() => handleConfirm(booking._id)} className="btn btn-ghost btn-xs">Confirm</button>}
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;