import AdminSidebar from '@/components/AdminSidebar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useOrders } from '@/contexts/OrdersContext';
import { toast } from 'sonner';
import { Trash2 } from 'lucide-react';

const OrderManagement = () => {
  const { orders, updateOrderStatus, deleteOrder } = useOrders();

  const handleStatusChange = (orderId: string, status: 'pending' | 'processed' | 'delivered') => {
    updateOrderStatus(orderId, status);
    toast.success('Order status updated');
  };

  const handleDelete = (orderId: string) => {
    if (confirm('Are you sure you want to delete this order?')) {
      deleteOrder(orderId);
      toast.success('Order deleted');
    }
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-8">
        <h1 className="font-playfair text-4xl font-bold mb-8">Orders Management</h1>

        {orders.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground">No orders yet</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <Card key={order.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg">Order #{order.id}</h3>
                      <p className="text-sm text-muted-foreground">
                        {new Date(order.date).toLocaleDateString()} at {new Date(order.date).toLocaleTimeString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Select
                        value={order.status}
                        onValueChange={(value: any) => handleStatusChange(order.id, value)}
                      >
                        <SelectTrigger className="w-36">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="processed">Processed</SelectItem>
                          <SelectItem value="delivered">Delivered</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => handleDelete(order.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold mb-2">Customer Details</h4>
                      <p className="text-sm"><strong>Name:</strong> {order.customerName}</p>
                      <p className="text-sm"><strong>Email:</strong> {order.email}</p>
                      <p className="text-sm"><strong>Phone:</strong> {order.phone}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Order Summary</h4>
                      <p className="text-sm"><strong>Items:</strong> {order.items.length}</p>
                      <p className="text-sm"><strong>Total:</strong> ${order.total.toFixed(2)}</p>
                      <p className="text-sm capitalize">
                        <strong>Status:</strong>{' '}
                        <span className={
                          order.status === 'delivered' ? 'text-green-600' :
                          order.status === 'processed' ? 'text-blue-600' :
                          'text-yellow-600'
                        }>
                          {order.status}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Products</h4>
                    <div className="space-y-2">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center border-b pb-2">
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                          </div>
                          <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderManagement;
