using RequestReceiver.Data.Context;
using RequestReceiver.Domain.Entities;
using RequestReceiver.Domain.Interfaces;
using RequestReceiver.Domain.Interfaces.Repository;

namespace RequestReceiver.Data.Repository
{
    public class OrderRepository : ORRepository<Order>, IOrderRepository
    {
        public OrderRepository(ORContext context) : base(context)
        {
        }
    }
}
