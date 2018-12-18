using RequestReceiver.Data.Context;
using RequestReceiver.Domain.Entities;
using RequestReceiver.Domain.Interfaces;
using RequestReceiver.Domain.Interfaces.Repository;

namespace RequestReceiver.Data.Repository
{
    public class ProductRepository : ORRepository<Product>, IProductRepository
    {
        public ProductRepository(ORContext context) : base(context)
        {
        }
    }
}
