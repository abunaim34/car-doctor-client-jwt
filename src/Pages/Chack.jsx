import { useContext } from "react";
import { useLoaderData } from "react-router-dom"
import { AuthCotext } from "../Provider/AuthProvider";

const Chack = () => {
    const service = useLoaderData()
    const {user} = useContext(AuthCotext)

    const handleBookService = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const date = form.date.value
        const email = user?.email
        const due = form.due.value
        const order = {
            customerName: name,
            email,
            date,
            img: service.img,
            service: service.title,
            service_id: service._id,
            price: due
        }
        console.log(order);
        fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('set successfully')
            }
        })
    }
    return (
        <div>
             <h1 className="text-3xl font-bold text-center">Book service: {service.title}</h1>
            <form onSubmit={handleBookService} className="card-body grid grid-cols-1 md:grid-cols-2">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" defaultValue={user?.displayName} name="name" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name="date" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" defaultValue={user?.email} name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Due Ammount</span>
                    </label>
                    <input type="text" defaultValue={`$`+service.price} name="due" placeholder="due" className="input input-bordered" required />
                </div>
                <div className="form-control w-full mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Chack;