using RequestReceiver.Domain.Interfaces.Service;
using RequestReceiver.Domain.Interfaces.Repository;
using RequestReceiver.Domain.Entities;
using System.Linq;

namespace RequestReceiver.Service.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _ProductRepository;

        public ProductService(IProductRepository ProductRepository)
        {
            _ProductRepository = ProductRepository;
        }

        public void Dispose()
        {
            _ProductRepository.Dispose();
        }

        public IQueryable<Product> GetAll()
        {
            return _ProductRepository.GetAll();
        }
    }
}
