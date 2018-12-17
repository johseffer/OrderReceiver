using RequestReceiver.Domain.Interfaces.Service;
using RequestReceiver.Domain.Interfaces.Repository;
using RequestReceiver.Domain.Entities;
using System.Linq;

namespace RequestReceiver.Service.Services
{
    public class CustomerService : ICustomerService
    {
        private readonly ICustomerRepository _customerRepository;

        public CustomerService(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }

        public void Dispose()
        {
            _customerRepository.Dispose();
        }

        public IQueryable<Customer> GetAll()
        {
            return _customerRepository.GetAll();
        }
    }
}
