import React from 'react';

const TaskDeleteWarningMessage = (props) => {

    const handleDelete = function() {
        props.handleDeleteConfirm(props.task.id);
    };

    const handleReject = function() {
        props.handleDeleteReject();
    };

    return (
        <div>
            <p>I'm a warning message</p>
            <button onClick={handleDelete}>Yes, Delete</button>
            <button onClick={handleReject}>No, don't delete!</button>
        </div>
    )

};

export default TaskDeleteWarningMessage;
