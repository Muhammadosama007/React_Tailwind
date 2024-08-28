import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { blue } from '@mui/material/colors';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
    {
        field: 'Position',
        headerName: 'Position',
        width: 160,
    },
    {
        field: 'ContactEmail',
        headerName: 'Contact Email',
        width: 200,
    },
    {
        field: 'ContactPhoneNo',
        headerName: 'Contact Phone No',
        width: 150,
    }
];

const rows = [
    { id: 1, lastName: 'Osama', firstName: 'Muhammad', age: 21, Position: "Owner", ContactEmail: "osama@example.com", ContactPhoneNo: "123-456-7890" },
    { id: 2, lastName: 'Hannan', firstName: 'Haider', age: 22, Position: "Executive", ContactEmail: "hannan@example.com", ContactPhoneNo: "234-567-8901" },
    { id: 3, lastName: 'Haziq', firstName: 'Nazeer', age: 20, Position: "Chief Executive", ContactEmail: "haziq@example.com", ContactPhoneNo: "345-678-9012" },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, Position: "Intern", ContactEmail: "arya@example.com", ContactPhoneNo: "456-789-0123" },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, Position: "Advisor", ContactEmail: "daenerys@example.com", ContactPhoneNo: "567-890-1234" },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150, Position: "Consultant", ContactEmail: "melisandre@example.com", ContactPhoneNo: "678-901-2345" },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, Position: "Manager", ContactEmail: "clifford@example.com", ContactPhoneNo: "789-012-3456" },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, Position: "Senior Developer", ContactEmail: "frances@example.com", ContactPhoneNo: "890-123-4567" },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, Position: "Lead Designer", ContactEmail: "roxie@example.com", ContactPhoneNo: "901-234-5678" },
];


function AboutTable() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    )
}

export default AboutTable