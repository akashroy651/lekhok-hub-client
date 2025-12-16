import React from 'react';
import { Link } from 'react-router';

const PaymentCancelled = () => {
    return (
        <div>
            <h2>Payment is cancelled. Please try again</h2>
            <Link to="/dashboard/my-Contests">
                <button className='btn btn-primary text-black'>try again</button>
            </Link>
        </div>
    );
};

export default PaymentCancelled;