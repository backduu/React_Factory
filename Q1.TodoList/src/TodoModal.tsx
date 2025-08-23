import React from "react"
import {Button, Modal} from 'react-bootstrap';

type Todo = {
    id: number;
    text: string;
    isChecked: boolean;
}

type TodoModalProps = {
    show: boolean;
    handleClose: ()=>void;
    todo: Todo | null;
}

const TodoModal: React.FC<TodoModalProps>= ({show, handleClose, todo}) => {
    return (
        <Modal show={show} onHide={()=>{handleClose()}} centered>
            <Modal.Header closeButton>
                <Modal.Title>모달 상세 정보</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                오늘 할 일은 {todo?.text} 입니다. 
                <p>현재날짜: {new Date().toLocaleDateString()}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default TodoModal;