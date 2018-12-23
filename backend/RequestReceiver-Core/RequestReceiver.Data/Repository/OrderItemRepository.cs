using RequestReceiver.Data.Context;
using RequestReceiver.Domain.Entities;
using RequestReceiver.Domain.Interfaces;
using RequestReceiver.Domain.Interfaces.Repository;

namespace RequestReceiver.Data.Repository
{
    public class OrderItemRepository : ORRepository<OrderItem>, IOrderItemRepository
    {
        public OrderItemRepository(ORContext context) : base(context)
        {
        }
    }
}
