import {React, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listOrderMine } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox'

export default function OrderHistoryScreen(props) {
    const orderMineList = useSelector((state) => state.orderMineList);
    const { loading, error, orders } = orderMineList;

    const dispatch = useDispatch();

useEffect(() => {
    dispatch(listOrderMine());
}, [dispatch])
  return (
    <div>
          <h1>My Order History</h1>
          {loading? (<LoadingBox></LoadingBox>) :
              error? (<MessageBox variant="danger">{error}</MessageBox>)
          :
          (
          <table className="table">
              <thead>
                  <tr>
                      <th>Order Number</th>
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
                          <td>{order.createdAt.substring(0,10)}</td>
                          <td>  ${order.totalPrice.toFixed(2)}</td>
                          <td>{order.isPaid? order.paidAt.substring(0,10): 'Not Paid'}</td>
                          <td>{order.isDelivered? order.deliveredAt.substring(0,10): 'Not Delivered'}</td>
                          <td>
                              <button type="button" class="small"
                                  onClick={() => { props.history.push(`/order/${order._id}`) }}>
                                  Details
                              </button>
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
