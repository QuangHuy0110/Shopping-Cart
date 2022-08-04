import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import LayoutComponent from '../../components/Layout'
import {useParams } from "react-router-dom";
import * as detailSelector from '../../redux/selectors/DetailSelector'
import { createStructuredSelector } from 'reselect'
import {getdetailProduct, addProductToCart} from '../../redux/saga/actionSaga'
import { Skeleton, Row, Col, Image,InputNumber , Button } from 'antd';

const DetailPage = () => {
    const[quantity, setQuantity] = useState(1)
    // :slug-:id // ten cua tham so 
    const {id} = useParams()
    const {loading, error, detail} = useSelector(createStructuredSelector({
        loading: detailSelector.getLoadingStateDetail,
        error: detailSelector.getErrorStateDetail,
        detail: detailSelector.getDataDetailState
    }))

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getdetailProduct(id))
      }, [id, dispatch])

    const changeQuantityCart = (qty) =>{
        setQuantity(qty);
    }

    const dispatchDetailPdCart = (id, qty) =>{
        if(!isNaN(id) && qty > 0){
            dispatch(addProductToCart(id, qty))
        }else{
            alert("nhap so lung san pham muon them")
        }
    }
    if(loading){
        return(
            <LayoutComponent>
                <Skeleton active />
            </LayoutComponent>
        )
    }

    if(error!== null){
        return(
            <LayoutComponent>
                Not Found Data
            </LayoutComponent>
        )
     }    
    return(
        
        <LayoutComponent>
            <Row>
                <Col sm={24} lg={4}>
                    <Image src={detail.image}/>
                </Col>
                <Col span={20} style={{padding: '32px'}}>
                    <h2>{detail.title}</h2>
                    <p>Description: {detail.description}</p>
                    <p>Price: {detail.price}</p>
                    <InputNumber min={1} max={10} defaultValue={1} onChange={val =>changeQuantityCart(val)}/>
                    <Button 
                        type='primary'
                        onClick={() => dispatchDetailPdCart(id, quantity)}
                        > Add Cart</Button>
                </Col>
            </Row>
        </LayoutComponent>
    )
}
export default React.memo(DetailPage)