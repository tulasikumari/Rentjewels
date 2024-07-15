import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAllOrdersApi } from '../../apis/Api';
import Sidebar from './sidebar';

const OrderTable = () => {
    const [orders, setOrders] = useState([]);
    const [searchQueryOrders, setSearchQueryOrders] = useState('');

    useEffect(() => {
        // Fetch all orders when the component mounts
        getAllOrdersApi()
            .then((res) => {
                console.log('API Response:', res.data); // Debugging: Log the API response
                setOrders(res.data.orders); // Adjust based on your API response structure
            })
            .catch((error) => {
                console.error('Error fetching orders data:', error);
            });
    }, []);

    const handleDelete = (id) => {
        const confirmDialog = window.confirm('Are you sure you want to delete this order?');

        if (!confirmDialog) {
            return;
        }
        // Implement delete logic here
        console.log('Delete order with ID:', id);
    };

    const handleSearchOrders = () => {
        const filteredOrders = orders.filter((order) => {
            const lowerCaseQuery = searchQueryOrders.toLowerCase();
            return (
                order.customerName.toLowerCase().includes(lowerCaseQuery) ||
                order.email.toLowerCase().includes(lowerCaseQuery)
            );
        });
        setOrders(filteredOrders);
    };

    return (
        <>
            <Sidebar />
            <div className="main-content" style={{ marginLeft: '250px', padding: '20px', marginTop: '80px' }}>
                <div className="d-flex justify-content-between">
                    <h2>Order List</h2>
                    <Link to="/admin/dashboard">
                        {/* <button type="button" className="btn btn-secondary">
                            Back to Admin Dashboard
                        </button> */}
                    </Link>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search orders by name or email..."
                            value={searchQueryOrders}
                            onChange={(e) => setSearchQueryOrders(e.target.value)}
                        />
                        {searchQueryOrders && (
                            <button
                                className="clear-search-button"
                                style={{
                                    backgroundColor: 'gray',
                                    color: 'white',
                                    transition: 'background-color 0.3s',
                                }}
                                onClick={() => setSearchQueryOrders('')}
                            >
                                Clear Search
                            </button>
                        )}
                        <button
                            className="search-button"
                            onClick={handleSearchOrders}
                            style={{
                                backgroundColor: 'gray',
                                color: 'white',
                                transition: 'background-color 0.3s',
                            }}
                        >
                            Search Orders
                        </button>
                    </div>
                    <Link to="/admin/add-order"></Link>
                </div>

                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th>Order ID</th>
                            <th>Customer Name</th>
                            <th>Email</th>
                            <th>Payment Method</th>
                            <th>Total Payment</th>
                            <th>Order Status</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <tr key={order._id}>
                                    <td>{order._id}</td>
                                    <td>{order.customerName}</td>
                                    <td>{order.email}</td>
                                    <td>{order.paymentMethod}</td>
                                    <td>{order.totalPayment}</td>
                                    <td>{order.orderStatus}</td>
                                    <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <Link
                                                className="btn btn-success"
                                                style={{ backgroundColor: 'black', color: 'white' }}
                                                to={`/admin/edit-order/${order._id}`}
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(order._id)}
                                                className="btn btn-danger"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="text-center">
                                    No orders found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default OrderTable;
