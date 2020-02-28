import React from 'react';
import Todo from './Todo'

class List extends React.Component{
    render(){
        let list = this.props.tasks.map((ele, i) => {
            return <Todo key={i} task={ele} />
        })
        return <div>{list}</div>
    }
}

export default List;