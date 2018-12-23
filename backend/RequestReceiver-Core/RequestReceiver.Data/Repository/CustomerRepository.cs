using RequestReceiver.Data.Context;
using RequestReceiver.Domain.Entities;
using RequestReceiver.Domain.Interfaces;
using RequestReceiver.Domain.Interfaces.Repository;

namespace RequestReceiver.Data.Repository
{
    public class CustomerRepository : ORRepository<Customer>, ICustomerRepository
    {
        public CustomerRepository(ORContext context) : base(context)
        {
        }
    }
}
