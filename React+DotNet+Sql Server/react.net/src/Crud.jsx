import { useState, useEffect} from 'react';
import { Table } from 'react-bootstrap';

const Crud = () => {

    const empData = [
        {
            id: 1,
            name: 'navin',
            age: 32,
            isActive: 1
        },
        {
            id: 2,
            name: 'Honey',
            age: 30,
            isActive: 1
        },
        {
            id: 3,
            name: 'Kukreja',
            age: 31,
            isActive: 0
        }

    ]

const [ data, setData] = useState([]);

useEffect(()=> {
    setData(empData)
},[])

const handleEdit = (id) => {
    alert(id)
}

const handleDelete = (id) => {
    alert(id)
}

  return (
    <>
        <Table striped bordered hover>
      <thead>
        <tr>
          {/* <th>#</th> */}
          <th>Name</th>
          <th>Age</th>
          <th>isActive</th>
        </tr>
      </thead>
      <tbody>
        {
            data && data.length > 0 ? 
            data.map((item, index)=> {
                return(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.isActive}</td>
                        <td colSpan={2}>
                            <button className='btn btn-primary' onClick={()=> handleEdit(item.id)}>Edit</button> &nbsp;
                            <button className='btn btn-danger' onClick={()=> handleDelete(item.id)}>Delete</button>
                        </td>
                     </tr>
                )
            })
            :
            'Loading..'
        }
        
      </tbody>
    </Table>
    </>
  )
}

export default Crud
