import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchServiceItem } from '../actions/actionCreators';
import { saveEditedServiceItem } from '../actions/actionCreators';
import { Spinner, Alert, Form, Button } from 'react-bootstrap';


function ServiceItem({match}) {
    const {item, loading, error} = useSelector(state => state.serviceItem);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        fetchServiceItem(dispatch, match.params.id)
            .then(() => {
                setName(item.name);
                setPrice(item.price);
                setContent(item.content);
            })
        
      }, [dispatch])


      const handleChange = evt => {
        const {name, value} = evt.target;
        if (name === 'inputName') setName(value);
        if (name === 'inputPrice') setPrice(value);
        if (name === 'inputAbout') setContent(value);
      };

      const handleSubmit = evt => {
        evt.preventDefault();
        saveEditedServiceItem(dispatch, {id: item.id, name, price, content });
      }


      if (loading) {
        return <Spinner animation="border" role="status">
        <span className="sr-only">Загрузка...</span>
      </Spinner>;
      }

      if (error) {
        return <Alert variant={'danger'}>
       Ошибка
      </Alert>;
      }


    return (
        <div>
      <Form onSubmit={handleSubmit} >
            <Form.Group controlId="formBasicName">
                <Form.Label>Название</Form.Label>
                <Form.Control type="text" name='inputName' value={name} onChange={handleChange} placeholder="Название" />
            </Form.Group>
            <Form.Group controlId="formBasicPrice">
                <Form.Label>Стоимость</Form.Label>
                <Form.Control type="text" name='inputPrice' value={price} onChange={handleChange} placeholder="Стоимость" />
            </Form.Group>
            <Form.Group controlId="formBasicAbout">
                <Form.Label>Описание</Form.Label>
                <Form.Control type="text" name='inputAbout' value={content} onChange={handleChange} placeholder="Описание" />
            </Form.Group>


            <Button variant="primary" type="submit">
                Сохранить
            </Button>
            <Link to={'/services'}>Отмена</Link>    
            
    </Form>
        </div>
    );
  }

  export default ServiceItem;