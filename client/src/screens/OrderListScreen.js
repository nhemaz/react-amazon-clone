import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, listOrders } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox'
import { ORDER_DELETE_RESET } from '../constants/orderConstants';

export default function OrderListScreen(props) {
     const sellerMode = props.match.path.indexOf('/seller') >= 0;
    const orderList = useSelector(state => state.orderList);
    const { loading, error, orders } = orderList;
    const orderDelete = useSelector(state => state.orderDelete);
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = orderDelete;
    const dispatch = useDispatch();

     const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

    useEffect(() => {
        dispatch({type: ORDER_DELETE_RESET})
          dispatch(listOrders({ seller: sellerMode ? userInfo._id : '' }));
    }, [dispatch, sellerMode, successDelete, userInfo._id]);
    const deleteHandler = (order) => {
        if (window.confirm('Are you sure you want to delete this order?')) {
            dispatch(deleteOrder(order._id));
        }
    };
  return (
    <div>
          <h1>Orders</h1>
          {loadingDelete && <LoadingBox></LoadingBox>}
          {errorDelete && (<MessageBox variant="danger">{errorDelete}</MessageBox>)}
          {loading? (<LoadingBox></LoadingBox>) :
              error? (<MessageBox variant="danger">{error}</MessageBox>)
          :
          (
          <table className="table">
              <thead>
                  <tr>
                      <th>Order Number</th>
                      <th>User</th>
                      <th>Date Ordered</th>
                      <th>Cart Total</th>
                      <th>Payment Status</th>
                      <th>Delivery Status</th>
                      <th>My Actions</th>
                  </tr>

              </thead>
              <tbody>
                  {orders.map((order) => (
                      <tr key={order._id}>
                          <td>{order._id}</td>
                          <td>{order.user.name}</td>
                          <td>{order.createdAt.substring(0,10)}</td>
                          <td>  ${order.totalPrice.toFixed(2)}</td>
                          <td>{order.isPaid? order.paidAt.substring(0,10): 'Not Paid'}</td>
                          <td>{order.isDelivered? order.deliveredAt.substring(0,10): 'Not Delivered'}</td>
                          <td>
                              <button type="button" class="small"
                                  onClick={() => { props.history.push(`/order/${order._id}`) }}>
                                  Details
                              </button>
                              <button type="button" className="small"
                                  onClick={() => deleteHandler(order)}>Delete</button>
                          </td>

                      </tr>

                  ))}
              </tbody>
          </table>
          )
          }

    </div>
  );
}
