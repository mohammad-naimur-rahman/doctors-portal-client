import React from 'react';

const AppointmentsList = ({ appointments }) => {
    return (
        <div style={{ overflowX: 'auto' }}>
            <table className="table table-borderless">
                <thead>
                    <tr><th className="text-secondary" scope="col">#</th>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Phone</th>
                        <th className="text-secondary" scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map((appointment, index) =>

                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{appointment.name}</td>
                                <td>{appointment.phone}</td>
                                <td>{appointment.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentsList;