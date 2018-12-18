using RequestReceiver.Domain.Interfaces.Service;
using RequestReceiver.Domain.Interfaces.Repository;
using RequestReceiver.Domain.Entities;
using System.Linq;
using System;

namespace RequestReceiver.Service.Services
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _OrderRepository;

        public OrderService(IOrderRepository OrderRepository)
        {
            _OrderRepository = OrderRepository;
        }

        public void Add(Order obj)
        {
            _OrderRepository.Add(obj);
        }

        public IQueryable<Order> GetAll()
        {
            return _OrderRepository.GetAll();
        }

        public Order GetById(Guid id)
        {
            return _OrderRepository.GetById(id);
        }

        public void Remove(Guid id)
        {
            _OrderRepository.Remove(id);
        }

        public void Update(Order obj)
        {
            _OrderRepository.Update(obj);
        }

        public void Dispose()
        {
            _OrderRepository.Dispose();
        }
    }
}
